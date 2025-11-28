import { auth } from "@/auth"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const session = await auth();
    // Aquí podrías agregar lógica para redirigir si no hay sesión
    // Por ahora solo dejamos pasar
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};