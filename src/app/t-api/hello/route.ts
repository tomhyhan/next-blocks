export async function GET(request: Request) {
  console.log('hello from server');
  return new Response('Hello, Next.js!');
}

export async function POST(request: any) {
  console.log('post from server');
  // @ts-ignore
  console.log(request.files);
  console.log(request.body);
  // const data = request.files;
  // console.log(data);
  return new Response('Hello, Next.js!');
}
