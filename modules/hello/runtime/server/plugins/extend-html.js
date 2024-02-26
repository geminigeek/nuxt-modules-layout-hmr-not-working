export default function nitroPlugin(nitroApp) {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    // Change this console log, hmr is not working , new string is not logged on next request
    console.log("test string")

    html.head.push(
      `<meta name="description" content="My custom description" />`,
    )
  })
}
