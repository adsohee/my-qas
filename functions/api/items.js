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
        body.favorite ?? 0,
        new Date().toISOString(),
        new Date().toISOString()
      )
      .run();

    return new Response("OK");
  }

  // PATCH /api/items/{id}
  if (request.method === "PATCH") {
    const id = url.pathname.split("/").pop();
    const body = await request.json();

    const fields = [];
    const values = [];

    for (const [key, value] of Object.entries(body)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }

    fields.push("updated_at = ?");
    values.push(new Date().toISOString());

    values.push(id);

    await env.DB.prepare(`
      UPDATE items
      SET ${fields.join(", ")}
      WHERE id = ?
    `)
      .bind(...values)
      .run();

    return new Response("OK");
  }

  // DELETE /api/items/{id}
  if (request.method === "DELETE") {
    const id = url.pathname.split("/").pop();

    await env.DB.prepare(`
      DELETE FROM items
      WHERE id = ?
    `)
      .bind(id)
      .run();

    return new Response("OK");
  }

  return new Response("Method Not Allowed", {
    status: 405
  });
}
