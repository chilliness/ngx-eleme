import Mock from 'mockjs';
import api from '../api';

// 列表数据
Mock.mock(new RegExp(api.list), 'get', {
  code: 200,
  msg: '',
  data: {
    seller: {
      name: '粥品香坊',
      description: '蜂鸟专送',
      deliveryTime: 38,
      score: '@integer(2, 5)',
      serviceScore: '@integer(2, 5)',
      foodScore: '@integer(2, 5)',
      rankRate: '@float(60, 90, 1, 1)',
      isCollect: 0,
      minPrice: 20,
      deliveryPrice: 4,
      ratingCount: '@integer(50, 300)',
      sellCount: '@integer(100, 900)',
      bulletin: '粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。',
      supports: [
        {
          type: 0,
          description: '实体店消费，优惠多多'
        },
        {
          type: 1,
          description: '单人精彩赛'
        },
        {
          type: 1,
          description: '清肺雪梨汤8折抢购'
        },
        {
          type: 2,
          description: '特价饮品八折抢购'
        },
        {
          type: 2,
          description: '单人特色套餐'
        },
        {
          type: 3,
          description: '该商家支持开发票，请在下单时填写好发票抬头'
        },
        {
          type: 4,
          description: '已加入“外卖保”计划，食品安全保障'
        }
      ],
      avatar: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
      pics: ['http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/240/h/180', 'http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/240/h/180', 'http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/240/h/180', 'http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/240/h/180'],
      infos: ['票据：该商家支持发票，请下单写好发票抬头', '品类：其他菜系，包子粥店', '地址：@county(true)', '营业时间：10:00-20:30']
    },
    goods: [
      {
        name: '热销榜',
        type: -1,
        foods: [
          {
            id: 1,
            name: '皮蛋瘦肉粥(咸)',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '很喜欢的粥',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '棒棒滴',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 2,
            name: '扁豆焖面(酸辣)',
            price: 14,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不好吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '口感不错',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 3,
            name: '葱花饼(咸)',
            price: 10,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '没啥味道',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '很一般啊',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 4,
            name: '牛肉馅饼(实惠)',
            price: 10,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '难吃不推荐',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '味道一般',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 5,
            name: '招牌猪肉白菜锅贴/10个',
            price: 17,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不脆,不好吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '偏贵',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 6,
            name: '双瓜粥',
            price: 10,
            oldPrice: '',
            description: '甜粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '好喝',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '口感一般',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 7,
            name: '红豆薏米美肤粥',
            price: 12,
            oldPrice: '',
            description: '美肤粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '味道杠杠滴',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 8,
            name: '八宝酱菜',
            price: 4,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '难吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 9,
            name: '糊塌子(咸)',
            price: 10,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '难吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '单人精彩套餐',
        type: 2,
        foods: [
          {
            id: 10,
            name: '八宝粥套餐(实惠)',
            price: 18,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不推荐',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '冰爽饮品限时特惠',
        type: 1,
        foods: [
          {
            id: 11,
            name: 'VC无限橙果汁(大杯)',
            price: 12,
            oldPrice: 14,
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '还可以',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '精选热菜',
        type: -1,
        foods: [
          {
            id: 12,
            name: '娃娃菜炖豆腐',
            price: 17,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '菜量还可以,味道还可以',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 13,
            name: '手撕包菜',
            price: 16,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不会再点了',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 14,
            name: '香酥黄金鱼/4条',
            price: 15,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '好吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '爽口凉菜',
        type: -1,
        foods: [
          {
            id: 15,
            name: '八宝菜根香',
            price: 4,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '味道不正宗',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 16,
            name: '拍黄瓜',
            price: 9,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '精选套餐',
        type: -1,
        foods: [
          {
            id: 17,
            name: '红豆薏米粥套餐(实惠)',
            price: 28,
            oldPrice: '',
            description: '红豆薏米粥,三鲜干蒸烧卖,拍黄瓜',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不实惠',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 18,
            name: '八宝粥套餐(经典)',
            price: 25,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不推荐',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '果拼果汁',
        type: -1,
        foods: [
          {
            id: 19,
            name: '蜜瓜圣女萝莉杯',
            price: 6,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [],
            icon: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 20,
            name: '加多宝',
            price: 6,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不正宗',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 21,
            name: 'VC无限橙果汁(小杯)',
            price: 6,
            oldPrice: 10,
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '还可以',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '小吃主食',
        type: -1,
        foods: [
          {
            id: 22,
            name: '扁豆焖面(经典)',
            price: 12,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '一般',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 23,
            name: '葱花饼(甜)',
            price: 10,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '没啥味道',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '很一般啊',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 24,
            name: '牛肉馅饼(经典)',
            price: 12,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '难吃不推荐',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不推荐',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 25,
            name: '招牌猪肉白菜锅贴/6个',
            price: 12,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不脆,不好吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '不好吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 26,
            name: '糊塌子(甜)',
            price: 10,
            oldPrice: '',
            description: '',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '下次不会再吃了',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '差评',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      },
      {
        name: '特色粥品',
        type: -1,
        foods: [
          {
            id: 27,
            name: '皮蛋瘦肉粥(甜)',
            price: 10,
            oldPrice: '',
            description: '甜粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '很喜欢的粥',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 28,
            name: '南瓜粥',
            price: 9,
            oldPrice: '',
            description: '甜粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '量太少',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 29,
            name: '红豆薏米补血粥',
            price: 14,
            oldPrice: '',
            description: '甜粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '棒棒滴',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 30,
            name: '鲜蔬菌菇粥',
            price: 11,
            oldPrice: '',
            description: '咸粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '很好吃',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: ''
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/512/h/384'
          },
          {
            id: 31,
            name: '田园蔬菜粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            cartNum: 0,
            isShow: 1,
            sellCount: '@integer(50, 200)',
            rating: '@float(60, 90, 1, 1)',
            info: '',
            ratings: [
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 0,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              },
              {
                username: '*@clast',
                rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
                rateType: 1,
                text: '',
                avatar: 'https://lorempixel.com/200/200/?@natural'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/120/h/90',
            image: 'http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/512/h/384'
          }
        ]
      }
    ],
    ratings: [
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 30,
        score: 5,
        rateType: 1,
        text: '不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: ['南瓜粥', '皮蛋瘦肉粥', '扁豆焖面', '娃娃菜炖豆腐', '牛肉馅饼']
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 18,
        score: 4,
        rateType: 1,
        text: '服务态度不错',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: ['扁豆焖面']
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 28,
        score: 3,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 20,
        score: 5,
        rateType: 1,
        text: '良心店铺',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 10,
        score: 4,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 70,
        score: 1,
        rateType: 0,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 30,
        score: 5,
        rateType: 1,
        text: '很喜欢的粥店',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 26,
        score: 4,
        rateType: 0,
        text: '量给的还可以',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 13,
        score: 3,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 33,
        score: 4,
        rateType: 1,
        text: '孩子喜欢吃这家',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: ['南瓜粥']
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 6,
        score: 4,
        rateType: 1,
        text: '粥挺好吃的',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 22,
        score: 3,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 15,
        score: 5,
        rateType: 1,
        text: '送货速度很快',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 18,
        score: 4,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 32,
        score: 4,
        rateType: 1,
        text: '下雨天给快递小哥点个赞',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 53,
        score: 4,
        rateType: 1,
        text: '好',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 43,
        score: 5,
        rateType: 1,
        text: '吃了还想再吃',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 22,
        score: 3,
        rateType: 0,
        text: '发票开的不对',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 30,
        score: 5,
        rateType: 1,
        text: '好吃',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 40,
        score: 5,
        rateType: 0,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 15,
        score: 2,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 18,
        score: 4,
        rateType: 1,
        text: '很喜欢的粥',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 14,
        score: 5,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      },
      {
        username: '*@clast',
        rateTime: "@integer(2016, 2018)@date('-MM-dd HH:mm:ss')",
        deliveryTime: 22,
        score: 4,
        rateType: 1,
        text: '',
        avatar: 'https://lorempixel.com/200/200/?@natural',
        recommend: []
      }
    ]
  }
});
