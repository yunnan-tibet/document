import React, { useEffect, useState } from 'react';
import HighLight from 'react-highlight';
import { stripIndent } from 'common-tags';
import 'highlight.js/styles/atom-one-light.css';
import './index.less';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

interface IProps {
  children: React.ReactNode;
  template: string;
  desc?: string;
}

const CodeBox = (props: IProps) => {
  const { children, template, desc } = props;
  // code折叠
  const [fold, setFold] = useState(true);
  return (
    <div className="g-code-box">
      <div className="m-code-demo">
        {children}
        {desc && <div className="m-desc">{desc}</div>}
        <div className="m-fold-btn" onClick={() => setFold(!fold)}>
          代码
          {fold ? (
            <DownOutlined className="u-fold-btn" />
          ) : (
            <UpOutlined className="u-fold-btn" />
          )}
        </div>
      </div>
      {!fold && (
        <div className="m-code-str">
          <HighLight className="typescript">{stripIndent`${template}`}</HighLight>
        </div>
      )}
    </div>
  );
};

export default CodeBox;
