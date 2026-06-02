const termData = window.TERMS_DATA;

const examQuestions = [
  {
    semester: 3,
    question: 'How many generations of computers are there? What is the difference between them? Talk about each generation of computers in detail.',
    answer: [
      'There are five generations of computers. The first generation used vacuum tubes, was very large, consumed much electricity, produced heat, and could solve only one problem at a time. The second generation used transistors, so computers became smaller, faster, more reliable, and required less maintenance.',
      'The third generation was based on integrated circuits, which made computers cheaper and much faster. The fourth generation used microprocessors with thousands and later millions of circuits on one chip; this generation brought personal computers, GUIs, and networking. The fifth generation is connected with artificial intelligence, parallel processing, natural language input, and systems that can imitate human reasoning.'
    ],
  },
  {
    semester: 3,
    question: 'Talk about the contribution of Charles Babbage and John von Neumann to the development of computing technology.',
    answer: [
      'Charles Babbage designed the Analytical Engine in the 1830s and is often called the father of the computer. His machine contained the main parts of a modern computer: an arithmetic logic unit, a control unit, memory, and input/output.',
      'John von Neumann formulated the stored-program architecture. According to this idea, both data and program instructions are stored in memory. This architecture became the basis for most modern computers.'
    ],
  },
  {
    semester: 3,
    question: 'What do you know about Moore’s Law?',
    answer: [
      'Moore’s Law is a prediction made by Gordon Moore in 1965. It states that the number of transistors on a microchip, and therefore computer processing power, doubles approximately every two years.',
      'This law describes the rapid development of computer technology: higher performance, smaller chips, lower cost per transistor, and more powerful devices.'
    ],
  },
  {
    semester: 3,
    question: 'What are the differences between the main types of computers: mainframes, supercomputers, desktop PCs, laptops, tablets, smartphones?',
    answer: [
      'Supercomputers are the fastest and most powerful computers. They are used for complex scientific tasks, weather forecasting, simulations, and data-intensive calculations. Mainframes are large powerful computers that support many users and thousands of simultaneous transactions, for example in banks and large corporations.',
      'Desktop PCs are personal computers used in one stationary place. Laptops are portable computers with a screen, keyboard, touchpad, and battery. Tablets are highly portable touch-screen devices. Smartphones are handheld computers with communication functions, cameras, sensors, and mobile apps, but they have smaller screens and less comfortable input than full computers.'
    ],
  },
  {
    semester: 3,
    question: 'Talk about the CPU: the three main parts and the factors affecting the performance of the CPU.',
    answer: [
      'The CPU is the brain of the computer. Its three main parts are the arithmetic logic unit, the control unit, and registers. The ALU performs arithmetic and logical operations. The control unit interprets instructions and directs other hardware components. Registers are very fast memory units inside the CPU.',
      'CPU performance depends on clock speed, number of cores, cache size, word size, bus width, architecture, and data transfer rate. Multi-core processors can perform several tasks at the same time.'
    ],
  },
  {
    semester: 3,
    question: 'What is cache memory? What is write-through cache and write-back cache? What is cache hit?',
    answer: [
      'Cache memory is very fast volatile memory located close to the CPU. It stores recently or frequently used data and instructions, so the processor can access them faster than from RAM.',
      'A cache hit happens when the CPU finds the needed data in cache. In write-through cache, data is updated in cache and main memory at the same time. In write-back cache, data is changed in cache first and written to RAM later, which can improve performance.'
    ],
  },
  {
    semester: 3,
    question: 'What is ROM? What is stored in ROM? Talk about different types of ROM and their distinctive features.',
    answer: [
      'ROM means Read-Only Memory. It is non-volatile memory, so it keeps information when the power is turned off. ROM stores permanent instructions, firmware, BIOS, bootloaders, and routines needed to start the computer.',
      'MROM is programmed during manufacturing and cannot be changed. PROM can be programmed once by the user. EPROM can be erased with ultraviolet light and programmed again. EEPROM can be electrically erased and rewritten.'
    ],
  },
  {
    semester: 3,
    question: 'What is RAM? What data is stored in RAM? Talk about the two types of RAM and their distinctive feature.',
    answer: [
      'RAM means Random Access Memory. It is volatile main memory used to store data, instructions, and programs that are currently being processed by the CPU. When the computer is turned off, RAM loses its contents.',
      'The two main types are DRAM and SRAM. DRAM is slower and needs refreshing, but it is cheaper and used as main memory. SRAM is faster and more expensive; it is often used for cache memory.'
    ],
  },
  {
    semester: 3,
    question: 'What are the differences between primary memory and secondary storage devices? Give examples.',
    answer: [
      'Primary memory is internal memory directly accessible by the CPU. It is fast and used while data is being processed. Examples are RAM, ROM, and cache memory.',
      'Secondary storage is used for long-term storage of data and programs. It is usually slower but has much larger capacity and keeps data permanently. Examples are HDDs, SSDs, optical discs, USB flash drives, and memory cards.'
    ],
  },
  {
    semester: 3,
    question: 'How can secondary storage be classified? Talk about each category.',
    answer: [
      'Secondary storage can be classified as magnetic, optical, solid-state, and cloud storage. Magnetic storage uses magnetized particles on disks or tapes; examples are HDDs and magnetic tapes.',
      'Optical storage uses a laser to read reflective marks; examples are CD, DVD, and Blu-ray. Solid-state storage uses flash memory and has no moving parts; examples are SSDs and USB flash drives. Cloud storage keeps data on remote servers accessed through the Internet.'
    ],
  },
  {
    semester: 3,
    question: 'Talk about HDD. Describe its construction, recording process, disk fragmentation and defragmentation.',
    answer: [
      'A hard disk drive consists of spinning platters, a spindle, read/write heads, an actuator arm, and tracks and sectors where data is stored. Data is recorded by magnetizing and demagnetizing areas on the platters.',
      'Disk fragmentation happens when parts of one file are stored in different places on the disk, which slows access time. Defragmentation rearranges file fragments so they are stored closer together and can be read faster.'
    ],
  },
  {
    semester: 3,
    question: 'What types of optical storage devices do you know? Talk about each of them.',
    answer: [
      'The main optical storage devices are CDs, DVDs, and Blu-ray discs. CD-ROM is pre-recorded and read-only. CD-R can be recorded once. CD-RW can be erased and rewritten.',
      'DVDs have higher capacity than CDs and are used for video and data storage. Blu-ray discs have even larger capacity and are used for high-definition video and large files.'
    ],
  },
  {
    semester: 3,
    question: 'What are the two types of flash memory? How do they differ in functionality and use cases?',
    answer: [
      'The two types are NOR flash and NAND flash. NOR flash provides fast random access to small amounts of data and is often used in firmware and bootloaders.',
      'NAND flash is better for storing large amounts of data and is used in SSDs, USB flash drives, and memory cards. It is usually cheaper and denser than NOR flash.'
    ],
  },
  {
    semester: 3,
    question: 'What is software? What is the difference between system software and application software? What types of system software can you name?',
    answer: [
      'Software is a set of programs and instructions that tell a computer what to do. System software manages computer hardware and provides a platform for applications. Application software helps users perform specific tasks.',
      'Types of system software include operating systems, device drivers, firmware, utilities, and language translators. Examples of application software are browsers, word processors, spreadsheets, and educational programs.'
    ],
  },
  {
    semester: 3,
    question: 'What is an OS? What are its main functions? Name the main types of operating systems and examples.',
    answer: [
      'An operating system is system software that manages hardware resources, provides a user interface, and creates an environment for application programs. Its functions include process management, memory management, file management, device control, security, and user interaction.',
      'Types include single-user and multi-user systems, real-time OS, network OS, mobile OS, and desktop OS. Examples are Windows, macOS, Linux, Android, and iOS.'
    ],
  },
  {
    semester: 3,
    question: 'What are the two types of multitasking mentioned in the text? What are the differences between the two?',
    answer: [
      'The two types are cooperative multitasking and preemptive multitasking. In cooperative multitasking, a running program must voluntarily give control to another program. If one program fails to give up control, the whole system may become slow or freeze.',
      'In preemptive multitasking, the operating system controls task switching and can interrupt a running process to give CPU time to another process. It is more reliable and is used in modern operating systems.'
    ],
  },
  {
    semester: 3,
    question: 'What can be the criteria for network classification? Provide several classifications of networks.',
    answer: [
      'Networks can be classified by geographical area, architecture, topology, transmission medium, and purpose. By area, there are PAN, LAN, MAN, and WAN. PAN connects personal devices, LAN covers a home or office, MAN covers a city or campus, and WAN covers large regions or countries.',
      'By architecture, networks can be peer-to-peer or client-server. By medium, they can be wired or wireless. By topology, they can be bus, star, ring, mesh, tree, or hybrid.'
    ],
  },
  {
    semester: 3,
    question: 'What is a network topology? Describe different network topologies mentioning their benefits and downsides.',
    answer: [
      'Network topology is the arrangement of nodes and connections in a network. Bus topology connects all devices to one backbone cable; it is simple and cheap, but a cable failure can stop the network. Star topology connects all devices to a central hub or switch; it is easy to manage, but the central device is a single point of failure.',
      'Ring topology connects devices in a loop; data travels around the ring, but one failure can disrupt the network. Mesh topology connects devices with many routes, so it is reliable but expensive. Tree topology combines star and bus structures. Hybrid topology combines two or more different topologies.'
    ],
  },
  {
    semester: 3,
    question: 'Enumerate the main hardware components of a network and name their functions.',
    answer: [
      'The main components include network interface cards, hubs, switches, routers, bridges, gateways, modems, access points, cables, and servers. A NIC connects a device to a network. A hub broadcasts data to all devices. A switch sends data only to the correct device using MAC addresses.',
      'A router sends packets between networks. A bridge connects networks that use the same protocol. A gateway connects networks with different protocols. A modem converts digital signals for transmission over telephone, cable, or radio lines. An access point provides wireless access.'
    ],
  },
  {
    semester: 3,
    question: 'Talk about the OSI model. Name the layers, functions and protocols used at different layers.',
    answer: [
      'The OSI model has seven layers: physical, data link, network, transport, session, presentation, and application. The physical layer transmits raw bits through cables or wireless media. The data link layer provides node-to-node transfer and uses MAC addresses. The network layer handles routing and IP addressing.',
      'The transport layer provides end-to-end delivery using TCP and UDP. The session layer manages sessions between applications. The presentation layer translates, compresses, and encrypts data. The application layer provides network services to users and includes HTTP, FTP, SMTP, DNS, and other protocols.'
    ],
  },
  {
    semester: 4,
    question: 'What types of wired internet connection do you know? Talk about each of them in detail.',
    answer: [
      'The main wired Internet connections are dial-up, DSL, cable Internet, fiber-optic Internet, and dedicated lines. Dial-up uses a telephone line and an analogue modem; it is slow and cannot be used with phone calls at the same time. DSL uses telephone copper cabling but carries digital signals on higher frequencies.',
      'Cable Internet uses coaxial cable TV infrastructure. It is reliable but bandwidth is shared with neighbours. Fiber-optic Internet transmits data as light through fiber cables, so it is very fast and has low attenuation. A dedicated line gives one subscriber a stable separate connection.'
    ],
  },
  {
    semester: 4,
    question: 'Talk about the three types of DSL connection. What is the difference between DSL and dial-up connection?',
    answer: [
      'The three types are ADSL, SDSL, and VDSL. ADSL is asymmetric because download speed is higher than upload speed. SDSL is symmetric and gives equal upload and download speeds. VDSL provides very high speed but works over shorter distances.',
      'DSL and dial-up both use telephone lines, but dial-up uses the same frequency for voice and data and requires dialing a phone number. DSL is broadband, faster, digital, and can work simultaneously with telephone service.'
    ],
  },
  {
    semester: 4,
    question: 'Talk about the three wireless internet access technologies. What are their benefits and downsides? What equipment is utilized?',
    answer: [
      'The three wireless technologies are Wi-Fi, cellular Internet, and satellite Internet. Wi-Fi uses radio waves and a wireless router; it is convenient for local networks but has limited range and can suffer from interference.',
      'Cellular Internet uses cell towers and mobile networks; it is mobile and widely available, but speed depends on coverage and network load. Satellite Internet uses a satellite dish and modem; it works in remote areas, but latency can be higher because signals travel long distances.'
    ],
  },
  {
    semester: 4,
    question: 'What is the difference between the Internet and the WWW?',
    answer: [
      'The Internet is the global network infrastructure connecting computers, servers, routers, cables, and wireless systems. It supports many services and protocols.',
      'The World Wide Web is one service that runs on the Internet. It consists of web pages and resources identified by URLs and accessed through browsers using HTTP or HTTPS.'
    ],
  },
  {
    semester: 4,
    question: 'Talk about the packet switching and circuit switching technologies.',
    answer: [
      'Circuit switching establishes a dedicated channel between two nodes before communication starts. The same route is reserved for the whole session, so it is predictable but may waste bandwidth.',
      'Packet switching divides data into packets. Each packet has a header with routing information and a payload with data. Packets can travel independently and are reassembled at the destination. The Internet is based on packet switching.'
    ],
  },
  {
    semester: 4,
    question: 'Talk about the three types of search engines and their distinctive features. What steps do crawler-based search engines take before displaying results?',
    answer: [
      'The three types are crawler-based search engines, human-powered directories, and meta-search engines. Crawler-based engines use spiders to find pages automatically. Human-powered directories depend on editors. Meta-search engines send a query to several other search engines and combine results.',
      'Crawler-based engines perform crawling, indexing, and ranking. Crawling discovers pages through links. Indexing stores information in a database. Ranking orders results from most to least relevant.'
    ],
  },
  {
    semester: 4,
    question: 'How can programming languages be classified? What is the difference between a compiler, an interpreter, and an assembler?',
    answer: [
      'Programming languages can be classified as low-level and high-level, or by paradigm: procedural, object-oriented, functional, and scripting. Low-level languages are close to hardware, for example machine code and assembly. High-level languages, such as Python, Java, C++, and JavaScript, are easier for humans to read.',
      'A compiler translates the whole high-level program into object code at once. An interpreter translates and executes code line by line while the program runs. An assembler translates assembly language into machine code.'
    ],
  },
  {
    semester: 4,
    question: 'What is OOP? What are the three key features of OOP?',
    answer: [
      'Object-oriented programming is a programming paradigm based on objects and classes. An object combines data and functions that operate on this data.',
      'The three key features are encapsulation, inheritance, and polymorphism. Encapsulation combines data and methods in one unit. Inheritance allows one class to use properties of another class. Polymorphism allows objects to behave differently through the same interface.'
    ],
  },
  {
    semester: 4,
    question: 'What are the three main tools used in web design? What are the advantages and disadvantages of using website builders?',
    answer: [
      'The three main tools are HTML, CSS, and JavaScript. HTML describes the structure of a webpage. CSS controls style and layout. JavaScript adds interactivity and dynamic content.',
      'Website builders are easy, fast, and do not require coding. They provide templates and hosting. Their disadvantages are limited flexibility, platform dependence, similar designs, and less control over code, SEO, and performance.'
    ],
  },
  {
    semester: 4,
    question: 'What is the difference between frontend and backend web development? Talk about SEO, on-page SEO and off-page SEO.',
    answer: [
      'Frontend development deals with the visible part of a website: layout, buttons, forms, and user interaction. Backend development deals with the server side: databases, authentication, APIs, and business logic.',
      'SEO means Search Engine Optimization. Its purpose is to improve website visibility in search results. On-page SEO includes content, titles, keywords, structure, and page speed. Off-page SEO includes backlinks, brand mentions, reviews, and online reputation.'
    ],
  },
  {
    semester: 4,
    question: 'What is malware? Talk about the damaging effect of ransomware, spyware, adware, a Trojan, a miner.',
    answer: [
      'Malware is malicious software designed to damage systems, steal data, spy on users, or perform unauthorized actions. Ransomware encrypts data or blocks access and demands payment. Spyware secretly collects information. Adware shows unwanted advertisements.',
      'A Trojan pretends to be useful software but performs malicious actions. A miner uses the victim’s computer power to mine cryptocurrency for someone else, which slows the system and increases energy consumption.'
    ],
  },
  {
    semester: 4,
    question: 'What are the four routines of a virus? What is the difference between a virus and a worm?',
    answer: [
      'The four routines are reproduction, trigger, payload, and misdirection. Reproduction copies the virus and infects other programs. Trigger activates the virus under certain conditions. Payload performs the harmful action. Misdirection helps the virus hide itself.',
      'A virus needs a host file and spreads when the infected file runs. A worm is standalone and can spread across networks without attaching to a host file.'
    ],
  },
  {
    semester: 4,
    question: 'What types of cybercrime do you know? Talk about phishing, website defacement, piggybacking and salami shaving.',
    answer: [
      'Cybercrime includes phishing, hijacking, DDoS attacks, piracy, defacement, salami shaving, piggybacking, and unauthorized access. Phishing uses fake messages or websites to steal sensitive information.',
      'Website defacement means changing information on someone’s website. Piggybacking is gaining unauthorized access by using someone else’s connection or credentials. Salami shaving steals very small amounts of money from many accounts to make a large profit.'
    ],
  },
  {
    semester: 4,
    question: 'What is the difference between DoS and DDoS attack? How is DDoS attack performed?',
    answer: [
      'A DoS attack tries to make a service unavailable by overwhelming it with traffic from one source. A DDoS attack is distributed and uses many compromised devices at the same time.',
      'A DDoS attack is usually performed through a botnet. Infected computers or IoT devices send huge numbers of requests to the target server, so it cannot respond to legitimate users.'
    ],
  },
  {
    semester: 4,
    question: 'What is a firewall? What can firewall filters be based on?',
    answer: [
      'A firewall is hardware or software that protects a private network by filtering incoming and outgoing traffic. It acts as a barrier between a trusted network and untrusted networks.',
      'Firewall filters can be based on IP addresses, ports, protocols, packet contents, domain names, applications, connection state, and security rules.'
    ],
  },
  {
    semester: 4,
    question: 'How does anti-virus software work? What is the difference between signature-based scanning and heuristic scanning? What is a signature?',
    answer: [
      'Anti-virus software detects, blocks, quarantines, and removes malware. It can scan files, monitor system behaviour, and update malware databases.',
      'Signature-based scanning looks for known malware fingerprints called signatures. It is accurate for known threats. Heuristic scanning uses rules and algorithms to detect suspicious behaviour and can find new malware, but it may cause false positives.'
    ],
  },
  {
    semester: 4,
    question: 'What is encryption? Talk about the difference between its two main types. What two methods of breaking a cipher are there?',
    answer: [
      'Encryption is a method of encoding data so that only authorized parties can understand it. Symmetric encryption uses one key for both encryption and decryption. Asymmetric encryption uses a public key and a private key.',
      'Two methods of breaking a cipher are brute force and cryptanalysis. Brute force tries many possible keys. Cryptanalysis studies weaknesses in the cipher or its implementation.'
    ],
  },
  {
    semester: 4,
    question: 'Talk about artificial neural networks. Describe their structure. What tasks can ANN accomplish? What is the difference between classification and clustering?',
    answer: [
      'An artificial neural network is a computing system inspired by the biological brain. It consists of interconnected artificial neurons arranged in layers: input units, hidden units, and output units. Connections have weights that change during training.',
      'ANNs can perform image recognition, speech recognition, machine translation, prediction, fraud detection, classification, clustering, and autonomous driving. Classification assigns data to predefined classes. Clustering groups data into undefined categories based on similarity.'
    ],
  },
  {
    semester: 4,
    question: 'What is backpropagation? Why are neural networks compared to black boxes?',
    answer: [
      'Backpropagation is a learning algorithm used in neural networks. It calculates errors at the output and moves backwards through the network to adjust weights and reduce future mistakes.',
      'Neural networks are compared to black boxes because it is often difficult to understand exactly how they make decisions. Their internal calculations involve many layers, weights, and mathematical operations.'
    ],
  },
  {
    semester: 4,
    question: 'What is IoT? Where can the technology be implemented? What are the major problems in using IoT?',
    answer: [
      'IoT, or the Internet of Things, is a system of interconnected devices, sensors, machines, and everyday objects that collect and exchange data. It can be used in smart homes, healthcare, transport, industry, agriculture, logistics, and smart cities.',
      'Major problems include security risks, privacy issues, weak passwords, device hacking, lack of standards, dependence on Internet access, large amounts of data, and difficulty updating many small devices.'
    ],
  },
];

const ticketGrid = document.querySelector('#ticketGrid');
const questionsList = document.querySelector('#questionsList');
const questionSearch = document.querySelector('#questionSearch');
const semesterFilter = document.querySelector('#semesterFilter');
const fullTabs = document.querySelector('#fullTabs');
const fullSearch = document.querySelector('#fullSearch');
const fullStatus = document.querySelector('#fullStatus');
const fullList = document.querySelector('#fullList');
const fullMaterial = document.querySelector('#fullMaterial');
const showAllBtn = document.querySelector('#showAllBtn');
const startTrainingBtn = document.querySelector('#startTrainingBtn');
const trainingPanel = document.querySelector('#trainingPanel');
const trainingResult = document.querySelector('#trainingResult');
const trainingType = document.querySelector('#trainingType');
const trainingTitle = document.querySelector('#trainingTitle');
const trainingProgress = document.querySelector('#trainingProgress');
const trainingPrompt = document.querySelector('#trainingPrompt');
const trainingAnswer = document.querySelector('#trainingAnswer');
const trainingFeedback = document.querySelector('#trainingFeedback');
const checkTrainingBtn = document.querySelector('#checkTrainingBtn');
const nextTrainingBtn = document.querySelector('#nextTrainingBtn');

const fullState = {
  section: 'all',
  query: '',
};

const trainingState = {
  tasks: [],
  index: 0,
  correct: 0,
  mistakes: [],
};

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function sample(array, count) {
  return shuffle(array).slice(0, count);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/[ё]/g, 'е')
    .replace(/[“”"'.(),;:!?/\\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isCloseAnswer(userAnswer, correctAnswer) {
  const user = normalize(userAnswer);
  const correct = normalize(correctAnswer);
  if (!user) return false;
  if (user === correct) return true;
  const variants = new Set([correct]);
  String(correctAnswer).split(/\s*(?:;|,|\/|\bor\b)\s*/i).forEach((part) => variants.add(normalize(part)));
  String(correctAnswer).match(/\(([^)]+)\)/g)?.forEach((part) => variants.add(normalize(part.replace(/[()]/g, ''))));
  return [...variants].filter(Boolean).some((variant) => user === variant);
}

function extractKeywords(text) {
  const stopWords = new Set(['about', 'after', 'also', 'based', 'because', 'between', 'called', 'computer', 'computers', 'data', 'different', 'example', 'examples', 'from', 'have', 'into', 'main', 'many', 'more', 'most', 'network', 'networks', 'other', 'should', 'system', 'systems', 'than', 'that', 'their', 'them', 'there', 'these', 'they', 'this', 'through', 'used', 'uses', 'using', 'when', 'where', 'which', 'with']);
  const words = normalize(text).split(' ').filter((word) => word.length >= 5 && !stopWords.has(word));
  return [...new Set(words)].slice(0, 18);
}

function analyzeOralAnswer(userAnswer, modelAnswer) {
  const keywords = extractKeywords(modelAnswer);
  const user = normalize(userAnswer);
  const matched = keywords.filter((word) => user.includes(word));
  const missing = keywords.filter((word) => !user.includes(word));
  const score = keywords.length ? Math.round((matched.length / keywords.length) * 100) : 0;
  return { score, matched, missing };
}

function buildTrainingTasks() {
  return [
    ...sample(termData.translations, 4).map((item) => ({
      type: 'Перевод',
      title: 'Русский → English',
      prompt: item.ru,
      answer: item.en,
      mode: 'short',
    })),
    ...sample(termData.definitions, 6).map((item) => ({
      type: 'Определение',
      title: 'Define the term in English',
      prompt: item.term,
      answer: item.definition,
      mode: 'oral',
    })),
    ...sample(termData.abbreviations, 2).map((item) => ({
      type: 'Аббревиатура',
      title: 'Write the full form',
      prompt: item.abbr,
      answer: item.full,
      mode: 'short',
    })),
    ...sample(examQuestions, 6).map((item) => ({
      type: 'Устный вопрос',
      title: item.semester === 3 ? '3 semester topic' : '4 semester topic',
      prompt: item.question,
      answer: item.answer.join('\n\n'),
      mode: 'oral',
    })),
  ];
}

function fullLabel(section, item) {
  if (section === 'all') return item.searchText;
  if (section === 'translations') return `${item.ru} ${item.en}`;
  if (section === 'definitions') return `${item.term} ${item.definition}`;
  if (section === 'abbreviations') return `${item.abbr} ${item.full}`;
  return `${item.question} ${item.answer.join(' ')}`;
}

function getFullRows() {
  if (fullState.section === 'all') {
    return [
      ...termData.translations.map((item, index) => ({ section: 'translations', index, item, searchText: `${item.ru} ${item.en}` })),
      ...termData.definitions.map((item, index) => ({ section: 'definitions', index, item, searchText: `${item.term} ${item.definition}` })),
      ...termData.abbreviations.map((item, index) => ({ section: 'abbreviations', index, item, searchText: `${item.abbr} ${item.full}` })),
      ...examQuestions.map((item, index) => ({ section: 'questions', index, item, searchText: `${item.question} ${item.answer.join(' ')}` })),
    ];
  }
  if (fullState.section === 'translations') return termData.translations;
  if (fullState.section === 'definitions') return termData.definitions;
  if (fullState.section === 'abbreviations') return termData.abbreviations;
  return examQuestions;
}

function renderFullTabs() {
  const tabs = [
    ['all', 'Все вместе'],
    ['translations', `Перевод (${termData.translations.length})`],
    ['definitions', `Термины (${termData.definitions.length})`],
    ['abbreviations', `Аббревиатуры (${termData.abbreviations.length})`],
    ['questions', `Вопросы (${examQuestions.length})`],
  ];
  fullTabs.innerHTML = tabs.map(([section, label]) => `
    <button class="full-tab ${fullState.section === section ? 'active' : ''}" type="button" data-full-section="${section}">
      ${label}
    </button>
  `).join('');
}

function renderFullRow(item, index) {
  if (fullState.section === 'all') {
    return renderFullMixedRow(item);
  }
  if (fullState.section === 'translations') {
    return `
      <article class="full-row">
        <span class="number">#${index + 1}</span>
        <strong>${escapeHtml(item.ru)}</strong>
        <p>${escapeHtml(item.en)}</p>
      </article>
    `;
  }
  if (fullState.section === 'definitions') {
    return `
      <article class="full-row full-row-wide">
        <span class="number">#${index + 1}</span>
        <strong>${escapeHtml(item.term)}</strong>
        <p>${escapeHtml(item.definition)}</p>
      </article>
    `;
  }
  if (fullState.section === 'abbreviations') {
    return `
      <article class="full-row">
        <span class="number">#${index + 1}</span>
        <strong>${escapeHtml(item.abbr)}</strong>
        <p>${escapeHtml(item.full)}</p>
      </article>
    `;
  }
  return `
    <details class="question-card">
      <summary>
        <span class="number">#${index + 1}</span>
        <span>${escapeHtml(item.question)}</span>
        <span class="semester">${item.semester} сем.</span>
      </summary>
      <div class="model-answer">
        ${item.answer.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </div>
    </details>
  `;
}

function renderFullMixedRow(row) {
  if (row.section === 'translations') {
    return `
      <article class="full-row">
        <span class="full-kind">Перевод<br>#${row.index + 1}</span>
        <strong>${escapeHtml(row.item.ru)}</strong>
        <p>${escapeHtml(row.item.en)}</p>
      </article>
    `;
  }
  if (row.section === 'definitions') {
    return `
      <article class="full-row full-row-wide">
        <span class="full-kind">Термин<br>#${row.index + 1}</span>
        <strong>${escapeHtml(row.item.term)}</strong>
        <p>${escapeHtml(row.item.definition)}</p>
      </article>
    `;
  }
  if (row.section === 'abbreviations') {
    return `
      <article class="full-row">
        <span class="full-kind">Сокр.<br>#${row.index + 1}</span>
        <strong>${escapeHtml(row.item.abbr)}</strong>
        <p>${escapeHtml(row.item.full)}</p>
      </article>
    `;
  }
  return `
    <details class="question-card">
      <summary>
        <span class="full-kind">Вопрос<br>#${row.index + 1}</span>
        <span>${escapeHtml(row.item.question)}</span>
        <span class="semester">${row.item.semester} сем.</span>
      </summary>
      <div class="model-answer">
        ${row.item.answer.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </div>
    </details>
  `;
}

function renderFullList() {
  const query = normalize(fullState.query);
  const allRows = getFullRows();
  const rows = allRows.filter((item) => !query || normalize(fullLabel(fullState.section, item)).includes(query));
  renderFullTabs();
  fullStatus.textContent = `Показано: ${rows.length} из ${allRows.length}`;
  fullList.innerHTML = rows.map((item) => renderFullRow(item, allRows.indexOf(item))).join('');
}

function renderTask(type, prompt, answer) {
  return `
    <article class="task-card">
      <strong>${escapeHtml(prompt)}</strong>
      <input class="answer-input" type="text" placeholder="Ваш ответ" />
      <button class="ghost-btn reveal-btn" type="button">Показать ответ</button>
      <div class="answer">${escapeHtml(answer)}</div>
    </article>
  `;
}

function renderTicket() {
  const translations = sample(termData.translations, 4);
  const definitions = sample(termData.definitions, 6);
  const abbreviations = sample(termData.abbreviations, 2);
  const oral = sample(examQuestions, 6);

  ticketGrid.innerHTML = `
    <div class="ticket-group">
      <h3>1. Перевод с русского на английский (4 балла)</h3>
      ${translations.map((item) => renderTask('translation', item.ru, item.en)).join('')}
    </div>
    <div class="ticket-group">
      <h3>2. Определение терминов на английском языке (6 баллов)</h3>
      ${definitions.map((item) => renderTask('definition', item.term, item.definition)).join('')}
    </div>
    <div class="ticket-group">
      <h3>3. Расшифровка аббревиатур (2 балла)</h3>
      ${abbreviations.map((item) => renderTask('abbreviation', item.abbr, item.full)).join('')}
    </div>
    <div class="ticket-group">
      <h3>4. Устные вопросы (12 баллов)</h3>
      ${oral.map((item) => `
        <article class="task-card">
          <strong>${escapeHtml(item.question)}</strong>
          <textarea class="answer-input" rows="3" placeholder="Набросайте ответ"></textarea>
          <button class="ghost-btn reveal-btn" type="button">Показать модельный ответ</button>
          <div class="answer">${item.answer.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}</div>
        </article>
      `).join('')}
    </div>
  `;
}

function startExamTraining() {
  trainingState.tasks = buildTrainingTasks();
  trainingState.index = 0;
  trainingState.correct = 0;
  trainingState.mistakes = [];
  trainingResult.classList.add('hidden');
  trainingPanel.classList.remove('hidden');
  trainingPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderTrainingTask();
}

function renderTrainingTask() {
  const task = trainingState.tasks[trainingState.index];
  trainingType.textContent = task.type;
  trainingTitle.textContent = task.title;
  trainingProgress.textContent = `${trainingState.index + 1} / ${trainingState.tasks.length}`;
  trainingPrompt.innerHTML = `<strong>${escapeHtml(task.prompt)}</strong>`;
  trainingAnswer.value = '';
  trainingAnswer.disabled = false;
  trainingFeedback.classList.add('hidden');
  trainingFeedback.innerHTML = '';
  checkTrainingBtn.classList.remove('hidden');
  nextTrainingBtn.classList.add('hidden');
  trainingAnswer.focus();
}

function checkTrainingTask() {
  const task = trainingState.tasks[trainingState.index];
  const userAnswer = trainingAnswer.value;
  let isCorrect = false;
  let feedback = '';

  if (task.mode === 'short') {
    isCorrect = isCloseAnswer(userAnswer, task.answer);
    feedback = `
      <div class="answer-check ${isCorrect ? 'correct' : 'wrong'}">
        <strong>${isCorrect ? 'Верно' : 'Нужно повторить'}</strong>
        <p>Правильный ответ: ${escapeHtml(task.answer)}</p>
      </div>
    `;
  } else {
    const analysis = analyzeOralAnswer(userAnswer, task.answer);
    isCorrect = analysis.score >= 45;
    feedback = `
      <div class="answer-check ${isCorrect ? 'correct' : 'wrong'}">
        <strong>Покрытие ключевых слов: ${analysis.score}%</strong>
        <p>Нашлось: ${analysis.matched.join(', ') || 'нет совпадений'}</p>
        <p>Не хватает: ${analysis.missing.slice(0, 10).join(', ') || 'основные слова есть'}</p>
      </div>
      <div class="answer">
        ${task.answer.split('\n\n').map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </div>
    `;
  }

  if (isCorrect) {
    trainingState.correct += 1;
  } else {
    trainingState.mistakes.push({ prompt: task.prompt, answer: task.answer });
  }
  trainingAnswer.disabled = true;
  trainingFeedback.innerHTML = feedback;
  trainingFeedback.classList.remove('hidden');
  checkTrainingBtn.classList.add('hidden');
  nextTrainingBtn.classList.remove('hidden');
}

function nextTrainingTask() {
  if (trainingState.index < trainingState.tasks.length - 1) {
    trainingState.index += 1;
    renderTrainingTask();
  } else {
    renderTrainingResult();
  }
}

function renderTrainingResult() {
  const total = trainingState.tasks.length;
  const percent = Math.round((trainingState.correct / total) * 100);
  trainingPanel.classList.add('hidden');
  trainingResult.classList.remove('hidden');
  trainingResult.innerHTML = `
    <div class="training-result-card">
      <p class="eyebrow">Итог тренировки</p>
      <h2>${trainingState.correct} / ${total} — ${percent}%</h2>
      <p>${trainingState.mistakes.length ? 'Ниже задания, которые стоит повторить.' : 'Все задания зачтены.'}</p>
      <div class="repeat-list">
        ${trainingState.mistakes.map((item) => `
          <article>
            <strong>${escapeHtml(item.prompt)}</strong>
            <p>${escapeHtml(item.answer)}</p>
          </article>
        `).join('')}
      </div>
      <button class="primary-btn" type="button" id="restartTrainingBtn">Новая тренировка</button>
    </div>
  `;
  document.querySelector('#restartTrainingBtn').addEventListener('click', startExamTraining);
  trainingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderQuestions() {
  const query = normalize(questionSearch.value);
  const semester = semesterFilter.value;
  const rows = examQuestions.filter((item) => {
    const matchesSemester = semester === 'all' || String(item.semester) === semester;
    const text = normalize(`${item.question} ${item.answer.join(' ')}`);
    return matchesSemester && (!query || text.includes(query));
  });

  questionsList.innerHTML = rows.map((item) => `
    <details class="question-card">
      <summary>
        <span class="number">#${examQuestions.indexOf(item) + 1}</span>
        <span>${escapeHtml(item.question)}</span>
        <span class="semester">${item.semester} сем.</span>
      </summary>
      <div class="model-answer">
        ${item.answer.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </div>
    </details>
  `).join('');
}

document.querySelector('#newTicketBtn')?.addEventListener('click', renderTicket);
startTrainingBtn?.addEventListener('click', startExamTraining);
checkTrainingBtn?.addEventListener('click', checkTrainingTask);
nextTrainingBtn?.addEventListener('click', nextTrainingTask);
showAllBtn?.addEventListener('click', () => {
  fullState.section = 'all';
  fullState.query = '';
  fullSearch.value = '';
  renderFullList();
  fullMaterial.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
ticketGrid?.addEventListener('click', (event) => {
  const button = event.target.closest('.reveal-btn');
  if (!button) return;
  button.closest('.task-card').classList.toggle('revealed');
});
questionSearch?.addEventListener('input', renderQuestions);
semesterFilter?.addEventListener('change', renderQuestions);
fullTabs?.addEventListener('click', (event) => {
  const tab = event.target.closest('[data-full-section]');
  if (!tab) return;
  fullState.section = tab.dataset.fullSection;
  fullState.query = '';
  fullSearch.value = '';
  renderFullList();
});
fullSearch?.addEventListener('input', () => {
  fullState.query = fullSearch.value;
  renderFullList();
});

if (ticketGrid) renderTicket();
if (fullList) renderFullList();
if (questionsList) renderQuestions();
