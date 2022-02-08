import React from 'react';
import styles from './index.less';

interface IDocSectionProps {
  // 标题
  title?: string;
  // 内容
  children?: React.ReactNode;
}

const DocSection = (props: IDocSectionProps) => {
  const { children, title } = props;
  return (
    <div className={styles.docSection}>
      {title && (
        <div id={title} className={styles.title}>
          {title}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DocSection;
