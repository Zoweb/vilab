import React from 'react';
import Moment from "react-moment";
import classnames from "classnames";
import styles from "./TimedTitle.module.scss";

interface TimedTitleProps {
    title: string;
    date: Date;

    noFloat?: boolean;

    className?: string;
}

export default function TimedTitle(props: TimedTitleProps) {
    return (
        <div className={props.className}>
            <h1 className={classnames(styles.title, {[styles.titleFloat]: !props.noFloat})}>{props.title}</h1>
            <h3 className={classnames(styles.date, {[styles.dateFloat]: !props.noFloat})}>
                <Moment date={props.date} fromNow />
            </h3>
        </div>
    );
}