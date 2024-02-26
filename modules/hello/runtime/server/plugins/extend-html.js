export default function nitroPlugin(nitroApp) {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    console.log("test test 2")
    html.head.push(
      `<meta name="description" content="My custom description" />`,
    )
  })
}
