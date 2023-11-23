export const GROUP_LIST_MOCK = [
  {
    id: '1',
    name: '分组1',
    type: 'analysis',
    desc: '',
  },
  {
    id: '2',
    name: '分组2',
    type: 'analysis',
    desc: '',
  },
];

export const POS_CONFIG_MOCK = [
  {
    id: '1',
    posId: '11',
    name: '测点1',
    areaSetType: '1',
    upperLimit: 10,
    lowerLimit: 0,
    fillRule: '1',
    isMain: false,
    isY: true,
  },
  {
    id: '2',
    posId: '12',
    name: '测点2',
    areaSetType: '1',
    upperLimit: 10,
    lowerLimit: 0,
    fillRule: '1',
    isMain: false,
    isY: true,
  },
];

export const POS_DATA_MOCK = [
  {
    posId: '11',
    currentValue: 3.22,
    meanValue: 4.23,
    maxValue: 7.43,
    minValue: 1.93,
    list: [
      {
        time: '2023-11-02 17:00:00',
        value: 3.23,
      },
      {
        time: '2023-11-02 17:30:00',
        value: 4.24,
      },
    ],
  },
  {
    posId: '12',
    currentValue: 3.22,
    meanValue: 4.23,
    maxValue: 7.43,
    minValue: 1.93,
    list: [
      {
        time: '2023-11-02 17:00:00',
        value: 5.23,
      },
      {
        time: '2023-11-02 17:30:00',
        value: 1.24,
      },
    ],
  },
];
