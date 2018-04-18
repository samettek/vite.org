module.exports = {
  'lang': '中文',
  'head': {
    'title': 'Vite: 高性能异步去中心化应用平台',
    'document': '文档',
    'homeDesc': 'Vite: 高性能异步去中心化应用平台'
  },
  'nav': {
    'feature': '特性',
    'tech': '技术',
    'roadmap': '路线图',
    'team': '团队',
    'faq': '问题答疑',
    'token': '股权分配'
  },
  'home': {
    'header': 'Vite',
    'contract': '高性能异步去中心化应用平台',
    'whitePaper': '白皮书'
  },
  'features': {
    'fast': {
      'title': '低延迟',
      'description': '采用HDPoS共识算法，通过代理节点，以协作的方式完成轮流生产区块，不需要计算PoW，出块间隔可以缩短到1秒，有利于降低交易确认的延迟。'
    },
    'throughput': {
      'title': '高吞吐',
      'description': '采用DAG账本结构; 提出HDPoS共识算法，多个委托共识组之间彼此无依赖; 合约间通信基于消息的异步模型。'
    },
    'scalability': {
      'title': '可扩展',
      'description': '将账本中的交易按照账户维度来分组，允许不同的账户的区块生产由不同的节点完成，节点不需要保存全部的状态。'
    },
    'usability': {
      'title': '易用性',
      'description': '在xSolidity中提供标准库支持，专门用于处理消息的语法，合约的定时调度，VNS命名服务，合约升级支持等。'
    },
    'value': {
      'title': '价值闭环',
      'description': 'Vite 支持数字资产发行、跨链价值传输、基于路印协议的代币互换等，形成了一个完整的价值体系。'
    },
    'economy': {
      'title': '经济性',
      'description': ' Vite采用基于配额的资源配置模型，交易不频繁的轻量级用户不需要支付高昂的手续费或燃料费。用户可以选择多种方式换取计算资源。'
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
      }
    }
  },
  'faq': {
    'title': '问题答疑',
    'questions': [
      {
        'question': '什么是Vite？',
        'answer': 'Vite是一个快速无手续费的分布式交易账本，以Block-Lattice为账本结构，构建的高性能、可扩展的智能合约平台。'
      },
      {
        'question': 'Vite和loopring是什么关系？',
        'answer': '双方属于是合作关系，Loopring的创始人王东将作为vite的联合创始人，未来loopring协议也会在vite平台上运行。'
      },
      {
        'question': 'Vite和eth、eos、ada、nano有什么不一样的地方？',
        'answer': 'Vite的账本结构和eth、eos、ada都不一样，Vite采用Block-lattice账本结构，这一点和nano是一致的。Vite在Block-lattice基础上增加Snapshot Chain（快照链），解决nano交易无法固化问题，\n            并为智能合约提供【全局时钟】。<br/>\n            Vite的每一个合约为一条链，每个合约可以有自己的共识节点，并可以和主链（Snapshot Chain）可以进行通信。这可以变相实现私有链的功能。'
      },
      {
        'question': 'Vite里的主链起到了什么作用？',
        'answer': '1. 固化交易<br/> 2. 将投票结果写入区块 <br/> 3. 提供全局时钟  </br> 有关Snapshot Chain的细节描述，请移步：<a href="https://medium.com/@chunming.vite/snapshot-chain-an-improvement-on-block-lattice-561aaabd1a2b">Snapshot Chain: An Improvement on Block-lattice</a>'
      },
      {
        'question': 'Snapshot Chain如何能做到区块缩减？',
        'answer': 'TODO'
      },
      {
        'question': 'Vite智能合约是如何实现？',
        'answer': 'TODO'
      }
    ]
  },
  'urls': {
    'whitePaper': '白皮书',
    'document': '文档',
    'telegramEn': 'Telegram 英语群',
    'telegramZh': 'Telegram 中文群'
  },
  'utils': {
    readMore: '阅读更多'
  }
}
