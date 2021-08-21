import { stockArr, StockInfo } from './stockData.js';

let stockInfoArr = [] // 保存经过处理后的股票信息，用于最终展示股票数据

/**
 * function
 * 初始化数据
 */
const initStockInfos = () => {
  for (let i = 0; i < stockArr.length; i++) {
    countPrice(i, stockArr[i].profit2020, stockArr[i].profit2021, stockArr[i].lowestPE, stockArr[i].averagePE, stockArr[i].totalStock);
    let stockInfo = new StockInfo(i);
    stockInfoArr.push(stockInfo);
  }
}

/**
 * function
 * 提供 “净利润 & 市盈率 & 总股本” 计算出「股票价格」和「当年底部与合理价格差值」
 */
const countPrice = (i, profit2020, profit2021, lowestPE, averagePE, totalStock) => {
  let NormalPrice2020 = (profit2020 * averagePE / totalStock).toFixed(2);
  let LowestPrice2020 = (profit2020 * lowestPE / totalStock).toFixed(2);
  let LowestPrice2021 = (profit2021 * lowestPE / totalStock).toFixed(2);
  let NormalPrice2021 = (profit2021 * averagePE / totalStock).toFixed(2);
  let increase2021 = ((NormalPrice2021 - LowestPrice2021) / LowestPrice2021 * 100).toFixed(2);

  stockArr[i].NormalPrice2020 = NormalPrice2020
  stockArr[i].LowestPrice2020 = LowestPrice2020
  stockArr[i].LowestPrice2021 = LowestPrice2021
  stockArr[i].NormalPrice2021 = NormalPrice2021
  stockArr[i].increase2021 = increase2021
}

/**
 * function
 * 将股票数据渲染出来
 */
const displayStockInfos = () => {
  for (let i = 0; i < stockInfoArr.length; i++) {
    var tr = document.createElement('tr')   // 循环创建一行来显示每只股票信息
    var tbody = document.getElementById('tbody')
    
    for (let key in stockInfoArr[i]) {
      var td = document.createElement('td') // 循环创建一列来显示每只股票的详细指标
      td.innerHTML = stockInfoArr[i][key]
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }
}


initStockInfos()
displayStockInfos()
console.log(stockInfoArr);