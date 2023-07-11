"use client";

import PlayVideo from "@/icons/play-video";
import { Button, Modal } from "@/lib/carrot-kpi-ui";
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
                        playsInline
                        className="aspect-video w-full border border-black rounded-xl bg-gray-500 overflow-hidden"
                    >
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
