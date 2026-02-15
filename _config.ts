import lume from "lume/mod.ts";
import top from "top/mod.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume();

site.use(top())
  .add("fonts")
  .use(googleFonts({
    cssFile: "styles/theme.css",
    fonts: {
      script: "https://fonts.google.com/share?selection.family=Yellowtail"
    },
  }))

export default site;
