export async function onRequest(context) {
  const { request, env, params } = context;

  const id = params.id;
  

  // PATCH
  if (request.method === "PATCH") {
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

  // DELETE
  if (request.method === "DELETE") {
    await env.DB.prepare(
      `DELETE FROM items WHERE id = ?`
    )
      .bind(id)
      .run();

    return new Response("OK");
  }

  return new Response("Method Not Allowed", {
    status: 405,
  });
}
