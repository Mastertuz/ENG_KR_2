const answers = [
  {
    unit: 'Unit 1',
    question: 'What types of wired internet connections do you know? Talk about each of them in detail.',
    answer: [
      'The main wired Internet connections are dial-up, DSL, cable Internet, fiber-optic Internet, and dedicated lines. Dial-up uses a telephone line and an analogue modem; it is slow and the phone line cannot be used for calls at the same time. DSL also uses telephone copper twisted-pair cabling, but it carries digital signals on higher frequencies, so phone service and Internet access can work simultaneously.',
      'Cable Internet uses the coaxial cable infrastructure of cable TV networks. It is usually reliable and fast, but bandwidth is shared with neighbours, so speed may fall during peak hours. Fiber-optic Internet uses light signals through glass or plastic fibers; it has very high speed, low attenuation, and low distortion. A dedicated line gives one subscriber a separate connection, so the signal and bandwidth are more stable.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'What is the difference between DSL and dial-up connection?',
    answer: [
      'Both DSL and dial-up use telephone lines, but they work very differently. Dial-up uses the same frequency for voice and data, so a user has to dial a phone number and cannot use the phone and the Internet at the same time.',
      'DSL is a broadband digital connection. It uses higher frequency bands for data transmission and separates the DSL signal from the phone line with a DSL modem, so Internet access and telephone service can be used simultaneously. DSL is also much faster than dial-up.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'Talk about the three wireless internet access technologies mentioned in the text.',
    answer: [
      'The three wireless technologies mentioned are Wi-Fi, cellular Internet, and satellite Internet. Wi-Fi uses radio waves to connect devices wirelessly, usually through a wireless router, and is common in local area networks at home, university, or offices.',
      'Cellular Internet is provided through a cellular network divided into cells. Each cell has base stations or cell towers that transmit voice and data and use different frequencies to avoid interference. Satellite Internet gives access through a geostationary satellite; it can work where cable or DSL is unavailable, but signals travel long distances, so latency may be higher.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'What are the three types of DSL connections that you know? Talk about each of them.',
    answer: [
      'The three common DSL types are ADSL, SDSL, and VDSL. ADSL means Asymmetric Digital Subscriber Line; it is called asymmetric because download speed is higher than upload speed, which is convenient for ordinary users who download more than they upload.',
      'SDSL means Symmetric Digital Subscriber Line. It provides equal upload and download speeds, so it is useful for businesses, servers, and video conferencing. VDSL means Very-high-bit-rate DSL; it is faster than ordinary DSL but usually works only over shorter distances from the provider equipment.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'What is the difference between packet switching and circuit switching technologies?',
    answer: [
      'Circuit switching is connection-oriented: two nodes establish a dedicated channel before communication starts. The same route is reserved for the whole session, and no other devices can use this path even when it is idle, which may waste bandwidth.',
      'Packet switching divides data into packets. Each packet has a header with routing information and a payload with the actual data. Packets can travel independently through the network and are reassembled at the destination. The Internet is a packet-switched network.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'What are the two subtypes of packet switching technologies that you know? Talk about each of them.',
    answer: [
      'The two subtypes are datagram packet switching and virtual circuit switching. In datagram switching, every packet is treated as an independent unit and can travel by a different route. Packets may arrive out of order, so they have to be reassembled at the destination.',
      'In virtual circuit switching, a logical path is established before data transfer begins. Packets still contain data units, but they follow the same predetermined route. This approach combines packet transmission with a more predictable path.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'Talk about the TCP/IP model: the layers and protocols.',
    answer: [
      'The TCP/IP model describes how data is transmitted on the Internet. It usually has four layers: the application layer, the transport layer, the Internet layer, and the network access layer.',
      'The application layer provides services for user applications and includes protocols such as HTTP, FTP, SMTP, and DNS. The transport layer manages end-to-end communication; its main protocols are TCP and UDP. The Internet layer is responsible for addressing and routing, mainly using IP. The network access layer deals with the physical transmission of data through Ethernet, Wi-Fi, and other network technologies.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'What is the difference between TCP and UDP?',
    answer: [
      'TCP, or Transmission Control Protocol, is connection-oriented and reliable. It establishes a connection, checks whether packets arrive correctly, retransmits lost packets, and preserves the order of data. It is used when accuracy is more important than speed, for example web pages, email, and file transfer.',
      'UDP, or User Datagram Protocol, is connectionless and faster but less reliable. It does not guarantee delivery, order, or retransmission. It is useful for streaming, online games, and voice or video calls, where speed and low latency are more important than perfect delivery.'
    ],
  },
  {
    unit: 'Unit 1',
    question: 'What is the difference between the Internet and the WWW?',
    answer: [
      'The Internet is the global network infrastructure: millions of connected computers, servers, routers, cables, wireless links, and protocols. It allows different services to exchange data.',
      'The World Wide Web is only one service that runs on the Internet. It is a system of web pages and resources identified by URLs and accessed through web browsers using protocols such as HTTP and HTTPS. So the Web uses the Internet, but the Internet also supports email, FTP, messaging, online games, and many other services.'
    ],
  },
  {
    unit: 'Unit 2',
    question: 'Talk about the three types of search engines and their distinctive features.',
    answer: [
      'The three types are crawler-based search engines, human-powered directories, and meta-search engines. Crawler-based search engines, such as Google, automatically discover web pages with crawlers or spiders, index them, and rank results with algorithms.',
      'Human-powered directories depend on human editors. Websites are submitted or reviewed manually and are organized into categories. Meta-search engines do not have their own full database; they send a query to several other search engines and combine the results into one list.'
    ],
  },
  {
    unit: 'Unit 2',
    question: 'What are the three steps that every crawler-based search engine takes before displaying search results?',
    answer: [
      'Crawler-based search engines follow three main steps: crawling, indexing, and ranking. Crawling means discovering new or updated content by following links from page to page with a crawler or spider.',
      'Indexing means processing and storing information about discovered pages in a large database called an index. Ranking means ordering results from the most relevant to the least relevant when a user enters a query. The ranking algorithm considers many signals to decide which pages should appear higher.'
    ],
  },
  {
    unit: 'Unit 2',
    question: 'What makes meta-search engines different from other types of search engines?',
    answer: [
      'A meta-search engine does not maintain its own database of indexed pages in the same way as a crawler-based engine. Instead, it sends the user’s query to several other search engines, collects their results, removes duplicates, and presents a combined list.',
      'This can give a broader overview of the Web, but meta-search engines usually have less control over crawling, indexing, and ranking because they depend on other search engines.'
    ],
  },
  {
    unit: 'Unit 2',
    question: 'What is the difference between crawler-based search engines and human-powered directories?',
    answer: [
      'Crawler-based search engines work automatically. Special programs crawl the Web, discover pages, index their content, and rank results algorithmically.',
      'Human-powered directories are created and maintained by people. Editors review submitted websites, write or check descriptions, and place them into categories. Directories can be more organized, but they are slower to update and cover less of the Web.'
    ],
  },
  {
    unit: 'Unit 2',
    question: 'What factors determine higher ranking in search results? What aspects can a ranking algorithm take into consideration?',
    answer: [
      'Ranking depends on relevance, quality, authority, and user experience. A search algorithm can consider whether the keywords appear in the title, headings, URL, and content; whether the page answers the user’s query; and whether the content is original and useful.',
      'It can also consider backlinks from reputable websites, page loading speed, mobile friendliness, freshness of information, user location, security through HTTPS, and user behaviour signals such as clicks or time spent on the page.'
    ],
  },
  {
    unit: 'Unit 2',
    question: 'What is the difference between a search engine and a web browser?',
    answer: [
      'A web browser is a software application used to access and display web pages. Examples are Chrome, Firefox, Safari, Edge, and Opera. It interprets HTML, CSS, and JavaScript and shows the page to the user.',
      'A search engine is an online service that helps users find information on the Web. Examples are Google, Bing, Yahoo, DuckDuckGo, and Yandex. You use a browser to open a search engine, but they are not the same thing.'
    ],
  },
  {
    unit: 'Unit 2',
    question: 'Talk about any four search engines that can be used as an alternative to Google.',
    answer: [
      'Bing is Microsoft’s search engine; it is integrated with Windows, Edge, and Microsoft services and provides web, image, video, and map search. Yahoo Search is an older search engine and portal that combines search with news, mail, finance, and other services.',
      'DuckDuckGo focuses on privacy: it does not track users in the same way as many mainstream search engines and tries to give results without personalized profiling. Yandex is a major search engine developed in Russia; it offers web search, maps, translation, mail, and other services.'
    ],
  },
  {
    unit: 'Unit 3',
    question: 'How can programming languages be classified? Provide examples and talk about the distinctive features of each type.',
    answer: [
      'Programming languages can be classified by level and paradigm. Low-level languages are close to machine hardware. Machine code consists of binary instructions, while assembly language uses symbolic instructions and must be translated by an assembler.',
      'High-level languages are closer to human language and easier to read and maintain. Examples are Python, Java, C++, JavaScript, and C#. They can also be classified as procedural, object-oriented, functional, scripting, or markup-related languages. Procedural languages organize programs as procedures; object-oriented languages organize code around objects and classes; scripting languages are often used for automation and web development.'
    ],
  },
  {
    unit: 'Unit 3',
    question: 'What is OOP? What are the three key features of OOP?',
    answer: [
      'Object-oriented programming, or OOP, is a programming paradigm based on objects and classes. An object combines data and functions that operate on that data, so the programmer can model real-world entities and modify parts of a program without rewriting everything.',
      'The three key features are encapsulation, inheritance, and polymorphism. Encapsulation means combining data and methods inside one unit and protecting internal details. Inheritance allows one class to use properties and behaviour of another class. Polymorphism allows objects of different classes to be processed through the same interface while behaving differently.'
    ],
  },
  {
    unit: 'Unit 3',
    question: 'What is the difference between a compiler, an interpreter, and an assembler?',
    answer: [
      'A compiler translates the whole source program written in a high-level language into machine code or object code in one go. After compilation, the program can be executed as a separate file.',
      'An interpreter translates and executes the source code line by line while the program is running. This makes testing easier but can be slower. An assembler translates assembly language, which uses symbolic machine instructions, into machine code.'
    ],
  },
  {
    unit: 'Unit 4',
    question: 'What are the three main tools used in web design? Talk about each of them.',
    answer: [
      'The three main tools are HTML, CSS, and JavaScript. HTML, or HyperText Markup Language, describes the structure of information on a webpage. It uses tags for paragraphs, headings, tables, images, links, and other elements.',
      'CSS, or Cascading Style Sheets, controls the appearance and layout of a page: colours, fonts, spacing, positioning, and responsive design. JavaScript is a programming language that adds interactivity and dynamic behaviour, such as menus, form validation, animations, pop-ups, and updating content without reloading the page.'
    ],
  },
  {
    unit: 'Unit 4',
    question: 'What is the difference between frontend and backend web development?',
    answer: [
      'Frontend development deals with the visible part of a website or web application: layout, buttons, forms, menus, animations, and everything the user interacts with in the browser. Frontend developers mainly use HTML, CSS, JavaScript, and frontend frameworks.',
      'Backend development deals with the server side: databases, authentication, business logic, APIs, security, and data processing. Backend code runs on a server and sends data to the frontend.'
    ],
  },
  {
    unit: 'Unit 4',
    question: 'What are the advantages and disadvantages of using website builders?',
    answer: [
      'Website builders are platforms that allow users to create websites without writing code, often with templates and WYSIWYG editing. Their advantages are speed, simplicity, ready-made designs, lower cost, hosting integration, and no need for deep programming knowledge.',
      'Their disadvantages are limited flexibility, dependence on the platform, less control over code and performance, possible SEO limitations, template similarity, and difficulty in moving the site to another system.'
    ],
  },
  {
    unit: 'Unit 4',
    question: 'What is SEO? What is its main purpose?',
    answer: [
      'SEO means Search Engine Optimization. It is a set of methods used to improve a website so that search engines can understand it better and rank it higher in search results.',
      'The main purpose of SEO is to increase a website’s visibility and attract more organic traffic without paying for every click. SEO improves content, structure, keywords, links, technical performance, and user experience.'
    ],
  },
  {
    unit: 'Unit 4',
    question: 'What is the difference between on-page SEO and off-page SEO?',
    answer: [
      'On-page SEO includes improvements made directly on a website. It involves high-quality content, keywords, titles, headings, meta descriptions, internal links, images, page speed, mobile friendliness, and clear structure.',
      'Off-page SEO includes factors outside the website that influence authority and ranking. The most important factor is backlinks from other reputable websites, but it can also include brand mentions, social signals, reviews, and online reputation.'
    ],
  },
  {
    unit: 'Unit 4',
    question: 'What is meant by “organic results”?',
    answer: [
      'Organic results are unpaid search results shown because the search engine considers them relevant to the user’s query. They are different from paid advertisements, which appear because an advertiser pays for placement.',
      'Organic results are influenced by SEO, content quality, relevance, authority, and technical factors. They are valuable because users often trust them more than ads.'
    ],
  },
  {
    unit: 'Unit 5',
    question: 'What is malware? What types of malware do you know? Talk about each one in detail.',
    answer: [
      'Malware is malicious software designed to damage systems, steal data, spy on users, block access, or perform unauthorized actions. Common types include viruses, worms, Trojans, spyware, adware, ransomware, keyloggers, and miners.',
      'A virus attaches itself to a host file and spreads when the infected file runs. A worm is standalone and can spread across networks without a host file. A Trojan pretends to be useful software but performs malicious actions. Spyware secretly collects information; adware shows unwanted advertisements. Ransomware encrypts data or blocks access and demands payment. A keylogger records keystrokes, often to steal passwords. A miner uses a victim’s computer power to earn cryptocurrency for someone else.'
    ],
  },
  {
    unit: 'Unit 5',
    question: 'What are the four routines of a virus? Talk about the function of each of them.',
    answer: [
      'A virus can be described as having four routines: reproduction, trigger, payload, and misdirection. The reproduction routine allows the virus to copy itself and infect other files or programs.',
      'The trigger routine activates the virus when certain conditions are met, such as a date or user action. The payload is the part that performs the harmful action, for example deleting files or corrupting data. The misdirection routine helps the virus hide itself from users and security software.'
    ],
  },
  {
    unit: 'Unit 5',
    question: 'What types of cybercrime do you know? Talk about each of them.',
    answer: [
      'Cybercrime includes phishing, hijacking, DDoS attacks, piracy, defacement, salami shaving, identity theft, and unauthorized access. Phishing uses fake messages or websites to trick people into revealing sensitive information such as passwords or card numbers.',
      'Hijacking redirects users from the site they wanted to visit to another site. A DDoS attack overloads servers with traffic so legitimate users cannot access a service. Piracy is illegal copying or distribution of software. Defacement means changing information on someone’s website. Salami shaving steals very small amounts of money from many accounts to make a large profit. Unauthorized access means entering systems without permission.'
    ],
  },
  {
    unit: 'Unit 5',
    question: 'What is the difference between a virus and a worm?',
    answer: [
      'A virus needs a host file or program. It attaches to legitimate files and spreads when the infected file is executed or transferred.',
      'A worm is a standalone malicious program. It can replicate itself and spread across networks without attaching to a host file. Worms often spread faster because they exploit network connections directly.'
    ],
  },
  {
    unit: 'Unit 5',
    question: 'What is the difference between a virus and a Trojan?',
    answer: [
      'A virus is designed to replicate by infecting other files or programs. Its main feature is self-reproduction through a host.',
      'A Trojan does not usually replicate itself. It pretends to be a useful or harmless program, but after the user installs or runs it, it performs malicious actions such as stealing data, opening a backdoor, or downloading other malware.'
    ],
  },
  {
    unit: 'Unit 5',
    question: 'What is the difference between DoS and DDoS attack? How is DDoS attack performed?',
    answer: [
      'A DoS attack, or Denial of Service attack, tries to make a system unavailable by overwhelming it with traffic or requests from one source. A DDoS attack, or Distributed Denial of Service attack, uses many compromised devices at the same time.',
      'A DDoS attack is performed through a botnet: attackers infect many computers or IoT devices and control them remotely. These devices send huge amounts of traffic to the target server, so it cannot respond to legitimate users.'
    ],
  },
  {
    unit: 'Unit 6',
    question: 'What is firewall? What can firewall filters be based on?',
    answer: [
      'A firewall is a combination of hardware and software used to protect a private network by filtering incoming and outgoing traffic. It acts as a barrier between a trusted internal network and untrusted external networks.',
      'Firewall filters can be based on IP addresses, ports, protocols, packet contents, domain names, applications, connection state, or predefined security rules. Packet filtering checks small units of data and decides whether to allow or block them.'
    ],
  },
  {
    unit: 'Unit 6',
    question: 'What is the difference between signature-based scanning and heuristic scanning?',
    answer: [
      'Signature-based scanning looks for known malware signatures. A signature is a unique pattern or fingerprint of a known virus. This method is accurate for known threats, but it may miss new malware if its signature is not in the database.',
      'Heuristic scanning uses rules, algorithms, and behavioural analysis to detect suspicious commands or actions. It can recognize new or modified malware without an exact signature, but it may produce more false positives.'
    ],
  },
  {
    unit: 'Unit 6',
    question: 'What is a signature?',
    answer: [
      'A signature is a distinguishing feature or unique pattern that identifies a particular computer virus or malware sample. It works like a fingerprint.',
      'Antivirus software stores signatures in a database and compares files or programs with these patterns. If a match is found, the software can block, quarantine, or remove the malware.'
    ],
  },
  {
    unit: 'Unit 6',
    question: 'What are the two main types of encryption? What is the difference between the two?',
    answer: [
      'The two main types are symmetric encryption and asymmetric encryption. Symmetric encryption uses the same secret key to encrypt and decrypt data. It is fast and efficient, but the key must be shared securely between the sender and the receiver.',
      'Asymmetric encryption, also called public-key cryptography, uses a pair of mathematically related keys: a public key and a private key. The public key can be shared, while the private key must be kept secret. It is useful for secure communication, digital signatures, and key exchange, but it is usually slower.'
    ],
  },
  {
    unit: 'Unit 6',
    question: 'What two methods of breaking a cipher are there?',
    answer: [
      'Two methods are brute force and cryptanalysis. Brute force means trying all possible keys or passwords until the correct one is found. It can work, but it becomes impractical when keys are long and complex.',
      'Cryptanalysis means studying the cipher to find weaknesses in the algorithm, implementation, or key management. Instead of trying every key, cryptanalysis tries to break the logic or exploit mistakes.'
    ],
  },
  {
    unit: 'Unit 6',
    question: 'What is a CAPTCHA? Where is this tool implemented?',
    answer: [
      'CAPTCHA stands for Completely Automated Public Turing test to tell Computers and Humans Apart. It is a test designed to distinguish human users from bots.',
      'CAPTCHA is implemented on websites and online services, especially in login forms, registration forms, comment sections, online polls, password recovery pages, and payment or booking systems. It helps prevent spam, automated attacks, and fake account creation.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'What is the Turing test? Talk about its procedure.',
    answer: [
      'The Turing test is a test of whether a machine can show intelligent behaviour similar to that of a human. It was proposed by Alan Turing.',
      'In the procedure, a human evaluator communicates with two hidden participants: one human and one machine. The evaluator asks questions and receives text answers. If the evaluator cannot reliably tell which participant is the machine, the machine is said to pass the test.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'What is the difference between classification and clustering?',
    answer: [
      'Classification means assigning data to predefined classes. The model is trained on labelled examples, so it learns to put new data into known categories, for example spam or not spam.',
      'Clustering means grouping data into categories that are not defined in advance. The algorithm looks for similarities and patterns in the data itself, for example grouping customers by behaviour without knowing the groups beforehand.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'What is backpropagation?',
    answer: [
      'Backpropagation is a learning algorithm used in artificial neural networks. It calculates how much each connection weight contributed to the error in the output.',
      'The algorithm works backwards from the output layer to the input layer, adjusts the weights, and helps the network reduce errors during training. In simple terms, it teaches the network by correcting mistakes.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'What is an artificial neural network? What tasks can neural networks accomplish?',
    answer: [
      'An artificial neural network is a computing system inspired by the biological brain. It consists of interconnected artificial neurons or nodes that process information and learn patterns from data.',
      'Neural networks can accomplish many tasks: image and face recognition, machine translation, speech recognition, fraud detection, autonomous driving, prediction, classification, clustering, and generating realistic images or text.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'In what way is an artificial neural network similar to biological brain? Describe the structure of artificial neural networks.',
    answer: [
      'An artificial neural network is similar to the biological brain because it uses many interconnected units that pass signals to one another. Like neurons in the brain, artificial neurons receive inputs, process them, and produce outputs.',
      'A neural network is usually organized in layers: an input layer, one or more hidden layers, and an output layer. Connections between units have weights. During training, the network changes these weights to learn patterns and make better decisions.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'Why are neural networks compared to “black boxes”?',
    answer: [
      'Neural networks are compared to black boxes because it is often difficult to understand exactly how they make a particular decision. A network may contain many layers, units, weights, and mathematical operations.',
      'Even if the input and output are visible, the internal reasoning can be hard to interpret. This creates problems in areas where explanations are important, such as medicine, finance, law, and security.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'What is IoT? What are the major problems in using the IoT technology?',
    answer: [
      'IoT, or the Internet of Things, is a system of interconnected computing devices, sensors, machines, and everyday objects that can collect and exchange data over a network. Examples include smart homes, wearable devices, industrial sensors, smart cars, and medical devices.',
      'Major problems include security risks, privacy issues, data leaks, weak passwords, device hacking, lack of common standards, dependence on Internet access, large amounts of data, and difficulty updating or protecting many small devices.'
    ],
  },
  {
    unit: 'Unit 7',
    question: 'What is HLAI? What are the risks of using HLAI?',
    answer: [
      'HLAI means Human-Level Artificial Intelligence or Human-Like Artificial Intelligence. It describes AI systems that can perform intellectual tasks at a level similar to humans, including reasoning, learning, perception, and problem solving.',
      'The risks include job displacement, loss of human bargaining power, dependence on those who control the technology, misuse in surveillance or cyberattacks, biased or unsafe decisions, and loss of human control. The text also stresses that AI should augment humans rather than simply replace or mimic them.'
    ],
  },
];

const els = {
  search: document.querySelector('#searchInput'),
  filters: document.querySelector('#unitFilters'),
  summary: document.querySelector('#summary'),
  list: document.querySelector('#answerList'),
  answersPanel: document.querySelector('#answersPanel'),
  practicePanel: document.querySelector('#practicePanel'),
  showAnswersBtn: document.querySelector('#showAnswersBtn'),
  showPracticeBtn: document.querySelector('#showPracticeBtn'),
  practiceUnit: document.querySelector('#practiceUnit'),
  practiceCount: document.querySelector('#practiceCount'),
  practiceSetup: document.querySelector('#practiceSetup'),
  practiceQuiz: document.querySelector('#practiceQuiz'),
  practiceResult: document.querySelector('#practiceResult'),
  startPracticeBtn: document.querySelector('#startPracticeBtn'),
  stopPracticeBtn: document.querySelector('#stopPracticeBtn'),
  practiceProgress: document.querySelector('#practiceProgress'),
  practiceUnitLabel: document.querySelector('#practiceUnitLabel'),
  practiceQuestion: document.querySelector('#practiceQuestion'),
  practiceAnswer: document.querySelector('#practiceAnswer'),
  checkPracticeBtn: document.querySelector('#checkPracticeBtn'),
  knowBtn: document.querySelector('#knowBtn'),
  repeatBtn: document.querySelector('#repeatBtn'),
  practiceFeedback: document.querySelector('#practiceFeedback'),
};

const state = {
  unit: 'All',
  query: '',
  practice: null,
};

const stopWords = new Set([
  'about', 'above', 'access', 'across', 'after', 'again', 'against', 'also', 'another', 'because',
  'been', 'before', 'being', 'between', 'called', 'could', 'different', 'does', 'each', 'example',
  'from', 'have', 'into', 'main', 'many', 'more', 'most', 'much', 'must', 'only', 'other', 'over',
  'part', 'same', 'should', 'such', 'than', 'that', 'their', 'them', 'then', 'there', 'these',
  'they', 'this', 'through', 'used', 'uses', 'using', 'when', 'where', 'which', 'while', 'with',
  'without', 'work', 'works', 'would', 'user', 'users', 'data', 'system', 'systems', 'network',
  'networks', 'internet', 'computer', 'computers', 'software', 'program', 'programs',
]);

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
    .replace(/[“”"'.(),;:!?/\\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function renderFilters() {
  const units = ['All', ...new Set(answers.map((item) => item.unit))];
  els.filters.innerHTML = units.map((unit) => `
    <button class="chip ${state.unit === unit ? 'active' : ''}" type="button" data-unit="${unit}">
      ${unit}
    </button>
  `).join('');
}

function renderPracticeUnitOptions() {
  const units = ['All', ...new Set(answers.map((item) => item.unit))];
  els.practiceUnit.innerHTML = units.map((unit) => `<option value="${unit}">${unit}</option>`).join('');
}

function getFilteredAnswers() {
  const query = normalize(state.query);
  return answers.filter((item) => {
    const unitMatches = state.unit === 'All' || item.unit === state.unit;
    const text = normalize(`${item.question} ${item.answer.join(' ')}`);
    return unitMatches && (!query || text.includes(query));
  });
}

function renderAnswers() {
  renderFilters();
  const filtered = getFilteredAnswers();
  els.summary.textContent = `Shown: ${filtered.length} of ${answers.length}`;
  els.list.innerHTML = filtered.map((item, index) => `
    <details class="answer-card" ${index === 0 ? 'open' : ''}>
      <summary>
        <span class="number">#${answers.indexOf(item) + 1}</span>
        <span class="question">${escapeHtml(item.question)}</span>
        <span class="unit">${escapeHtml(item.unit)}</span>
      </summary>
      <div class="answer-body">
        ${item.answer.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
        <button class="copy-btn" type="button" data-copy="${answers.indexOf(item)}">Copy answer</button>
      </div>
    </details>
  `).join('');
}

function setMode(mode) {
  const isPractice = mode === 'practice';
  els.answersPanel.classList.toggle('hidden', isPractice);
  els.practicePanel.classList.toggle('hidden', !isPractice);
  els.showAnswersBtn.classList.toggle('active', !isPractice);
  els.showPracticeBtn.classList.toggle('active', isPractice);
}

function getPracticePool() {
  const unit = els.practiceUnit.value;
  const base = unit === 'All' ? answers : answers.filter((item) => item.unit === unit);
  const count = els.practiceCount.value;
  return shuffle(base).slice(0, count === 'all' ? base.length : Math.min(Number(count), base.length));
}

function startPractice() {
  const pool = getPracticePool();
  state.practice = {
    pool,
    index: 0,
    known: 0,
    repeats: [],
    checked: false,
  };
  els.practiceSetup.classList.add('hidden');
  els.practiceResult.classList.add('hidden');
  els.practiceQuiz.classList.remove('hidden');
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const practice = state.practice;
  const item = practice.pool[practice.index];
  practice.checked = false;
  els.practiceProgress.textContent = `${practice.index + 1} / ${practice.pool.length}`;
  els.practiceUnitLabel.textContent = item.unit;
  els.practiceQuestion.textContent = item.question;
  els.practiceAnswer.value = '';
  els.practiceAnswer.disabled = false;
  els.practiceFeedback.classList.add('hidden');
  els.practiceFeedback.innerHTML = '';
  els.checkPracticeBtn.classList.remove('hidden');
  els.knowBtn.classList.add('hidden');
  els.repeatBtn.classList.add('hidden');
  els.practiceAnswer.focus();
}

function extractKeywords(item) {
  const source = normalize(`${item.question} ${item.answer.join(' ')}`);
  const words = source.split(' ').filter((word) => (
    word.length >= 5
    && !stopWords.has(word)
    && !/^\d+$/.test(word)
  ));
  const unique = [];
  words.forEach((word) => {
    if (!unique.includes(word)) unique.push(word);
  });
  return unique.slice(0, 18);
}

function analyzePracticeAnswer(userAnswer, item) {
  const normalizedAnswer = normalize(userAnswer);
  const keywords = extractKeywords(item);
  const matched = keywords.filter((keyword) => normalizedAnswer.includes(keyword));
  const missing = keywords.filter((keyword) => !normalizedAnswer.includes(keyword));
  const score = keywords.length ? Math.round((matched.length / keywords.length) * 100) : 0;
  return { keywords, matched, missing, score };
}

function checkPracticeAnswer() {
  const practice = state.practice;
  const item = practice.pool[practice.index];
  const analysis = analyzePracticeAnswer(els.practiceAnswer.value, item);
  practice.checked = true;
  els.practiceAnswer.disabled = true;
  els.checkPracticeBtn.classList.add('hidden');
  els.knowBtn.classList.remove('hidden');
  els.repeatBtn.classList.remove('hidden');
  els.practiceFeedback.classList.remove('hidden');
  els.practiceFeedback.innerHTML = `
    <div class="coverage ${analysis.score >= 55 ? 'good' : 'weak'}">
      <strong>Keyword coverage: ${analysis.score}%</strong>
      <p>Matched: ${analysis.matched.length ? analysis.matched.join(', ') : 'none'}</p>
      <p>Missing: ${analysis.missing.slice(0, 10).join(', ') || 'no important keywords missing'}</p>
    </div>
    <div class="model-answer">
      <h3>Model answer</h3>
      ${item.answer.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
    </div>
  `;
}

function finishPracticeItem(known) {
  const practice = state.practice;
  const item = practice.pool[practice.index];
  if (known) {
    practice.known += 1;
  } else {
    practice.repeats.push(item);
  }
  if (practice.index < practice.pool.length - 1) {
    practice.index += 1;
    renderPracticeQuestion();
  } else {
    renderPracticeResult();
  }
}

function renderPracticeResult() {
  const practice = state.practice;
  els.practiceQuiz.classList.add('hidden');
  els.practiceResult.classList.remove('hidden');
  els.practiceResult.innerHTML = `
    <div class="result-card">
      <p class="eyebrow">Practice result</p>
      <h2>${practice.known} / ${practice.pool.length}</h2>
      <p>${practice.repeats.length ? 'Questions for repeat:' : 'Everything is marked as known.'}</p>
      <div class="repeat-list">
        ${practice.repeats.map((item) => `<article>${escapeHtml(item.question)} <span>${escapeHtml(item.unit)}</span></article>`).join('')}
      </div>
      <button class="copy-btn start-practice" id="restartPracticeBtn" type="button">Practice again</button>
    </div>
  `;
  document.querySelector('#restartPracticeBtn').addEventListener('click', startPractice);
}

function stopPractice() {
  els.practiceQuiz.classList.add('hidden');
  els.practiceResult.classList.add('hidden');
  els.practiceSetup.classList.remove('hidden');
}

els.search.addEventListener('input', () => {
  state.query = els.search.value;
  renderAnswers();
});

els.showAnswersBtn.addEventListener('click', () => setMode('answers'));
els.showPracticeBtn.addEventListener('click', () => setMode('practice'));
els.startPracticeBtn.addEventListener('click', startPractice);
els.stopPracticeBtn.addEventListener('click', stopPractice);
els.checkPracticeBtn.addEventListener('click', checkPracticeAnswer);
els.knowBtn.addEventListener('click', () => finishPracticeItem(true));
els.repeatBtn.addEventListener('click', () => finishPracticeItem(false));

els.filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-unit]');
  if (!button) return;
  state.unit = button.dataset.unit;
  renderAnswers();
});

els.list.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  const item = answers[Number(button.dataset.copy)];
  const text = `${item.question}\n\n${item.answer.join('\n\n')}`;
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied';
    } catch {
      button.textContent = 'Select text manually';
    }
  } else {
    button.textContent = 'Select text manually';
  }
  setTimeout(() => {
    button.textContent = 'Copy answer';
  }, 1200);
});

renderAnswers();
renderPracticeUnitOptions();
