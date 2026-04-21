const SITE_URL =
  "https://evoygujuwiwgyhvopelb.supabase.co/storage/v1/object/public/public/public/index.html";

Deno.serve(async () => {
  const upstream = await fetch(SITE_URL, {
    headers: {
      Accept: "text/html",
    },
  });

  if (!upstream.ok) {
    return new Response("Site unavailable", {
      status: 502,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  return new Response(await upstream.text(), {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=60",
    },
  });
});
