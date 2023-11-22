import dayjs from 'dayjs';

export const TIME_OPTIONS = {
  M5: '1',
  M15: '2',
  M30: '3',
  H1: '4',
  H3: '5',
  H6: '6',
  H12: '7',
  H24: '8',
  TODAY: '9',
  L_DAY: '10',
  DAY7: '11',
  VALUES: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  toString: (v: string) => {
    switch (v) {
      case TIME_OPTIONS.M5:
        return '近5分钟';
      case TIME_OPTIONS.M15:
        return '近15分钟';
      case TIME_OPTIONS.M30:
        return '近30分钟';
      case TIME_OPTIONS.H1:
        return '近1小时';
      case TIME_OPTIONS.H3:
        return '近3小时';
      case TIME_OPTIONS.H6:
        return '近6小时';
      case TIME_OPTIONS.H12:
        return '近12小时';
      case TIME_OPTIONS.H24:
        return '近24小时';
      case TIME_OPTIONS.TODAY:
        return '今天';
      case TIME_OPTIONS.L_DAY:
        return '昨天';
      case TIME_OPTIONS.DAY7:
        return '近7天';
      default:
        return '';
    }
  },
  toTimeRange: (v: string) => {
    const now = dayjs();
    const lastDay = now.subtract(1, 'day');
    switch (v) {
      case TIME_OPTIONS.M5:
        return [now.subtract(5, 'minute'), now];
      case TIME_OPTIONS.M15:
        return [now.subtract(15, 'minute'), now];
      case TIME_OPTIONS.M30:
        return [now.subtract(30, 'minute'), now];
      case TIME_OPTIONS.H1:
        return [now.subtract(1, 'hour'), now];
      case TIME_OPTIONS.H3:
        return [now.subtract(3, 'hour'), now];
      case TIME_OPTIONS.H6:
        return [now.subtract(6, 'hour'), now];
      case TIME_OPTIONS.H12:
        return [now.subtract(12, 'hour'), now];
      case TIME_OPTIONS.H24:
        return [now.subtract(24, 'hour'), now];
      case TIME_OPTIONS.TODAY:
        return [now.startOf('day'), now.endOf('day')];
      case TIME_OPTIONS.L_DAY:
        return [lastDay.startOf('day'), lastDay.endOf('day')];
      case TIME_OPTIONS.DAY7:
        // 有点歧义，需正确定义
        return [now.subtract(7, 'day'), now];
      default:
        return [];
    }
  },
};
