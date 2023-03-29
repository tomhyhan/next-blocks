import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    console.log(id)
  
    return NextResponse.json({ product: "My Product" })
  }