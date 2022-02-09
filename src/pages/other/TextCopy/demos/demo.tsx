import React from 'react';
import { TextCopy } from '@szsk/rac';
import { message } from 'antd';

const Demo = () => {
  return (
    <>
      <TextCopy
        onCopy={(text) => {
          message.info(`我是成功回调，我复制了${text}`);
        }}
        text="复制我复制我"
      />
    </>
  );
};

export default Demo;
