module.exports = {
  'lang': '中文',
  'head': {
    'title': 'Vite: 一个快速无手续费的分布式交易账本',
    'document': '文档',
    'homeDesc': 'Vite: 一个快速无手续费的分布式交易账本'
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
    'contract': '一个快速无手续费的分布式交易账本',
    'whitePaper': '白皮书'
  },
  'features': {
    'fast': {
      'title': '快速',
      'description': '依托于Block-lattice的优势，实现秒级确认交易'
    },
    'noFee': {
      'title': '无手续费',
      'description': '任何交易都无手续费，只需付出微小的计算资源；以股权和动态pow来调整全网TPS限额'
    },
    'scalability': {
      'title': '高性能',
      'description': '摒弃blockchian的账本结构，采用Block-lattice账本结构，支持高吞吐，高并发，一个账户一条链，单条链交易拥堵不会阻塞其他链'
    },
    'contract': {
      'title': '智能合约',
      'description': '支持智能合约， EVM compatibility；一个合约为一条链，并且单条合约链支持自定义共识算法，支持扩展为私有链'
    },
    'multiLayer': {
      'title': '多层架构',
      'description': '系统分为传输层、价值层、交易层、合约层；将结算功能从合约层抽离'
    },
    'pruning': {
      'title': '快照链',
      'description': '在Block-lattice基础上引入快照链，解决无法固化交易的问题；保证区块缩减（Block Pruning）的可实施性'
    }
  },
  'tech': {
    'title': '核心技术',
    'dag': {
      'title': 'DAG ledger',
      'description': 'Vite账本结构不是基于Block Chain的，其主体是一个由伴生的Request Block和Reponse Block构成的树型结构，这和nano的Block Lattice非常相似，考虑到Block之间存在的关系，整个账本的结构实际上是一个DAG。普通账户：能生成交易的Request Block和Response Block合约账户：不能生成交易的Request Block，只能生成Response Block。'
    },
    'snapshotChain': {
      'title': 'Snapshot chain',
      'description': '合约账户的Response Block和普通账户的Response Block写入不一样，合约账户没有私钥，所以任何人都可以写入，为了防止意外频繁的分叉。我们往引入一条主链，我们称为：Snapshot chain。'
    }
  },
  'roadmap': {
    'title': '路线图',
    'timelines': [
      {
        'time': '2018 二月月',
        'description': '项目启动，设计技术架构，编写白皮书'
      },
      {
        'time': '2018 四月',
        'description': '第一轮融资，将出让30%的股权'
      },
      {
        'time': '2018 八月',
        'description': '测试网络上线，并进行第二轮融资，将出让20%的股权<br/>免费发放3%的Vite给loopring的持有者'
      },
      {
        'time': '2018 九月',
        'description': '主网上线，并进行第三轮融资，将出让10%的股权<br/>漏洞修复和节点程序优化'
      },
      {
        'time': '2018 十二月',
        'description': '测试网络上线智能合约功能'
      }
    ]
  },
  'token': {
    'title': '股权分配',
    'pie': {
      'foundation': {
        'name': 'Vite Lab 基金会',
        'des': '该资金分为两部分：创始团队股份和期权池。TODO'
      },
      'community': {
        'name': '社区基金',
        'des': '将来用于社区推广和【糖果】分发的资金池，计划将拿出一部分分发给loopring的持有用户'
      },
      'investor1': {
        'name': '第一轮融资',
        'des': 'TODO'
      },
      'investor2': {
        'name': '第二轮融资',
        'des': 'TODO'
      },
      'investor3': {
        'name': '第三轮融资',
        'des': 'TODO'
      }
    },
    'detail': {
      'initial': '初始发行币量',
      'unit': '单位',
      'consensus': '主链共识算法',
      'blockTime': '主链出块时间',
      'delegatedLimit': '主链代理节点数量',
      'blockReward': '主链出块奖励'
    }
  },
  'team': {
    'title': '我们的团队',
    'subTitle': '团队成员大部分来自于谷歌、微软、美团等互联网企业，创始团队是资深区块链创业者，和loopring团队有着十分深度的合作。',
    'nameMap': {
      'liuchunming': {
        'name': '刘春明',
        'position': 'CEO',
        'description': '这里是刘春明的描述'
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
