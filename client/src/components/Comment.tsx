import React, {PropsWithChildren} from "react";
import styles from "./Comment.module.scss";
import TimedTitle from "./TimedTitle";

export interface CommentProps {
    image: string;
    name: string;
}

export default function Comment(props: PropsWithChildren<CommentProps>) {
    return (
        <div className={styles.container}>
            <img
                className={styles.icon}
                src={props.image}
                alt={props.name + "'s profile picture"}
            />

            <TimedTitle className={styles.username} title={props.name} date={new Date()} noFloat />
            <div className={styles.contents}>{props.children}</div>
        </div>
    )
}