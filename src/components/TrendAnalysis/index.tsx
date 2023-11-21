import React from 'react';
import GroupTabs from './components/GroupTabs';

import styles from './index.less';

const TrendAnalysis = () => {
  return (
    <div className={styles.trendAnalysis}>
      <GroupTabs />
    </div>
  );
};

export default TrendAnalysis;
