import { treeUtils } from '@szsk/tree-utils';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  message,
  Select,
  Space,
  Table,
  TreeSelect,
} from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import shortId from 'shortid';
import { AREA_SET_TYPE, FILL_RULE } from '../../config';
import { IPosItem } from '../../types';
import { generateColorByIndex } from '../../utils';
import styles from './index.less';
import TimeSelect from './TimeSelect';

interface IProps {
  posL: IPosItem[];
  setPosL: any;
  getPositions: any;
  setTimes: any;
  times: any;
}

const PositionTable = (props: IProps) => {
  const { posL, setPosL, getPositions, setTimes, times } = props;
  const [posTree, setPosTree] = useState<any[]>([]);
  const hasMain = !!posL.find((item) => item.isMain);

  useEffect(() => {
    getPositionTree();
  }, []);

  // 获取可选测点树列表 todo
  const getPositionTree = () => {
    setPosTree([
      {
        value: '1',
        label: '分类1',
        children: [
          {
            value: '11',
            label: '测点1',
          },
          {
            value: '12',
            label: '测点2',
          },
        ],
      },
      {
        value: '2',
        label: '测点3',
      },
    ]);
  };

  const onTimeChange = (l: any[]) => {
    setTimes(l);
  };

  const onAddPos = () => {
    const _posL = [
      {
        id: shortId.generate(),
        color: generateColorByIndex(posL.length),
        areaSetType: AREA_SET_TYPE.AUTO,
        fillRule: FILL_RULE.NULL,
      },
      ...posL,
    ];
    setPosL(_posL);
  };

  const onHide = (record: IPosItem) => {};

  // 测点删除接口todo
  const onDelPos = (record: IPosItem) => {
    console.log(`删除测点${record.id}`);

    // 更新测点数据
    getPositions();
  };

  // 测点配置更改接口todo
  const onDataChange = (key: string, v: any, record: IPosItem) => {
    const { id, posId } = record;
    if (!posId) {
      if (key === 'posId') {
        // 新增测点
        console.log(`新增测点${v}`);
      } else {
        return message.warn('请先选择测点！');
      }
    } else {
      // 更新测点数据，
      console.log(`更新测点${id}数据`);
    }
    getPositions();
    // 下面是模拟
    setPosL(
      posL.map((item) => {
        if (item.id === id) {
          const otherParam: IPosItem = {};
          if (key === 'areaSetType' && v === AREA_SET_TYPE.AUTO) {
            otherParam.upperLimit = item.upperLimitOrigin;
            otherParam.lowerLimit = item.lowerLimitOrigin;
          }
          return { ...item, [key]: v, ...otherParam };
        }
        return item;
      }),
    );
  };

  const columns: ColumnsType<any> = [
    {
      title: '默认轴',
      dataIndex: 'isMain',
      render: (v, record) => (
        <Checkbox
          value={v}
          disabled={hasMain && !v}
          onChange={(_v: any) => onDataChange('isMain', _v, record)}
        />
      ),
    },
    {
      title: '测点名称',
      dataIndex: 'posId',
      render: (v, record) => {
        const lineL = treeUtils
          .filterLine(posTree, 'value', v)
          .map((item) => item.value);
        return (
          <Cascader
            allowClear={false}
            style={{ width: '100px' }}
            options={posTree}
            value={lineL}
            onChange={(_l: any[]) => {
              onDataChange('posId', _l[_l.length - 1], record);
            }}
            displayRender={(labelL) => {
              return labelL[labelL.length - 1];
            }}
            placeholder="请选择"
          />
        );
      },
    },
    {
      title: '颜色',
      dataIndex: 'color',
      render: (v, record, idx) => {
        return (
          <div
            style={{
              borderRadius: '10%',
              width: 24,
              height: 24,
              background: v,
            }}
          />
        );
      },
    },
    {
      title: '当前值',
      dataIndex: 'currentValue',
    },
    {
      title: '均值',
      dataIndex: 'meanValue',
    },
    {
      title: '最大值',
      dataIndex: 'maxValue',
    },
    {
      title: '最小值',
      dataIndex: 'minValue',
    },
    {
      title: '自动/手动上下限',
      dataIndex: 'areaSetType',
      render: (v, record) => {
        return (
          <Select
            value={v}
            options={AREA_SET_TYPE.VALUES.map((key) => ({
              label: AREA_SET_TYPE.toString(key),
              value: key,
            }))}
            onChange={(_v: any) => onDataChange('areaSetType', _v, record)}
          />
        );
      },
    },
    {
      title: '坐标上限',
      dataIndex: 'upperLimit',
      render: (v, record) => {
        const { areaSetType } = record;
        return (
          <InputNumber
            disabled={areaSetType === AREA_SET_TYPE.AUTO}
            value={v}
            precision={2}
            onChange={(_v: any) => onDataChange('upperLimit', _v, record)}
          />
        );
      },
    },
    {
      title: '坐标下限',
      dataIndex: 'lowerLimit',
      render: (v, record) => {
        const { areaSetType } = record;
        return (
          <InputNumber
            precision={2}
            disabled={areaSetType === AREA_SET_TYPE.AUTO}
            value={v}
            onChange={(_v: any) => onDataChange('lowerLimit', _v, record)}
          />
        );
      },
    },
    {
      title: '缺失值填充规则',
      dataIndex: 'fillRule',
      render: (v, record) => {
        return (
          <Select
            value={v}
            options={FILL_RULE.VALUES.map((key) => ({
              label: FILL_RULE.toString(key),
              value: key,
            }))}
            onChange={(_v: any) => onDataChange('fillRule', _v, record)}
          />
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 130,
      render: (v, record: IPosItem) => {
        const { isY, isMain } = record;
        return (
          <div style={{ display: 'flex' }}>
            <a
              style={{
                marginRight: 4,
              }}
              onClick={(_v: any) => {
                onDataChange('isY', !isY, record);
              }}
            >
              {isY ? '删除' : '添加'}Y轴
            </a>
            <a style={{ marginRight: 4 }} onClick={() => onHide(record)}>
              隐藏
            </a>
            <a onClick={() => onDelPos(record)}>删除</a>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.positionTable}>
      <div className={styles.search}>
        <div className={styles.timeItem}>
          <div className={styles.lable}>时间选择：</div>
          <div className={styles.inputC}>
            <TimeSelect onChange={onTimeChange} value={times} />
          </div>
        </div>
        <Button className={styles.addBtn} type="link" onClick={onAddPos}>
          + 添加
        </Button>
      </div>
      <Table
        rowKey="id"
        pagination={false}
        bordered
        dataSource={posL}
        columns={columns}
      />
    </div>
  );
};

export default PositionTable;
