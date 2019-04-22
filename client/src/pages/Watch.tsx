import React, {Component} from 'react';
import styles from "./Watch.module.scss";
import TimedTitle from "../components/TimedTitle";
import DescribedVideo from "../components/DescribedVideo";
import Comment from "../components/Comment";

class Watch extends Component {
    render() {
        return (
            <div className={styles.container}>
                <TimedTitle className={styles.videoTitle} title="Never Gonna Give You Up" date={new Date()}/>
                <h1 className={styles.commentsTitle}>Comments</h1>

                <DescribedVideo className={styles.video} source={"/testing/test-video.mp4"}>
                    <p>Praesent pretium aliquet consequat. Nam nec quam in ligula pulvinar consectetur interdum nec
                        tortor. Curabitur tincidunt nisi nibh, sit amet cursus libero ultrices non. Sed interdum enim
                        ut placerat congue. Vestibulum vehicula hendrerit efficitur. Vivamus vehicula urna eros, in
                        ullamcorper neque venenatis sit amet. Donec tempus iaculis ante sit amet tristique. Duis non
                        justo ut ante maximus interdum tincidunt quis tellus.</p>

                    <p>Music: Never Gonna Give You Up by Someone<br/>
                    Download: <a href="#">https://someone.mulab.com/never-gonna-give-you-up</a></p>
                </DescribedVideo>
                <div className={styles.comments}>
                    <Comment name="Rick Astley" image="http://shackmanlab.org/wp-content/uploads/2013/07/person-placeholder.jpg">
                         <p>Etiam ac tempor dui, sit amet eleifend risus. Sed sit amet lacus ac nibh pharetra tempus.
                             Nullam lobortis in est at tristique. Nam gravida malesuada finibus. Sed eget massa vitae
                             tortor cursus luctus. In justo odio, laoreet porta dapibus eget, pharetra at tortor. Fusce
                             tincidunt erat id hendrerit ultricies.</p>
                    </Comment>
                </div>
            </div>
        );
    }
}

export default Watch;