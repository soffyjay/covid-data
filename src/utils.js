export const currency = (value, shouldAbbreviate) => {
  if (!value) return "0.00";
  let num = Number(value);
  if (shouldAbbreviate && num >= 1e6) {
    return num >= 1e12
      ? `${(num / 1e12).toFixed(2)}t`
      : num >= 1e9
      ? `${(num / 1e9).toFixed(2)}b`
      : `${(num / 1e6).toFixed(2)}m`;
  }
  return (
    num
      // .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
};
