"use client";

import InlineTypography from "./inline-typography";

interface SocialLinkProps {
    href: string;
    text: string;
    className?: string;
    onClick?: () => void;
}

function SocialLink({ href, text, className, onClick }: SocialLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
        >
            <InlineTypography
                variant="h1"
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
