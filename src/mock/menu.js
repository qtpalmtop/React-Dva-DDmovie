const {
  config
} = require('./common')

const {
  apiPrefix
} = config
let database = [{
  id: '1',
  icon: 'laptop',
  name: 'DD Movie',
  route: '/dashboard',
}, {
  id: '2',
  bpid: '1',
  name: '电影订票',
  icon: 'api',
  route: '/ticket',
}, {
  id: '7',
  bpid: '1',
  name: '订单查询',
  icon: 'shopping-cart',
  route: '/order',
}, {
  id: '21',
  mpid: '-1',
  bpid: '2',
  name: 'User Detail',
  route: '/user/:id',
}, {
  id: '11',
  mpid: '-1',
  bpid: '2',
  name: 'Movie Detail',
  route: '/movie/:id',
}, ]

module.exports = {

  [`GET ${apiPrefix}/menus`](req, res) {
    res.status(200).json(database)
  },
}