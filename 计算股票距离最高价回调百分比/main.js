import { request, StockInfo } from './request.js';
import { stockArr } from './stockData.js';

let stockInfoArr = []   // 临时保存请求过来的股票最新信息, 每一轮请求前都需被清空
let delayUpdate = 120000 // 设置间隔多长时间更新股票信息
let delayDisplay = 500  // 设置从请求数据到显示出来的延迟时间

/**
 * function
 * 请求股票池中所有股票最新信息
 */
function requestAllStockInfos() {
  for (let i = 0; i < stockArr.length; i++) {
    request(stockArr[i].stockCode) // 依据 stockCode 请求每只股票的数据
      .then(res => {
        let stockInfo = new StockInfo(res, stockArr, i) // 保存每只股票对象
        stockInfoArr.push(stockInfo) // 请求到的每只股票对象都被放进临时保存股票最新信息的数组stockInfoArr
        console.log(stockInfo);
      }, err => {
        console.log('失败', err);
      })
  }
}

/**
 * function
 * 将最新的股票信息按照“距离最高价回调”大小进行排序, 并监听加载了多少只股票
 */
function sortByRetracePoint() {
  setTimeout(() => {
    // 监听加载了多少只股票
    let loadedNum = document.getElementById('loadedNum')
    loadedNum.innerHTML = `已加载股票数量：${stockInfoArr.length}只`
    
    console.log('排序');
    stockInfoArr.sort((a, b) => b.countRetracePoint() - a.countRetracePoint())
  }, delayDisplay);
}

/**
 * function
 * 将股票信息渲染出来
 */
function displayStockInfos() {
  setTimeout(() => {
    for (let i = 0; i < stockInfoArr.length; i++) {
      var tr = document.createElement('tr')   // 循环创建一行来显示每只股票信息
      var tbody = document.getElementById('tbody')
      
      for (let key in stockInfoArr[i]) {
        var td = document.createElement('td') // 循环创建一列来显示每只股票的详细指标
        if (key === 'countRetracePoint') {
          let point = stockInfoArr[i].countRetracePoint()
          td.innerHTML = point + '%'
        } else {
          td.innerHTML = stockInfoArr[i][key]
        }
        tr.appendChild(td)
      }
      tbody.appendChild(tr)
    }
    stockInfoArr.length = 0 // 数据显示完成之后清空用来临时保存最新股票信息的数组
  }, delayDisplay + 1);
  
  // 在更新股票信息前需先清除原先渲染出来的股票信息
  setTimeout(() => {
    var tbody = document.getElementById('tbody')
    while (tbody.hasChildNodes()) {
      tbody.removeChild(tbody.lastChild)
    }
    console.clear() // 每轮清空控制台的输出
  }, delayUpdate - 1);
}


// 让页面第一次显示时立即将数据先渲染出来
requestAllStockInfos()
sortByRetracePoint()
displayStockInfos()

// 每间隔 delay 时间更新股票信息
setInterval(() => {
  requestAllStockInfos()
  sortByRetracePoint()
  displayStockInfos()
}, delayUpdate)