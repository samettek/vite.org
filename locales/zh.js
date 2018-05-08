module.exports = {
  'lang': '中文',
  'head': {
    'title': 'Vite - 新一代高性能去中心化应用平台',
    'document': '文档',
    'homeDesc': 'Vite - 新一代高性能去中心化应用平台'
  },
  'nav': {
    'feature': '特性',
    'technology': '核心技术',
    'roadmap': '路线图',
    'team': '团队',
    'faq': '问题答疑',
    'careers': '加入我们',
    investor: '投资机构'
  },
  'home': {
    'header': 'Vite',
    'contract': '新一代高性能去中心化应用平台',
    'whitePaper': '白皮书'
  },
  'features': {
    'fast': {
      'title': '低延迟',
      'description': '出账和入账交易分离，连续转账不需要等待确认；采用HDPoS共识算法，交易确认延迟不超过1秒。'
    },
    'throughput': {
      'title': '高吞吐',
      'description': '合约间通信采用消息驱动架构(EDA)；基于DAG的账本结构；交易的写入和验证异步解耦。全新的架构设计可以支撑超高的吞吐。'
    },
    'scalability': {
      'title': '可扩展',
      'description': '交易按账户维度分组，并划分为请求交易和响应交易，每个交易只改变单个账户状态；共识算法的分层设计提供按共识组维度的水平扩展性。'
    },
    'usability': {
      'title': '易用性',
      'description': '功能更强大的solidity++智能合约语言；支持合约定时调度、VNS命名服务、合约升级等功能；Vite客户端集成基于HTML5的去中心化小程序引擎，降低dApp开发部署门槛。'
    },
    'value': {
      'title': '价值闭环',
      'description': '支持数字资产发行、跨链价值传输，以及基于路印协议的代币间交易。Vite本身也是一个去中心化交易所。'
    },
    'economy': {
      'title': '经济性',
      'description': '基于配额的资源配置，轻量级用户不需要支付手续费或燃料费；用户可以选择多种方式获取计算资源；支持配额租赁。'
    }
  },
  'tech': {
    'title': '核心技术',
    'blockLattice': {
      'title': 'Block Lattice',
      'description': [
        'Vite账本结构不是基于Block Chain的，其主体是一个由伴生的Request Block和Response Block构成的树型结构。',
        '每一个账户一条链，每个交易会生成一个Request Block和一个Response Block，每个账户上的块只能由该账户持有者才能添加。'
      ]
    },
    'snapshotChain': {
      'title': 'Snapshot Chain',
      'description': [
        '合约账户的Response Block和普通账户的Response Block写入不一样，合约账户没有私钥，所以任何人都可以写入，为了防止意外频繁的分叉。我们往引入一条主链，我们称为：Snapshot Chain。'
      ]
    }
  },
  'roadmap': {
    'title': '路线图',
    'timelines': [
      {
        'time': '2018 二月',
        'description': '项目启动'
      },
      {
        'time': '2018 四月',
        'description': 'Vite系统设计，白皮书发布'
      },
      {
        'time': '2018 五月',
        'description': '发布官方网站，路演'
      },
      {
        'time': '2018 六月',
        'description': '启动Vite Core开发'
      },
      {
        'time': '2018 十月',
        'description': 'Vite Core alpha 内测版'
      },
      {
        'time': '2018 十二月',
        'description': [
          'Vite Core beta M1：支持交易、资产发行、分层共识、快照链',
          'Vite SDK发布',
          'Vite 区块链浏览器'
        ]
      },
      {
        'time': '2019 一月',
        'description': 'Vite 客户端桌面版'
      },
      {
        'time': '2019 二月',
        'description': 'Vite 移动客户端内测版'
      },
      {
        'time': '2019 四月',
        'description': [
          'Vite Core beta M3：配额租赁、定时调度、命名服务',
          'Vite 移动客户端支持dApplet小程序功能'
        ]
      },
      {
        'time': '2019 七月',
        'description': 'Vite Core beta M4：路印协议、跨链'
      },
      {
        'time': '2019 八月',
        'description': 'Vite 移动客户端集成去中心化交易'
      },
      {
        'time': '2019 十月',
        'description': 'Vite Core beta M5：合约升级、区块裁剪、solidity++优化'
      },
      {
        'time': '2019 十一月',
        'description': 'Vite Testnet Release：测试网络上线'
      },
      {
        'time': '2020 一月',
        'description': 'Vite 1.0 Release：主网上线'
      },
      {
        'time': '2020 二月',
        'description': 'Vite 生态建设'
      }
    ]
  },
  'team': {
    'title': '核心团队',
    'subTitle': '',
    'advisor': '顾问团队',
    'nameMap': {
      'liuchunming': {
        'name': '刘春明',
        'position': '',
        'description': '资深区块链创业者。毕业于中国科技大学，中科院软件所。曾任京东高级架构师，币丰港联合创始人，美团点评技术总监。'
      },
      'wangdong': {
        'name': '王东',
        'position': '',
        'description': '资深区块链创业者。毕业于中国科技大学，亚利桑那州立大学。路印协议创始人，前Google美国Tech Lead，云云网联合创始人兼副总裁，京东高级研发总监，币丰港联合创始人。'
      },
      'wuming': {
        'name': '武鸣',
        'position': '',
        'description': '资深科学家。毕业于中国科技大学，中科院计算所。微软亚洲研究院Senior Research Manager，在分布式系统和AI领域发表过十余篇论文。'
      },
      'chenxiaoliang': {
        'name': '陈晓亮',
        'position': '',
        'description': '资深金融产品运营专家，路印协议COO。曾任三诺集团CIO。'
      },
      'machao': {
        'name': '马超',
        'position': '',
        'description': '资深区块链专家，路印协议首席研究员。曾任Google高级研发工程师，币丰港联合创始人。\n'
      },
      'terenceLam': {
        'name': 'Terence Lam',
        'position': '',
        'description': '毕业于哈佛商学院。智子区块链基金合伙人。香港大学SPACE中国商业学院客座讲师。20年以上全球500强公司技术高管经验。曾创办过多家科技公司。'
      }
    }
  },
  'faq': {
    'title': '问题答疑',
    'questions': [
      {
        'question': '什么是Vite？',
        'answer': [
          'Vite 是一个通用的去中心化应用平台，在兼顾安全性的同时，满足了工业级应用对高吞吐、低延迟和扩展性的要求。',
          'Vite 致力于解决基础链目前的性能和扩展性问题，以便在基础链上能搭建出真正实用且高频的应用。'
        ]
      },
      {
        'question': 'Vite和Loopring是什么关系？',
        'answer': '双方属于是合作关系，Loopring的创始人王东将作为Vite的联合创始人，Loopring协议将内置到Vite系统中，Vite上线后可在钱包中使用Loopring的去中心化交易所功能。'
      },
      {
        question: 'Vite 会有空投么？会以什么方式？',
        answer: [
          '会有空投。但是数目未定，方式也未定。'
        ]
      },
      {
        'question': 'Vite里的快照链是整个系统安全的核心，如何保证快照链的安全？',
        'answer': [
          '快照链采用DPOS共识机制，在一定程度上为了性能牺牲了安全性。如何维护系统安全，需要在共识节点的投票、社区治理上下功夫。',
          'TODO'
        ]
      },
      {
        question: 'Vite的智能合约间调用取消了同步调用，那如何兼容以太里同步调用的场景？',
        answer: '不能兼容。需要改动同步的代码为异步代码，才能兼容。'
      },
      {
        question: 'Vite的Solidity++和以太的Solidity有什么区别？',
        answer: [
          '就像c和c++一样，solidity++的名字就是源自于此。在基本语法上，Solidity++和Solidity兼容，最大差异是消息调用的语义不同，以太代码里，是一个同步调用，在Solidity++里是异步调用。',
          '另外，在Solidity++中，将提供一系列标准库，例如:字符串处理、浮点运算、基本数学运算、容器、排序等。'
        ]
      },
      {
        question: '区块裁剪如何实现？',
        answer: []
      }
    ]
  },
  investor: {
    title: '投资机构'
  },
  'urls': {
    'whitePaper': '白皮书',
    'document': '文档',
    'telegram': 'Telegram 中文群',
    'loopring': '路印协议',
    'faq': '问题答疑',
    'medium': '博客'
  },
  urlSrc: {
    telegram: 'https://t.me/joinchat/GJYuBBHoTKlJK9N454jmQg',
    whitePaper: '/whitepaper/zh.pdf'
  },
  'utils': {
    readMore: '阅读更多'
  },
  'careers': {
    title: 'VITE Labs',
    subtitle: '加入我们一起创造一个全新的智能合约平台',
    desc: '职位描述',
    require: '职位要求',
    special: '有以下经验者优先',
    contact: '简历提交：',
    jd: {
      java: {
        title: 'Java 高级开发工程师',
        desc: [
          '负责Vite Core开发和维护',
          '负责相关SDK的开发'
        ],
        require: [
          '熟悉Java及面向对象设计开发，对部分Java技术有深入研究，熟悉JDK源码；',
          '熟悉常见设计模式，精通Spring，MyBatis等流行开源框架，并深入了解其工作原理；',
          '深入了解过MySQL，熟悉数据库原理及常用性能优化技术，熟悉 NoSQL的原理、使用场景及限制；',
          '研究过http协议、搜索引擎、缓存、jvm 调优、序列化、nio、RPC 调用框架等；',
          '熟悉高性能、高并发系统设计方案，如分布式缓存、ElasticSearch、消息队列等；'
        ],
        special: [
          '参与并主导过虚拟货币相关开发',
          '对虚拟货币研究颇深'
        ]
      },
      pm: {
        title: '（高级）产品经理',
        desc: [
          '从事区块链技术在业务领域的应用产品设计；',
          '设计去中心化业务生态模型和用户成长体系；',
          '负责带领团队完成区块链项目'
        ],
        require: [
          '本科以上学历，计算机类相关专业；',
          '2年以上产品工作经验，熟悉大量级C端用户产品；',
          '熟悉掌握互联网产品的需求分析、产品原型设计、交互设计，及产品项目流程，并具有很强的推动力和执行力；',
          '有创新意识、责任心、进取心与团队合作精神，对新技术应用感兴趣；'
        ],
        special: [
          '1年以上虚拟货币相关从业经验',
          '掌握Bitcoin，Ethereum，HyperLedger Fabric的区块链相关机制与原理；',
          '英语优秀，能快速阅读英文论文及相关资料，学习能力强'
        ]
      },
      fe: {
        title: '（高级）web前端开发工程师',
        desc: [
          '负责Vite钱包项目开发',
          '负责编写Vite前端相关SDK',
          '参与Vite dApplet小程序平台开发'
        ],
        require: [
          '三年以上PC／移动端前端开发经验，能独立完成前端开发任务；',
          '精通JavaScript、CSS、HTML等前端相关技术，熟悉 W3C 标准与 ES 规范；',
          '熟悉nodejs，使用并研究过至少一个nodejs框架（express/koa等；',
          '熟悉至少一种前端框架（React/Vue/Angular等）或对JS语言掌握较深；',
          '了解至少一种非前端开发语言（PHP/Java/Python/Ruby等），并有一定的实战经验；',
          '了解webpack、gulp等能提高开发效率的工具的使用；',
          '较强的逻辑思维能力，善于分析、归纳、解决问题。'
        ],
        special: [
          '有虚拟货币相关开发经验',
          '掌握Bitcoin，Ethereum，HyperLedger Fabric的区块链相关机制与原理；',
          '参与维护过超大型开源项目'
        ]
      },
      ios: {
        title: '（高级）iOS开发工程师',
        desc: [
          '负责Vite前端iOS客户端设计与开发 ',
          '参与Vite dApplet小程序平台iOS部分开发'
        ],
        require: [
          '良好的编程风格，扎实的编程基础和数据结构算法基础',
          '超强的问题解决能力',
          '深入理解 iOS SDK，具有丰富的 Objective-C 或 C/C++ 开发经验',
          '深入理解面向对象编程思想，具有较强的设计能力',
          '熟悉网络通信机制及常用数据传输协议',
          '热爱互联网和新技术，具有极强的快速学习能力'
        ],
        special: [
          '了解虚拟货币相关原理',
          '有过类似小程序平台开发经验'
        ]
      },
      android: {
        title: '（高级）Android 开发工程师',
        desc: [
          '负责Vite前端 Android 客户端设计与开发 ',
          '参与Vite dApplet小程序平台 Android 部分开发'
        ],
        require: [
          '具备4年以上Android平台开发经验，有跨平台项目开发经验者优先；',
          '熟悉Android应用开发，具有开发过完整Android应用的经历，有独立开发完成app经历者优先；',
          '熟悉Android开发的所有机制，对Android系统应用管理、进程管理、内存管理、Activity管理机制有深入理解；',
          '熟悉目前常用的网络通信协议；',
          '熟悉Android的各大UI控件的使用，能够独立开发定制控件；'
        ],
        special: [
          '性格开朗，对技术有强烈的兴趣，喜欢钻研，具有良好的学习能力、沟通技能与团队合作能力',
          '有自己的技术blog或开源代码仓库',
          '了解虚拟货币相关原理',
          '有过类似小程序平台开发经验'
        ]
      },
      go: {
        title: '（高级）Golang 开发工程师',
        desc: [
          '负责Vite Core Golang版本开发和维护',
          '负责相关SDK的开发'
        ],
        require: [
          '计算机相关专业本科及以上学历',
          '计算机基础扎实，有较好的数据结构与算法功底，熟悉Linux系统和网络编程',
          '熟练掌握Golang，有实际项目开发经验'
        ],
        special: [
          '具有分布式/高性能系统设计和开发经验',
          '注重代码质量，有良好的自我驱动能力，工作严谨，责任感强，有协作精神',
          '了解虚拟货币相关原理'
        ]
      }
    }
  }
}
