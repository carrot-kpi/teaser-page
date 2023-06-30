import type { FunctionComponent, SVGProps } from "react";

interface SocialIconProps {
    className?: string;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    href: string;
}

function SocialIcon({ className, icon: Icon, href }: SocialIconProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} w-20 h-20 flex justify-center items-center rounded-full`}
        >
            <Icon className="w-10 h-10" />
        </a>
    );
}

export default SocialIcon;
