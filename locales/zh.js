module.exports = {
  lang: '中文',
  head: {
    title: 'Vite - 新一代高性能去中心化应用平台',
    document: '文档',
    description: {
      index: 'Vite - 新一代高性能去中心化应用平台',
      careers: '欢迎加入Vitelabs，Do something cool',
      faq: '有关Vite的所有问题答疑',
      technology: 'Vite核心技术：DAG、Snapchat Chain、异步架构、响应式合约、配额租赁、集成路印协议、定时调度、合约升级、solidity++'
    }
  },
  exchange: {
    okex: 'OKEX.COM'
  },
  media: {
    medium: 'Medium',
    bitcointalk: 'Bitcointalk',
    blog: 'Technology Blog'
  },
  nav: {
    index: '首页',
    team: '团队',
    partnership: '合作',
    community: '社区',
    exchange: '交易所',
    media: '媒体',
    faq: '问答',
    technology: '核心技术',
    careers: '加入我们',
    whitePaper: '白皮书'
  },
  home: {
    header: 'Vite',
    slogan: '新一代高性能去中心化应用平台',
    whitePaper: '白皮书',
    testnet: '预览版'
  },
  ecology: {
    title: 'Vite 生态',
    contract: {
      title: '去中心化应用',
      content: 'Vite是一个去中心化应用平台，提供兼容EVM的虚拟机，扩展自Solidity的语言Solidity++，dApp开发者在Vite上开发和部署应用将变得前所未有的简单'
    },
    issueCurrency: {
      title: '资产发行',
      content: 'Vite支持用户通过铸币交易发行自己的代币。Vite协议内置了多代币支持，用户发行的代币与vite代币共享交易的底层协议，具有同样的安全性，不会因不良实践而产生类似于溢出漏洞之类的安全隐患'
    },
    pay: {
      title: '支付',
      content: 'Vite通过引入HDPos，实现交易低延迟确认，缩短支付时间；通过DAG账本结构和异步模型提高系统的吞吐能力，并通过配额的资源配置模型及配额租赁功能，可以确保系统资源以最大效率进行分配。商业级用户可以保障足够的配额，而轻量级用户无需支付手续费'
    },
    transfer: {
      title: '跨链价值传输',
      content: 'Vite内置分布式交易所，实现价值交换；并且通过设计一个跨链协议VCTP（Vite Cross-chain Transfer Protocol)，消除“价值孤岛”，支持数字资产的跨链价值传输'
    }
  },
  roadmap: {
    title: '路线图',
    timelines: [
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
        time: '2019 四月',
        description: [
          'Vite Core beta M2：智能合约、Solidity++编译器、智能合约开发文档'
        ]
      },
      {
        'time': '2019 五月',
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
        'description': 'Vite 启动生态发展计划'
      }
    ]
  },
  tech: {
    title: '核心技术',
    dag: {
      title: 'Block Lattice',
      description: [
        'Vite采用一种称为block-lattice的DAG账本结构，每个账户对应一条链，每个交易引用本账户前一个交易的哈希；交易分为“请求交易”和“响应交易”两种，一个响应交易需要引用对应的请求交易的哈希。这样就构成了一种栅格状的DAG结构。',
        '这种账本结构允许互不相干的交易“并行”写入，降低冲突概率，提高系统吞吐能力。'
      ]
    },
    snapshotChain: {
      title: 'Snapshot Chain',
      description: [
        'Block-lattice有先天的安全缺陷，一些交易被回滚的概率不会随时间推移而降低。为此，Vite 提出独创的快照链技术。',
        '一个快照块存储一个 Vite 账本的状态快照，状态包括：账户的余额、合约状态 的 Merkle root，每个账户链中最后一个块的 hash。快照链是由快照块组成的链式结构，后一个快照块引用前一个快照块的hash。',
        '攻击者想生成一个双花交易，除了要 重建 Vite 账本中的 hash 引用之外，还需要重建快照链 中，首次快照该交易的快照块之后的所有区块，并且需要 产生一条更长的快照链。'
      ]
    },
    async: {
      title: '异步架构',
      description: [
        'Vite 最主要的创新是整个体统的异步设计。',
        '第一：异步请求模型：交易分为请求交易和响应交易。无论是一笔转账还是一次合约调用，均会在账本上先后生成两笔交易。',
        '第二：异步确认模型：交易写入账本和被系统确认是异步的。不同的用户可以并行的将交易写入账本，快照链将以固定的速度对账本进行快照。'
      ]
    },
    reactiveContract: {
      title: '响应式合约',
      description: [
        'Vite的合约间通信采用了一种基于消息驱动的架构，合约间不共享状态，只通过彼此发送消息进行通信。',
        '一个合约调用另一个合约，需要先发送一个请求交易，运行目标合约的节点观测到这条请求交易后，向账本中写入一个对应的响应交易，并更新合约的状态。'
      ]
    },
    ecosystem: {
      title: '生态闭环',
      description: [
        'Vite 将内置Loopring协议，实现多种代币之间的互换，用户可以使用 vite 来支付资产互换交易费，路印矿工在 Vite 平台上进行环路撮合，赚取的代币也是 Vite。',
        'Vite还提出了VCTP跨链协议，可以实现跨链资产传输。Vite团队将会负责与以太坊的跨链实现，其他目标链的跨链实现将会与项目团队以及社区共同推进。',
        'Vite 支持更加灵活的资源配置，Vite系统的资源分配是基于用户持有的VITE代币、一次性支付的费用以及交易PoW难度综合计算。'
      ]
    }
  },
  'team': {
    'core': '团队',
    'advisor': '顾问团队',
    'nameMap': {
      'liuchunming': {
        'name': '刘春明',
        'position': '北京',
        'description': '资深区块链创业者，中国区块链应用研究中心常务理事。毕业于中国科技大学，中科院软件所。曾任京东高级架构师，币丰港联合创始人，美团点评技术总监。'
      },
      'wangdong': {
        'name': '王东',
        'position': '',
        'description': '资深区块链创业者。毕业于中国科技大学，亚利桑那州立大学。路印协议创始人，前Google美国Tech Lead，云云网联合创始人兼副总裁，京东高级研发总监，币丰港联合创始人。'
      },
      allen: {
        name: '刘晓涛',
        position: '',
        description: '资深技术专家。毕业于中国科技大学，复旦大学。前HP Tech Lead，前IBM系统架构师，产品负责人。10年知名外企高并发工作经验，Scrum敏捷开发专家，PMP。'
      },
      'terenceLam': {
        'name': 'Terence Lam',
        'position': '',
        'description': '毕业于哈佛商学院。智子区块链基金合伙人。香港大学SPACE中国商业学院客座讲师。20年以上全球500强公司技术高管经验。曾创办过多家科技公司。'
      },
      'richard': {
        name: 'Richard',
        position: '',
        description: '资深金融专家，多年华尔街工作经验。毕业于美国达特茅斯学院和纽约大学MBA。曾任职纽约高盛结构性资产交易策略副总裁，Two Sigma高频交易及商务创新拓展副总裁。'
      },
      frank: {
        name: '邓远辉',
        position: '',
        description: '数字营销及移动营销专家。毕业于清华大学。曾任职Google广告运营组，随踪科技COO，云克科技联合创始人。'
      },
      zhangli: {
        name: '张力',
        position: '',
        description: '资深区块链从业者，投资人。连接资本合伙人，前鱼池F2pool CMO，前火币商务负责人。'
      },
      mirza: {
        name: 'Mirza Uddin',
        position: '',
        description: 'Mirza毕业于哈佛大学。他曾在掌管500亿美元的美国量化对冲基金双西资本从事风险投资，其中包括深度研究区块链创业公司。他曾经就职于投资过Facebook和Dropbox的Index Ventures风险投资基金和波士顿咨询公司。'
      },
      ivan: {
        name: 'Ivan Golovko',
        position: '',
        description: 'LegalThings One 公司的策略与投资者关系副总裁。俄国著名基金Distributed.Fund的联合创始人。曾任全球知名评测网站I C ODrops的首席市场官。'
      },
      zhoudan: {
        name: 'zhou dan',
        position: '北京',
        description: 'hhhhhhhhhhhh'
      }
    }
  },
  partnership: {
    okex: {
      desc: {
        text1: 'Vite Labs和OK资本宣布建立长期战略合作伙伴关系。',
        text2: '双方决定，在以下方面建立合作关系：OK资本成为Vite主要投资者之一；OK资本研究中心将为Vite去中心化交易所的咨询顾问；Vite的初始商业应用将会面向金融技术领域；OK将利用其在区块链行业积累的优势，为Vite提供相应的建议、渠道及其他资源；Vite Labs硅谷办公室将向OK输送海外项目资源。'
      }
    },
    mxbank: {
      desc: {
        text1: 'Vite Labs战略入股了数字资产银行MXBank。',
        text2: 'Vite作为底层公链，将为MXBank提供公链相关技术支持，以帮助其未来在Vite上尽快落地；同时Vite生态基金负责人也将进入MXBank创始团队，加速项目发展。Vite Token也将成为MXBank第一批支持的数字资产之一。'
      }
    },
    secbit: {
      desc: {
        text1: 'Vite与专注智能合约安全研究的安比（SECBIT）实验室签署了战略合作协议。',
        text2: '双方未来将从区块链低、中、上三个层面就Vite安全性开展全方位深度合作；其中，在公链底层的合作包括交易安全和虚拟机安全等。'
      }
    },
    achpay: {
      desc: {
        text1: 'ACHPAY是Vite生态基金投资的一个非营利性基金会， Vite生态基金作为股东持有ACHPAY token。同时，Vite未来将支持ACHPAY的支付网络整合，其中，闪电支付网络通过Vite系统能够接入链上，提高支付效率、实现安全的资产流通。'
      }
    }
  },
  'faq': {
    'title': '问题答疑',
    'questions': [
      {
        'question': '什么是 Vite？',
        'answer': [
          'Vite 是一个通用的去中心化应用平台，在兼顾安全性的同时，满足了工业级应用对高吞吐、低延迟和扩展性的要求。',
          'Vite 致力于解决基础链目前的性能和扩展性问题，以便在基础链上能搭建出真正实用且高频的应用。'
        ]
      },
      {
        question: 'Vite 会上哪个交易所？',
        answer: [
          '我们在和交易所接触，但还没有具体的时间表。我们主要是一个技术驱动的项目，周期也会比较长，运营方面我们不会特别激进。'
        ]
      },
      {
        question: 'Vite 微信官方公众号是哪个？',
        answer: [
          '我们的官方公众号为: vitelabs'
        ],
        key: 'wechat'
      },
      {
        question: 'Vite 公链和其它公链相比，最大的创新在哪里？',
        answer: [
          'Vite 最大的创新点是引入了异步的设置：',
          '第一，我们把智能合约的调用做了异步的拆分。Nano（DAG三驾马车之一）把一笔转账分为出账和入账两个动作。我们借鉴了Nano，把它扩展到转账及智能合约的调用上，把一笔转账交易拆分为出账和入账，把一个合约调用交易拆分为合约的请求交易和合约的响应交易两部分。',
          '第二个是写入和确认的一个异步的设计。在Vite中，一个交易被写入账本和一个交易被确认是异步的。传统的区块链（如比特币），交易写入账本的速度会受到打包速度的制约。而在Vite中，用户可以在TPS限额之内写入很多交易到账本，但交易是以匀速异步确认的，这样可以削平波峰波谷，最大化地利用系统的资源，提高整个系统的吞吐量。同时，两个账户之间的交易不会彼此堵塞，不会出现因为某一个账户发送了大量交易，使其他账户的交易长期得不到确认。',
          '第三个是合约间调用的异步设计。以太坊里的合约间调用是通过消息调用，或者叫内部交易的方式来完成的，这组调用要么同时完成，要么全部失败，这是一个原子性的ACID语义，会成为性能瓶颈。我们借鉴了一些中心化互联网技术中比较成熟的方案，采用了消息驱动的架构，合约之间不共享任何状态，只通过彼此发送消息来进行通信。'
        ]
      },
      {
        question: 'Vite的智能合约间调用取消了同步调用，那如何兼容以太里同步调用的场景？',
        answer: '不能兼容。需要改动同步的代码为异步代码，才能兼容。'
      },
      {
        question: 'Vite 的 Solidity++ 和以太的 Solidity 有什么区别？',
        answer: [
          '就像c和c++一样，solidity++的名字就是源自于此。在基本语法上，Solidity++和Solidity兼容，最大差异是消息调用的语义不同，以太代码里，是一个同步调用，在Solidity++里是异步调用。',
          '另外，在Solidity++中，将提供一系列标准库，例如:字符串处理、浮点运算、基本数学运算、容器、排序等。'
        ]
      },
      {
        question: '基于消息的架构具有高吞吐和扩展性的优势。但与此相应，付出的代价是编程模型变得相对复杂，无法保证强一致性，而且有可能使延迟变大，Vite是如何降低编程复杂度和延迟？',
        answer: [
          'Vite将提供Solidity++合约语言以及完善的SDK，降低异步编程的成本。',
          '经过认真的研究，我们发现在实际场景中，强一致性语义是可以用BASE语义替代的。由于Vite的HDPoS共识算法可以保障交易确认在1秒之内完成，因此，延迟的增加仍然在可控范围之内。'
        ]
      },
      {
        question: 'Snapchat Chain存在的意义是什么？',
        answer: [
          'Vite 采用栅格化（Block-Lattice）账本结构，每个账户对应一条链，每个交易引用本账户前一个交易的哈希；交易分为“请求交易”和“响应交易”两种，一个响应交易需要引用对应的请求交易的哈希。',
          '这种DAG结构有先天的安全性缺陷。这是由于交易是按账户分组的，一个交易只会附加到其所属账户的账户链末端，其他账户产生的交易不会自动成为该交易的后继节点，因此，一些交易被回滚的概率不会随时间推移而降低。Vite通过独创的快照链技术，弥补了这一缺陷。'
        ]
      },
      {
        question: '跨链协议，只支持资产互换吗？',
        answer: '是的，跨链只支持价值传输，Vite主要目标并不是解决跨链问题。'
      },
      {
        question: '白皮书有提到，开发工具和以太的相似，还拓展了一些特性。那是否意味着以太坊的dapp，稍作修改就能在vite上运行？',
        answer: [
          '是的，Vite的设计目标是尽量降低以太坊生态dApp的迁移成本，所以会尽量兼容EVM。'
        ]
      },
      {
        question: 'Vite智能合约支持在移动端运行吗？ 会像qtum那样 支持c++ java这种主流语言吗?',
        answer: [
          '不支持移动端。目前不支持其他语言。未来我们会成立一个VM Lab，在合约语言和虚拟机方面开展持续研究，欢迎社区推荐在该领域有经验的技术专家加入我们。',
          '我们的招聘邮箱是：hr@vite.org。'
        ]
      },
      {
        question: '以太坊智能合约现在的编程语言是solidity，它的好处之一是对于初学者简单易上手，但与此同时也给黑客留下了许多攻击的可能性，使智能合约变得脆弱。针对这个问题，vite有什么解决方案吗？',
        answer: '我们将通过合约形式化验证技术解决这个问题。'
      },
      {
        question: '管理层对近期诸多公链主网上线和未来竞争格局是如何看待的？',
        answer: [
          '目前共链技术还处于发展早期，距离真正成熟还有很长一段路。从技术视角看，各个项目均处于同一起跑线。我们将抱着开放的态度，与其他项目团队共同推动公链技术的发展。',
          '未来在技术成熟之后，公链的竞争将围绕生态展开。Vite也会提前做好全产业链生态布局，为推动区块链技术落地应用贡献自己的力量。'
        ]
      },
      {
        question: '代币通胀（锻造奖励）和消耗是在10亿枚总量不变的前提下动态平衡？',
        answer: '10亿是初始发行量，锻造奖励是以增发的形式产生。随着系统被广泛使用，代币也会被不断销毁。我们希望代币的流通可以达到一个动态平衡，详细的参数在白皮书中并没有给出，我们后续会建立更为精确的数学模型，计算相关参数，并通过黄皮书的形式对Vite协议进行补充。'
      },
      {
        question: '在Vite网络上用户可以发行自己的货币，那么请问发行的资产是类似于ERC 20代币吗？以太已经做到了，Vite现在还在做的话有什么优势呢？ERC 20的VITE的地址是什么？',
        answer: [
          'Vite的资产发行类似于以太的ERC20，但本质有所不同。ERC20是一个规范，而不是以太坊协议的一部分。在以太坊中发行新代币，需要用户开发和部署一个智能合约，代币的余额维护在该合约的状态中。一旦合约开发有所疏漏，就会产生安全风险。例如用户忘记引用SaftMath库，就可能产生溢出漏洞。而Vite的代币发行是内置在Vite协议中的，代币余额维护在用户账户的状态中，新代币和Vite原生代币共享转账底层协议，具有和Vite原生代币同样的安全性。用户在Vite中发行新代币，只需要发起一个交易，将新代币参数放在交易的data字段中，不需要写合约代码，这样也就不容易产生安全漏洞。',
          'ERC 20的VITE地址是https://etherscan.io/token/0x1b793E49237758dBD8b752AFC9Eb4b329d5Da016'
        ],
        key: 'erc'
      },
      {
        question: 'Vite能挖矿吗？',
        answer: 'Vite的共识机制类似EOS，通过选举产生25个快照节点，通过DPoS算法生产快照块，并领取锻造奖励。'
      }
    ]
  },
  investor: {
    title: '投资机构'
  },
  urls: {
    telegram: {
      ann: '公告群',
      english: '英文群',
      chinese: '中文群',
      vietnamese: '越南群',
      korean: '韩国群',
      russia: '俄罗斯群',
      thailand: '泰国群'
    },
    whitePaperList: {
      english: '英语',
      chinese: '中文',
      french: '法语',
      korean: '韩语',
      vietnamese: '越南语',
      russian: '俄语'
    },
    whitePaper: '白皮书',
    document: '文档',
    loopring: '路印协议',
    faq: '问题答疑',
    medium: '博客',
    introduction: '简介',
    tokenUrl: 'ERC20 地址',
    btt: 'Bitcointalk',
    youtube: 'Youtube',
    blog: '技术博客'
  },
  urlSrc: {
    telegram: 'https://t.me/vite_zh',
    whitePaper: '/whitepaper/vite_cn.pdf',
    introduction: 'https://vite.wiki/zh/introduction/'
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
    contact: '简历提交',
    jd: {
      pm: {
        title: '高级产品经理',
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
        title: '高级web前端开发工程师',
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
        title: '高级iOS开发工程师',
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
        title: '高级Android 开发工程师',
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
        title: '高级Golang 开发工程师',
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
  },
  footer: {
    learning: '学习',
    about: '关于',
    media: '媒体'
  },
  joinMailing: {
    title: '欢迎订阅Vite最新信息',
    button: '订阅',
    placeholder: '请输入邮箱地址'
  }
}
