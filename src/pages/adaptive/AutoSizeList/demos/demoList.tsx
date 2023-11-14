import React from 'react';
import CodeBox from '@/components/CodeBox';
import Demo from './demo';
import Demo1 from './demo1';

const DemoList = () => {
  const config = [
    {
      key: '1',
      desc: '基本使用方式，item不设置宽度',
      template: `
      import React, { useRef, useState } from 'react';
      import { SForm, SSearch, AutoSizeList } from '@szsk/rac';
      import { Button } from 'antd';
      import { IFormItem } from '@szsk/rac/lib/Form/type';

      const Demo = () => {
        const itemWidth = 200;
        const list = [
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
        ];
        const CompCard = (props: any) => {
          const { data, idx } = props;
          const { name } = data;
          return (
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'grey',
                marginBottom: '10px',
              }}
            >
              {name}
            </div>
          );
        };

        return (
          <AutoSizeList
            list={list}
            space={10}
            CompCard={CompCard}
            itemWidth={itemWidth}
          />
        );
      };

      export default Demo;
      `,
      component: <Demo />,
    },
    {
      key: '2',
      desc: '设置rowNum，控制只显示固定行数，常用于首页展示推荐',
      template: `
      import React, { useRef, useState } from 'react';
      import { SForm, SSearch, AutoSizeList } from '@szsk/rac';
      import { Button } from 'antd';
      import { IFormItem } from '@szsk/rac/lib/Form/type';

      const Demo1 = () => {
        const itemWidth = 200;
        const rowNum = 2;
        const list = [
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
          {
            name: 'content',
          },
        ];
        const CompCard = (props: any) => {
          const { data, idx } = props;
          const { name } = data;
          return (
            <div
              style={{
                textAlign: 'center',
                backgroundColor: 'grey',
                marginBottom: '10px',
              }}
            >
              {name}
            </div>
          );
        };

        return (
          <AutoSizeList
            list={list}
            space={10}
            CompCard={CompCard}
            itemWidth={itemWidth}
            rowNum={rowNum}
          />
        );
      };

      export default Demo1;
      `,
      component: <Demo1 />,
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
