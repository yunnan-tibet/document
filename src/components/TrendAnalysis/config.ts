// 上下限设置方式
export const AREA_SET_TYPE = {
  AUTO: '1',
  HAND: '2',
  VALUES: ['1', '2'],
  toString: (v: string) => {
    switch (v) {
      case AREA_SET_TYPE.AUTO:
        return '自动';
      case AREA_SET_TYPE.HAND:
        return '手动';
      default:
        return '';
    }
  },
};

// 缺失值填充规则
export const FILL_RULE = {
  NULL: '1',
  BEFORE: '2',
  AFTER: '3',
  VALUES: ['1', '2', '3'],
  toString: (v: string) => {
    switch (v) {
      case FILL_RULE.NULL:
        return '填充null值';
      case FILL_RULE.BEFORE:
        return '填充前值';
      case FILL_RULE.AFTER:
        return '填充后值';
      default:
        return '';
    }
  },
};
