// 股票数据
export const stockArr = [
  {
    name: '南极电商',
    totalStock: 24.55, // 总股本
    profit2020: 11.9, // 2020年净利润
    profit2021: 14, // 2021年净利润（预估）
    lowestPE: 16.03, // 近几年最低市盈率
    // lowestPE: 17.09, // 近几年「次低」市盈率
    averagePE: 28.64 // 近几年平均市盈率
  },
  {
    name: '洽洽食品',
    totalStock: 5.07,
    profit2020: 8.05,
    profit2021: 9.22,
    // lowestPE: 21.12, // 近2年最低市盈率
    lowestPE: 19.46,  // 近几年最低市盈率
    // lowestPE: 18.28,  // 上市以来最低市盈率
    averagePE: 37.19
  },
  {
    name: '索菲亚',
    totalStock: 9.12,
    profit2020: 11.9,
    profit2021: 14,
    lowestPE: 13.11,
    averagePE: 20.81
  },
  {
    name: '中炬高新',
    totalStock: 7.97,
    profit2020: 8.9,
    profit2021: 9.85,
    lowestPE: 27.21,
    averagePE: 55.01
  },
  {
    name: '中顺洁柔',
    totalStock: 13.12,
    profit2020: 9.06,
    profit2021: 12.4,
    lowestPE: 21.94,
    averagePE: 37.66
  },
  {
    name: '伊利股份',
    totalStock: 60.82,
    profit2020: 70.8,
    profit2021: 86.2,
    lowestPE: 21.03,
    averagePE: 30.63
  },
  {
    name: '三一重工',
    totalStock: 84.85,
    profit2020: 154,
    profit2021: 193,
    lowestPE: 11.23,
    averagePE: 16.11
  },
  {
    name: '海螺水泥',
    totalStock: 52.99, // 总股本
    profit2020: 351, // 2020年净利润
    profit2021: 368, // 2021年净利润（预估）
    lowestPE: 5.59, // 近几年最低市盈率
    // lowestPE: 6.4, // 近几年最低市盈率
    averagePE: 8.11 // 近几年平均市盈率
  },
  {
    name: '立讯精密',
    totalStock: 70.35,
    profit2020: 72.3,
    profit2021: 92.6,
    lowestPE: 30.54,
    averagePE: 54.19
  },
]

// 创建一个数据结构处理原始股票数据
export class StockInfo {
  constructor(i) {
    this.name = stockArr[i].name
    this.totalStock = stockArr[i].totalStock + '亿股'
    this.profit2020 = stockArr[i].profit2020 + '亿'
    this.profit2021 = stockArr[i].profit2021 + '亿'
    this.lowestPE = stockArr[i].lowestPE
    this.averagePE = stockArr[i].averagePE
    this.NormalPrice2020 = stockArr[i].NormalPrice2020 + '元'
    this.LowestPrice2020 = stockArr[i].LowestPrice2020 + '元'
    this.LowestPrice2021 = stockArr[i].LowestPrice2021 + '元'
    this.NormalPrice2021 = stockArr[i].NormalPrice2021 + '元'
  }
}