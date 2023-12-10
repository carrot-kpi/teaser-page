"use client";

import PlayVideo from "@/icons/play-video";
import { Button, Modal } from "@/lib/carrot-kpi-ui";
import * as Fathom from "@/lib/use-fathom-client";
import { type FathomRegisteredEventName } from "../out/fathom/types";
import { useCallback, useRef, useState } from "react";

interface PlayVideoButtonProps {
    playVideoMessage: string;
    videoNotSupportedMessage: string;
}

function PlayVideoButton({
    playVideoMessage,
    videoNotSupportedMessage,
}: PlayVideoButtonProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = useCallback(() => {
        setShowVideo(true);
        Fathom.trackRegisteredGoal<FathomRegisteredEventName>("PLAY_VIDEO", 0);
    }, []);

    const handleDismiss = useCallback(() => {
        setShowVideo(false);
        if (!videoRef || !videoRef.current) return;
        videoRef.current.pause();
    }, []);

    return (
        <>
            <Modal open={showVideo} onDismiss={handleDismiss}>
                <div className="w-full md:w-1/2 aspect-video rounded-xl bg-gray-500">
                    <video
                        ref={videoRef}
                        controls
                        className="aspect-video w-full border border-black rounded-xl bg-gray-500 overflow-hidden"
                    >
                        <source
                            src="https://static.staging.carrot.community/hero-video.webm"
                            type="video/webm"
                        />
                        <source
                            src="https://static.staging.carrot.community/hero-video.mp4"
                            type="video/mp4"
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
