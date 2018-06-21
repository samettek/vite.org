module.exports = {
  lang: 'English',
  head: {
    title: 'Vite - A Next Generation High-performance Decentralized Application Platform',
    document: 'Document',
    description: {
      index: 'Vite - A Next Generation High-performance Decentralized Application Platform',
      careers: 'Welcome to join our Vitelabs, Let\'s create A New Generation of High-performance Decentralized Application Platform',
      faq: 'All about FAQs of Vite',
      technology: 'The key technologies of Vite: DAG、Snapchat Chain、Asnychronous Architechture、Reactive Contract、Quota leasing、Loopring Integrated、Timer scheduling、Contract Upgrade、solidity++'
    }
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
    slogan: 'A Next Generation High-performance Decentralized Application Platform',
    whitePaper: 'White Paper'
  },
  feature: {
    performance: {
      title: 'Ultra High Performance',
      dag: {
        title: 'DAG Ledger',
        content: 'Transactions in Vite are grouped by accounts.  That is, each transaction only changes the state of one single account.  Send transactions are separated from receive transactions, thereby obviating the need to wait for a transfer to be complete before the initiation of another transaction. The hierarchical design of the consensus algorithm allows horizontal scalability in consensus groups.'
      },
      async: {
        title: 'Asynchronous Architecture',
        content: 'Vite splits transactions into transaction pairs according to a "request-response" pattern. The writing and verification of transactions are asynchronously decoupled, thereby supporting ultra-high throughput. Inter-contract communications are based on an asynchronous messaging model.'
      }
    },
    reactiveContract: {
      title: 'Reactive Contract',
      messageDriven: {
        title: 'Message-Driven',
        content: 'With an event-driven architecture, every smart contract is viewed as an independent service.  Contracts communicate via messages without sharing state.'
      },
      solidity: {
        title: 'Solidity++',
        content: 'Solidity++’s syntax is compatible with most of that of Solidity.  The new syntax supports asynchronous semantics, contract scheduling, and provides a series of standard libraries, such as string manipulation, floating-point operations, basic mathematical operations, containers, sorting, and so on.'
      }
    },
    ecosystem: {
      title: 'Integrated Decentralized Ecosystem',
      value: {
        title: 'End-to-end system for value transfer',
        content: 'Vite itself is a decentralized exchange that supports digital asset issuance, cross-chain value transmission, and inter-token transactions based on the Loopring protocol.  A quota-based resource allocation mechanism allows light users to pay zero fees and gas. Users can obtain computing resources in multiple ways.  Vite also supports quota leasing.'
      },
      dapp: {
        title: 'dApp Mini Programs',
        content: 'The Vite client features an engine for creating HTML5-based decentralized mini programs.  This engine simplifies the process of dApp development and deployment.'
      }
    }
  },
  roadmap: {
    title: 'Roadmap',
    timelines: [
      {
        'time': 'Feb 2018',
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
        'time': 'Oct 2018',
        'description': 'Vite Core alpha'
      },
      {
        'time': 'Dec 2018',
        'description': [
          'Vite Core beta M1: Trading / Issuance of assets / Hierarchical consensus algorithm / Snapshot chain',
          'Release Vite SDK',
          'Vite Blockchain browser'
        ]
      },
      {
        'time': 'Jan 2019',
        'description': 'Desktop client of Vite'
      },
      {
        'time': 'Feb 2019',
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
        'time': 'Aug 2019',
        'description': 'Vite integrated decentralized trading function within Mobile app'
      },
      {
        'time': 'Oct 2019',
        'description': 'Vite Core beta M5: Contract upgrade / Block pruning / Solidity++ optimization'
      },
      {
        'time': 'Nov 2019',
        'description': 'Vite Testnet Release'
      },
      {
        'time': 'Jan 2020',
        'description': 'Vite 1.0 Release'
      },
      {
        'time': 'Feb 2020',
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
        'description': 'Seasoned scientist. Graduated from China University of Science and Technology, and Institute of Computing of the Chinese Academy of Sciences. Senior Research Manager at Microsoft Research Institute, Asia. Ph.D. advisor of China University of Science and Technology. Published 10+ high quality papers in the field of distributed systems and AI.'
      },
      'terenceLam': {
        'name': 'Terence Lam',
        'position': '',
        'description': 'Veteran investor.  Graduated from Harvard Business School.  Partner of Zhizi Blockchain Investment Fund.  Adjust professor of SPACE China business school at Hong Kong University.  20+ years’ experience as senior technical manager at Global 500 companies.  Started many technology startups.'
      },
      'richard': {
        name: 'Richard',
        position: '',
        description: 'Seasoned Wall Street professional. Graduated B.A. from Dartmouth College and MBA from New York University.  Previously structured product trading strategist at Goldman Sachs and Vice President of Two Sigma\'s high-frequency platform and Business Innovation & Growth group.'
      },
      frank: {
        name: 'Frank Deng',
        position: '',
        description: 'Expert in digital and mobile marketing. Graduated from Tsinghua University. Served in Google Ads Operations Group, COO of Suizong Technology and co-founder of Yunke Technology.'
      },
      zhangli: {
        name: 'Li Zhang',
        position: '',
        description: 'Senior blockchain practitioner, investor. LinkVC Capital Partners, former CMO of F2pool , former business officer of Huobi.'
      }
    }
  },
  faq: {
    'title': 'VITE Q&A',
    'questions': [
      {
        'question': 'What is Vite?',
        'answer': [
          'Vite is a general-purpose platform for decentralized applications.  It is designed to support industrial-strength applications by offering high throughput, low latency and scalability while also providing security.',
          'The Vite team are dedicated to addressing current performance and scalability issues of infrastructural chains, so that truly practical applications with high-frequency data requirements can be built in a blockchain framework.'
        ]
      },
      {
        'question': 'What is the relationship between Vite and Loopring?',
        'answer': [
          'Loopring is our strategic investor, and its founder Daniel Wang serves as Vite’s advisor.  Loopring’s decentralized exchange function will be offered in a wallet application built on the Vite platform. Loopring will be the first practical use case for the Vite platform.'
        ]
      },
      {
        question: 'Will there be airdrops for Vite? In what way?',
        answer: [
          'There will be.  Stay tuned for amount and mechanism.'
        ]
      },
      {
        question: 'Which exchange(s) will Vite be listed on?',
        answer: [
          'We are in contact with multiple exchanges, but there is no specific timetable.  Vite is a long-term, tech-driven project, and we don’t plan to run our operations at an aggressive pace.'
        ]
      },
      {
        question: 'What is the public WeChat account of Vite?',
        answer: [
          'Our official account: vitelabs'
        ],
        key: 'wechat'
      },
      {
        question: 'What is Vite’s biggest innovation as compared to other public chains?',
        answer: [
          'The biggest innovation is the asynchronous design, which can be understood in three aspects: ',
          'First, we are introducing the concept of asynchronous design into smart contracts.  The Nano project (one of three well-known chains that use DAG) separates a transfer action into a send and a receive transaction. We are building upon this mechanism, and will separate the call and the response of a smart contract, so they can take place asynchronously.',
          'Second, the writing and verification of a transaction also happen asynchronously in Vite.  In traditional blockchain setup (e.g., Bitcoin), the speed of writing transactions into a ledger is limited by the speed of packing.  But Vite allows writing of many transactions into the ledger within the constraints of the TPS.  Because the asynchronous setup allows the transactions to happen at an even speed, this reduces the peaks and troughs of the speed of transaction writing, thus optimizing usage of resources and increasing system throughput.  Also, the transactions of two users will no longer be blocked; that is, we will no longer see a scenario where a user sends a large amount of transactions that prevents the transactions of other users from taking place.',
          'Third, calls between contracts will also happen asynchronously in Vite.  The calls between smart contracts in Ethereum are implemented through messaging (aka insider transactions); and the calls either all succeed or all fail, as per an atomic ACID semantic.  To solve for this bottleneck in performance, we take a page from well-developed solutions in centralized Internet technologies, and will make use of a message-driven architecture.  As such, contracts do not share states and communicate via messages.'
        ]
      },
      {
        question: 'Since smart contracts in Vite don’t support synchronous calls, how will such calls in Ethereum be compatible with Vite?',
        answer: 'Unfortunately, these calls are not compatible with Vite.  Synchronous calls need to be changed to asynchronous calls to work in Vite.'
      },
      {
        question: 'What is the difference between Vite\'s Solidity++ and Ethereum’s Solidity?',
        answer: [
          'On a high level, the differences are similar to those of C and C++.  In basic syntax, the two languages are largely compatible.  The largest difference is in the synchronous (Ethereum) vs asynchronous (Vite) calls as mentioned earlier.',
          'In addition, a series of standard libraries, such as string manipulation, floating-point operations, basic mathematical operations, containers, and sorting will be provided in Solidity++.'
        ]
      },
      {
        question: 'The message-based architecture has an advantage of high throughput and scalability. However, this comes at a cost of more complex programming model, which may not guarantee strong consistency, and may lead to even higher latencies.  How does Vite reduce both the complexity in programming model and latencies?',
        answer: [
          'Vite will provide Solidity++ contract language and a complete SDK to reduce the cost of asynchronous programming.',
          'After rigorous research, we find that in practical use cases, strong consistency semantics can be replaced by BASE semantics. Since the HDPoS consensus algorithm of Vite can guarantee transaction confirmation within 1 second, any potential latency increase is still under control.'
        ]
      },
      {
        question: 'What is the significance of Snapshot Chain?',
        answer: [
          'Vite employs a ledger structure called block-lattice. Each account corresponds to a blockchain and each transaction refers to the hash of the previous transaction in the account. Transactions are divided into two types: "request transactions" and "response transactions.”  A response transaction needs to quote the corresponding hash of the request transaction.',
          'The DAG structure has an inherent deficiency in security.   This is because transactions are grouped by accounts, and each transaction is only attached to the chain associated with the relevant account. Transactions generated by other accounts do not automatically become the subsequent nodes of the previous transaction. Therefore, for some transactions, the rollback probability will not drop over time.  The Snapshot chain technology is meant to address this issue.'
        ]
      },
      {
        question: 'Does the inter-chain protocol only support exchange of assets?',
        answer: [
          'Yes.  Vite will support value transfers between different chains but not other inter-chain functions such as message transfers or smart contract calls between chains.'
        ]
      },
      {
        question: 'The whitepaper mentions that Vite’s development tools are similar to, and have features extended from, those of Ethereum.  Does this indicate that dApp’s for Ethereum can be deployed on Vite with minor changes?',
        answer: [
          'Yes, one of Vite’s goals is to reduce the cost of porting over dApps from Ethereum.  Vite tries to maximize compatibility with EVM.'
        ]
      },
      {
        question: 'Can Vite’s smart contracts support running on a mobile device?  Will they be similar to Qtum and support mainstream languages like C++ and Java?',
        answer: [
          'Vite won’t support mobile.  There are no current plans to support other languages.  In the future, we will set up a VM Lab to continue research in smart contract language and virtual machine.  We welcome participation from experts in these areas.'
        ]
      }
    ]
  },
  investor: {
    title: 'Our investors'
  },
  urls: {
    telegram: {
      ann: 'Announcement Channel',
      english: 'English',
      chinese: 'Chinese',
      vietnamese: 'Vietnamese',
      korean: 'Korean',
      russia: 'Russia'
    },
    whitePaper: 'White Paper',
    document: 'Documentation',
    loopring: 'Loopring',
    faq: 'FAQ',
    medium: 'Medium',
    introduction: 'Introduction',
    tokenUrl: 'ERC20 Address',
    btt: 'Bitcointalk',
    telegramEn: 'Telegram English',
    telegramZh: 'Telegram Chinese',
    telegramAnn: 'Telegram '
  },
  urlSrc: {
    telegram: 'https://t.me/vite_en',
    whitePaper: '/whitepaper/vite_en.pdf',
    introduction: 'https://doc.vite.org/introduction/'
  },
  utils: {
    readMore: 'Read More'
  },
  footer: {
    learning: 'Learn',
    about: 'About',
    media: 'Media'
  },
  joinMailing: {
    title: 'Subscribe to our mailing list',
    button: 'Subscribe'
  }
}
