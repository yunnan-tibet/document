import React from 'react';
import { message } from 'antd';
import { Cron } from '@szsk/rac';

const Demo = () => {
  const onChange = (cronStr: string) => {
    message.success(`callback：${cronStr}`);
  };
  return (
    <>
      <Cron value="" onChange={onChange} />
    </>
  );
};

export default Demo;
