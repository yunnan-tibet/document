import { PlusSquareOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import GroupEditModal from './components/GroupEditModal';
import GroupTabs from './components/GroupTabs';
import PosCharts from './components/PosCharts';
import PositionTable from './components/PositionTable';

import styles from './index.less';
import { POS_CONFIG_MOCK, POS_DATA_MOCK } from './mock';
import { IPosItem, ITrendAnaGroup } from './types';
import { generateColorByIndex } from './utils';

const TrendAnalysis = () => {
  const [activeGroup, setActiveGroup] = useState<ITrendAnaGroup>(); // 选中的分组
  const [times, setTimes] = useState<any[]>([]); // 时间范围
  const [posL, setPosL] = useState<IPosItem[]>([]); // 点位数据列表
  const [fCount, setFCount] = useState<number>(0); // 用于刷新获取测点数据
  const { name, id } = activeGroup || {};

  // 切换分组获取测点数据
  useEffect(() => {
    id && getPositions();
  }, [id]);

  // 获取测点配置后获取测点数据
  useEffect(() => {
    fCount && getPosData();
  }, [fCount, times]);

  // 获取测点数据
  const getPositions = () => {
    getPosConfig();
  };

  // 获取分组测点配置todo
  const getPosConfig = () => {
    setPosL(
      POS_CONFIG_MOCK.map((item, idx) => ({
        ...item,
        color: generateColorByIndex(idx),
        upperLimitOrigin: item.upperLimit,
        lowerLimitOrigin: item.lowerLimit,
      })),
    );
    setFCount(fCount + 1);
    console.log(`获取分组${name}测点列表配置`);
  };
  // 获取分组测点数据todo
  const getPosData = () => {
    // 通过时间和分组id获取测点数据
    const params = {
      times,
      id,
    };
    console.log(params);

    const data: IPosItem[] = POS_DATA_MOCK;
    setPosL(
      posL.map((item) => {
        const sameItem = data.find((dItem) => dItem.posId === item.posId);
        if (sameItem) {
          const { posId, ...rest } = sameItem;
          return { ...item, ...rest };
        }
        return item;
      }),
    );
    console.log(`获取分组${name}测点列表数据`);
  };

  const onTabChange = (groupItem: ITrendAnaGroup) => {
    setActiveGroup(groupItem);
  };

  return (
    <div className={styles.trendAnalysis}>
      <GroupTabs onChange={onTabChange} />
      <PositionTable
        getPositions={getPositions}
        posL={posL}
        setPosL={setPosL}
        times={times}
        setTimes={setTimes}
      />
      <PosCharts posL={posL} />
    </div>
  );
};

export default TrendAnalysis;
