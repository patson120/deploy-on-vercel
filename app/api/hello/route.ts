import { NextResponse } from "next/server";

// Handles GET requests to /api/hello
export async function GET(request: Request) {
    // ...
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
  }