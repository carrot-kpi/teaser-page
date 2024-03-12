"use client";

import InlineTypography from "@/components/inline-typography";
import PlayVideoButton from "@/components/play-video-button";
import SocialIcon from "@/components/social-icon";
import { getI18nDictionary } from "@/i18n/resources";
import Discord from "@/icons/discord";
import Logo from "@/icons/logo";
import X from "@/icons/x";
import { Button, Typography } from "@/lib/carrot-kpi-ui";
import {
    DISCORD_LINK,
    MEDIUM_LINK,
    STAGING_DAPP_LINK,
    TWITTER_LINK,
} from "../constants";
import * as Fathom from "@/lib/use-fathom-client";
import { type FathomRegisteredEventName } from "../../out/fathom/types";
import InitializeFathom from "@/components/fathom";
import SocialLink from "@/components/social-link";
import Medium from "@/icons/medium";

interface HomeProps {
    params: {
        lang: string;
    };
}

export default async function Home({ params: { lang } }: HomeProps) {
    const i18nDictionary = await getI18nDictionary(lang);

    const handleDiscordClick = () => {
        Fathom.trackRegisteredGoal<FathomRegisteredEventName>(
            "OPEN_DISCORD",
            0
        );
    };
    const handleTwitterClick = () => {
        Fathom.trackRegisteredGoal<FathomRegisteredEventName>(
            "OPEN_TWITTER",
            0
        );
    };
    const handleMediumClick = () => {
        Fathom.trackRegisteredGoal<FathomRegisteredEventName>("OPEN_MEDIUM", 0);
    };

    return (
        <>
            <InitializeFathom />
            <div className="dark w-screen flex flex-col items-center bg-black gap-6">
                <Logo className="relative h-auto text-orange w-3/4 md:w-1/3 mt-7 md:mt-24 mb:8 md:mb-16" />
                <div className="relative bg-grid-dark w-[72rem] h-[36rem] md:h-[36rem] border-b border-r border-light-grid text-center flex justify-center pt-7 md:pt-8 pb-8 mb-12">
                    <div className="hidden md:block max-w-4xl">
                        <Typography variant="h1">
                            {i18nDictionary["home.1"]}
                        </Typography>
                        <Typography variant="h1">
                            {i18nDictionary["home.2"]}
                        </Typography>
                        <div className="mt-8">
                            <Typography variant="h1">
                                {i18nDictionary["home.3"]}
                            </Typography>
                            <SocialLink
                                href={TWITTER_LINK}
                                text={i18nDictionary["home.x"]}
                                className="!text-twitter-blue"
                                onClick={handleTwitterClick}
                            />
                            <SocialLink
                                href={DISCORD_LINK}
                                text={i18nDictionary["home.discord"]}
                                className="!text-discord-purple"
                                onClick={handleDiscordClick}
                            />
                            <InlineTypography variant="h1">
                                {i18nDictionary["home.4"]}
                            </InlineTypography>
                            <SocialLink
                                href={MEDIUM_LINK}
                                text={i18nDictionary["home.medium"]}
                                className="!text-medium-yellow"
                                onClick={handleMediumClick}
                            />
                            <Typography variant="h1">
                                {i18nDictionary["home.5"]}
                            </Typography>
                        </div>
                    </div>
                    <div className="block max-w-sm px-5 md:hidden">
                        <Typography variant="h2">
                            {i18nDictionary["home.1"]}
                        </Typography>
                        <Typography variant="h2">
                            {i18nDictionary["home.2"]}
                        </Typography>
                        <div className="mt-8">
                            <Typography variant="h2">
                                {i18nDictionary["home.3"]}
                            </Typography>
                            <SocialLink
                                href={TWITTER_LINK}
                                text={i18nDictionary["home.x"]}
                                className="!text-twitter-blue"
                                onClick={handleTwitterClick}
                                variant="h2"
                            />
                            <SocialLink
                                href={DISCORD_LINK}
                                text={i18nDictionary["home.discord"]}
                                className="!text-discord-purple"
                                onClick={handleDiscordClick}
                                variant="h2"
                            />
                            <InlineTypography variant="h2">
                                {i18nDictionary["home.4"]}
                            </InlineTypography>
                            <SocialLink
                                href={MEDIUM_LINK}
                                text={i18nDictionary["home.medium"]}
                                className="!text-medium-yellow"
                                onClick={handleMediumClick}
                                variant="h2"
                            />
                            <Typography variant="h2">
                                {i18nDictionary["home.5"]}
                            </Typography>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 bottom-0 md:bottom-7 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <SocialIcon
                            className="bg-twitter-blue"
                            href={TWITTER_LINK}
                            onClick={handleTwitterClick}
                            icon={X}
                        />
                        <SocialIcon
                            className="bg-discord-purple"
                            href={DISCORD_LINK}
                            onClick={handleDiscordClick}
                            icon={Discord}
                        />
                        <SocialIcon
                            className="bg-medium-yellow"
                            href={MEDIUM_LINK}
                            onClick={handleDiscordClick}
                            icon={Medium}
                        />
                    </div>
                </div>
                <div className="mb-5 flex flex-col gap-3 items-center">
                    <Typography
                        uppercase
                        className={{ root: "text-center max-w-sm" }}
                    >
                        {i18nDictionary["home.6"]}
                    </Typography>
                    <Button
                        href={STAGING_DAPP_LINK}
                        target="_blank"
                        rel="noopener"
                        size="small"
                    >
                        {i18nDictionary["button.dapp"]}
                    </Button>
                </div>
            </div>
        </>
    );
}
