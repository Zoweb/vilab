import React, {PropsWithChildren} from "react";
import classnames from "classnames";
import Video from "./Video";
import style from "./DescribedVideo.module.scss";

export interface DescribedVideoProps {
    source: string;

    className?: string;
}

export default function DescribedVideo(props: PropsWithChildren<DescribedVideoProps>) {
    return (
        <div className={classnames(props.className, style.description)}>
            <Video source={props.source} className={style.video} />
            <div>{props.children}</div>
        </div>
    )
}