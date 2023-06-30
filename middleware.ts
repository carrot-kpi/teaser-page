import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en"];

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const negotiatorHeaders: Negotiator.Headers = {};
        request.headers.forEach((value, key) => {
            negotiatorHeaders[key] = value;
        });
        const languages = new Negotiator({
            headers: negotiatorHeaders,
        }).languages();
        const locale = match(languages, SUPPORTED_LOCALES, DEFAULT_LOCALE);

        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: ["/((?!_next).*)"],
};
