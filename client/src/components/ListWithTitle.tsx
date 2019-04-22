import React, {PropsWithChildren} from "react";
import styles from "./ListWithTitle.module.scss";

export interface ListWithTitleProps {
    title: string;

    className?: string;
}

export default function ListWithTitle(props: PropsWithChildren<ListWithTitleProps>) {
    return (
        <div className={props.className}>
            <h1 className={styles.title}>{props.title}</h1>
            {props.children}
        </div>
    );
}