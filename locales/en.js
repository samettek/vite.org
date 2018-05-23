module.exports = {
  lang: 'English',
  head: {
    title: 'Vite - A New Generation of High-performance Decentralized Application Platform',
    document: 'Document',
    homeDesc: 'Vite - A New Generation of High-performance Decentralized Application Platform',
    careersDesc: 'Welcome to join our Vitelabs, Let\'s create A New Generation of High-performance Decentralized Application Platform',
    faqDesc: 'All about FAQs of Vite',
    technologyDesc: 'The key technologies of Vite: DAG、Snapchat Chain、Asnychronous Architechture、Reactive Contract、Quota leasing、Loopring Integrated、Timer scheduling、Contract Upgrade、solidity++'
  },
  nav: {
    index: 'Home',
    technology: 'Technologies',
    team: 'Team',
    faq: 'FAQs',
    careers: 'Careers'
  },
  home: {
    header: 'Vite',
    slogan: 'A New Generation of High-Performance Decentralized Application Platform',
    whitePaper: 'White Paper'
  },
  feature: {
    performance: {
      title: 'Extreme High Performance',
      dag: {
        title: 'DAG ledger',
        content: 'DAG ledger structure is used in Vite. Transactions are grouped by account dimension, and each transaction only changes the state of a single account. ' +
        'Send transactions are separated from receive transactions, and there is no need to wait for continuous transfers. ' +
        'The hierarchical design of the consensus algorithm provides the horizontal scalability according to the consensus group dimension.'
      },
      async: {
        title: 'Asynchronous architecture',
        content: 'Transactions are split into transaction pairs based on "request-response" mode.  The transactions’ writing and verification are asynchronously decoupled, which can support ultra-high throughput. ' +
        'Communications among contracts are based on the message asynchronous model.'
      }
    },
    reactiveContract: {
      title: 'Reactive Contract',
      messageDriven: {
        title: 'Message-driven',
        content: 'With event-driven architecture, every smart contract is viewed as an independent service that contracts can communicate cross messages without sharing any state.'
      },
      solidity: {
        title: 'Solidity++',
        content: 'Solidity++ is compatible with most of Solidity’s syntax. It supports asynchronous semantics, scheduling of contracts, and provides a series of standard libraries: string manipulation, floating-point operations, basic mathematical operations, containers, sorting, and so forth.'
      }
    },
    ecosystem: {
      title: 'Integrated Decentralized Ecosystem',
      value: {
        title: 'Value Closed Loop',
        content: 'Vite itself is a decentralized exchange in support of digital asset issuance, cross-chain value transmission, and inter-token transactions based on loopring protocols. Based on the quota allocation, lightweight users do not need to pay fees or fuel costs. Users can select multiple ways to obtain computing resources. It also supports quota leasing.'
      },
      dapp: {
        title: 'dApp Mini Program',
        content: 'The Vite client integrates the decentralized mini program engine by HTML5, to reduce the threshold of dApp development and deployment.'
      }
    }
  },
  roadmap: {
    title: 'Roadmap',
    timelines: [
      {
        'time': 'February 2018',
        'description': 'Initiation of Project'
      },
      {
        'time': 'April 2018',
        'description': 'System design of Vite, completion of white paper'
      },
      {
        'time': 'May 2018',
        'description': 'Release the official website / Road show'
      },
      {
        'time': 'June 2018',
        'description': 'Beginning of Vite Core\'s R&D'
      },
      {
        'time': 'October 2018',
        'description': 'Vite Core alpha'
      },
      {
        'time': 'December 2018',
        'description': [
          'Vite Core beta M1: Trading / Issuance of assets / Hierarchical consensus algorithm / Snapshot chain',
          'Release Vite SDK',
          'Vite Blockchain browser'
        ]
      },
      {
        'time': 'January 2019',
        'description': 'Desktop client of Vite'
      },
      {
        'time': 'February 2019',
        'description': 'Alpha version of Vite mobile app'
      },
      {
        time: 'April 2019',
        description: [
          'Vite Core beta M2: Smart Contract / Solidity++ Compiler / Smart Contract API Documentation'
        ]
      },
      {
        'time': 'May 2019',
        'description': [
          'Vite Core beta M3: Quota leasing / Contract timing scheduling / VNS naming services',
          'Vite dApplet support within Mobile app'
        ]
      },
      {
        'time': 'July 2019',
        'description': 'Vite Core beta M4：Loopring / Ethereum cross-chain gateway'
      },
      {
        'time': 'August 2019',
        'description': 'Vite integrated decentralized trading function within Mobile app'
      },
      {
        'time': 'October 2019',
        'description': 'Vite Core beta M5: Contract upgrade / Block pruning / Solidity++ optimization'
      },
      {
        'time': 'November 2019',
        'description': 'Vite Testnet Release'
      },
      {
        'time': 'January 2020',
        'description': 'Vite 1.0 Release'
      },
      {
        'time': 'February 2020',
        'description': 'Kickoff of plan for ecosystem development in Vite'
      }
    ]
  },
  team: {
    'core': 'Core Team',
    'advisor': 'Advisors',
    'nameMap': {
      'liuchunming': {
        'name': 'Charles',
        'position': '',
        'description': 'Veteran blockchain entrepreneur and technical expert. Graduated from China University of Science and Technology and the Institute of Software of the Chinese Academy of Sciences. Former senior architect of JD.com, co-founder of Coinport, and engineering director of Meituan Dianping. Abundant experience in distributed systems and high concurrency systems.'
      },
      'wangdong': {
        'name': 'Daniel Wang',
        'position': '',
        'description': 'Seasoned blockchain entrepreneur.  Graduated from China University of Science and Technology and Arizona State University.  Founder of Loopring, former Google America Tech Lead, Co-found and VP of Yun Yun Wang, Senior Research and Development Director at JD.com, and Co-Founder of Coinport.'
      },
      'wuming': {
        'name': 'Ming Wu',
        'position': '',
        'description': 'Seasoned scientist. Graduated from China University of Science and Technology, and Institute of Computing of the Chinese Academy of Sciences. Senior Research Manager at Microsoft Research Institute, Asia. Ph.D. advisor of China University of Science and Technology. Published 10+ high quality papers in the field of distributed systems and AI. Served as a member of program committees in several top-level meetings of the system field.'
      },
      'chenxiaoliang': {
        'name': 'Johnston Chen',
        'position': '',
        'description': 'Senior financial product operation expert\n' +
        'COO of  Loopring\n' +
        'Served as CIO of Sannuo Group'
      },
      'terenceLam': {
        'name': 'Terence Lam',
        'position': '',
        'description': 'Veteran investor.  Graduated from Harvard Business School.  Partner of Zhizi Blockchain Investment Fund.  Adjust professor of SPACE China business school at Hong Kong University.  20+ years’ experience as senior technical manager at Global 500 companies.  Started many technology startups.'
      },
      'richard': {
        name: 'Richard',
        position: '',
        description: 'Senior financial expert with years of Wall Street experiences.\n' +
        'Graduated from Dartmouth College and New York University(MBA).\n' +
        'Worked as vice President of structured asset trading strategy at Goldman sachs(New York), and vice President of Two Sigma high-frequency trading and business innovation&development.'
      },
      frank: {
        name: 'Yuanhui Deng',
        position: '',
        description: 'Expert in digital and mobile marketing. Graduated from Tsinghua University. Served in Google Ads Operations Group, COO of Suizong Technology and co-founder of Yunke Technology.'
      }
    }
  },
  faq: {
    'title': 'VITE Q&A',
    'questions': [
      {
        'question': 'What is Vite?',
        'answer': [
          'Vite is a general decentralized application platform, which meets the requirements of industrial application for high throughput, low latency and scalability as well as security.',
          'Vite is dedicated to addressing the current performance and scalability issues of the basic chain so that truly practical and high-frequency applications can be built on it.'
        ]
      },
      {
        'question': 'What is the relationship between Vite and Loopring?',
        'answer': [
          'It\'s a strategic partnership. Loopring is our strategic investor, and the founder Wang Dong, will be the consultant of Vite.\n' +
          'Built in Loopring protocols, Vite will offer Loopring’s decentralized exchange function in the wallet. Loopring will be the first application on the Vite platform.\n'
        ]
      },
      {
        question: 'Will there be airdrops for Vite? In what way?',
        answer: [
          'There will be. But the numbers and patterns are uncertain.'
        ]
      },
      {
        question: 'Which exchange will Vite be listed on?',
        answer: [
          'We are in contact with the exchange, but there is no specific timetable. Vite is mainly a long term technology-driven project, and we will not be particularly aggressive in terms of operation.'
        ]
      },
      {
        question: 'What is the WeChat public account of Vite?',
        answer: [
          'Our official account: vitelabs'
        ],
        key: 'wechat'
      },
      {
        question: 'Compared to other public chains, what is the biggest innovation of the Vite chain?',
        answer: [
          'The biggest innovation is the adoption of asynchronous settings:\n' +
          'First of all, we split the call for smart contracts asynchronously. ' +
          'The project of Nano (one of the DAG troika) , divides a transfer into two actions: send and receive transactions. Reference to Nano, we extend it to transfer and calls on smart contracts. We split a transfer deal into  send and receive transactions two actions, and break a contract-call deal into the contract’s request and response two parts.\n' +
          'Secondly, an asynchronous structure is designed when written and confirmed. In Vite, writing a transaction to the ledger and confirming a transaction are asynchronous. For traditional blockchains, such as bitcoin, the speed of writing transactions into ledgers is constrained by packing speed. In Vite, users can write many transactions within the limitation of TPS to the ledgers, ' +
          'but the transactions are confirmed at a constant speed. In this way we can reduce the valley of the wave, maximize the utilization of system resources and improve the throughput of the whole system. Besides, transactions between two accounts will not be blocked by each other, and it will not occur that transactions of other accounts remain unconfirmed for a long time because one account sends a large number of transactions.',
          'Thirdly, there is an asynchronous design of the contract call. Calling contracts in Ethereum is completed through the message calls, or inside transactions. This group of call is either done at the same time, or fail. This is an atomic ACID semantics, which will become the performance’s bottleneck. Borrowing some comparatively mature solution in centralized Internet technology, we adopt the message-driven architecture, in which contracts share no state, but only communicate by sending messages.'
        ]
      },
      {
        question: 'The calls in Vite among smart contracts cancel the synchronous call, so how is it compatible with the call scenario in Ethereum?',
        answer: 'Not compatible. To be compatible, only if change the codes from synchrony to asynchrony.\n'
      },
      {
        question: 'What\'s the difference between Vite\'s Solidity ++ and Ethereum’s Solidity?',
        answer: [
          'Just like C and C++, the name of Solidity ++ is derived from this. In the basic syntax, there is no difference between the two versions. The main difference is the semantics of message calls. In Ethereum, it is a synchronous call, when in Solidity ++, asynchronous.',
          'In addition, a series of standard libraries, such as string manipulation, floating-point operations, basic mathematical operations, containers, sorting, and etc., will be provided in Solidity ++.'
        ]
      },
      {
        question: 'The message-based architecture has an advantage of high throughput and scalability. However, the cost is relatively complex modelling, no guarantee for strong consistency, and possible longer delay. How does Vite reduce the programming complexity and latency?',
        answer: [
          'Vite will provide Solidity++ contract language and a perfect-functional SDK to reduce the cost of asynchronous programming.',
          'After scrupulous study, we find that in the actual scene, strong consistency semantics can be replaced by BASE semantics. Since the HDPoS consensus algorithm of Vite can guarantee the transaction confirmation completes within 1 second, the increase of latency is still under control.'
        ]
      },
      {
        question: 'What is the significance of Snapchat Chain?',
        answer: [
          'Vite employs a ledger structure called block-lattice. Each account corresponds to a chain and each transaction refers to the hash of the previous transaction in the account. Transactions are divided into two types: "request transactions" and "response transactions". A response transaction needs to quote the corresponding hash of the request transaction. ',
          'The DAG structure has inherent security defects. Because transactions are grouped by accounts, a transaction is only attached to the end of the account chain which it belongs to. Transactions generated by other accounts do not automatically become the subsequent nodes of the transaction. Therefore, the probability of some transactions being reverted will not decrease over time. Vite remedies this defect through its unique snapshot chain technology.'
        ]
      }
    ]
  },
  investor: {
    title: 'Investment Vehicle'
  },
  urls: {
    'whitePaper': 'White Paper',
    'document': 'Document',
    'telegram': 'Telegram',
    'loopring': 'Loopring',
    'faq': 'FAQ',
    'medium': 'Medium'
  },
  urlSrc: {
    telegram: 'https://t.me/vite_en',
    whitePaper: '/whitepaper/vite_en.pdf'
  },
  utils: {
    readMore: 'Read More'
  },
  footer: {
    learning: 'Learn',
    about: 'About',
    media: 'Media'
  }
}
