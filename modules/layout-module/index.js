import {
  addLayout,
  createResolver,
  defineNuxtModule,
  extendPages,
} from "nuxt/kit"

export default defineNuxtModule({
  meta: {
    name: "testLayout",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(resolve("./runtime"))
    nuxt.options.build.transpile.push(resolve("runtime", "pages"))
    nuxt.options.build.transpile.push(resolve("runtime", "layouts"))

    extendPages((pages) => {
      pages.push({
        path: "/page-to-test-new-layout",
        file: resolve("runtime", "pages", "page-to-test-new-layout.vue"),
      })
    })

    // adding layout
    addLayout(
      {
        src: resolve("runtime", "layouts", "testLayout.vue"),
      },
      "test-layout", // this will be used in pageMeta as 'test-layout'
    )
  },
})
