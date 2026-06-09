export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // GET /api/items
  if (request.method === "GET") {
    const { results } = await env.DB
      .prepare("SELECT * FROM items ORDER BY created_at DESC")
      .all();

    return Response.json(results);
  }

  // POST /api/items
  if (request.method === "POST") {
    const body = await request.json();

    await env.DB.prepare(`
      INSERT INTO items (
        id,
        type,
        title,
        content,
        url,
        favorite,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `)
      .bind(
        crypto.randomUUID(),
        body.type ?? "",
        body.title ?? "",
        body.content ?? "",
        body.url ?? "",
        0,
        new Date().toISOString(),
        new Date().toISOString()
      )
      .run();

    return new Response("OK");
  }

  return new Response("Method Not Allowed", {
    status: 405
  });
}
