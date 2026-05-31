import lume from "lume/mod.ts";
import top from "theme/mod.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume();

site.use(top())
  .add("fonts")
  .use(googleFonts({
    cssFile: "styles/theme.css",
    fonts: {
      condensed: "https://fonts.google.com/share?selection.family=Bebas+Neue"
    },
  }))

export default site;
