// Jai Shree E-Mitra - Application Logic & State Management

// -------------------------------------------------------------
// 1. Language Translation Dictionary (English & Hindi)
// -------------------------------------------------------------
const translations = {
  en: {
    title: "Jai Shree E-Mitra",
    tagline: "Your Trusted Digital Service Center",
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navSchemes: "Government Schemes",
    navDocs: "Required Documents",
    navReviews: "Reviews",
    navGallery: "Gallery",
    navFaq: "FAQ",
    navContact: "Contact",
    navTrack: "Track Application",
    navDownloads: "Downloads",
    navAdmin: "Admin Panel",
    heroHeading: "Complete Government & Digital Services Under One Roof",
    heroSubheading: "Fast • Trusted • Secure • Affordable • Professional",
    btnCallNow: "Call Now",
    btnWhatsApp: "WhatsApp",
    btnViewServices: "View Services",
    btnGetDirections: "Get Directions",
    badgeTrusted: "Trusted Service",
    badgeFast: "Fast Processing",
    badgeSecure: "Secure Documentation",
    badgeSatisfaction: "Customer Satisfaction",
    aboutHeading: "About Jai Shree E-Mitra",
    aboutText1: "Jai Shree E-Mitra is your premier digital service and government documentation center located in RK Puram B, Kota (Behind Muktidham). We specialize in making complex government processes simple, transparent, and hassle-free for all citizens.",
    aboutText2: "Our mission is to bridge the digital gap by offering reliable, quick, and affordable services. From utility bill payments to vital documentation (such as Birth, Caste, Domicile certificates) and online applications for national & state government schemes, we guide you at every step with absolute accuracy and confidentiality.",
    whyChooseUs: "Why Customers Trust Us",
    whyTrustedTitle: "Trusted Digital Services",
    whyTrustedDesc: "Years of experience helping citizens get correct paperwork without delays.",
    whyFastTitle: "Fast Processing",
    whyFastDesc: "No long queues. We process applications promptly with minimal turnaround time.",
    whyAffordableTitle: "Affordable Charges",
    whyAffordableDesc: "Transparent government fees and highly economical service charges.",
    whySecureTitle: "Secure Documentation",
    whySecureDesc: "Your identity and personal information are handled with top-tier security standards.",
    whyProfessionalTitle: "Professional Guidance",
    whyProfessionalDesc: "Expert advice on what forms to submit, preventing rejections or mistakes.",
    whySupportTitle: "Friendly Support",
    whySupportDesc: "Always available via phone, chat, or in-person to solve your queries.",
    servicesHeading: "Our Premium Services",
    servicesSub: "Click on any service card to view complete benefits, document checklists, and processing times.",
    learnMore: "Learn More",
    docCheckerTitle: "Required Documents Search",
    docCheckerSub: "Select a service below to instantly check required documents and processing times before visiting.",
    selectService: "Select a Service...",
    docsNeeded: "Required Documents:",
    procTime: "Estimated Processing Time:",
    workingDays: "Working Days",
    updatesTitle: "Latest Government Schemes & Updates",
    updatesSub: "Stay informed about active scholarships, state schemes, RTE admissions, and public alerts.",
    trackTitle: "Track Your Application",
    trackSub: "Enter your application receipt number or reference number to check the latest status.",
    trackPlaceholder: "e.g. EM-554901",
    trackBtn: "Check Status",
    trackNotFound: "Application number not found. Try EM-554901, EM-554902, or contact support.",
    appNum: "Application Number",
    appService: "Service Type",
    appDate: "Date Submitted",
    appStatus: "Current Status",
    appRemarks: "Remarks",
    downloadTitle: "Download Commonly Used Forms",
    downloadSub: "Get direct access to PDF form templates and document checklist guides.",
    btnDownload: "Download PDF",
    btnViewChecklist: "View Checklist",
    reviewTitle: "What Our Customers Say",
    reviewSub: "Genuine reviews from citizens who got their work completed successfully.",
    addReviewTitle: "Share Your Experience",
    fullName: "Full Name",
    mobileNum: "Mobile Number",
    rating: "Rating (Stars)",
    writeReview: "Write your review...",
    uploadPhoto: "Upload Photo (Optional)",
    submitReviewBtn: "Submit Review",
    reviewThankYou: "Thank you! Your review has been submitted and will appear after verification.",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Find quick answers to common questions about our services and operating details.",
    supportTitle: "Help & Support",
    supportSub: "Have a custom request or question? Drop us a message, call, or chat with us.",
    contactFormTitle: "Send a Message",
    subject: "Subject / Service Query",
    message: "Message Details",
    sendMessageBtn: "Send Message",
    messageSuccess: "Thank you! Your support request has been received. We will contact you shortly.",
    aptTitle: "Request an Appointment",
    aptSub: "Skip the waiting queue. Request a time slot to visit our center.",
    prefDate: "Preferred Date",
    prefTime: "Preferred Time Slot",
    bookAptBtn: "Book Appointment",
    aptSuccess: "Appointment request sent! We will confirm your slot via SMS/WhatsApp.",
    contactInfoTitle: "Shop Address & Hours",
    businessHoursTitle: "Business Hours",
    monSat: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday: "Sunday: As per availability",
    footerText: "© 2026 Jai Shree E-Mitra. All Rights Reserved.",
    adminTitle: "Jai Shree E-Mitra Admin Dashboard",
    adminPendingReviews: "Pending Customer Reviews Queue",
    adminActiveSchemes: "Manage Schemes & Updates",
    adminActiveApps: "Manage Application Tracking Database",
    adminApts: "View Booked Appointments",
    adminSupport: "Support Queries",
    approveBtn: "Approve",
    deleteBtn: "Delete",
    addSchemeBtn: "Add New Scheme/Update",
    addAppBtn: "Add Application Status",
    schemeTitle: "Scheme Title",
    schemeCat: "Category",
    schemeDesc: "Description / Details",
    appClient: "Customer Name",
    adminLogout: "Logout",
    adminLoginTitle: "Admin Security Login",
    adminPassword: "Enter Admin Password",
    loginBtn: "Login",
    invalidPass: "Invalid Password! Try again.",
    newBanner: "New Scheme Alert:",
    closeBtn: "Close",
    chatWelcome: "Hello! Welcome to Jai Shree E-Mitra Support. How can we help you today?",
    chatPlaceholder: "Type your query...",
    chatSend: "Send",
    verifiedReview: "Verified Customer"
  },
  hi: {
    title: "जय श्री ई-मित्र",
    tagline: "आपका विश्वसनीय डिजिटल सेवा केंद्र",
    navHome: "मुख्य पृष्ठ",
    navAbout: "हमारे बारे में",
    navServices: "सेवाएं",
    navSchemes: "सरकारी योजनाएं",
    navDocs: "आवश्यक दस्तावेज",
    navReviews: "समीक्षाएं",
    navGallery: "गैलरी",
    navFaq: "सामान्य प्रश्न",
    navContact: "संपर्क",
    navTrack: "आवेदन की स्थिति",
    navDownloads: "डाउनलोड फॉर्म",
    navAdmin: "एडमिन पैनल",
    heroHeading: "सभी सरकारी और डिजिटल सेवाएं एक ही छत के नीचे",
    heroSubheading: "त्वरित • विश्वसनीय • सुरक्षित • किफायती • पेशेवर",
    btnCallNow: "अभी कॉल करें",
    btnWhatsApp: "व्हाट्सएप",
    btnViewServices: "सेवाएं देखें",
    btnGetDirections: "दिशा-निर्देश",
    badgeTrusted: "विश्वसनीय सेवा",
    badgeFast: "त्वरित प्रोसेसिंग",
    badgeSecure: "सुरक्षित दस्तावेज",
    badgeSatisfaction: "ग्राहक संतुष्टि",
    aboutHeading: "जय श्री ई-मित्र के बारे में",
    aboutText1: "जय श्री ई-मित्र आरके पुरम बी, कोटा (मुक्तिधाम के पीछे) में स्थित आपका प्रमुख डिजिटल सेवा और सरकारी दस्तावेज़ीकरण केंद्र है। हम सभी नागरिकों के लिए जटिल सरकारी प्रक्रियाओं को सरल, पारदर्शी और परेशानी मुक्त बनाने में माहिर हैं।",
    aboutText2: "हमारा मिशन विश्वसनीय, त्वरित और किफायती सेवाएं प्रदान करके डिजिटल अंतर को पाटना है। बिजली-पानी के बिलों के भुगतान से लेकर महत्वपूर्ण दस्तावेजों (जैसे जन्म, जाति, मूल निवास प्रमाण पत्र) और राष्ट्रीय एवं राज्य सरकारी योजनाओं के लिए ऑनलाइन आवेदन तक, हम पूर्ण सटीकता और गोपनीयता के साथ हर कदम पर आपका मार्गदर्शन करते हैं।",
    whyChooseUs: "ग्राहक हम पर क्यों भरोसा करते हैं",
    whyTrustedTitle: "विश्वसनीय डिजिटल सेवाएं",
    whyTrustedDesc: "बिना किसी देरी के नागरिकों को सही कागजी कार्रवाई प्राप्त करने में मदद करने का वर्षों का अनुभव।",
    whyFastTitle: "त्वरित प्रोसेसिंग",
    whyFastDesc: "कोई लंबी लाइनें नहीं। हम न्यूनतम समय में आपके आवेदनों को तुरंत प्रोसेस करते हैं।",
    whyAffordableTitle: "किफायती शुल्क",
    whyAffordableDesc: "पारदर्शी सरकारी शुल्क और अत्यधिक किफायती सेवा शुल्क।",
    whySecureTitle: "सुरक्षित दस्तावेज़ीकरण",
    whySecureDesc: "आपकी पहचान और व्यक्तिगत जानकारी को शीर्ष स्तर के सुरक्षा मानकों के साथ संभाला जाता है।",
    whyProfessionalTitle: "पेशेवर मार्गदर्शन",
    whyProfessionalDesc: "कौन से फॉर्म जमा करने हैं, इस पर विशेषज्ञ सलाह, जो अस्वीकृति या गलतियों को रोकती है।",
    whySupportTitle: "अनुकूल सहायता",
    whySupportDesc: "आपकी शंकाओं का समाधान करने के लिए फोन, चैट या व्यक्तिगत रूप से हमेशा उपलब्ध।",
    servicesHeading: "हमारी प्रीमियम सेवाएं",
    servicesSub: "पूर्ण लाभ, दस्तावेज सूची और प्रोसेसिंग समय देखने के लिए किसी भी सेवा कार्ड पर क्लिक करें।",
    learnMore: "विस्तार से जानें",
    docCheckerTitle: "आवश्यक दस्तावेज़ खोजें",
    docCheckerSub: "दुकान पर आने से पहले आवश्यक दस्तावेजों और प्रसंस्करण समय की तुरंत जांच करने के लिए नीचे एक सेवा चुनें।",
    selectService: "एक सेवा चुनें...",
    docsNeeded: "आवश्यक दस्तावेज:",
    procTime: "अनुमानित प्रसंस्करण समय:",
    workingDays: "कार्य दिवस",
    updatesTitle: "नवीनतम सरकारी योजनाएं और अपडेट",
    updatesSub: "सक्रिय छात्रवृत्ति, राज्य योजनाओं, आरटीई प्रवेश और सार्वजनिक सूचनाओं के बारे में सूचित रहें।",
    trackTitle: "अपने आवेदन को ट्रैक करें",
    trackSub: "नवीनतम स्थिति की जांच करने के लिए अपना आवेदन रसीद नंबर या संदर्भ संख्या दर्ज करें।",
    trackPlaceholder: "जैसे EM-554901",
    trackBtn: "स्थिति देखें",
    trackNotFound: "आवेदन संख्या नहीं मिली। EM-554901, EM-554902 दर्ज करें या सहायता से संपर्क करें।",
    appNum: "आवेदन संख्या",
    appService: "सेवा का प्रकार",
    appDate: "जमा करने की तिथि",
    appStatus: "वर्तमान स्थिति",
    appRemarks: "टिप्पणी",
    downloadTitle: "आमतौर पर उपयोग किए जाने वाले फॉर्म डाउनलोड करें",
    downloadSub: "पीडीएफ फॉर्म टेम्पलेट और दस्तावेज़ चेकलिस्ट गाइड तक सीधे पहुंच प्राप्त करें।",
    btnDownload: "पीडीएफ डाउनलोड करें",
    btnViewChecklist: "चेकलिस्ट देखें",
    reviewTitle: "हमारे ग्राहक क्या कहते हैं",
    reviewSub: "उन नागरिकों की वास्तविक समीक्षाएं जिन्होंने अपना काम सफलतापूर्वक पूरा करवाया।",
    addReviewTitle: "अपना अनुभव साझा करें",
    fullName: "पूरा नाम",
    mobileNum: "मोबाइल नंबर",
    rating: "रेटिंग (सितारे)",
    writeReview: "अपनी समीक्षा लिखें...",
    uploadPhoto: "फोटो अपलोड करें (वैकल्पिक)",
    submitReviewBtn: "समीक्षा सबमिट करें",
    reviewThankYou: "धन्यवाद! आपकी समीक्षा सबमिट कर दी गई है और सत्यापन के बाद दिखाई देगी।",
    faqTitle: "सामान्यतः पूछे जाने वाले प्रश्न",
    faqSub: "हमारी सेवाओं और संचालन विवरणों के बारे में सामान्य प्रश्नों के त्वरित उत्तर पाएं।",
    supportTitle: "सहायता एवं समर्थन",
    supportSub: "कोई कस्टम अनुरोध या प्रश्न है? हमें एक संदेश भेजें, कॉल करें, या चैट करें।",
    contactFormTitle: "संदेश भेजें",
    subject: "विषय / सेवा प्रश्न",
    message: "संदेश का विवरण",
    sendMessageBtn: "संदेश भेजें",
    messageSuccess: "धन्यवाद! आपका सहायता अनुरोध प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।",
    aptTitle: "अपॉइंटमेंट का अनुरोध करें",
    aptSub: "प्रतीक्षा सूची से बचें। हमारे केंद्र पर आने के लिए एक समय स्लॉट का अनुरोध करें।",
    prefDate: "पसंदीदा तिथि",
    prefTime: "पसंदीदा समय स्लॉट",
    bookAptBtn: "अपॉइंटमेंट बुक करें",
    aptSuccess: "अपॉइंटमेंट का अनुरोध भेज दिया गया है! हम एसएमएस/व्हाट्सएप के जरिए स्लॉट की पुष्टि करेंगे।",
    contactInfoTitle: "दुकान का पता और समय",
    businessHoursTitle: "कार्य समय",
    monSat: "सोमवार - शनिवार: सुबह 9:00 बजे से शाम 7:00 बजे तक",
    sunday: "रविवार: उपलब्धता के अनुसार",
    footerText: "© 2026 जय श्री ई-मित्र। सर्वाधिकार सुरक्षित।",
    adminTitle: "जय श्री ई-मित्र एडमिन डैशबोर्ड",
    adminPendingReviews: "लंबित ग्राहक समीक्षा कतार",
    adminActiveSchemes: "योजनाएं और अपडेट प्रबंधित करें",
    adminActiveApps: "आवेदन ट्रैकिंग डेटाबेस प्रबंधित करें",
    adminApts: "बुक किए गए अपॉइंटमेंट देखें",
    adminSupport: "सहायता संदेश",
    approveBtn: "स्वीकार करें",
    deleteBtn: "हटाएं",
    addSchemeBtn: "नई योजना/अपडेट जोड़ें",
    addAppBtn: "आवेदन की स्थिति जोड़ें",
    schemeTitle: "योजना का शीर्षक",
    schemeCat: "श्रेणी",
    schemeDesc: "विवरण / जानकारी",
    appClient: "ग्राहक का नाम",
    adminLogout: "लॉगआउट",
    adminLoginTitle: "एडमिन सुरक्षा लॉगिन",
    adminPassword: "एड敏 पासवर्ड दर्ज करें",
    loginBtn: "लॉगिन",
    invalidPass: "गलत पासवर्ड! पुन: प्रयास करें।",
    newBanner: "नई योजना अलर्ट:",
    closeBtn: "बंद करें",
    chatWelcome: "नमस्ते! जय श्री ई-मित्र सहायता में आपका स्वागत है। आज हम आपकी क्या मदद कर सकते हैं?",
    chatPlaceholder: "अपना प्रश्न लिखें...",
    chatSend: "भेजें",
    verifiedReview: "सत्यापित ग्राहक"
  }
};

// -------------------------------------------------------------
// 2. Services Database
// -------------------------------------------------------------
const servicesData = [
  {
    id: "electricity_bill",
    icon: "zap",
    name_en: "Electricity Bill Payment",
    name_hi: "बिजली बिल भुगतान",
    desc_en: "Quick and secure payment of monthly domestic and commercial electricity bills.",
    desc_hi: "मासिक घरेलू और व्यावसायिक बिजली बिलों का त्वरित और सुरक्षित भुगतान।",
    overview_en: "We offer instant payment facility for KVVNL and other electricity distribution boards. Receive official digitized receipts immediately.",
    overview_hi: "हम केवीवीएनएल और अन्य बिजली वितरण बोर्डों के लिए तत्काल भुगतान सुविधा प्रदान करते हैं। तुरंत आधिकारिक डिजीटल रसीदें प्राप्त करें।",
    benefits_en: ["Instant payment update", "Avoid late fees", "Get official computer-generated receipt", "Safe and authenticated channel"],
    benefits_hi: ["तत्काल भुगतान अपडेट", "विलंब शुल्क से बचें", "आधिकारिक कंप्यूटर-जनरेटेड रसीद प्राप्त करें", "सुरक्षित और प्रमाणित माध्यम"],
    docs_en: ["Electricity Bill (containing K Number / Account ID)", "Payment amount (Cash/UPI)"],
    docs_hi: ["बिजली बिल (K नंबर / खाता आईडी युक्त)", "भुगतान राशि (नकद/यूपीआई)"],
    time_en: "Instant (5 Minutes)",
    time_hi: "तुरंत (5 मिनट)",
    faq_en: [
      { q: "Will I get a receipt?", a: "Yes, you will get an official stamped paper receipt as well as a PDF on your WhatsApp." },
      { q: "Is there any extra fee?", a: "No, we only charge a minimal nominal processing fee of ₹10-₹20." }
    ],
    faq_hi: [
      { q: "क्या मुझे रसीद मिलेगी?", a: "हाँ, आपको एक आधिकारिक मुहर लगी हुई रसीद और आपके व्हाट्सएप पर एक पीडीएफ प्राप्त होगी।" },
      { q: "क्या कोई अतिरिक्त शुल्क है?", a: "नहीं, हम केवल ₹10-₹20 का न्यूनतम नाममात्र प्रसंस्करण शुल्क लेते हैं।" }
    ]
  },
  {
    id: "water_bill",
    icon: "droplet",
    name_en: "Water Supply Bill Payment",
    name_hi: "पानी आपूर्ति बिल भुगतान",
    desc_en: "Pay municipal and PHED water bills online without standing in long queues.",
    desc_hi: "बिना लंबी लाइनों में खड़े हुए नगर पालिका और पीएचईडी पानी के बिलों का ऑनलाइन भुगतान करें।",
    overview_en: "Easily pay water supply bills issued by the Public Health Engineering Department (PHED) of Rajasthan.",
    overview_hi: "राजस्थान के जन स्वास्थ्य अभियांत्रिकी विभाग (PHED) द्वारा जारी जल आपूर्ति बिलों का आसानी से भुगतान करें।",
    benefits_en: ["Quick processing", "Avoid disconnection", "Official digital confirmation", "Accessible record database"],
    benefits_hi: ["त्वरित प्रसंस्करण", "कनेक्शन कटने से बचाव", "आधिकारिक डिजिटल पुष्टि", "सुलभ रिकॉर्ड डेटाबेस"],
    docs_en: ["Water Bill copy (with Bill ID/Connection Number)"],
    docs_hi: ["पानी के बिल की प्रति (बिल आईडी/कनेक्शन नंबर के साथ)"],
    time_en: "Instant (5 Minutes)",
    time_hi: "तुरंत (5 मिनट)",
    faq_en: [
      { q: "Can I pay overdue bills?", a: "Yes, overdue bills with surcharge can also be paid here." }
    ],
    faq_hi: [
      { q: "क्या मैं अतिदेय बिलों का भुगतान कर सकता हूँ?", a: "हाँ, अधिभार (सरचार्ज) के साथ अतिदेय बिलों का भुगतान भी यहाँ किया जा सकता है।" }
    ]
  },
  {
    id: "aadhaar_ekyc",
    icon: "fingerprint",
    name_en: "Aadhaar e-KYC",
    name_hi: "आधार ई-केवाईसी",
    desc_en: "Biometric and OTP-based Aadhaar verification for mobile connection, bank accounts, and schemes.",
    desc_hi: "मोबाइल कनेक्शन, बैंक खातों और योजनाओं के लिए बायोमेट्रिक और ओटीपी-आधारित आधार सत्यापन।",
    overview_en: "Authenticate your Aadhaar details securely through biometric fingerprints or mobile OTP for various verification purposes.",
    overview_hi: "विभिन्न सत्यापन उद्देश्यों के लिए बायोमेट्रिक फिंगरप्रिंट या मोबाइल ओटीपी के माध्यम से अपने आधार विवरण को सुरक्षित रूप से प्रमाणित करें।",
    benefits_en: ["Enables fast scheme eligibility", "Protects against identity theft", "Instant authentication feedback"],
    benefits_hi: ["योजना पात्रता तेजी से सक्रिय करता है", "पहचान की चोरी से बचाता है", "त्वरित प्रमाणीकरण प्रतिक्रिया"],
    docs_en: ["Aadhaar Card", "Registered Mobile Number (active for OTP)", "Biometric presence of user (if fingerprint required)"],
    docs_hi: ["आधार कार्ड", "पंजीकृत मोबाइल नंबर (ओटीपी के लिए सक्रिय)", "उपयोगकर्ता की बायोमेट्रिक उपस्थिति (यदि फिंगरप्रिंट की आवश्यकता हो)"],
    time_en: "Instant (5-10 Minutes)",
    time_hi: "तुरंत (5-10 मिनट)",
    faq_en: [
      { q: "What if my mobile is not linked to Aadhaar?", a: "We can do biometric fingerprint verification if your mobile number is not registered." }
    ],
    faq_hi: [
      { q: "यदि मेरा मोबाइल आधार से लिंक नहीं है तो क्या होगा?", a: "यदि आपका मोबाइल नंबर पंजीकृत नहीं है तो हम बायोमेट्रिक फिंगरप्रिंट सत्यापन कर सकते हैं।" }
    ]
  },
  {
    id: "pension_ekyc",
    icon: "users",
    name_en: "Pension e-KYC & Life Certificate",
    name_hi: "पेंशन ई-केवाईसी और जीवन प्रमाण पत्र",
    desc_en: "Annual biometric validation for social security pensions to ensure uninterrupted payouts.",
    desc_hi: "सामाजिक सुरक्षा पेंशन के लिए वार्षिक बायोमेट्रिक सत्यापन ताकि निर्बाध भुगतान सुनिश्चित हो सके।",
    overview_en: "Mandatory annual verification for senior citizens, widows, and disabled pensioners in Rajasthan (RajSSP).",
    overview_hi: "राजस्थान में वरिष्ठ नागरिकों, विधवाओं और विकलांग पेंशनभोगियों (RajSSP) के लिए अनिवार्य वार्षिक सत्यापन।",
    benefits_en: ["Avoid stoppage of pension", "Direct digital submission to RajSSP portal", "Biometric / Iris scan support available"],
    benefits_hi: ["पेंशन रुकने से बचाव", "RajSSP पोर्टल पर सीधा डिजिटल सबमिशन", "बायोमेट्रिक / आईरिस स्कैन सुविधा उपलब्ध"],
    docs_en: ["Jan Aadhaar Card", "Aadhaar Card", "Pensioner PPO Number", "Pensioner must be physically present for fingerprint scanning"],
    docs_hi: ["जन आधार कार्ड", "आधार कार्ड", "पेंशनर पीपीओ नंबर", "फिंगरप्रिंट स्कैनिंग के लिए पेंशनभोगी को शारीरिक रूप से उपस्थित होना होगा"],
    time_en: "10 Minutes",
    time_hi: "10 मिनट",
    faq_en: [
      { q: "When is the pension verification done?", a: "It is generally done every year between November and December." }
    ],
    faq_hi: [
      { q: "पेंशन का सत्यापन कब किया जाता है?", a: "यह आमतौर पर हर साल नवंबर और दिसंबर के बीच किया जाता है।" }
    ]
  },
  {
    id: "rte_admission",
    icon: "graduation-cap",
    name_en: "RTE Admission Forms",
    name_hi: "आरटीई प्रवेश फॉर्म",
    desc_en: "Free school admission application under Right to Education (RTE) Act for eligible children.",
    desc_hi: "योग्य बच्चों के लिए शिक्षा का अधिकार (आरटीई) अधिनियम के तहत मुफ्त स्कूल प्रवेश आवेदन।",
    overview_en: "Complete submission for 25% free seats reservation in private schools for children from weak socio-economic backgrounds.",
    overview_hi: "कमजोर सामाजिक-आर्थिक पृष्ठभूमि के बच्चों के लिए निजी स्कूलों में 25% मुफ्त सीटों के आरक्षण के लिए पूर्ण आवेदन सबमिशन।",
    benefits_en: ["Free education in top private schools", "Professional form filling to avoid errors", "School selection guidance"],
    benefits_hi: ["शीर्ष निजी स्कूलों में मुफ्त शिक्षा", "त्रुटियों से बचने के लिए पेशेवर फॉर्म भरना", "स्कूल चयन मार्गदर्शन"],
    docs_en: ["Child's Birth Certificate", "Aadhaar Card of Child & Parents", "Income Certificate of Parents", "Domicile Certificate (Native)", "Caste Certificate (if applicable)"],
    docs_hi: ["बच्चे का जन्म प्रमाण पत्र", "बच्चे और माता-पिता का आधार कार्ड", "माता-पिता का आय प्रमाण पत्र", "मूल निवास प्रमाण पत्र", "जाति प्रमाण पत्र (यदि लागू हो)"],
    time_en: "15-20 Minutes",
    time_hi: "15-20 मिनट",
    faq_en: [
      { q: "What is the age limit for RTE?", a: "Usually 5 to 7 years for class 1 admission. It depends on state notifications." }
    ],
    faq_hi: [
      { q: "आरटीई के लिए आयु सीमा क्या है?", a: "आमतौर पर कक्षा 1 में प्रवेश के लिए 5 से 7 वर्ष। यह राज्य की अधिसूचनाओं पर निर्भर करता है।" }
    ]
  },
  {
    id: "govt_schemes",
    icon: "file-text",
    name_en: "Government Scheme Form Filling",
    name_hi: "सरकारी योजना फॉर्म भरना",
    desc_en: "Online registration for PM Kisan, Indira Gandhi Pension, Chiranjeevi Yojana, and state schemes.",
    desc_hi: "पीएम किसान, इंदिरा गांधी पेंशन, चिरंजीवी योजना और राज्य की योजनाओं के लिए ऑनलाइन पंजीकरण।",
    overview_en: "Complete application support for central and state government welfare schemes.",
    overview_hi: "केंद्र और राज्य सरकार की कल्याणकारी योजनाओं के लिए पूर्ण आवेदन सहायता।",
    benefits_en: ["Accurate data entry", "Direct benefit transfers (DBT) setup", "Track scheme progress"],
    benefits_hi: ["सटीक डेटा प्रविष्टि", "प्रत्यक्ष लाभ हस्तांतरण (DBT) सेटअप", "योजना की प्रगति को ट्रैक करें"],
    docs_en: ["Jan Aadhaar Card", "Aadhaar Card", "Bank Account Details", "Mobile Number linked to Aadhaar", "Scheme specific documents"],
    docs_hi: ["जन आधार कार्ड", "आधार कार्ड", "बैंक खाता विवरण", "आधार से लिंक मोबाइल नंबर", "योजना विशिष्ट दस्तावेज"],
    time_en: "15-30 Minutes",
    time_hi: "15-30 मिनट",
    faq_en: [
      { q: "How do I receive scheme benefits?", a: "Most schemes transfer benefits directly to your bank account linked with Jan Aadhaar/Aadhaar." }
    ],
    faq_hi: [
      { q: "मुझे योजना का लाभ कैसे प्राप्त होगा?", a: "अधिकांश योजनाएँ आपके जन आधार/आधार से जुड़े बैंक खाते में सीधे लाभ स्थानांतरित करती हैं।" }
    ]
  },
  {
    id: "birth_cert",
    icon: "baby",
    name_en: "Birth Certificate",
    name_hi: "जन्म प्रमाण पत्र",
    desc_en: "Application assistance for official municipal/rural birth registration certificates.",
    desc_hi: "आधिकारिक नगरपालिका/ग्रामीण जन्म पंजीकरण प्रमाणपत्रों के लिए आवेदन सहायता।",
    overview_en: "Apply for a government-recognized Birth Certificate through Pehchan Portal Rajasthan.",
    overview_hi: "पहचान पोर्टल राजस्थान के माध्यम से सरकार द्वारा मान्यता प्राप्त जन्म प्रमाण पत्र के लिए आवेदन करें।",
    benefits_en: ["Legal proof of age", "Required for school admissions", "Helpful for obtaining Aadhaar/Passport"],
    benefits_hi: ["आयु का कानूनी प्रमाण", "स्कूल में प्रवेश के लिए आवश्यक", "आधार/पासपोर्ट प्राप्त करने के लिए सहायक"],
    docs_en: ["Hospital Birth Report Slip", "Aadhaar Card of Parents", "Jan Aadhaar Card", "Joint Affidavit of parents (if delayed registration)"],
    docs_hi: ["अस्पताल जन्म रिपोर्ट पर्ची", "माता-पिता का आधार कार्ड", "जन आधार कार्ड", "माता-पिता का संयुक्त शपथ पत्र (यदि देरी से पंजीकरण हुआ है)"],
    time_en: "3-7 Working Days",
    time_hi: "3-7 कार्य दिवस",
    faq_en: [
      { q: "Can I apply if the child was born at home?", a: "Yes, an affidavit and statements from neighbors/ward member are required." }
    ],
    faq_hi: [
      { q: "यदि बच्चे का जन्म घर पर हुआ हो तो क्या मैं आवेदन कर सकता हूँ?", a: "हाँ, इसके लिए एक शपथ पत्र और पड़ोसियों/वार्ड सदस्य के बयानों की आवश्यकता होती है।" }
    ]
  },
  {
    id: "death_cert",
    icon: "file-heart",
    name_en: "Death Certificate",
    name_hi: "मृत्यु प्रमाण पत्र",
    desc_en: "Registration and application support for municipal/Panchayat death certificates.",
    desc_hi: "नगर पालिका/पंचायत मृत्यु प्रमाण पत्रों के लिए पंजीकरण और आवेदन सहायता।",
    overview_en: "Official documentation assistance to register a death and obtain legal death certificates via Pehchan Portal.",
    overview_hi: "मृत्यु दर्ज करने और पहचान पोर्टल के माध्यम से कानूनी मृत्यु प्रमाण पत्र प्राप्त करने के लिए आधिकारिक दस्तावेज सहायता।",
    benefits_en: ["Required for insurance claims", "Settlement of property/bank accounts", "Legal closure"],
    benefits_hi: ["बीमा दावों के लिए आवश्यक", "संपत्ति/बैंक खातों का निपटान", "कानूनी औपचारिकता"],
    docs_en: ["Hospital Death Summary (or cremation slip)", "Aadhaar Card of Deceased", "Aadhaar Card of Applicant", "Jan Aadhaar Card"],
    docs_hi: ["अस्पताल मृत्यु सारांश (या श्मशान पर्ची)", "मृतक का आधार कार्ड", "आवेदक का आधार कार्ड", "जन आधार कार्ड"],
    time_en: "3-7 Working Days",
    time_hi: "3-7 कार्य दिवस",
    faq_en: [
      { q: "Who can apply?", a: "Any immediate family member or relative can apply with proof of relationship." }
    ],
    faq_hi: [
      { q: "कौन आवेदन कर सकता है?", a: "कोई भी करीबी परिवार का सदस्य या रिश्तेदार रिश्ते के प्रमाण के साथ आवेदन कर सकता है।" }
    ]
  },
  {
    id: "domicile_cert",
    icon: "home",
    name_en: "Native (Domicile) Certificate",
    name_hi: "मूल निवास प्रमाण पत्र",
    desc_en: "Apply for 'Mool Niwas' certificate proving permanent residence in Rajasthan.",
    desc_hi: "राजस्थान में स्थायी निवास साबित करने वाले 'मूल निवास' प्रमाण पत्र के लिए आवेदन करें।",
    overview_en: "Apply for Bonafide Resident Certificate issued by Tehsildar or Sub-Divisional Magistrate.",
    overview_hi: "तहसीलदार या उप-विभागीय मजिस्ट्रेट द्वारा जारी मूल निवास (बोनाफाइड रेसिडेंट) प्रमाण पत्र के लिए आवेदन करें।",
    benefits_en: ["Required for state govt jobs", "School/college admissions", "State scholarship eligibility"],
    benefits_hi: ["राज्य सरकार की नौकरियों के लिए आवश्यक", "स्कूल/कॉलेज में प्रवेश के लिए", "राज्य छात्रवृत्ति पात्रता"],
    docs_en: ["Jan Aadhaar Card", "Aadhaar Card", "Ration Card / Electricity Bill (Old record)", "Land papers or continuous 10 years address proof in state", "Self Declaration / Affidavit Form"],
    docs_hi: ["जन आधार कार्ड", "आधार कार्ड", "राशन कार्ड / बिजली बिल (पुराना रिकॉर्ड)", "भूमि के कागजात या राज्य में लगातार 10 साल का पता प्रमाण", "स्व-घोषणा / शपथ पत्र फॉर्म"],
    time_en: "7-15 Working Days",
    time_hi: "7-15 कार्य दिवस",
    faq_en: [
      { q: "Is native certificate lifetime valid?", a: "Yes, domicile certificate is permanent and generally has lifetime validity unless details change." }
    ],
    faq_hi: [
      { q: "क्या मूल निवास प्रमाण पत्र आजीवन वैध रहता है?", a: "हाँ, मूल निवास प्रमाण पत्र स्थायी होता है और आमतौर पर आजीवन वैध रहता है जब तक कि विवरण न बदले।" }
    ]
  },
  {
    id: "income_cert",
    icon: "wallet",
    name_en: "Income Certificate",
    name_hi: "आय प्रमाण पत्र",
    desc_en: "Official income certificate certified by gazetted officers for scholarships and fee concessions.",
    desc_hi: "छात्रवृत्ति और शुल्क रियायत के लिए राजपत्रित अधिकारियों द्वारा प्रमाणित आधिकारिक आय प्रमाण पत्र।",
    overview_en: "Get an Income Certificate filled and submitted online for student scholarships, admissions, or subsidised services.",
    overview_hi: "छात्र छात्रवृत्ति, प्रवेश, या सब्सिडी वाली सेवाओं के लिए एक आय प्रमाण पत्र ऑनलाइन भरें और जमा करें।",
    benefits_en: ["Essential for getting scholarship benefits", "Tuition fee waiver schemes eligibility", "Welfare card applications"],
    benefits_hi: ["छात्रवृत्ति लाभ प्राप्त करने के लिए आवश्यक", "ट्यूशन शुल्क माफी योजनाओं की पात्रता", "कल्याणकारी कार्ड आवेदन"],
    docs_en: ["Jan Aadhaar Card", "Aadhaar Card of family head", "Income declaration form signed by 2 Gazetted Officers", "Latest Income Tax Return (if salaried)", "Ration Card"],
    docs_hi: ["जन आधार कार्ड", "परिवार के मुखिया का आधार कार्ड", "2 राजपत्रित अधिकारियों द्वारा हस्ताक्षरित आय घोषणा पत्र", "नवीनतम आयकर रिटर्न (यदि वेतनभोगी हो)", "राशन कार्ड"],
    time_en: "3-5 Working Days",
    time_hi: "3-5 कार्य दिवस",
    faq_en: [
      { q: "What is the validity?", a: "Generally, an income certificate is valid for 6 months to 1 year depending on usage." }
    ],
    faq_hi: [
      { q: "इसकी वैधता क्या है?", a: "आमतौर पर, उपयोग के आधार पर आय प्रमाण पत्र 6 महीने से 1 वर्ष के लिए वैध होता है।" }
    ]
  },
  {
    id: "caste_cert",
    icon: "shield",
    name_en: "Caste Certificate",
    name_hi: "जाति प्रमाण पत्र",
    desc_en: "Apply for OBC, SC, ST, or EWS category certificates for education and employment reservations.",
    desc_hi: "शिक्षा और रोजगार आरक्षण के लिए ओबीसी, एससी, एसटी या ईडब्ल्यूएस श्रेणी के प्रमाण पत्रों के लिए आवेदन करें।",
    overview_en: "Official caste certificates issued by the Revenue Department of Rajasthan for reservations and eligibility.",
    overview_hi: "आरक्षण और पात्रता के लिए राजस्थान के राजस्व विभाग द्वारा जारी आधिकारिक जाति प्रमाण पत्र।",
    benefits_en: ["Education seats reservation", "Relaxation in govt job exams", "Eligibility for specific welfare schemes"],
    benefits_hi: ["शिक्षा सीटों में आरक्षण", "सरकारी नौकरी परीक्षाओं में छूट", "विशिष्ट कल्याणकारी योजनाओं की पात्रता"],
    docs_en: ["Jan Aadhaar Card", "Aadhaar Card", "Caste proof of father (old land records/certificates)", "Affidavit & declaration form", "Domicile Certificate"],
    docs_hi: ["जन आधार कार्ड", "आधार कार्ड", "पिता का जाति प्रमाण (पुराने भूमि रिकॉर्ड/प्रमाणपत्र)", "शपथ पत्र और घोषणा पत्र", "मूल निवास प्रमाण पत्र"],
    time_en: "5-10 Working Days",
    time_hi: "5-10 कार्य दिवस",
    faq_en: [
      { q: "Is Central Caste Certificate different?", a: "Yes, central government format is separate from state. We assist in both state and central certificates." }
    ],
    faq_hi: [
      { q: "क्या केंद्रीय जाति प्रमाण पत्र अलग है?", a: "हाँ, केंद्र सरकार का प्रारूप राज्य से अलग है। हम राज्य और केंद्र दोनों प्रमाणपत्रों में सहायता करते हैं।" }
    ]
  },
  {
    id: "jan_aadhaar",
    icon: "credit-card",
    name_en: "Jan Aadhaar Services",
    name_hi: "जन आधार सेवाएं",
    desc_en: "Create new Jan Aadhaar card, add/remove family members, or update bank account details.",
    desc_hi: "नया जन आधार कार्ड बनाएं, परिवार के सदस्यों को जोड़ें/हटाएं, या बैंक खाता विवरण अपडेट करें।",
    overview_en: "Manage your Rajasthan family identity card which acts as a single identifier for all state welfare schemes.",
    overview_hi: "अपने राजस्थान परिवार पहचान पत्र को प्रबंधित करें जो सभी राज्य कल्याणकारी योजनाओं के लिए एकमात्र पहचानकर्ता के रूप में कार्य करता है।",
    benefits_en: ["Essential for Rajasthan government schemes", "Direct transfer of subsidy to female head", "Single family database"],
    benefits_hi: ["राजस्थान सरकार की योजनाओं के लिए आवश्यक", "महिला मुखिया को सीधे सब्सिडी का हस्तांतरण", "एकल परिवार डेटाबेस"],
    docs_en: ["Aadhaar cards of all family members", "Bank Account Passbook of female head", "Mobile number linked to Aadhaar", "Photo of female head"],
    docs_hi: ["परिवार के सभी सदस्यों का आधार कार्ड", "महिला मुखिया की बैंक खाता पासबुक", "आधार से लिंक मोबाइल नंबर", "महिला मुखिया की फोटो"],
    time_en: "10-15 Working Days (Approval cycle)",
    time_hi: "10-15 कार्य दिवस (स्वीकृति चक्र)",
    faq_en: [
      { q: "Can I add a newborn baby in Jan Aadhaar?", a: "Yes, you need the child's Birth Certificate and Aadhaar (if made) or birth report." }
    ],
    faq_hi: [
      { q: "क्या मैं जन आधार में नवजात शिशु को जोड़ सकता हूँ?", a: "हाँ, आपको बच्चे के जन्म प्रमाण पत्र और आधार (यदि बना हो) या जन्म रिपोर्ट की आवश्यकता होगी।" }
    ]
  },
  {
    id: "pan_card",
    icon: "id-card",
    name_en: "PAN Card Assistance",
    name_hi: "पैन कार्ड सहायता",
    desc_en: "Apply for a new Permanent Account Number (PAN) or correct details on an existing PAN card.",
    desc_hi: "नए स्थायी खाता संख्या (PAN) के लिए आवेदन करें या मौजूदा पैन कार्ड में विवरण सुधारें।",
    overview_en: "Get assistance for income tax PAN cards (via NSDL/UTI) for personal or business transactions.",
    overview_hi: "व्यक्तिगत या व्यावसायिक लेनदेन के लिए आयकर पैन कार्ड (NSDL/UTI के माध्यम से) के लिए सहायता प्राप्त करें।",
    benefits_en: ["Required for opening bank accounts", "Mandatory for tax filing", "Official government ID proof"],
    benefits_hi: ["बैंक खाते खोलने के लिए आवश्यक", "कर दाखिल करने के लिए अनिवार्य", "आधिकारिक सरकारी पहचान प्रमाण"],
    docs_en: ["Aadhaar Card (with correct date of birth)", "Two passport-size photos (if physical application)", "Registered Mobile Number"],
    docs_hi: ["आधार कार्ड (सही जन्म तिथि के साथ)", "दो पासपोर्ट आकार के फोटो (यदि भौतिक आवेदन हो)", "पंजीकृत मोबाइल नंबर"],
    time_en: "Instant e-PAN in 2 hours; Physical card 7-10 Days",
    time_hi: "2 घंटे में तत्काल ई-पैन; भौतिक कार्ड 7-10 दिन",
    faq_en: [
      { q: "Can we correct name spelling?", a: "Yes, corrections can be made matching the exact details in Aadhaar card." }
    ],
    faq_hi: [
      { q: "क्या हम नाम की स्पेलिंग ठीक कर सकते हैं?", a: "हाँ, आधार कार्ड में सटीक विवरण से मिलान करके सुधार किया जा सकता है।" }
    ]
  },
  {
    id: "all_emitra",
    icon: "cpu",
    name_en: "All E-Mitra Services",
    name_hi: "सभी प्रकार की ई-मित्र सेवाएं",
    desc_en: "Complete digital and online services under one roof (Police verification, land records, SSO ID).",
    desc_hi: "एक ही छत के नीचे संपूर्ण डिजिटल और ऑनलाइन सेवाएं (पुलिस सत्यापन, भूमि रिकॉर्ड, एसएसओ आईडी)।",
    overview_en: "Access 500+ government and utility services licensed by the Department of Information Technology & Communication, Rajasthan.",
    overview_hi: "सूचना प्रौद्योगिकी एवं संचार विभाग, राजस्थान द्वारा लाइसेंस प्राप्त 500+ सरकारी और जनोपयोगी सेवाओं का लाभ उठाएं।",
    benefits_en: ["One stop shop for all legal filings", "Authorized government partner portal", "Verified receipts for peace of mind"],
    benefits_hi: ["सभी कानूनी फाइलिंग के लिए वन-स्टॉप शॉप", "अधिकृत सरकारी भागीदार पोर्टल", "मन की शांति के लिए सत्यापित रसीदें"],
    docs_en: ["Depends on service. Contact us with your specific requirement."],
    docs_hi: ["सेवा पर निर्भर करता है। अपनी विशिष्ट आवश्यकता के साथ हमसे संपर्क करें।"],
    time_en: "Depends on service",
    time_hi: "सेवा पर निर्भर करता है",
    faq_en: [
      { q: "Are you open on Sundays?", a: "Sundays are open as per urgency or availability. Please call before visiting." }
    ],
    faq_hi: [
      { q: "क्या आप रविवार को खुलते हैं?", a: "रविवार तात्कालिकता या उपलब्धता के अनुसार खुलते हैं। कृपया आने से पहले कॉल करें।" }
    ]
  }
];

// -------------------------------------------------------------
// 3. Initial Mock Data for Schemes, Applications, and Reviews
// -------------------------------------------------------------
const initialSchemes = [
  {
    id: "sch_1",
    date: "2026-07-02",
    category_en: "Scholarship",
    category_hi: "छात्रवृत्ति",
    title_en: "Rajasthan Post-Matric Scholarship Scheme 2026 Open",
    title_hi: "राजस्थान पोस्ट-मैट्रिक छात्रवृत्ति योजना 2026 शुरू",
    desc_en: "Online applications have started for SC, ST, OBC, and EWS students. Last date to apply is August 31, 2026. Submit your Jan Aadhaar and income proof today.",
    desc_hi: "एससी, एसटी, ओबीसी और ईडब्ल्यूएस छात्रों के लिए ऑनलाइन आवेदन शुरू हो गए हैं। आवेदन की अंतिम तिथि 31 अगस्त, 2026 है। अपना जन आधार और आय प्रमाण आज ही जमा करें।"
  },
  {
    id: "sch_2",
    date: "2026-06-28",
    category_en: "Education",
    category_hi: "शिक्षा",
    title_en: "RTE Free Admission Portal Phase 2 Lottery Declared",
    title_hi: "आरटीई नि:शुल्क प्रवेश पोर्टल चरण 2 लॉटरी घोषित",
    desc_en: "RTE Rajasthan Free Admissions Lottery results are out. Parents can check selected schools list using receipt code or phone number. Final school reports due by July 15.",
    desc_hi: "आरटीई राजस्थान नि:शुल्क प्रवेश लॉटरी परिणाम घोषित कर दिए गए हैं। माता-पिता रसीद कोड या फोन नंबर का उपयोग करके चयनित स्कूलों की सूची की जांच कर सकते हैं। स्कूलों में रिपोर्टिंग 15 जुलाई तक।"
  },
  {
    id: "sch_3",
    date: "2026-06-20",
    category_en: "Pension",
    category_hi: "पेंशन",
    title_en: "Mandatory Pension e-KYC Verification Deadline Extended",
    title_hi: "अनिवार्य पेंशन ई-केवाईसी सत्यापन की समय सीमा बढ़ाई गई",
    desc_en: "Social security pensioners who missed the annual biometric verification can complete their verification before July 30 to avoid suspension of pension credits.",
    desc_hi: "सामाजिक सुरक्षा पेंशनभोगी जो वार्षिक बायोमेट्रिक सत्यापन से चूक गए हैं, वे पेंशन क्रेडिट के निलंबन से बचने के लिए 30 जुलाई से पहले अपना सत्यापन पूरा कर सकते हैं।"
  }
];

const initialApplications = [
  {
    id: "EM-554901",
    client: "Rajesh Kumar",
    service: "caste_cert",
    service_name_en: "Caste Certificate",
    service_name_hi: "जाति प्रमाण पत्र",
    date: "2026-06-25",
    status_en: "Approved & Issued",
    status_hi: "स्वीकृत और जारी",
    remarks_en: "Certificate is generated. Please visit shop to collect printed certificate or check email.",
    remarks_hi: "प्रमाणपत्र बन गया है। कृपया प्रिंट आउट लेने के लिए दुकान पर आएं या ईमेल चेक करें।"
  },
  {
    id: "EM-554902",
    client: "Sunita Sharma",
    service: "domicile_cert",
    service_name_en: "Native (Domicile) Certificate",
    service_name_hi: "मूल निवास प्रमाण पत्र",
    date: "2026-06-29",
    status_en: "In Progress",
    status_hi: "प्रक्रिया में है",
    remarks_en: "Forwarded to Tehsildar office. Awaiting digital signature.",
    remarks_hi: "तहसीलदार कार्यालय को प्रेषित किया गया है। डिजिटल हस्ताक्षर की प्रतीक्षा है।"
  },
  {
    id: "EM-554903",
    client: "Mahendra Singh",
    service: "jan_aadhaar",
    service_name_en: "Jan Aadhaar Services",
    service_name_hi: "जन आधार सेवाएं",
    date: "2026-07-01",
    status_en: "Document Pending",
    status_hi: "दस्तावेज़ लंबित",
    remarks_en: "Please submit latest gas connection consumer receipt or land registry papers to proceed.",
    remarks_hi: "आगे की कार्रवाई के लिए कृपया नवीनतम गैस कनेक्शन उपभोक्ता रसीद या भूमि रजिस्ट्री के दस्तावेज जमा करें।"
  }
];

const initialReviews = [
  {
    id: "rev_1",
    name: "Ramesh Choudhary",
    rating: 5,
    text: "Very fast service! I got my domicile and caste certificate filled here. The process was completed in just 6 days. Highly recommended digital center.",
    photo: null,
    approved: true
  },
  {
    id: "rev_2",
    name: "Pooja Meena",
    rating: 5,
    text: "I was confused about RTE admission forms for my child, but they explained all required documents clearly and filled the form correctly. My son got admission in school!",
    photo: null,
    approved: true
  },
  {
    id: "rev_3",
    name: "Gopal Lal Verma",
    rating: 5,
    text: "Punctual work. Checked my pension e-KYC here using fingerprint biometric. It took only 5 minutes. Save time and hassle.",
    photo: null,
    approved: true
  }
];

const initialFAQ = [
  {
    q_en: "Which documents are required for Aadhaar e-KYC?",
    q_hi: "आधार ई-केवाईसी के लिए कौन से दस्तावेज आवश्यक हैं?",
    a_en: "You need your Aadhaar Card and access to your registered mobile number for OTP. If not registered, physical presence of the person is required for biometric fingerprint scanner.",
    a_hi: "आपको अपने आधार कार्ड और ओटीपी के लिए अपने पंजीकृत मोबाइल नंबर की आवश्यकता होगी। यदि पंजीकृत नहीं है, तो बायोमेट्रिक फिंगरप्रिंट स्कैनर के लिए व्यक्ति की शारीरिक उपस्थिति आवश्यक है।"
  },
  {
    q_en: "How long does a Birth Certificate take?",
    q_hi: "जन्म प्रमाण पत्र बनने में कितना समय लगता है?",
    a_en: "It usually takes 3 to 7 working days for processing from municipal/rural development portals after the application is submitted with proper documents.",
    a_hi: "उचित दस्तावेजों के साथ आवेदन जमा करने के बाद नगर पालिका/ग्रामीण विकास पोर्टलों से प्रसंस्करण के लिए आमतौर पर 3 से 7 कार्य दिवस लगते हैं।"
  },
  {
    q_en: "Can I pay electricity and water bills here?",
    q_hi: "क्या मैं यहां बिजली और पानी के बिलों का भुगतान कर सकता हूं?",
    a_en: "Yes, you can pay all types of electricity bills, water supply bills, broadband bills, and DTH recharges. You will receive an instant official stamped digital receipt.",
    a_hi: "हाँ, आप सभी प्रकार के बिजली बिल, पानी के बिल, ब्रॉडबैंड बिल और डीटीएच रिचार्ज का भुगतान कर सकते हैं। आपको तत्काल एक आधिकारिक मुहर लगी डिजिटल रसीद प्राप्त होगी।"
  },
  {
    q_en: "Do you help with RTE forms?",
    q_hi: "क्या आप आरटीई फॉर्म भरने में मदद करते हैं?",
    a_en: "Yes, we handle complete RTE admissions form filling, including school selections, uploading income and address certificates, and generating confirmation printouts.",
    a_hi: "हाँ, हम स्कूलों के चयन, आय और पते के प्रमाण पत्र अपलोड करने, और पुष्टिकरण प्रिंटआउट बनाने सहित संपूर्ण आरटीई प्रवेश फॉर्म भरने की प्रक्रिया संभालते हैं।"
  },
  {
    q_en: "What government schemes are available?",
    q_hi: "कौन-कौन सी सरकारी योजनाएं उपलब्ध हैं?",
    a_en: "We support registrations for all major state and central schemes including PM-Kisan, Social Security Pension, Chiranjeevi Health Scheme, Shramik Card, and student scholarships.",
    a_hi: "हम पीएम-किसान, सामाजिक सुरक्षा पेंशन, चिरंजीवी स्वास्थ्य योजना, श्रमिक कार्ड और छात्र छात्रवृत्ति सहित सभी प्रमुख राज्य और केंद्रीय योजनाओं के लिए पंजीकरण का समर्थन करते हैं।"
  },
  {
    q_en: "What are your working hours?",
    q_hi: "आपके कार्य करने का समय क्या है?",
    a_en: "We are open Monday to Saturday from 9:00 AM to 7:00 PM. On Sundays, we are available on-call depending on emergency requirements.",
    a_hi: "हम सोमवार से शनिवार सुबह 9:00 बजे से शाम 7:00 बजे तक खुले रहते हैं। रविवार को, हम आपातकालीन आवश्यकताओं के आधार पर ऑन-कॉल उपलब्ध हैं।"
  }
];

// -------------------------------------------------------------
// 4. App State Initializer
// -------------------------------------------------------------
let currentLang = localStorage.getItem("emitra_lang") || "en";
let isDarkMode = localStorage.getItem("emitra_dark") === "true";
let isAdminLoggedIn = sessionStorage.getItem("emitra_admin") === "true";

// Initialize localStorage if empty
if (!localStorage.getItem("emitra_schemes")) {
  localStorage.setItem("emitra_schemes", JSON.stringify(initialSchemes));
}
if (!localStorage.getItem("emitra_applications")) {
  localStorage.setItem("emitra_applications", JSON.stringify(initialApplications));
}
if (!localStorage.getItem("emitra_reviews")) {
  localStorage.setItem("emitra_reviews", JSON.stringify(initialReviews));
}
if (!localStorage.getItem("emitra_apts")) {
  localStorage.setItem("emitra_apts", JSON.stringify([]));
}
if (!localStorage.getItem("emitra_support")) {
  localStorage.setItem("emitra_support", JSON.stringify([]));
}

// -------------------------------------------------------------
// 5. Utility Functions
// -------------------------------------------------------------
function getSchemes() {
  return JSON.parse(localStorage.getItem("emitra_schemes"));
}
function getApplications() {
  return JSON.parse(localStorage.getItem("emitra_applications"));
}
function getReviews() {
  return JSON.parse(localStorage.getItem("emitra_reviews"));
}
function getAppointments() {
  return JSON.parse(localStorage.getItem("emitra_apts"));
}
function getSupportQueries() {
  return JSON.parse(localStorage.getItem("emitra_support"));
}

// Set up UI translations
function applyLanguage() {
  const dictionary = translations[currentLang];
  document.querySelectorAll("[data-translate]").forEach(elem => {
    const key = elem.getAttribute("data-translate");
    if (dictionary[key]) {
      if (elem.tagName === "INPUT" || elem.tagName === "TEXTAREA") {
        elem.placeholder = dictionary[key];
      } else {
        elem.textContent = dictionary[key];
      }
    }
  });

  // Special translation updates
  document.getElementById("html-lang").setAttribute("lang", currentLang);
  document.getElementById("lang-select").value = currentLang;
  
  // Render Dynamic Content under new language
  renderServices();
  renderDocsDropdown();
  renderSchemesGrid();
  renderReviewsList();
  renderFAQs();
  
  if (isAdminLoggedIn) {
    renderAdminDashboard();
  }
}

// Toggle Theme (Dark / Light)
function applyTheme() {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    document.getElementById("theme-toggle-icon").setAttribute("data-lucide", "sun");
  } else {
    document.documentElement.classList.remove("dark");
    document.getElementById("theme-toggle-icon").setAttribute("data-lucide", "moon");
  }
  localStorage.setItem("emitra_dark", isDarkMode);
  if (window.lucide) lucide.createIcons();
}

// -------------------------------------------------------------
// 6. View Rendering Functions
// -------------------------------------------------------------

// Render Services Section Grid
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;
  grid.innerHTML = "";

  servicesData.forEach(service => {
    const name = currentLang === "en" ? service.name_en : service.name_hi;
    const desc = currentLang === "en" ? service.desc_en : service.desc_hi;
    
    const card = document.createElement("div");
    card.className = "glass hover-glow p-6 rounded-2xl relative flex flex-col justify-between overflow-hidden group cursor-pointer border border-slate-200/50 dark:border-slate-800/50";
    card.setAttribute("onclick", `openServiceModal('${service.id}')`);
    
    // Custom blue/saffron icon color styles
    card.innerHTML = `
      <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-saffron/10 to-brand-blue/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-300"></div>
      <div>
        <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800/80 text-brand-blue dark:text-brand-saffron flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-200">
          <i data-lucide="${service.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2 leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-saffron transition-colors duration-200">${name}</h3>
        <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">${desc}</p>
      </div>
      <div class="flex items-center text-brand-blue dark:text-brand-saffron font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
        <span class="mr-2" data-translate="learnMore">${translations[currentLang].learnMore}</span>
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </div>
    `;
    grid.appendChild(card);
  });
  if (window.lucide) lucide.createIcons();
}

// Render Services Selector in Document Checker
function renderDocsDropdown() {
  const select = document.getElementById("docs-service-select");
  if (!select) return;
  
  const savedValue = select.value;
  select.innerHTML = `<option value="">-- ${translations[currentLang].selectService} --</option>`;
  
  servicesData.forEach(service => {
    const name = currentLang === "en" ? service.name_en : service.name_hi;
    const option = document.createElement("option");
    option.value = service.id;
    option.textContent = name;
    select.appendChild(option);
  });
  
  if (savedValue) {
    select.value = savedValue;
  }
}

// Search and Display Documents
function checkDocuments() {
  const select = document.getElementById("docs-service-select");
  const resultDiv = document.getElementById("docs-result-container");
  if (!select || !resultDiv) return;

  const serviceId = select.value;
  if (!serviceId) {
    resultDiv.classList.add("hidden");
    return;
  }

  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;

  resultDiv.classList.remove("hidden");
  
  const docsList = currentLang === "en" ? service.docs_en : service.docs_hi;
  const time = currentLang === "en" ? service.time_en : service.time_hi;
  const serviceName = currentLang === "en" ? service.name_en : service.name_hi;

  let docsHTML = "";
  docsList.forEach(doc => {
    docsHTML += `<li class="flex items-start text-sm md:text-base mb-2 text-slate-700 dark:text-slate-300">
      <i data-lucide="check-circle-2" class="w-5 h-5 mr-3 text-brand-saffron flex-shrink-0 mt-0.5"></i>
      <span>${doc}</span>
    </li>`;
  });

  resultDiv.innerHTML = `
    <div class="glass p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-slate-800">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 rounded-lg bg-brand-saffron/10 text-brand-saffron flex items-center justify-center">
          <i data-lucide="${service.icon}" class="w-5 h-5"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-800 dark:text-white">${serviceName}</h3>
      </div>
      
      <div class="mb-6">
        <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center text-sm uppercase tracking-wider">
          <span data-translate="docsNeeded">${translations[currentLang].docsNeeded}</span>
        </h4>
        <ul class="pl-1">${docsHTML}</ul>
      </div>

      <div class="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="text-xs text-slate-500 dark:text-slate-400 block uppercase font-semibold tracking-wider" data-translate="procTime">${translations[currentLang].procTime}</span>
          <span class="text-lg font-bold text-brand-blue dark:text-brand-saffron">${time}</span>
        </div>
        <button onclick="requestAptForService('${serviceId}')" class="px-6 py-2.5 rounded-xl bg-brand-blue dark:bg-brand-saffron text-white text-sm font-semibold hover-glow shadow-md">
          <span data-translate="bookAptBtn">${translations[currentLang].bookAptBtn}</span>
        </button>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

// Render Government Schemes grid
function renderSchemesGrid() {
  const grid = document.getElementById("schemes-container");
  const bannerText = document.getElementById("scheme-banner-text");
  if (!grid) return;
  grid.innerHTML = "";

  const schemes = getSchemes();
  
  // Render notification banner with the latest scheme
  if (bannerText && schemes.length > 0) {
    const latest = schemes[0];
    const latestTitle = currentLang === "en" ? latest.title_en : latest.title_hi;
    bannerText.textContent = latestTitle;
  }

  schemes.forEach(scheme => {
    const title = currentLang === "en" ? scheme.title_en : scheme.title_hi;
    const desc = currentLang === "en" ? scheme.desc_en : scheme.desc_hi;
    const category = currentLang === "en" ? scheme.category_en : scheme.category_hi;
    const dateObj = new Date(scheme.date);
    const dateFormatted = dateObj.toLocaleDateString(currentLang === "en" ? 'en-US' : 'hi-IN', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    const card = document.createElement("div");
    card.className = "glass p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between hover-glow";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-brand-saffron/10 text-brand-saffron">${category}</span>
          <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center">
            <i data-lucide="calendar" class="w-3.5 h-3.5 mr-1"></i>
            ${dateFormatted}
          </span>
        </div>
        <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 leading-snug">${title}</h3>
        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">${desc}</p>
      </div>
      <a href="#contact" onclick="navigateToSection('contact'); document.getElementById('support-subject').value='Query: ${title.replace(/'/g, "\\'")}'" class="flex items-center text-brand-blue dark:text-brand-saffron font-bold text-sm hover:underline">
        <span data-translate="supportTitle">${translations[currentLang].supportTitle}</span>
        <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
      </a>
    `;
    grid.appendChild(card);
  });
  if (window.lucide) lucide.createIcons();
}

// Render Reviews lists
function renderReviewsList() {
  const carousel = document.getElementById("reviews-carousel");
  if (!carousel) return;
  carousel.innerHTML = "";

  const allReviews = getReviews().filter(r => r.approved);
  
  if (allReviews.length === 0) {
    carousel.innerHTML = `<div class="text-center text-slate-500 p-8">No reviews available.</div>`;
    return;
  }

  allReviews.forEach(rev => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rev.rating) {
        stars += `<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>`;
      } else {
        stars += `<i data-lucide="star" class="w-4 h-4 text-slate-300 dark:text-slate-700"></i>`;
      }
    }

    const item = document.createElement("div");
    item.className = "glass p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 min-w-[280px] md:min-w-[350px] max-w-[400px] flex-shrink-0 animate-float";
    
    // Dynamic review image if present
    const photoHTML = rev.photo ? `<div class="mt-4"><img src="${rev.photo}" class="review-img w-full h-32 md:h-40" alt="Review attachment"></div>` : "";

    item.innerHTML = `
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-brand-blue/10 dark:bg-brand-saffron/10 text-brand-blue dark:text-brand-saffron flex items-center justify-center font-bold">
          ${rev.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 class="font-bold text-slate-800 dark:text-white text-sm md:text-base">${rev.name}</h4>
          <span class="text-xs text-brand-blue dark:text-brand-saffron font-semibold flex items-center">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 mr-1"></i>
            <span data-translate="verifiedReview">${translations[currentLang].verifiedReview}</span>
          </span>
        </div>
      </div>
      <div class="flex space-x-1 mb-3">${stars}</div>
      <p class="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed">"${rev.text}"</p>
      ${photoHTML}
    `;
    carousel.appendChild(item);
  });
  if (window.lucide) lucide.createIcons();
}

// Render FAQs accordion
function renderFAQs() {
  const container = document.getElementById("faq-accordion");
  if (!container) return;
  container.innerHTML = "";

  initialFAQ.forEach((faq, index) => {
    const q = currentLang === "en" ? faq.q_en : faq.q_hi;
    const a = currentLang === "en" ? faq.a_en : faq.a_hi;

    const item = document.createElement("div");
    item.className = "border-b border-slate-200/60 dark:border-slate-800/60 py-4";
    item.innerHTML = `
      <button onclick="toggleAccordion(${index})" class="w-full flex items-center justify-between text-left py-2 font-bold text-slate-800 dark:text-white hover:text-brand-blue dark:hover:text-brand-saffron transition-colors duration-200">
        <span>${q}</span>
        <i data-lucide="chevron-down" id="faq-chevron-${index}" class="w-5 h-5 text-slate-500 transition-transform duration-300"></i>
      </button>
      <div id="faq-content-${index}" class="accordion-content">
        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2 pb-2 pl-1">${a}</p>
      </div>
    `;
    container.appendChild(item);
  });
  if (window.lucide) lucide.createIcons();
}

// Toggle FAQ accordion item
window.toggleAccordion = function(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const chevron = document.getElementById(`faq-chevron-${index}`);
  if (!content || !chevron) return;

  const isActive = content.classList.contains("active");
  
  // Close all other active ones
  document.querySelectorAll(".accordion-content").forEach(c => {
    c.classList.remove("active");
  });
  document.querySelectorAll("[id^='faq-chevron-']").forEach(ch => {
    ch.classList.remove("rotate-180");
  });

  if (!isActive) {
    content.classList.add("active");
    chevron.classList.add("rotate-180");
  }
};

// -------------------------------------------------------------
// 7. Navigation Router
// -------------------------------------------------------------
window.navigateToSection = function(sectionId) {
  // Hide active standalone pages, show landing body
  document.getElementById("main-landing-sections").classList.remove("hidden");
  document.getElementById("track-view-page").classList.add("hidden");
  document.getElementById("downloads-view-page").classList.add("hidden");
  document.getElementById("admin-view-page").classList.add("hidden");

  // Remove active navbar state, highlight current tab
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("text-brand-blue", "dark:text-brand-saffron", "font-bold");
  });

  const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add("text-brand-blue", "dark:text-brand-saffron", "font-bold");
  }

  // Smooth scroll
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // height of sticky navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  // Mobile Nav Drawer auto-close
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    toggleMobileMenu();
  }
};

// Routing for standalone pages
window.navigateToPage = function(pageId) {
  // Hide landing and all pages
  document.getElementById("main-landing-sections").classList.add("hidden");
  document.getElementById("track-view-page").classList.add("hidden");
  document.getElementById("downloads-view-page").classList.add("hidden");
  document.getElementById("admin-view-page").classList.add("hidden");

  // Show selected page
  const pageElem = document.getElementById(`${pageId}-view-page`);
  if (pageElem) {
    pageElem.classList.remove("hidden");
  }

  // Remove nav styles
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("text-brand-blue", "dark:text-brand-saffron", "font-bold");
  });

  // Highlight specific page nav if matching
  const activeLink = document.querySelector(`nav a[href="#${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add("text-brand-blue", "dark:text-brand-saffron", "font-bold");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Mobile menu close
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    toggleMobileMenu();
  }
  
  if (pageId === "admin") {
    checkAdminAuth();
  }
};

// -------------------------------------------------------------
// 8. Service Modals (Detailed view)
// -------------------------------------------------------------
window.openServiceModal = function(serviceId) {
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;

  const name = currentLang === "en" ? service.name_en : service.name_hi;
  const overview = currentLang === "en" ? service.overview_en : service.overview_hi;
  const benefits = currentLang === "en" ? service.benefits_en : service.benefits_hi;
  const docs = currentLang === "en" ? service.docs_en : service.docs_hi;
  const time = currentLang === "en" ? service.time_en : service.time_hi;
  const faqs = currentLang === "en" ? service.faq_en : service.faq_hi;

  const modal = document.getElementById("service-modal");
  const modalContent = document.getElementById("service-modal-content");
  if (!modal || !modalContent) return;

  let benefitsHTML = "";
  benefits.forEach(b => {
    benefitsHTML += `<li class="flex items-start text-sm mb-1.5"><i data-lucide="check" class="w-4 h-4 mr-2 text-brand-blue dark:text-brand-saffron mt-0.5"></i><span>${b}</span></li>`;
  });

  let docsHTML = "";
  docs.forEach(d => {
    docsHTML += `<li class="flex items-start text-sm mb-1.5"><i data-lucide="file-text" class="w-4 h-4 mr-2 text-slate-500 mt-0.5"></i><span>${d}</span></li>`;
  });

  let faqsHTML = "";
  faqs.forEach(f => {
    faqsHTML += `
      <div class="mb-3">
        <h5 class="font-bold text-slate-800 dark:text-white text-sm">Q: ${f.q}</h5>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">A: ${f.a}</p>
      </div>
    `;
  });

  modalContent.innerHTML = `
    <div class="flex items-center space-x-3 mb-4">
      <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-brand-blue dark:text-brand-saffron flex items-center justify-center shadow-inner">
        <i data-lucide="${service.icon}" class="w-6 h-6"></i>
      </div>
      <h2 class="text-2xl font-bold text-slate-800 dark:text-white">${name}</h2>
    </div>
    
    <div class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div>
        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Overview</h4>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${overview}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
          <h4 class="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Key Benefits</h4>
          <ul class="text-slate-700 dark:text-slate-300">${benefitsHTML}</ul>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
          <h4 class="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Required Documents</h4>
          <ul class="text-slate-700 dark:text-slate-300">${docsHTML}</ul>
        </div>
      </div>

      <div class="flex justify-between items-center bg-blue-50/50 dark:bg-slate-900 p-4 rounded-xl border border-blue-100/50 dark:border-slate-800">
        <div>
          <span class="text-xs uppercase font-semibold text-slate-500 block">Processing Time</span>
          <span class="text-base font-bold text-brand-blue dark:text-brand-saffron">${time}</span>
        </div>
        <button onclick="requestAptForService('${service.id}')" class="px-5 py-2 rounded-lg bg-brand-blue dark:bg-brand-saffron text-white text-sm font-semibold hover-glow">
          Book Appointment
        </button>
      </div>

      ${faqs.length > 0 ? `
        <div class="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
          <h4 class="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Service FAQs</h4>
          ${faqsHTML}
        </div>
      ` : ""}
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  if (window.lucide) lucide.createIcons();
};

window.closeServiceModal = function() {
  const modal = document.getElementById("service-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

window.requestAptForService = function(serviceId) {
  closeServiceModal();
  navigateToSection("contact");
  // Pre-fill Appointment form
  const select = document.getElementById("apt-service");
  if (select) {
    select.value = serviceId;
  }
};

// -------------------------------------------------------------
// 9. Form Submission Handling (Reviews, Contacts, Appointments)
// -------------------------------------------------------------

// Submit reviews
window.submitReview = function(event) {
  event.preventDefault();
  
  const name = document.getElementById("review-name").value;
  const phone = document.getElementById("review-phone").value;
  const rating = parseInt(document.getElementById("review-rating").value);
  const text = document.getElementById("review-text").value;
  const photoInput = document.getElementById("review-photo");
  
  const thankYouDiv = document.getElementById("review-thankyou-msg");
  const form = document.getElementById("review-form");

  const saveReview = (photoDataUrl = null) => {
    const reviews = getReviews();
    const newRev = {
      id: "rev_" + Date.now(),
      name,
      phone,
      rating,
      text,
      photo: photoDataUrl,
      approved: false // Requires admin approval
    };
    
    reviews.push(newRev);
    localStorage.setItem("emitra_reviews", JSON.stringify(reviews));
    
    // Show verification message
    thankYouDiv.classList.remove("hidden");
    form.reset();
    
    setTimeout(() => {
      thankYouDiv.classList.add("hidden");
    }, 6000);
  };

  // Convert image upload to base64 for mockup persistence
  if (photoInput && photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      saveReview(e.target.result);
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    saveReview(null);
  }
};

// Submit Support Query
window.submitSupport = function(event) {
  event.preventDefault();
  
  const name = document.getElementById("support-name").value;
  const phone = document.getElementById("support-phone").value;
  const subject = document.getElementById("support-subject").value;
  const message = document.getElementById("support-message").value;
  const successDiv = document.getElementById("support-success-msg");
  
  const supportQueries = getSupportQueries();
  const newQuery = {
    id: "query_" + Date.now(),
    name,
    phone,
    subject,
    message,
    date: new Date().toISOString().split("T")[0]
  };

  supportQueries.push(newQuery);
  localStorage.setItem("emitra_support", JSON.stringify(supportQueries));

  successDiv.classList.remove("hidden");
  event.target.reset();

  setTimeout(() => {
    successDiv.classList.add("hidden");
  }, 5000);
};

// Book Appointment
window.submitAppointment = function(event) {
  event.preventDefault();

  const name = document.getElementById("apt-name").value;
  const phone = document.getElementById("apt-phone").value;
  const serviceId = document.getElementById("apt-service").value;
  const date = document.getElementById("apt-date").value;
  const time = document.getElementById("apt-time").value;
  const successDiv = document.getElementById("apt-success-msg");

  const service = servicesData.find(s => s.id === serviceId);
  const serviceName = service ? service.name_en : "General Inquiry";

  const appointments = getAppointments();
  const newApt = {
    id: "apt_" + Date.now(),
    name,
    phone,
    serviceId,
    serviceName,
    date,
    time,
    status: "Pending Approval"
  };

  appointments.push(newApt);
  localStorage.setItem("emitra_apts", JSON.stringify(appointments));

  successDiv.classList.remove("hidden");
  event.target.reset();

  setTimeout(() => {
    successDiv.classList.add("hidden");
  }, 5000);
};

// -------------------------------------------------------------
// 10. Live Application Tracking Checker
// -------------------------------------------------------------
window.trackApplication = function(event) {
  if (event) event.preventDefault();
  
  const input = document.getElementById("track-input");
  const resultDiv = document.getElementById("track-result-details");
  if (!input || !resultDiv) return;

  const appNum = input.value.trim().toUpperCase();
  if (!appNum) return;

  const applications = getApplications();
  const app = applications.find(a => a.id === appNum);

  resultDiv.classList.remove("hidden");

  if (!app) {
    resultDiv.innerHTML = `
      <div class="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-semibold flex items-center border border-red-100 dark:border-red-900/30">
        <i data-lucide="alert-circle" class="w-5 h-5 mr-3 flex-shrink-0"></i>
        <span data-translate="trackNotFound">${translations[currentLang].trackNotFound}</span>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const sName = currentLang === "en" ? app.service_name_en : app.service_name_hi;
  const status = currentLang === "en" ? app.status_en : app.status_hi;
  const remarks = currentLang === "en" ? app.remarks_en : app.remarks_hi;
  
  // Format color based on status
  let statusBadgeColor = "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
  if (app.status_en.includes("Approved") || app.status_en.includes("Issued")) {
    statusBadgeColor = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
  } else if (app.status_en.includes("Pending")) {
    statusBadgeColor = "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400";
  }

  resultDiv.innerHTML = `
    <div class="glass p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 mt-4">
      <h3 class="font-bold text-lg text-slate-800 dark:text-white mb-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
        <span data-translate="navTrack">${translations[currentLang].navTrack}</span>: ${app.id}
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <span class="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xs block font-semibold">Customer Name</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200">${app.client}</span>
        </div>
        <div>
          <span class="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xs block font-semibold" data-translate="appService">${translations[currentLang].appService}</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200">${sName}</span>
        </div>
        <div>
          <span class="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xs block font-semibold" data-translate="appDate">${translations[currentLang].appDate}</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200">${app.date}</span>
        </div>
        <div>
          <span class="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xs block font-semibold" data-translate="appStatus">${translations[currentLang].appStatus}</span>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-bold ${statusBadgeColor} mt-1">${status}</span>
        </div>
      </div>
      
      <div class="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
        <span class="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xs block font-semibold" data-translate="appRemarks">${translations[currentLang].appRemarks}</span>
        <p class="text-slate-700 dark:text-slate-300 text-sm mt-1 leading-relaxed">${remarks}</p>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
};

// -------------------------------------------------------------
// 11. Custom Lightbox Gallery Viewer
// -------------------------------------------------------------
window.openLightbox = function(src, caption) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCap = document.getElementById("lightbox-caption");
  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = src;
  lightboxCap.textContent = caption;
  lightbox.classList.add("active");
};

window.closeLightbox = function() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
  }
};

// -------------------------------------------------------------
// 12. Admin Dashboard Logic
// -------------------------------------------------------------

// Check Admin Logged-In State
function checkAdminAuth() {
  const loginSection = document.getElementById("admin-login-section");
  const dashboardSection = document.getElementById("admin-dashboard-section");

  if (isAdminLoggedIn) {
    loginSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
    renderAdminDashboard();
  } else {
    loginSection.classList.remove("hidden");
    dashboardSection.classList.add("hidden");
  }
}

// Admin Security Login
window.handleAdminLogin = function(event) {
  event.preventDefault();
  const pass = document.getElementById("admin-password-input").value;
  const errorMsg = document.getElementById("admin-login-error");

  // Secure mock password matching business details
  if (pass === "emitra@5549" || pass === "admin") {
    isAdminLoggedIn = true;
    sessionStorage.setItem("emitra_admin", "true");
    errorMsg.classList.add("hidden");
    document.getElementById("admin-password-input").value = "";
    checkAdminAuth();
  } else {
    errorMsg.textContent = translations[currentLang].invalidPass;
    errorMsg.classList.remove("hidden");
  }
};

// Admin Logout
window.handleAdminLogout = function() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem("emitra_admin");
  checkAdminAuth();
};

// Render Admin Sections
function renderAdminDashboard() {
  renderAdminReviews();
  renderAdminAnnouncements();
  renderAdminApplications();
  renderAdminAppointments();
  renderAdminSupportQueries();
}

// 1. Pending reviews administration
function renderAdminReviews() {
  const container = document.getElementById("admin-reviews-list");
  if (!container) return;
  container.innerHTML = "";

  const allReviews = getReviews();
  const pending = allReviews.filter(r => !r.approved);

  if (pending.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-500 py-4">No reviews pending approval.</p>`;
    return;
  }

  pending.forEach(rev => {
    const item = document.createElement("div");
    item.className = "flex items-start justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl mb-3 shadow-sm";
    
    item.innerHTML = `
      <div>
        <div class="flex items-center space-x-2">
          <span class="font-bold text-slate-800 dark:text-white text-sm">${rev.name}</span>
          <span class="text-xs text-slate-500">${rev.phone}</span>
          <span class="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">${rev.rating} ★</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 italic">"${rev.text}"</p>
        ${rev.photo ? `<div class="mt-2"><img src="${rev.photo}" class="h-16 rounded border" /></div>` : ""}
      </div>
      <div class="flex space-x-2 flex-shrink-0">
        <button onclick="approveReview('${rev.id}')" class="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-semibold hover:bg-green-700">Approve</button>
        <button onclick="deleteReview('${rev.id}')" class="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700">Delete</button>
      </div>
    `;
    container.appendChild(item);
  });
}

window.approveReview = function(id) {
  const reviews = getReviews();
  const review = reviews.find(r => r.id === id);
  if (review) {
    review.approved = true;
    localStorage.setItem("emitra_reviews", JSON.stringify(reviews));
    renderAdminReviews();
    renderReviewsList(); // Update frontpage
  }
};

window.deleteReview = function(id) {
  const reviews = getReviews();
  const filtered = reviews.filter(r => r.id !== id);
  localStorage.setItem("emitra_reviews", JSON.stringify(filtered));
  renderAdminReviews();
  renderReviewsList(); // Update frontpage
};

// 2. Announcements administration
function renderAdminAnnouncements() {
  const container = document.getElementById("admin-announcements-list");
  if (!container) return;
  container.innerHTML = "";

  const schemes = getSchemes();

  schemes.forEach(sc => {
    const item = document.createElement("div");
    item.className = "flex items-start justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl mb-3 shadow-sm";
    item.innerHTML = `
      <div class="text-xs">
        <div class="flex items-center space-x-2 mb-1">
          <span class="font-bold text-slate-800 dark:text-white text-sm">${sc.title_en} / ${sc.title_hi}</span>
          <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">${sc.category_en}</span>
        </div>
        <p class="text-slate-600 dark:text-slate-400 mt-1">${sc.desc_en}</p>
        <p class="text-slate-600 dark:text-slate-400 mt-1 font-hindi text-slate-500">${sc.desc_hi}</p>
        <span class="text-[10px] text-slate-400 mt-2 block">Posted: ${sc.date}</span>
      </div>
      <button onclick="deleteScheme('${sc.id}')" class="px-2.5 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 flex-shrink-0 ml-2">Delete</button>
    `;
    container.appendChild(item);
  });
}

window.submitNewScheme = function(event) {
  event.preventDefault();
  
  const titleEn = document.getElementById("new-scheme-title-en").value;
  const titleHi = document.getElementById("new-scheme-title-hi").value;
  const catEn = document.getElementById("new-scheme-cat-en").value;
  const catHi = document.getElementById("new-scheme-cat-hi").value;
  const descEn = document.getElementById("new-scheme-desc-en").value;
  const descHi = document.getElementById("new-scheme-desc-hi").value;

  const schemes = getSchemes();
  const newScheme = {
    id: "sch_" + Date.now(),
    date: new Date().toISOString().split("T")[0],
    category_en: catEn,
    category_hi: catHi,
    title_en: titleEn,
    title_hi: titleHi,
    desc_en: descEn,
    desc_hi: descHi
  };

  schemes.unshift(newScheme);
  localStorage.setItem("emitra_schemes", JSON.stringify(schemes));
  
  event.target.reset();
  renderAdminAnnouncements();
  renderSchemesGrid(); // Update frontpage
  
  // Triggers Scheme Banner update alert on page
  const banner = document.getElementById("scheme-alert-banner");
  if (banner) {
    banner.classList.remove("hidden");
  }
};

window.deleteScheme = function(id) {
  const schemes = getSchemes();
  const filtered = schemes.filter(s => s.id !== id);
  localStorage.setItem("emitra_schemes", JSON.stringify(filtered));
  renderAdminAnnouncements();
  renderSchemesGrid(); // Update frontpage
};

// 3. Application database administration
function renderAdminApplications() {
  const container = document.getElementById("admin-apps-list");
  if (!container) return;
  container.innerHTML = "";

  const apps = getApplications();

  apps.forEach(app => {
    const item = document.createElement("div");
    item.className = "flex items-start justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl mb-3 shadow-sm";
    
    item.innerHTML = `
      <div class="text-xs">
        <div class="flex items-center space-x-2 mb-1">
          <span class="font-bold text-slate-800 dark:text-white text-sm">${app.id} (${app.client})</span>
          <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-slate-800 dark:text-blue-400 font-semibold">${app.service_name_en}</span>
        </div>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Status (EN): <span class="font-bold text-slate-800 dark:text-white">${app.status_en}</span> | (HI): <span class="font-bold text-slate-800 dark:text-white">${app.status_hi}</span></p>
        <p class="text-slate-600 dark:text-slate-400 mt-1 italic">Remarks: ${app.remarks_en}</p>
      </div>
      <button onclick="deleteApplication('${app.id}')" class="px-2.5 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 flex-shrink-0 ml-2">Delete</button>
    `;
    container.appendChild(item);
  });

  // Render Service Selector in Add App Form
  const select = document.getElementById("new-app-service");
  if (select) {
    select.innerHTML = "";
    servicesData.forEach(s => {
      select.innerHTML += `<option value="${s.id}">${s.name_en}</option>`;
    });
  }
}

window.submitNewApplication = function(event) {
  event.preventDefault();

  const appId = document.getElementById("new-app-id").value.trim().toUpperCase();
  const clientName = document.getElementById("new-app-client").value;
  const serviceId = document.getElementById("new-app-service").value;
  const statusEn = document.getElementById("new-app-status-en").value;
  const statusHi = document.getElementById("new-app-status-hi").value;
  const remarksEn = document.getElementById("new-app-remarks-en").value;
  const remarksHi = document.getElementById("new-app-remarks-hi").value;

  const service = servicesData.find(s => s.id === serviceId);
  const serviceNameEn = service ? service.name_en : "E-Mitra Service";
  const serviceNameHi = service ? service.name_hi : "ई-मित्र सेवा";

  const apps = getApplications();
  
  // Overwrite if exists, otherwise create new
  const existingIdx = apps.findIndex(a => a.id === appId);
  const newApp = {
    id: appId,
    client: clientName,
    service: serviceId,
    service_name_en: serviceNameEn,
    service_name_hi: serviceNameHi,
    date: new Date().toISOString().split("T")[0],
    status_en: statusEn,
    status_hi: statusHi,
    remarks_en: remarksEn,
    remarks_hi: remarksHi
  };

  if (existingIdx > -1) {
    apps[existingIdx] = newApp;
  } else {
    apps.push(newApp);
  }

  localStorage.setItem("emitra_applications", JSON.stringify(apps));
  event.target.reset();
  renderAdminApplications();
};

window.deleteApplication = function(id) {
  const apps = getApplications();
  const filtered = apps.filter(a => a.id !== id);
  localStorage.setItem("emitra_applications", JSON.stringify(filtered));
  renderAdminApplications();
};

// 4. Appointments booking review
function renderAdminAppointments() {
  const container = document.getElementById("admin-apts-list");
  if (!container) return;
  container.innerHTML = "";

  const apts = getAppointments();

  if (apts.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-500 py-4">No appointments requested yet.</p>`;
    return;
  }

  apts.forEach(apt => {
    const item = document.createElement("div");
    item.className = "flex items-start justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl mb-3 shadow-sm";
    
    item.innerHTML = `
      <div class="text-xs">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-slate-800 dark:text-white text-sm">${apt.name}</span>
          <span class="text-slate-500">${apt.phone}</span>
        </div>
        <p class="mt-1 font-semibold text-brand-blue dark:text-brand-saffron">Service: ${apt.serviceName}</p>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Preferred Time: <span class="font-bold">${apt.date} at ${apt.time}</span></p>
        <p class="text-slate-600 dark:text-slate-400 mt-1">Status: <span class="font-bold text-amber-600">${apt.status}</span></p>
      </div>
      <button onclick="deleteApt('${apt.id}')" class="px-2 py-1 rounded bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700">Remove</button>
    `;
    container.appendChild(item);
  });
}

window.deleteApt = function(id) {
  const apts = getAppointments();
  const filtered = apts.filter(a => a.id !== id);
  localStorage.setItem("emitra_apts", JSON.stringify(filtered));
  renderAdminAppointments();
};

// 5. Support Queries
function renderAdminSupportQueries() {
  const container = document.getElementById("admin-support-list");
  if (!container) return;
  container.innerHTML = "";

  const queries = getSupportQueries();

  if (queries.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-500 py-4">No message logs.</p>`;
    return;
  }

  queries.forEach(q => {
    const item = document.createElement("div");
    item.className = "flex items-start justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl mb-3 shadow-sm";
    
    item.innerHTML = `
      <div class="text-xs">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-slate-800 dark:text-white text-sm">${q.name}</span>
          <span class="text-slate-500">${q.phone}</span>
          <span class="text-slate-400">${q.date}</span>
        </div>
        <p class="mt-1 font-semibold text-slate-800 dark:text-slate-200">Subject: ${q.subject}</p>
        <p class="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed border-l-2 pl-2 border-slate-300 dark:border-slate-700">"${q.message}"</p>
      </div>
      <button onclick="deleteSupport('${q.id}')" class="px-2 py-1 rounded bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700">Delete</button>
    `;
    container.appendChild(item);
  });
}

window.deleteSupport = function(id) {
  const queries = getSupportQueries();
  const filtered = queries.filter(q => q.id !== id);
  localStorage.setItem("emitra_support", JSON.stringify(filtered));
  renderAdminSupportQueries();
};

// -------------------------------------------------------------
// 13. Simulated Live Chat Support Subagent Mode
// -------------------------------------------------------------
window.toggleChat = function() {
  const box = document.getElementById("chat-box-container");
  if (!box) return;
  
  const isHidden = box.classList.contains("hidden");
  if (isHidden) {
    box.classList.remove("hidden");
    box.classList.add("flex");
    
    // Auto populate first chat bubble if empty
    const chatFeed = document.getElementById("chat-messages-feed");
    if (chatFeed && chatFeed.children.length === 0) {
      addChatBubble(translations[currentLang].chatWelcome, false);
    }
  } else {
    box.classList.add("hidden");
    box.classList.remove("flex");
  }
};

function addChatBubble(msg, isUser = false) {
  const chatFeed = document.getElementById("chat-messages-feed");
  if (!chatFeed) return;

  const bubble = document.createElement("div");
  bubble.className = isUser 
    ? "bg-brand-blue text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-[80%] self-end shadow-sm"
    : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%] self-start shadow-sm";
  bubble.textContent = msg;

  chatFeed.appendChild(bubble);
  
  // Auto scroll to bottom
  chatFeed.scrollTop = chatFeed.scrollHeight;
}

window.handleSendChatMessage = function(event) {
  if (event) event.preventDefault();
  
  const input = document.getElementById("chat-input-field");
  if (!input) return;

  const query = input.value.trim();
  if (!query) return;

  addChatBubble(query, true);
  input.value = "";

  // Bot response generation after brief delay
  setTimeout(() => {
    const response = getSimulatedBotResponse(query.toLowerCase());
    addChatBubble(response, false);
  }, 1000);
};

function getSimulatedBotResponse(query) {
  const replies = {
    hi: {
      hello: "नमस्ते! जय श्री ई-मित्र सहायता में आपका स्वागत है।",
      hours: "हम सोमवार से शनिवार सुबह 9:00 बजे से शाम 7:00 बजे तक खुले रहते हैं। रविवार को उपलब्धता के अनुसार कॉल पर सेवा उपलब्ध है।",
      number: "आप हमें सीधे +91 9783625549 पर कॉल कर सकते हैं या व्हाट्सएप कर सकते हैं।",
      address: "हमारा पता: आरके पुरम बी, मुक्तिधाम के पीछे, कोटा।",
      documents: "आवश्यक दस्तावेजों की जांच के लिए आप हमारी वेबसाइट पर 'आवश्यक दस्तावेज' अनुभाग पर जा सकते हैं।",
      caste: "जाति प्रमाण पत्र के लिए आवश्यक दस्तावेज़: जन आधार, आधार कार्ड, पिता का जाति प्रमाण, शपथ पत्र और घोषणा पत्र।",
      domicile: "मूल निवास के लिए आवश्यक: जन आधार, आधार कार्ड, राशन कार्ड/बिजली बिल और 10 वर्ष का निवास प्रमाण पत्र।",
      aadhaar: "आधार ई-केवाईसी फिंगरप्रिंट बायोमेट्रिक या ओटीपी के माध्यम से तुरंत की जाती है।",
      default: "पूछने के लिए धन्यवाद। बेहतर सहायता के लिए कृपया हमें +91 9783625549 पर कॉल करें या हमारी दुकान पर पधारें।"
    },
    en: {
      hello: "Hello! Welcome to Jai Shree E-Mitra support.",
      hours: "Our shop hours are Monday to Saturday, 9:00 AM to 7:00 PM. Sundays are subject to availability.",
      number: "You can contact us at +91 9783625549 for immediate assistance.",
      address: "Our center is located at RK Puram B, Behind Muktidham, Kota.",
      documents: "To check documents for any service, please visit the 'Required Documents' tab above.",
      caste: "For Caste Certificate you need: Jan Aadhaar, Aadhaar card, Father's caste proof, and Affidavit.",
      domicile: "For Domicile (Mool Niwas) you need: Jan Aadhaar, Aadhaar, address record (old electricity bill/ration card).",
      aadhaar: "Aadhaar e-KYC is done via OTP or fingerprint scanner instantly.",
      default: "Thank you for reaching out! For instant support, please click the call/WhatsApp button or visit us."
    }
  };

  const db = replies[currentLang];
  if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("नमस्ते")) return db.hello;
  if (query.includes("time") || query.includes("hour") || query.includes("open") || query.includes("समय") || query.includes("खुला")) return db.hours;
  if (query.includes("phone") || query.includes("call") || query.includes("number") || query.includes("नंबर") || query.includes("संपर्क")) return db.number;
  if (query.includes("address") || query.includes("location") || query.includes("where") || query.includes("पता") || query.includes("कहाँ")) return db.address;
  if (query.includes("document") || query.includes("paper") || query.includes("dastavej") || query.includes("कागज") || query.includes("दस्तावेज")) return db.documents;
  if (query.includes("caste") || query.includes("jati") || query.includes("जाति")) return db.caste;
  if (query.includes("domicile") || query.includes("mool") || query.includes("निवास")) return db.domicile;
  if (query.includes("aadhaar") || query.includes("aadhar") || query.includes("आधार")) return db.aadhaar;
  
  return db.default;
}

// -------------------------------------------------------------
// 14. Event Listeners & Bootstrapping
// -------------------------------------------------------------

// Scroll to top button display
window.addEventListener("scroll", () => {
  const topBtn = document.getElementById("scroll-top-btn");
  if (topBtn) {
    if (window.scrollY > 400) {
      topBtn.classList.remove("hidden");
    } else {
      topBtn.classList.add("hidden");
    }
  }
});

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Language Changer
window.changeLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem("emitra_lang", lang);
  applyLanguage();
};

// Theme Changer
window.toggleDarkMode = function() {
  isDarkMode = !isDarkMode;
  applyTheme();
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applyLanguage();

  // Custom banner close handler
  const banner = document.getElementById("scheme-alert-banner");
  if (banner) {
    const closeBanner = document.getElementById("close-banner-btn");
    if (closeBanner) {
      closeBanner.addEventListener("click", () => {
        banner.classList.add("hidden");
      });
    }
  }

  // Pre-fill date selector limits (restrict appointments to future dates only)
  const dateInput = document.getElementById("apt-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }
  
  if (window.lucide) lucide.createIcons();
});

// Mobile menu toggle
window.toggleMobileMenu = function() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
};
