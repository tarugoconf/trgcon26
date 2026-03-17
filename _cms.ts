import cms from "top/_cms.ts";

export default cms;

const user = Deno.env.get("CMS_USER") ?? "bonilla";
const pass = Deno.env.get("CMS_PASSWORD") ?? "bonilla";

cms.auth({
  [user]: pass,
});

cms.git();
