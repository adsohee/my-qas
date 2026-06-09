export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
    });
  }

  const items = await request.json();

  const statements = items.map(item =>
    env.DB.prepare(`
      UPDATE items
      SET sort_order = ?
      WHERE id = ?
    `).bind(
      item.sort_order,
      item.id
    )
  );

  await env.DB.batch(statements);

  return new Response("OK");
}
