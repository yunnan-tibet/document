import React, { useState } from 'react';
import { CropPicModal } from '@szsk/rac';
import { Button, message } from 'antd';

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CropPicModal
        onCloseModal={() => setVisible(false)}
        onCropData={(d) => message.info(`callback参数为base64截图${d}`)}
        visible={visible}
        pic="https://nos.netease.com/cloud-website-bucket/20211217182445a81f5db0-d39c-4c7e-9b64-20add7e09171.jpeg"
      />
      <Button onClick={() => setVisible(true)}>开始截图</Button>
    </>
  );
};

export default Demo;
