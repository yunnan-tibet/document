import React, { useCallback, useEffect, useState } from 'react';
import * as echarts from 'echarts';
import shortId from 'shortid';
import styles from './index.less';
import { posOption } from './config';
import { IPosItem } from '../../types';

interface IProps {
  posL: IPosItem[];
}

const PosCharts = (props: IProps) => {
  const { posL } = props;
  const [id] = useState(shortId.generate());

  const resizeCb = useCallback((myChart) => {
    myChart?.resize();
  }, []);

  useEffect(() => {
    const yL = posL?.filter((item) => item.isY);
    if (!yL || !yL.length) {
      return;
    }
    const xAxisData = yL[0].list?.map((item) => item.time);
    // x轴
    posOption.xAxis[0] = { ...posOption.xAxis[0], data: xAxisData as any };
    // y轴
    const yAxisData: any[] = [];
    const seriesData: any[] = [];
    const sortL = yL.sort((a, b) => {
      if (a.isMain) {
        return -1;
      }
      if (b.isMain) {
        return 1;
      }
      return 0;
    });
    const hasMainY = sortL[0].isMain;
    const showL: IPosItem[] = hasMainY ? sortL : [{ color: '#eee' }, ...sortL];
    showL.forEach((item, idx: number) => {
      const { color, list, upperLimit = 0, lowerLimit = 0 } = item;
      // 不存在主轴
      yAxisData.push({
        type: 'value',
        position: 'left',
        alignTicks: true,
        offset: 30 * idx,
        max: upperLimit,
        min: lowerLimit,
        axisLine: {
          show: true,
          lineStyle: {
            color,
          },
        },
        axisLabel: {
          formatter: '{value}',
        },
      });
      seriesData.push({
        type: 'line',
        yAxisIndex: idx,
        data: list?.map((_item) => _item.value),
      });
    });

    posOption.yAxis = yAxisData as any;
    posOption.series = seriesData;
    posOption.color = showL.map((item) => item.color);

    const myChart = echarts.init(document.getElementById(id));
    const resize = resizeCb.bind(null, myChart);
    myChart.setOption(posOption);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      myChart.dispose();
    };
  }, [id, posL, resizeCb]);

  return (
    <div className={styles.posCharts}>
      <div id={id} style={{ minHeight: 299, width: `calc(100% - 1px)` }} />
    </div>
  );
};

export default PosCharts;
