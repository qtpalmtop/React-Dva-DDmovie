import {
  color
} from '../utils/theme'

const Mock = require('mockjs')
const config = require('../utils/config')

const {
  apiPrefix
} = config

const dashboard = Mock.mock({
  'sales|8': [{
    'name|+1': 2008,
    'Clothes|200-500': 1,
    'Food|180-400': 1,
    'Electronics|300-550': 1,
  }, ],
  cpu: {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [{
      'cpu|20-80': 1,
    }, ],
  },
  browser: [{
    name: 'Google Chrome',
    percent: 43.3,
    status: 1,
  }, {
    name: 'Mozilla Firefox',
    percent: 33.4,
    status: 2,
  }, {
    name: 'Apple Safari',
    percent: 34.6,
    status: 3,
  }, {
    name: 'Internet Explorer',
    percent: 12.3,
    status: 4,
  }, {
    name: 'Opera Mini',
    percent: 3.3,
    status: 1,
  }, {
    name: 'Chromium',
    percent: 2.53,
    status: 1,
  }, ],
  user: {
    name: 'zuiidea',
    email: 'zuiiidea@.gmail.com',
    sales: 3241,
    sold: 3556,
    avatar: 'http://tva4.sinaimg.cn/crop.0.0.996.996.180/6ee6a3a3jw8f0ks5pk7btj20ro0rodi0.jpg',
  },
  'completed|12': [{
    'name|+1': 2008,
    'Task complete|200-1000': 1,
    'Cards Complete|200-1000': 1,
  }, ],
  'comments|5': [{
    name: '@last',
    'status|1-3': 1,
    content: '@sentence',
    avatar() {
      return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
    },
    date() {
      return `2016-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
    },
  }, ],
  'recentSales|36': [{
    'id|+1': 1,
    name: '@last',
    'status|1-4': 1,
    date() {
      return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
    },
    'price|10-200.1-2': 1,
  }, ],
  quote: {
    name: 'Joho Doe',
    title: 'Graphic Designer',
    content: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
    avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
  },
  /*  numbers: [{
      icon: 'pay-circle-o',
      color: color.green,
      title: 'Online Review',
      number: 2789,
    }, {
      icon: 'team',
      color: color.blue,
      title: 'New Customers',
      number: 3241,
    }, {
      icon: 'message',
      color: color.purple,
      title: 'Active Projects',
      number: 253,
    }, {
      icon: 'shopping-cart',
      color: color.red,
      title: 'Referrals',
      number: 4324,
    }, ],*/
  movies: [{
    id: 0,
    name: '速度与激情8',
    tap: '昔日“家人”反目成仇 逆天飙车炸裂升级',
    img_url: '/img/speed8.jpg',
    date: '2017-04-14',
    director: 'F·家里·格雷',
    actors: '范． 迪塞尔 / 道恩． 强森 / 查理兹． 塞隆 / 杰森． 斯坦森 ',
    type: '动作/惊悚/犯罪',
    country: '美国/日本/法国/加拿大/美属萨摩亚',
    version: '2D/3D/IMAX-3D',
    play_time: 136,
    story: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹．塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难的情义面临瓦解崩溃，前所未有的灾难考验着飞车家族。',
    img_urls: ['/img/su01.png', '/img/su02.png', '/img/su03.png', '/img/su04.png', '/img/su05.png', '/img/su06.png', '/img/su07.png', '/img/su08.png', '/img/su09.png', '/img/su10.png'],
    small_img: '/img/F8.jpg',
    comments: 1,
    is_run: 'true',
    pub_date: '2017-04-14',
  }, {
    id: 1,
    name: '蓝精灵：寻找神秘村',
    tap: '萌物归来上演新的冒险',
    img_url: '/img/ljl01.png',
    date: '2017-04-21',
    director: '凯利．阿斯博瑞',
    actors: '黛米．洛瓦托 /雷恩．威尔森 /乔．曼根尼罗 /杰克．麦克布瑞尔',
    type: '动画/家庭',
    country: '美国',
    version: '3D',
    play_time: 90,
    story: '在这部全新的《蓝精灵》动画电影中，蓝妹妹和她最好的朋友聪聪、笨笨和健健发现了一张神秘地图，于是开展一场兴奋刺激的冒险。他们要穿过充满神奇生物的森林，赶在邪恶的格格巫之前找到“失落的蓝精灵村庄”。在这场紧张刺激和充满危险冒险中，蓝精灵们将会揭开蓝精灵史上最大的秘密！',
    img_urls: ['/img/ljl02.png', '/img/ljl03.png', '/img/ljl04.png', '/img/ljl05.png', '/img/ljl06.png', '/img/ljl07.png', '/img/ljl08.png', '/img/ljl09.png', '/img/ljl10.png', '/img/ljl11.png'],
    small_img: '/img/LJL.jpg',
    comments: 1,
    is_run: 'true',
    pub_date: '2017-04-21',
  }, {
    id: 2,
    name: '当怪物来敲门',
    tap: '画面奇美温暖治愈 演技精湛故事扎心',
    img_url: '/img/gh01.jpg',
    date: '2017-05-19',
    director: '胡安．安东尼奥．巴亚纳',
    actors: '刘易斯．麦克杜格尔 /西格妮韦弗 /菲丽希缇．琼斯 /连姆．尼森',
    type: '儿童/奇幻',
    country: '美国/西班牙',
    version: '2D',
    play_time: 108,
    story: '改编自派崔克．奈斯同名小说，影片讲述了自从妈妈进行化疗开始，少年康纳就每天晚上都做噩梦。梦中总是漆黑阴暗的天气，狂风大作，尖叫声和无论怎么努力都不能紧握的双手让他倍受折磨。他总是做着同样内容的噩梦，直到有一天家里出现了一个不速之客，拥有古老气息的恶魔对康纳说它是由他召唤而来，它要以三个故事交换一个康纳自己真实的故事。康纳并不害怕恶魔，因为他在面对的事——最心爱的妈妈正一步步走向死亡，这是更加恐怖的事情。夜晚让康纳感觉诡异，而他白天的生活也十分难熬。康纳的爸爸离开了他们母子，前来照料他们生活的外婆又与康纳相处的不甚愉快。除此之外，他还必须忍受学校里那些惨淡的日子——老师们夸张的同情以及同学的霸凌。渐渐的，康纳发现恶魔每晚出现的时间都存在一定规律，并且它所讲的意义不明的故事似乎都隐喻着什么，它究竟是死神的使者，还是康纳所期待的出现的奇迹？而康纳一直不愿意与恶魔兑现的故事，其实是他内心深处最黑暗的秘密……',
    img_urls: ['/img/gh02.jpg', '/img/gh03.jpg', '/img/gh04.jpg', '/img/gh05.jpg', '/img/gh06.jpg', '/img/gh07.jpg', '/img/gh08.jpg', '/img/gh09.jpg', '/img/gh10.jpg', '/img/gh11.jpg'],
    small_img: '/img/gh.jpg',
    comments: 1,
    is_run: 'true',
    pub_date: '2017-05-19',
  }, {
    id: 3,
    name: '加勒比海盗5：死无对证',
    tap: '杰克船长霸气回归恶斗亡灵',
    img_url: '/img/jl01.jpg',
    date: '2017-05-26',
    director: '艾斯彭．山德伯格 /乔阿吉姆．罗恩尼',
    actors: '约翰尼．德普 /哈维尔．巴登 /杰弗里．拉什 /奥兰多．布鲁姆',
    type: '动作/奇幻/冒险',
    country: '美国/澳大利亚',
    version: '2D/3D/IMAX-3D ',
    play_time: 129,
    story: '这一次，时运耗尽的杰克船长发现令人闻风丧胆的萨拉查船长 （哈维尔．巴登饰）竟率领着一众夺命亡灵水手逃出了百慕大三角区。他们扬言要杀尽世上所有的海盗，头号目标就是杰克船长。要想改写命运，杰克船长唯一的希望就是找到传说中海神波塞冬的三叉戟，拥有它就能拥有统治整个海洋的力量！为了寻获这件神器，杰克船长被迫和聪明美丽的天文学家卡琳娜．史密斯（卡雅．斯考达里奥饰）以及固执的年轻皇家海军亨利（布兰顿．思怀兹饰）联手出击。航行着他那破破烂烂的“死海鸥”号，杰克船长不但决心要改变自己的厄运，同时也力求能从史上最狠毒可怕的敌人那里捡回一条命。',
    img_urls: ['/img/jl02.jpg', '/img/jl03.jpg', '/img/jl04.jpg', '/img/jl05.jpg', '/img/jl06.jpg', '/img/jl07.jpg', '/img/jl08.jpg', '/img/jl09.jpg', '/img/jl10.jpg', '/img/jl11.jpg'],
    small_img: '/img/jl.jpg',
    comments: 1,
    is_run: 'true',
    pub_date: '2017-05-26',
  }, {
    id: 4,
    name: '美容针',
    tap: '闫妮情挑杜天皓 别样爱情反差萌',
    img_url: '/img/mr01.jpg',
    date: '2017-05-19',
    director: '黄美娜',
    actors: '闫妮 /杜天皓 /宋伊人 /赵毅新 /张亦驰 /宗晓军',
    type: '爱情/剧情',
    country: '中国',
    version: '2D ',
    play_time: 97,
    story: '熟女堂珍还有另外一个名字—“夏百合”，曾经她用这个笔名创作了热门小说《落在胸口的星星》。同时她也以“夏百合”的身份活跃在网游世界中，并与阳光大男孩小健相识，小健是作家“夏百合”的仰慕者，于是好奇的提出见面，堂珍犹豫不肯之余，内心起了波澜，不过并不完美的见面令小健认为自己被耍，内心郁闷压抑的他决定报复，几轮恶搞PK挑战过后，更多的意外出现了，小健发现堂珍真的是那个作家“夏百合”，而对于棠珍来说，小健的出现，似乎是命运给自己的一次设定，就好比“美容针”一样，唤醒了自己。一场特殊的情缘由此开始。',
    img_urls: ['/img/mr02.jpg', '/img/mr03.jpg', '/img/mr04.jpg', '/img/mr05.jpg', '/img/mr06.jpg', '/img/mr07.jpg', '/img/mr08.jpg', '/img/mr09.jpg', '/img/mr10.jpg', '/img/mr11.jpg'],
    small_img: '/img/mr.jpg',
    comments: 1,
    is_run: 'true',
    pub_date: '2017-05-19',
  }, {
    id: 5,
    name: '摔跤吧！爸爸',
    tap: '印度神片，谁说女子不如男！',
    img_url: '/img/sj01.jpg',
    date: '2017-05-05',
    director: '涅提．蒂瓦里',
    actors: '阿米尔．汗 / 萨卡诗．泰瓦 /桑亚．玛荷塔',
    type: '传记/运动',
    country: '印度',
    version: '2D',
    play_time: 140,
    story: '这是一部女性为自己争取命运自主权并赢得尊严的励志喜剧电影。马哈维亚．辛格．珀尕是印度国家摔跤冠军，却因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——为印度赢得世界级金牌。不料命运捉弄让他生了四个女儿，偶然的机会他开始培养女儿学习摔跤，过程中发生各种趣事，同时面对社会的歧视，亲友的嘲笑等困境会压垮这队父女军吗？他们能否顶住舆论的压力、化解隔阂、颠覆保守的价值观观赢得最后的胜利吗？',
    img_urls: ['/img/sj02.jpg', '/img/sj03.jpg', '/img/sj04.jpg', '/img/sj05.jpg', '/img/sj06.jpg', '/img/sj07.jpg', '/img/sj08.jpg', '/img/sj09.jpg', '/img/sj10.jpg', '/img/sj11.jpg'],
    small_img: '/img/sj.jpg',
    comments: 1,
    is_run: 'true',
    pub_date: '2017-05-05',
  }, ],
})

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}

let database = dashboard.movies

const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data

  for (let item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

module.exports = {
  [`GET ${apiPrefix}/dashboard`](req, res) {
    res.json(dashboard)
  },

  [`GET ${apiPrefix}/movie/:id`](req, res) {
    const {
      id
    } = req.params
      /* const data = queryArray(database, id, 'id')
       if (data) {
         res.status(200).json(data)
       } else {
         res.status(404).json(NOTFOUND)
       }*/
    res.json(dashboard.movies[id])
  },

  [`DELETE ${apiPrefix}/movie/:id`](req, res) {
    const {
      id
    } = req.params
      //console.log(233)
      //const data = {}
    const data = queryArray(database, id, 'id')
    if (data) {
      database = database.filter(item => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

}