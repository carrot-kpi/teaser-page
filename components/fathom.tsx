"use client";

import { useEffect } from "react";
import * as Fathom from "@/lib/use-fathom-client";
import { registeredEventsResolver } from "../out/fathom/utilities";

function InitializeFathom() {
    useEffect(() => {
        if (
            process.env.NODE_ENV === "production" &&
            process.env.NEXT_PUBLIC_FATHOM_SITE_ID
        ) {
            Fathom.initialize(
                process.env.NEXT_PUBLIC_FATHOM_SITE_ID,
                {
                    src: "https://cdn.usefathom.com/script.js",
                    "data-auto": false,
                    "data-spa": "auto",
                },
                registeredEventsResolver
            )
                .then(() => {
                    console.log("fathom initialized successfully");
                })
                .catch((error) => {
                    console.error("could not initialize fathom", error);
                });
        }
    }, []);

    return null;
}

export default InitializeFathom;
