import {getToken} from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

const { pathname } = req.nextUrl;

//Allow the request is it is true
// 1. If token exist
if(pathname.includes('/api/auth') || token){
return NextResponse.next();
}
// Redirect to login if no token

if(!token && pathname !== '/login'){
    return NextResponse.redirect('http://localhost:3000/login');
}
}