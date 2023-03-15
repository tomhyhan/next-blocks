export async function GET(request: Request) {
    // @ts-ignore
    console.log(request.query);
    return new Response('Hello, random!')
  }
  