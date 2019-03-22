import React from 'react';
import { Link } from 'dva/router'
import styles from './index.less';


export default function () {
    return (
        <div className={styles.normal}>
            <h1>r-charts</h1>
            <main>
                <ul>
                    <li>
                        <Link to="/archeryHitRateHeatMap">archery hit rate heat map</Link>
                    </li>
                    <li>
                        <Link to="/siteMonitorBarChart">site monitor bar chart</Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
