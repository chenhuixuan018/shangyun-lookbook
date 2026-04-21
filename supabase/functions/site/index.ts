const SITE_URL = "https://chenhuixuan018.github.io/shangyun-lookbook/";

Deno.serve(() =>
  Response.redirect(SITE_URL, 302)
);
