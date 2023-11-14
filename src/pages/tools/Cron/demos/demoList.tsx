import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式',
      template: `
      import React from 'react';
      import { message } from 'antd';
      import { Cron } from '@szsk/rac';

      const Demo = () => {
        const onChange = (cronStr: string) => {
          message.success(\`callback：\${cronStr}\`);
        };
        return (
          <>
            <Cron value="" onChange={onChange} />
          </>
        );
      };

      export default Demo;

      `,
      component: <Demo />,
    },
  ];
  return (
    <>
      {config.map((item) => {
        const { key, template, component, desc } = item;
        return (
          <CodeBox key={key} template={template} desc={desc}>
            {component}
          </CodeBox>
        );
      })}
    </>
  );
};

export default DemoList;
