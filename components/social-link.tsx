"use client";

import type { TypographyProps } from "@carrot-kpi/ui";
import InlineTypography from "./inline-typography";

interface SocialLinkProps {
    href: string;
    text: string;
    className?: string;
    variant?: TypographyProps["variant"];
    onClick?: () => void;
}

function SocialLink({
    href,
    text,
    className,
    onClick,
    variant = "h1",
}: SocialLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
        >
            <InlineTypography
                variant={variant}
                className={{
                    root: `${className} inline-block`,
                }}
            >
                {text}
            </InlineTypography>
        </a>
    );
}

export default SocialLink;
