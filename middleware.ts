import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set("name", "hadiseh");
  console.log("cookie", response.cookies.get("name"));
  return response;
}

// const config = {
//     macher:'/'
// }
