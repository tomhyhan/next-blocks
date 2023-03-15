function sleep() {
  return new Promise((res) => setTimeout(res, 2000))
}
export async function GET(request: Request) {
  await sleep();
  return new Response('Hello, Next.js!')
}
