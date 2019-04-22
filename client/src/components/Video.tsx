import React from "react";

export interface VideoProps {
    source: string;

    className?: string;
}

export default function Video(props: VideoProps) {
    return (
        <video controls className={props.className} src={props.source} />
    );
}