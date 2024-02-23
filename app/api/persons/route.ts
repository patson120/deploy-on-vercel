
// app/api/route.js
import { NextResponse } from "next/server";
import STATUS from '@/utils/status.code'

const users = [
  {
    id: 1,
    username: "Wiltord",
    email: "user1@gmail.com"
  },
  {
    id: 2,
    username: "Alex",
    email: "user2@gmail.com"
  },
  {
    id: 3,
    username: "Pedro",
    email: "user3@gmail.com"
  },
]

// Handles GET requests to /api/users
export async function GET(request: Request){  
  // ...
  return NextResponse.json({ message: "List of users", users }, { status: STATUS.OK });
}

// Handles POST requests to /api/users
export async function POST(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" }, { status: STATUS.BAD_REQUEST });
}