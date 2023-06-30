import { Typography, type TypographyProps } from "@/lib/carrot-kpi-ui";

function InlineTypography(props: TypographyProps) {
    return (
        <Typography
            {...props}
            className={{
                ...props.className,
                root: `${props.className?.root} inline`,
            }}
        />
    );
}

export default InlineTypography;
