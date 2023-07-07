"use client";

import PlayVideo from "@/icons/play-video";
import { Button, Modal } from "@/lib/carrot-kpi-ui";
import * as Fathom from "@/lib/use-fathom-client";
import { type FathomRegisteredEventName } from "../out/fathom/types";
import { useCallback, useState } from "react";

interface PlayVideoButtonProps {
    playVideoMessage: string;
    videoNotSupportedMessage: string;
}

function PlayVideoButton({
    playVideoMessage,
    videoNotSupportedMessage,
}: PlayVideoButtonProps) {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = useCallback(() => {
        setShowVideo(true);
        Fathom.trackRegisteredGoal<FathomRegisteredEventName>("PLAY_VIDEO", 0);
    }, []);

    const handleDismiss = useCallback(() => {
        setShowVideo(false);
    }, []);

    return (
        <>
            <Modal open={showVideo} onDismiss={handleDismiss}>
                <div className="w-full md:w-1/2 aspect-video rounded-xl bg-gray-500">
                    <video controls className="w-full h-full rounded-xl">
                        <source
                            src="https://d2l3j8l4t44bvz.cloudfront.net"
                            type="video/webm"
                        />
                        {videoNotSupportedMessage}
                    </video>
                </div>
            </Modal>
            <Button
                onClick={handleClick}
                className={{
                    root: "mb-24",
                    contentWrapper: "flex gap-3 items-center",
                }}
                size="small"
            >
                <PlayVideo />
                {playVideoMessage}
            </Button>
        </>
    );
}

export default PlayVideoButton;
