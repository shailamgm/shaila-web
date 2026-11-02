import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * La raíz redirige al idioma por defecto conservando el resto de la URL.
 * El resto de rutas las resuelve el segmento `[locale]`.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/es", request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
