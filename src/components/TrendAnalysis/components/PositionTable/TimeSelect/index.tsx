import { DatePicker } from 'antd';
import React, { useState } from 'react';
import { TIME_OPTIONS } from './config';
import styles from './index.less';

interface IProps {
  onChange?: any;
  value?: any;
}

const TimeSelect = (props: IProps) => {
  const { value, onChange } = props;
  const [activeKey, setActiveKey] = useState<string>('');

  const onTimeSelect = (key: string, l: any[]) => {
    setActiveKey(key);
    onChange((l || []).map((item: any) => item.format('YYYY-MM-DD HH:mm:ss')));
  };

  const onRangeChange = (l: any) => {
    onChange((l || []).map((item: any) => item.format('YYYY-MM-DD HH:mm:ss')));
    setActiveKey('');
  };

  return (
    <div className={styles.timeSelect}>
      <DatePicker.RangePicker style={{ width: 240 }} onChange={onRangeChange} />
      <div className={styles.timeList}>
        {TIME_OPTIONS.VALUES.map((key) => {
          return (
            <div
              onClick={() => onTimeSelect(key, TIME_OPTIONS.toTimeRange(key))}
              key={key}
              className={`${styles.timeItem} ${
                activeKey === key ? styles.fActive : ''
              }`}
            >
              {TIME_OPTIONS.toString(key)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelect;
