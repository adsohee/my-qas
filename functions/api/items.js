export async function onRequest(context) {
  const { env } = context;

  const { results } = await env.DB
    .prepare("SELECT * FROM items ORDER BY id DESC")
    .all();

  return Response.json(results);
}
