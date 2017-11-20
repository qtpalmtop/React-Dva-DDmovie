const {
  config,
  posts
} = require('./common')
const Mock = require('mockjs')
const {
  apiPrefix
} = config
let database = posts

let ordersListData = Mock.mock({
  'data|5-9': [{
    'id|1-6': 1,
    filmName: '速度与激情8',
    userName: '吴彦祖',
    position: /^(A[1-9])-(B[1-9])$/,
    'price|25-35': 1,
    playDate: '@datetime',
    isGet: '@boolean',
    isReback: '@boolean',
  }, ],
})
let odatabase = ordersListData.data

module.exports = {

  [`GET ${apiPrefix}/orders`](req, res) {
    const {
      query
    } = req
    let {
      pageSize,
      page,
      ...other
    } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = odatabase
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },
}