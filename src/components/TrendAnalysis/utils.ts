import chroma from 'chroma-js';

export const generateColorByIndex = (index: number) => {
  const scale = chroma.scale('Set1'); // 选择颜色刻度，可以根据需要选择不同的颜色刻度
  return scale(index / 10).hex(); // 这里除以 10 是为了确保生成多种不同的颜色
};
