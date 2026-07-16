"use client";

import styles from "./LandingPage.module.scss";
import { useAurora } from "../../../hooks/useAurora";

export default function LandingPage() {
    useAurora();

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.blob} ${styles.blue} blue`}>
                <svg
                    viewBox="0 0 600 600"
                    preserveAspectRatio="none"
                >
                    <path
                        className="blobPath"
                        d="
            M423.5,305
            C440,381
            375,457
            298,463
            C205,470
            132,410
            116,317
            C100,222
            145,123
            244,98
            C346,72
            430,131
            452,223
            C460,255
            455,284
            423.5,305
            Z
            "
                    />
                </svg>
            </div>

            <div className={`${styles.blob} ${styles.violet} violet`}>
                <svg
                    viewBox="0 0 600 600"
                    preserveAspectRatio="none"
                >
                    <path
                        className="blobPath"
                        d="
            M423.5,305
            C440,381
            375,457
            298,463
            C205,470
            132,410
            116,317
            C100,222
            145,123
            244,98
            C346,72
            430,131
            452,223
            C460,255
            455,284
            423.5,305
            Z
            "
                    />
                </svg>
            </div>

            <div className={`${styles.blob} ${styles.teal} teal`}>
                <svg
                    viewBox="0 0 600 600"
                    preserveAspectRatio="none"
                >
                    <path
                        className="blobPath"
                        d="
            M423.5,305
            C440,381
            375,457
            298,463
            C205,470
            132,410
            116,317
            C100,222
            145,123
            244,98
            C346,72
            430,131
            452,223
            C460,255
            455,284
            423.5,305
            Z
            "
                    />
                </svg>
            </div>
            <div className={styles.spotlight} />

            <div className={styles.sweep} />

            <div className={styles.vignette} />

            <div className={styles.noise} />
        </div>
    );
}