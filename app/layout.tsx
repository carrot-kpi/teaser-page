import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@carrot-kpi/switzer-font/400.css";
import "@carrot-kpi/switzer-font/500.css";
import "@carrot-kpi/switzer-font/700.css";
import "@carrot-kpi/ui/styles.css";
import "./globals.css";

export const metadata = {
    title: "Carrot",
    description: "A KPI token platform with a focus on simplicity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
