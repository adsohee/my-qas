export async function onRequest(context) {
  const { request, env } = context;

  // GET /api/items
  if (request.method === "GET") {
    const { results } = await env.DB
.prepare("SELECT * FROM items ORDER BY sort_order ASC")
      .all();

    return Response.json(results);
  }

  // POST /api/items
  if (request.method === "POST") {
    
    const body = await request.json();

await env.DB
  .prepare(`
    UPDATE items
    SET sort_order = sort_order + 1
  `)
  .run();

const nextSortOrder = 1;
    await env.DB.prepare(`
      INSERT INTO items (
        id,
        type,
        title,
        content,
        url,
        favorite,
        created_at,
        updated_at,
        sort_order
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
      .bind(
        crypto.randomUUID(),
        body.type ?? "",
        body.title ?? "",
        body.content ?? "",
        body.url ?? "",
        body.favorite ?? 0,
        new Date().toISOString(),
        new Date().toISOString(),
        nextSortOrder
      )
      .run();

    return new Response("OK");
  }

  return new Response("Method Not Allowed", {
    status: 405,
  });
}
