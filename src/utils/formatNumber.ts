export const formatNumber = (num: number) => {
  if (num >= 1000000000) {
    return Math.floor(num / 1000000000).toString() + "B";
  } else if (num >= 1000000) {
    return Math.floor(num / 1000000).toString() + "M";
  } else if (num >= 1000) {
    return Math.floor(num / 1000).toString() + "K";
  } else {
    return Math.floor(num).toString();
  }
};
