import React from 'react';
import { Link } from 'dva/router'
import styles from './index.less';


export default function() {
  return (
    <div className={styles.normal}>
       <h1>r-charts</h1> 
       <main>
            <Link to="/archeryHitRateHeatMap">archery hit rate heat map</Link>
       </main>
    </div>
  );
}
