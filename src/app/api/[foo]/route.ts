export async function GET(request: Request, {params} : any) {
    console.log(params.foo);
    return new Response(`Hello, ${params.foo}`)
  }
  