export const fetchStockChartData = async (ticker, dateRange = 0) => {
  const apiKey = "pk_dd24c53bdb6949dfa20c28beee2983fc";
  const url = `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${dateRange}d?token=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchStockDetails = async (ticker) => {
    const apiKey = "pk_dd24c53bdb6949dfa20c28beee2983fc";
    const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const addCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
