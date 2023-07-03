import InlineTypography from "@/components/inline-typography";
import PlayVideoButton from "@/components/play-video-button";
import SocialIcon from "@/components/social-icon";
import { getI18nDictionary } from "@/i18n/resources";
import Discord from "@/icons/discord";
import Logo from "@/icons/logo";
import Twitter from "@/icons/twitter";
import { Typography } from "@/lib/carrot-kpi-ui";
import { DISCORD_LINK, TWITTER_LINK } from "../constants";

interface HomeProps {
    params: {
        lang: string;
    };
}

export default async function Home({ params: { lang } }: HomeProps) {
    const i18nDictionary = await getI18nDictionary(lang);

    return (
        <div className="dark w-screen flex flex-col items-center bg-black gap-6">
            <Logo className="relative h-auto text-orange w-3/4 md:w-1/3 mt-7 md:mt-24 mb:8 md:mb-16" />
            <div className="relative bg-grid-dark w-[72rem] md:h-[32rem] border-b border-r border-light-grid text-center flex justify-center pt-10 md:pt-20 pb-24 mb-24">
                <div className="hidden md:block max-w-4xl">
                    <Typography variant="h1">
                        {i18nDictionary["home.1"]}
                    </Typography>
                    <Typography variant="h1">
                        {i18nDictionary["home.2"]}
                    </Typography>
                    <InlineTypography variant="h1">
                        {i18nDictionary["home.3"]}
                    </InlineTypography>
                    <a
                        href={TWITTER_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InlineTypography
                            variant="h1"
                            className={{
                                root: "inline-block !text-twitter-blue",
                            }}
                        >
                            {i18nDictionary["home.twitter"]}
                        </InlineTypography>
                    </a>
                    <InlineTypography variant="h1">
                        {i18nDictionary["home.4"]}
                    </InlineTypography>
                    <a
                        href={DISCORD_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InlineTypography
                            variant="h1"
                            className={{
                                root: "inline-block !text-discord-purple",
                            }}
                        >
                            {i18nDictionary["home.discord"]}
                        </InlineTypography>
                    </a>
                    <Typography variant="h1">
                        {i18nDictionary["home.5"]}
                    </Typography>
                </div>
                <div className="block max-w-sm px-5 md:hidden">
                    <Typography variant="h3">
                        {i18nDictionary["home.1"]}
                    </Typography>
                    <Typography variant="h3">
                        {i18nDictionary["home.2"]}
                    </Typography>
                    <InlineTypography variant="h3">
                        {i18nDictionary["home.3"]}
                    </InlineTypography>
                    <a
                        href={TWITTER_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InlineTypography
                            variant="h3"
                            className={{
                                root: "inline-block !text-twitter-blue",
                            }}
                        >
                            {i18nDictionary["home.twitter"]}
                        </InlineTypography>
                    </a>
                    <InlineTypography variant="h3">
                        {i18nDictionary["home.4"]}
                    </InlineTypography>
                    <a
                        href={DISCORD_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InlineTypography
                            variant="h3"
                            className={{
                                root: "inline-block !text-discord-purple",
                            }}
                        >
                            {i18nDictionary["home.discord"]}
                        </InlineTypography>
                    </a>
                    <Typography variant="h3">
                        {i18nDictionary["home.5"]}
                    </Typography>
                </div>
                <div className="absolute flex gap-6 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <SocialIcon
                        className="bg-twitter-blue"
                        href={TWITTER_LINK}
                        icon={Twitter}
                    />
                    <SocialIcon
                        className="bg-discord-purple"
                        href={DISCORD_LINK}
                        icon={Discord}
                    />
                </div>
            </div>
            <Typography uppercase className={{ root: "text-center max-w-sm" }}>
                {i18nDictionary["home.6"]}
                <br />
                {i18nDictionary["home.7"]}
            </Typography>
            <PlayVideoButton
                playVideoMessage={i18nDictionary["video.play"]}
                videoNotSupportedMessage={i18nDictionary["video.not.supported"]}
            />
        </div>
    );
}
