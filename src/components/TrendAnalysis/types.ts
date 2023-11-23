export interface ITrendAnaGroup {
  id?: string;
  name?: string;
  type?: 'analysis';
  desc?: string;
}

export interface IPosItem {
  id?: string;
  posId?: string; // 测点id
  name?: string;
  color?: string; // 颜色
  currentValue?: number; // 当前值
  meanValue?: number; // 平均值
  maxValue?: number;
  minValue?: number;
  areaSetType?: string | number; // 上下限设置方式
  upperLimit?: number; // 上限展示值
  lowerLimit?: number; // 下限展示值
  upperLimitOrigin?: number; // 上限原值
  lowerLimitOrigin?: number; // 下限原值
  fillRule?: string | number; // 空值填充规则
  isMain?: boolean; // 是否主轴
  isY?: boolean; // 是否Y轴
  list?: IPosData[];
}

export interface IPosData {
  time?: string;
  value?: number;
}
