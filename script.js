const questionsData = {
    1: [
        {
            question: "ما الذي يركز نظام التشغيل المحمول (Mobile Operating System) على إدارته؟",
            questionEn: "What does the mobile operating system focus on managing?",
            options: [
                "الاتصال اللاسلكي (Wireless connectivity)",
                "قواعد البيانات المركزية للخوادم السحابية",
                "إدارة الذاكرة المضمنة (Embedded memory)",
                "تطوير التطبيقات بلغة Assembly حصراً"
            ],
            optionsEn: [
                "Wireless connectivity",
                "External cloud servers database",
                "Embedded memory management and process management",
                "Developing apps in Assembly solely"
            ],
            correctAnswers: [0, 2]
        },
        {
            question: "أي من الآتي يُعد من أنظمة تشغيل الهواتف المحمولة (Mobile Operating Systems)؟",
            questionEn: "Which of the following is considered a Mobile Operating System?",
            options: [
                "iOS (Apple)",
                "Windows Mobile (Windows)",
                "Ubuntu Desktop System",
                "Android (Google)"
            ],
            optionsEn: [
                "iOS (Apple)",
                "Windows Mobile (Windows)",
                "Ubuntu Desktop System",
                "Android (Google)"
            ],
            correctAnswers: [0, 1, 3]
        },
        {
            question: "ما هي منصات التوزيع الأشهر لتطبيقات الموبايل (Distribution Platforms) حسب الملف؟",
            questionEn: "What are the most popular distribution platforms (stores) for mobile applications?",
            options: [
                "App Store و Google Play",
                "Steam Store",
                "Epic Games Store",
                "Amazon Web Services (AWS)"
            ],
            optionsEn: [
                "App Store and Google Play",
                "Steam Store",
                "Epic Games Store",
                "Amazon Web Services (AWS)"
            ],
            correctAnswers: [0]
        },
        {
            question: "من قيود التصميم والتطوير المتعلقة بخصائص الجهاز (Device characteristics):",
            questionEn: "What are the development constraints related to device characteristics?",
            options: [
                "استهلاك الطاقة وسعة التخزين (Storage capacity)",
                "شاشات العرض المتطابقة في جميع الأجهزة المحمولة",
                "الاتصال المتقطع ومحدودية النطاق الترددي (Limited bandwidth)",
                "القدرة الحسابية (Computing capacity)"
            ],
            optionsEn: [
                "Power consumption and storage capacity",
                "Identical displays across all mobile devices",
                "Intermittent connectivity and limited bandwidth",
                "Computing capacity"
            ],
            correctAnswers: [0, 2, 3]
        },
        {
            question: "ما هو مفهوم (Time to Market - TTM) في قيود السوق؟",
            questionEn: "What is the concept of Time to Market (TTM) in market constraints?",
            options: [
                "الوقت المستغرق بين تصميم المنتج وإطلاقه في السوق (Release to market)",
                "مهم جداً في التطبيقات التي تتقادم بسرعة (Obsolete quickly)",
                "التقليل منه غير ضروري في الأسواق الحديثة",
                "هو خاص بعمليات الشراء من متاجر التطبيقات فقط"
            ],
            optionsEn: [
                "The time between product design and its release to the market",
                "It is especially important in industries where products become obsolete quickly",
                "Minimizing it is not necessary in modern markets",
                "It is exclusively related to purchasing operations from app stores"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "ما هي أساليب التطوير المعتمد على الويب (Generic Web Development) المقترحة بالتحديد؟",
            questionEn: "What are the specific approaches for Generic (Web) Development?",
            options: [
                "التطبيقات الأصيلة (Native Applications) فقط",
                "التطبيقات الهجينة (Hybrid Applications)",
                "تطبيق موقع مخصص وتصميم الاستجابة (Responsive Web Design)",
                "تطوير متعدد المنصات (Cross-Platform) باستخدام Xamarin"
            ],
            optionsEn: [
                "Native Applications only",
                "Hybrid Applications",
                "Dedicated site and Responsive Web Design",
                "Cross-Platform development using Xamarin"
            ],
            correctAnswers: [2]
        },
        {
            question: "ما هي عيوب مسار التطوير المعتمد على الويب (Generic Web Development)؟",
            questionEn: "What are the disadvantages of the Generic Web Development approach?",
            options: [
                "الأداء يعتبر متواضع (Modest) ووقت التحميل طويل نسبياً",
                "لا يحتاج للإنترنت مطلقاً عند الاستخدام",
                "لا يوفر إمكانية الوصول إلى الميزات الأصلية للنظام (Native features)",
                "يوفر أفضل تجربة مستخدم تضاهي التطبيقات الأصلية"
            ],
            optionsEn: [
                "Performance is modest and loading time is relatively long",
                "It does not require internet connection at all",
                "It does not provide access to native system features",
                "Provides optimal user experience matching native apps"
            ],
            correctAnswers: [0, 2]
        },
        {
            question: "ما هي خصائص وميزات التطوير الأصلي للموبايل (Native Development)؟",
            questionEn: "What are the characteristics and advantages of Native Development?",
            options: [
                "يستخدم لغة الموبايل الأصلية لتطوير تطبيق لنظام تشغيل محدد",
                "يتيح استخدام ذاكرة الجهاز وكافة الميزات الأصلية له (GPS, Camera)",
                "توزع تطبيقاته من خلال متاجر التطبيقات الخاصة بالمنصات",
                "تطبيق منسق واحد يستطيع العمل على Android و iPhone معاً"
            ],
            optionsEn: [
                "It uses the native mobile language to implement an app for a specific OS",
                "It allows use of device memory and all native features (GPS, Camera)",
                "These apps are distributed through platform-specific app stores",
                "A single app can run on both Android and iPhone simultaneously"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "بالنسبة لعيوب التطوير الأصلي (Native Development) مقارنة بميزاته، فهي تتمثل أساساً في:",
            questionEn: "What are the main disadvantages of Native Development compared to its advantages?",
            options: [
                "تكلفة تطويره المنخفضة وسهولة الصيانة المبالغ فيها",
                "تقديم أداء في غاية السوء ولا يدعم المرونة",
                "تضاعف التكاليف عند الرغبة في التحديث وتعدد المنصات لإنشاء نسخة مخصصة لكل نظام",
                "عدم قدرته على استخدام الـ GPS والموارد المحسوسة"
            ],
            optionsEn: [
                "Low development costs and overly simple maintenance",
                "Provides extremely poor performance and lacks flexibility",
                "High costs for updates and multiple platforms since dedicated versions must be implemented",
                "Inability to access GPS and hardware resources"
            ],
            correctAnswers: [2]
        },
        {
            question: "كيف تستفيد الشركات من التطوير متعدد المنصات (Cross-Platform)؟",
            questionEn: "How do companies benefit from Cross-Platform Development?",
            options: [
                "الاعتماد على مصممي المواقع المخصصين للـ Responsive UI حصراً",
                "تجنب تعيين مطورين متخصصين لكل منصة بشكل منفصل",
                "توليد تطبيقات لعدة منصات من كود مصدري واحد (Single codebase)",
                "للحصول على وصول وحيد وسريع لملفات الـ HTML دون استخدام متاجر التطبيقات"
            ],
            optionsEn: [
                "Relying exclusively on web designers for Responsive UI",
                "Avoids hiring specialized developers for each platform separately",
                "Generates multiple apps for different platforms from a single codebase",
                "To get fast single access to HTML files without stores"
            ],
            correctAnswers: [1, 2]
        },
        {
            question: "التطوير متعدد المنصات (Cross-platform) ينقسم لتصميم نوعين أساسيين من التطبيقات. ما هما؟",
            questionEn: "Cross-platform development is divided into two main types of applications. What are they?",
            options: [
                "التطبيقات الهجينة (Hybrid web-oriented)",
                "التطبيقات المولدة لتصبح أصلية (Generated Native Applications)",
                "التطبيقات الأصيلة المبرمجة بلغة Kotlin و Swift للوصول للميزات العميقة",
                "مواقع Responsive Web Design و Mobile websites"
            ],
            optionsEn: [
                "Hybrid web-oriented applications",
                "Generated Native Applications",
                "Native applications coded in pure Kotlin and Swift",
                "Responsive Web Design and Mobile websites"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "كيف يتم تشغيل وبناء التطبيقات الهجينة (Hybrid Applications)؟",
            questionEn: "How are Hybrid Applications built and executed?",
            options: [
                "يتم تنزيلها وتثبيتها على جهاز الموبايل (Downloaded and installed)",
                "مكونة من 80% تقنيات ويب (HTML, CSS, JS) و20% ميزات Native",
                "تقلل من وقت التطوير لأنها لا تتطلب إعادة كتابة الكود لكل منصة",
                "لا يمكن استخدامها إلا عبر فتح المتصفح كموقع ويب"
            ],
            optionsEn: [
                "They are downloaded and installed on the mobile device",
                "Composed of 80% web technologies (HTML, CSS, JS) and 20% native features",
                "They reduce development time as they don't require code rewriting per platform",
                "They can only be used by opening a browser like a website"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "من أطر العمل (Frameworks) المستخدمة لتطوير وبناء التطبيقات الهجينة (Hybrid Applications):",
            questionEn: "Which of the following are frameworks used for building Hybrid Applications?",
            options: [
                "Apache Cordova و PhoneGap و Titanium",
                "Xamarin و Appcelerator",
                "Adobe AIR بمفردها",
                "Android SDK الخاص بـ Google"
            ],
            optionsEn: [
                "Apache Cordova, PhoneGap, and Titanium",
                "Xamarin and Appcelerator",
                "Adobe AIR solely",
                "Google's Android SDK"
            ],
            correctAnswers: [0]
        },
        {
            question: "ما هو مبدأ التطبيقات المولّدة لتصبح أصلية (Generated Native Applications) وخصائصها؟",
            questionEn: "What is the principle and characteristics of Generated Native Applications?",
            options: [
                "تعتمد على إطارات عمل كـ Xamarin و Appcelerator و Adobe Air",
                "تعتمد على لغة مشتركة (مثل C#) يتم ترجمتها (Compiled) لتشغيلها ككود أصلي (Native Code)",
                "تتكون في غالبيتها العظمى من كود HTML بسيط ومصفوفات CSS",
                "تتميز عن التطوير الأصلي بعدم وجود أي مشاكل في الصيانة والتعديل"
            ],
            optionsEn: [
                "Rely on frameworks like Xamarin, Appcelerator, and Adobe Air",
                "Rely on a common language (e.g., C#) compiled into native code",
                "They consist mostly of simple HTML code and CSS arrays",
                "They are distinguished from native development by having zero maintenance issues"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "ما هي عيوب واختلالات الـ (Generated Native Applications) التي يواجهها المطور؟",
            questionEn: "What are the disadvantages and challenges faced by developers of Generated Native Apps?",
            options: [
                "صعوبة في التقييم والصيانة بسبب عمليات التجميع والترجمة المتعددة (Multiple compilation steps)",
                "ضرورة أن يتعلم المطور الفروق ولغات أخرى كـ C# قبل استخدامها لمعرفة حزم التطوير (SDKs)",
                "يعتبر أداؤها أسوأ بكثير من المواقع المتجاوبة المقروءة عبر المتصفح",
                "سهولة تكييفها بشكل آلي ومطلق مع كافة عناصر الأجهزة الأصلية (Native elements) دون أي مجهود"
            ],
            optionsEn: [
                "Difficulty in evaluating and maintaining due to multiple compilation steps",
                "The developer must learn platform nuances and other languages like C# before using SDKs",
                "Their performance is drastically worse than responsive browser sites",
                "Extremely easy auto-adaptation with all native device elements with zero effort"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "على ماذا يعتمد المطور في النهاية لاختيار منهجية التطوير (Development Approach) الأنسب؟",
            questionEn: "What dictates a developer's final choice for the most appropriate Development Approach?",
            options: [
                "خصائص الجمهور المستهدف (Target audience)",
                "الميزات والوظائف الضرورية للتطبيق (Required features)",
                "لغة الآلة المكتوبة في السيرفرات المخصصة",
                "نوع المنصة أو المتجر المراد النشر به (Type of platform)"
            ],
            optionsEn: [
                "Target audience characteristics",
                "Required features for the application",
                "The machine language written in dedicated servers",
                "Type of platform to be published on"
            ],
            correctAnswers: [0, 1, 3]
        }
    ],
    2: [
        {
            question: "ما هي طبقة التطبيقات (Application Layer) في هيكل الـ Android؟",
            questionEn: "What is the Application Layer in the Android Platform Components?",
            options: [
                "هي مستوى قابل للوصول من قبل المستخدم النهائي (Accessible to the user)",
                "توفر مجموعة تطبيقات مبنية بلغة Java مثل (التقويم، المتصفح، الـ SMS)",
                "توفر ميزة لتجميع الأكواد بلغة C++ فقط",
                "لا يمكن للبرامج العادية الوصول إليها إطلاقاً"
            ],
            optionsEn: [
                "It is a level that is accessible to the user",
                "It provides a set of apps implemented in Java (Calendar, Browser, SMS)",
                "Provides a feature to compile C++ code only",
                "It cannot be accessed by normal applications at all"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "إطار عمل التطبيقات (Application Framework) يعتمد على ومسؤول عن:",
            questionEn: "The Application Framework relies on and is responsible for:",
            options: [
                "مبدأ إعادة استخدام المكونات والتعاون بينها (Component reuse)",
                "إدارة الخدمات مثل <code>Activity Manager</code> و <code>Resource Manager</code>",
                "اعتباره نقطة الدخول الأساسية للوصول للمكتبات وموارد العتاد",
                "برمجة وتصميم النواة التخزينية (Kernel) مباشرة"
            ],
            optionsEn: [
                "The principle of component reuse and their cooperation",
                "Managing services like Activity Manager and Resource Manager",
                "Acting as an entry point to access system libraries and hardware resources",
                "Directly programming and designing the kernel system"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "من المكتبات (Libraries) المكتوبة بـ C/C++ والمتوفرة كدعائم ضمن بيئة الـ Android:",
            questionEn: "Which of the C/C++ Libraries are available within the Android platform?",
            options: [
                "مكتبة الـ C System Library أو (libc) وهي محسنة لأنظمة Linux المدمجة",
                "مكتبة SQLite لإدارة قواعد البيانات العلاقية المضمنة في التطبيقات",
                "مكتبة واجهة المستخدم الخاصة بأجهزة نظام الـ iOS",
                "مكتبة <code>FreeType</code> لتوفير محرك تشخيص ورسم الخطوط"
            ],
            optionsEn: [
                "C System Library (libc) optimized for embedded Linux systems",
                "SQLite library for embedded relational database management",
                "The user interface library exclusively for iOS devices",
                "FreeType library which provides a font rendering engine"
            ],
            correctAnswers: [0, 1, 3]
        },
        {
            question: "ما هي وظيفة الـ محرك التشغيل Runtime Engine (ويشمل Dalvik & ART) في بيئة الموبايل؟",
            questionEn: "What is the function of the Runtime Engine (including Dalvik & ART) in mobile environment?",
            options: [
                "يعرض مكتبات توفر الوظائف المتاحة في القلب <code>Core libraries</code> لـ Java",
                "يسمح بتشغيل التطبيقات كآلة افتراضية مستقلة رغم اختلافات العتاد والموديل (Device model)",
                "لا يملك أي استقلال ويعتمد كلياً على بيئة خارجية منفصلة",
                "يضمن وصول الكاميرا إلى خادم سحابي لالتقاط الصور"
            ],
            optionsEn: [
                "It includes libraries that provide core functionalities of the Java language",
                "It allows apps to run regardless of hardware differences and device model",
                "It lacks any independence and relies entirely on a separate external environment",
                "It ensures the camera reaches a cloud server to take pictures"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "ما هي خصائص وآليات آلة الـ Dalvik الافتراضية التاريخية؟",
            questionEn: "What are the characteristics and mechanisms of the historic Dalvik Virtual Machine?",
            options: [
                "عبارة عن بنية مهيأة بطبيعة قوية للأنظمة ذات الذاكرة والمعالجة المحدودة",
                "التطبيق كله يعمل في نسخة (Instance) مستقلة جداً وخاصة به من Dalvik VM",
                "قامت بإدخال مترجم الـ JIT (Just-In-Time) لتحسين الأداء أثناء وقت تشغيل البرنامج",
                "تفضل وتوصي باستخدام ملفات بصيغة <code>.exe</code> بدلاً من <code>.dex</code> العادية"
            ],
            optionsEn: [
                "It is an architecture optimized for systems with limited memory and processing power",
                "Each application runs in its own independent instance of the Dalvik VM",
                "It introduced the JIT (Just-In-Time) compiler to optimize performance at runtime",
                "It prefers and recommends using .exe files instead of standard .dex files"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "كيف يتم معالجة الأكواد وتشغيلها في بيئة آلة مترجم JIT (Just-In-Time)؟",
            questionEn: "How is code processed and executed in a JIT (Just-In-Time) compiler machine?",
            options: [
                "عند رصد دالة يتم تشغيلها بشكل كبير (Hotspot)، تُترجم إلى Native code بشكل مبكر بفضل التصنيف",
                "يستخدم أدوات ثانوية كـ <code>Dexopt</code> لإنتاج ملفات <code>.odex</code> مطورة لتحسين السرعة الفائقة",
                "يتم ترجمة جميع الشفرات المصدرية لملف HTML فوري قبل قراءته",
                "يسبب هذا السلوك عبئاً بصعوبة بسيطة (Overhead) بالذاكرة والوقت في البداية مقابل أداء لاحق أفضل"
            ],
            optionsEn: [
                "When a frequently executed function (hotspot) is identified, it is compiled into native code",
                "It uses the Dexopt tool to produce optimized .odex files for high speed",
                "All source codes are translated to HTML files instantly before reading",
                "It causes a slight overhead in time and memory initially but greatly improves later performance"
            ],
            correctAnswers: [0, 1, 3]
        },
        {
            question: "بماذا يتميز الـ بيئة الـ ART (Android Runtime) عن القديمة الـ Dalvik؟",
            questionEn: "How does ART (Android Runtime) distinguish itself from the older Dalvik?",
            options: [
                "تعتمد على الترجمة الاستباقية AOT (Ahead-Of-Time) ليتم المعالجة وقت التثبيت لتطبيق Android",
                "يقلل من وقت إقلاع بداية التطبيق ويحسن من استهلاك سعة البطارية للأجهزة",
                "العيب الوحيد يكمن بأنه يستغرق وقتاً أطول أثناء التثبيت ويتطلب مساحة تخزينية إضافية للملفات المترجمة",
                "تم إيقافه والرجوع إلى الـ Dalvik بداية من إصدارات لولي بوب"
            ],
            optionsEn: [
                "It uses ahead-of-time (AOT) compilation by compiling the app at installation time",
                "It reduces application startup time and improves battery life",
                "Its only flaw is requiring more installation time and internal storage for compiled code",
                "It was suspended and reverted to Dalvik starting from Lollipop releases"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "ما هو دور نواة اللينكس (Linux Kernel) المعززة في بناء قاعدة أندرويد؟",
            questionEn: "What is the role of the enhanced Linux Kernel in building the Android base?",
            options: [
                "تعمل كطبقة تجريد أو استيعاب (Abstraction layer) بين المكونات العتادية من أسفل والبرمجيات من فوق",
                "معنية بحرفية تنظيم العمليات والخيوط (Threads) وحماية الذاكرة والأمان",
                "تقوم بإدارة قواعد بيانات SQLite الخاصة بالويب",
                "تشغيل التطبيقات بكود C# لتعمل بالشكل التقليدي في الأجهزة"
            ],
            optionsEn: [
                "It acts as an abstraction layer between hardware components below and software stack above",
                "It focuses on managing processes, threads, memory protection, and drivers",
                "It manages the SQLite web databases",
                "It runs applications in C# to operate traditionally on devices"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "أين تقع طبقة التجريد للعتاد HAL (Hardware Abstraction Layer) وما الهدف العظيم منها؟",
            questionEn: "Where is the HAL (Hardware Abstraction Layer) situated and what is its grand purpose?",
            options: [
                "تقع بين طبقة التطبيقات وطبقة الـ Framework بمرتبة عالية",
                "تقع بين طبقة المكتبات (Libraries) ونواة اللينكس الثابتة لتهيئة البيئة",
                "هدفها مساعدة المطورين على تخطي مشاكل المكونات العتادية بتوفير شق عام لقطع متنوعة ومختلفة الأنواع تماماً",
                "توفر واجهات (Interfaces) للتواصل واستغلال التعريفات (Drivers) دون بناء أو لمس النواة بشكل يدوي ومباشر"
            ],
            optionsEn: [
                "It is situated between the Application layer and the Framework layer",
                "It is situated between the Libraries layer and the fixed Linux Kernel",
                "Its goal is to assist in porting libraries to different hardware dynamically",
                "It provides interfaces to implement kernel drivers without writing device-specific code manually"
            ],
            correctAnswers: [1, 2, 3]
        },
        {
            question: "على ماذا يحتوي كل إصدار قياسي من إصدارات الـ Android SDK؟",
            questionEn: "What does each standard release of an Android SDK include?",
            options: [
                "رقم الإصدار الخاص بالنظام ككل (مثل: Android 16)",
                "اسم رمزي مميز (Code name) للنسخة (مثل: Baklava)",
                "معرّف برمجي صحيح وفريد أو واجهة يسمى الـ API Level (مثل 36)",
                "حزم كاملة من كل قواعد البيانات المدفوعة لشركة أبل للاستخدام المجاني المحدود"
            ],
            optionsEn: [
                "An Android version number (e.g., Android 16)",
                "A unique code name for the version (e.g., Baklava)",
                "A unique integer identifier called the API Level (e.g., API 36)",
                "Full packages of Apple's paid databases for limited free use"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "ما هي إمكانيات واستخدامات ADB (Android Debug Bridge) ضمن أدوات الـ SDK؟",
            questionEn: "What are the capabilities and uses of ADB (Android Debug Bridge) within SDK tools?",
            options: [
                "يعتمد على نموذج ذكي كـ Client-Server للتواصل السلس مع الأجهزة الحقيقية أو المحاكيات",
                "يمكن استخدامه لنقل الملفات يدوياً عبر أوامر مثل <code>adb push / pull</code>",
                "يمكن استخدامه لتثبيت التطبيقات بصيغة الجاهزة برمجياً عبر الأمر <code>adb install</code>",
                "تعد الأداة الوحيدة لنسخ التطبيقات لبرامج السيرفرات دون تصريح الجهاز"
            ],
            optionsEn: [
                "It relies on a Client-Server model to communicate with real devices or emulators",
                "It can be used to manually transfer files via push / pull commands",
                "It can be used to install soft-built applications via the install command",
                "It is the only tool to copy apps to server routines without device permission"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "ما هي الأدوات المدمجة الأساسية المستخدمة في الـ SDK ووظائفها الأساسية؟",
            questionEn: "What are the essential basic tools incorporated in the SDK and their core functions?",
            options: [
                "أداة <code>dx</code>: تحول ملفات التصميم Class إلى صيغة <code>.dex</code> المناسبة لعمل Dalvik",
                "أداة <code>DDMS</code>: تمكن من مراقبة الخيوط المتزامنة ومكدس الذاكرة ومراكز إدارة الملفات بالجهاز",
                "أداة <code>aapt</code>: يبني ويجمع المصادر وAndroidManifest ضمن حزمة <code>apk</code> نهائية وموثوقة",
                "أداة <code>apkbuilder</code>: يستخرج ملفات الصور ويحولها لرموز ASCII معقدة"
            ],
            optionsEn: [
                "dx: converts Class files into Dalvik-executable .dex format",
                "DDMS: monitors threads, heap memory, and handles file system exploration",
                "aapt: compiles resources and AndroidManifest into a final installable apk archive",
                "apkbuilder: extracts image files and converts them safely to complex ASCII symbols"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "مما تتكون بيئة المحاكي الافتراضية (Emulator) وما هي بيئة الـ AVD ككل؟",
            questionEn: "What does the Emulator virtual environment consist of, and what is the AVD environment?",
            options: [
                "يستخدم المحاكي حزم وأدوات تخصيص وتخزين كـ AVD (Android Virtual Device)",
                "صناعة الـ AVD بحد ذاتها تسمح بضبط المواصفات كمساحة الـ SD Size وحجم الشاشة وإتجاهها",
                "لا توجد أمثلة على المحاكيات في السوق بل يتم الدفع فقط لبناء تطبيق خيالي من المتجر",
                "من أمثلة المحاكيات المفيدة: Android Studio Emulator ، Genymotion ، و AMIDuOS"
            ],
            optionsEn: [
                "The emulator uses custom tool configurations known as AVD (Android Virtual Device)",
                "Creating an AVD allows configuring SD Card capacity, screen size, and orientation",
                "There are no examples of emulators in the market, one must purchase imaginary apps",
                "Popular and useful emulator examples: Android Studio Emulator, Genymotion, AMIDuOS"
            ],
            correctAnswers: [0, 1, 3]
        },
        {
            question: "في لغات وأطر العمل المستخدمة الواسعة الانتشار في هندسة الفترات الحالية:",
            questionEn: "Regarding the widely used development languages and frameworks in modern engineering:",
            options: [
                "لغة وإطار Flutter قُدمت بواسطة Google لبناء تطبيقات تدعم أكثر من منصة مع تقديم شعور وتفاعل <code>Native</code>",
                "ظهرت لغة Kotlin وأصبحت معتمدة رسمياً كتلة تطوير إضافية ورسمية لنظام الـ Android",
                "لغة Dart صممت لاحتواء مترجمي الـ JIT للمبرمج ومترجم الـ AOT للمستخدم بهدف الجودة",
                "لغة الجافا تم حذفها لعدم تقديمها استجابة مرضية"
            ],
            optionsEn: [
                "Flutter was created by Google to build multi-platform apps providing a Native feel",
                "Kotlin emerged and became officially supported as a secondary development block for Android",
                "Dart language was designed with a JIT compiler for developers and an AOT compiler for production",
                "Java was deleted for not providing a satisfactory response"
            ],
            correctAnswers: [0, 1, 2]
        }
    ],
    3: [
        {
            question: "ما هو مفهوم وتوصيف شاشة الـ Android والتي تسمى تقنياً ونموذجياً (Activity)؟",
            questionEn: "What is the concept and description of an Android screen, technically known as an Activity?",
            options: [
                "تعتبر الوحدة الأساسية لأي تطبيق آندرويد وتمتلك في غالب الأحيان بناء الواجهة المرئية وتتفاعل مع المستخدم (UI)",
                "كل شاشة وواجهة رسومية يتم بناؤها للمستخدم وجب عليها أن ترث برمجياً من الكلاس المرجعي الأصلي <code>Activity</code>",
                "تستخدم الواجهات الجرافيكية (كالصور والنصوص) المندرجة تحت تصنيف كلاس <code>Views</code> لبناء أجزاءها الداخلية",
                "لا يمكن لأي تطبيق Android أن يحتوي على أكثر من شاشة أو نشاط Activity واحد"
            ],
            optionsEn: [
                "It is the basic unit of an Android application and mostly holds the visible User Interface (UI)",
                "Every window or graphical view created for the user must programmatically inherit from the Activity class",
                "It uses graphical interfaces (like text/images) categorized under the Views class to build internal parts",
                "No Android application can ever contain more than one single Activity screen"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "كيف يتم إدارة وتنظيم دورة حياة الأنشطة (Activity Lifecycle) المتفاوتة للمستخدم ضمن أروقة النظام؟",
            questionEn: "How is the Activity Lifecycle managed and organized when navigating between screens?",
            options: [
                "تدار وتترتب الأنشطة في الذاكرة على هيئة ما يسمى بـ مكدس (Stack) ليتم حظره وتعديله بصورة متناغمة",
                "عند إنشاء نشاط جديد وإطلاقه لتطبيقه عمليًا، فإنه ينحشر في المقدمة ليصبح واجهة (Foreground) للمستخدم",
                "النشاط القديم الموجود للخطوة السابقة، يتم حذفه من مكدس النظام للأبد وبشكل كليّ بمجرد الفتح لنشاط جديد",
                "المكدس المتسلسل هذا يحتفظ بالـ <code>Activity</code> السابقة المهجورة في الخلفية (Background) حتى تغلق الصفحة الحالية"
            ],
            optionsEn: [
                "Activities are managed and stacked in the memory as what's known as a Stack",
                "When a new activity is created and launched, it jumps to the front to become the Foreground for the user",
                "The previous activity is permanently and completely purged from the system stack the moment a new one opens",
                "This sequential stack keeps the abandoned Activity in the Background until the current page is closed"
            ],
            correctAnswers: [0, 1, 3]
        },
        {
            question: "بشكل محدد حول كلاس النشاط، اذكر أيٌّ من دوال نظام دورة الحياة (Lifecycle Methods) الأساسية تعتبر حقيقية؟",
            questionEn: "Specifically regarding the Activity class, which of the following Lifecycle Methods are true?",
            options: [
                "دالة الحدث الابتدائي <code>onCreate()</code> تُستدعى دوما عند بدء لحظة بناء وتجهيز وإنشاء النشاط",
                "الدوال الخاصة بالانتقال كـ <code>onStart()</code> و <code>onStop()</code> وظيفتها تمرير وحفظ أحوال ووضعيات النشاطات المنعزلة",
                "دالة <code>onDestroy()</code> تستدعى كآخر دورة حياة أو آخر نفس قبل تفعيل قرار تدمير كود النشاط وشاشته تماماً",
                "لا يتم استدعاء أو استخدام <code>onResume()</code> إلا في حالات فشل السيرفر وتوقف النظام فقط"
            ],
            optionsEn: [
                "The initial event method onCreate() is always invoked at the very moment the activity is created and prepared",
                "Transition methods like onStart() and onStop() handle passing and saving the states of isolated activities",
                "The onDestroy() method is called as the absolute final lifecycle phase before destroying the code and screen entirely",
                "onResume() is solely invoked in the rare case of server failure and total system crash"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "ما هي استخدامات وأهمية وضع ملف التعريف الشامل للمشروع بأكمله المُسمى (<code>AndroidManifest.xml</code>)؟",
            questionEn: "What is the significance and usage of placing the comprehensive project config file (AndroidManifest.xml)?",
            options: [
                "يعد كحجر زاوية، يحتوي على الدلائل والمعلومات الضرورية الأساسية كاسم وحزم التطبيق المنطقية وصلاحيات الأذونات",
                "يُحفظ بداخله الأكواد التشغيلية الكاملة للغات الـ Java والـ Kotlin بشكل مباشر ومتأصل جداً للترجمة المسبقة",
                "جميع واجهات التطبيق وأنشطته الفردية يجب بشكل ضروري جداً التصريح عنها بداخله عبر استخدام وسم التكوين <code>&lt;activity&gt;</code>",
                "يحدد بدخله الحد الأدنى المسموح والمطلوب لاختيار التوافقية من إصدارات أندرويد لعمل التطبيق بلا تعطيل"
            ],
            optionsEn: [
                "It acts as a cornerstone, containing essential information like package name and permissions",
                "It natively stores the raw operational codes of Java and Kotlin directly for pre-compilation",
                "All application interactive screens and individual activities must be strictly declared inside it via the &lt;activity&gt; tag",
                "It specifies the minimum required Android target SDK versions to run the application smoothly"
            ],
            correctAnswers: [0, 2, 3]
        },
        {
            question: "ما هو الغرض البرمجي واللوجستي من مكون الـ نوايا أو (Intent) المُرتبط في قلب نظام هندسة الأندرويد؟",
            questionEn: "What is the programmatic purpose of the Intent component tied to the heart of Android Architecture?",
            options: [
                "القيام بتبليغ أحداث وإشارات معينة لنظام الهاتف أو التطبيقات (مثل إعلان استلام رسالة نصية SMS، أو حدث لتغير بالموقع GPS)",
                "طلب وإطلاق واجهات وأنشطة تنتمي لداخل التطبيق نفسه أو استعارة طلب خدمات منفصلة وعامة يقدمها تطبيق ونظام خارجي آخر",
                "تشغيل وترجمة سطور نظام C داخلي ومعتمد بطبقات الـ HTML المتداخلة بأسفل الهرم",
                "نقل البيانات المتكاملة وإرسال القيم المُتشعبة من صفحة أو تطبيق لآخر بشكل فعّال ومحترف"
            ],
            optionsEn: [
                "Notify events (like SMS received, geographical GPS change)",
                "Launch activities within the app or request separate services from other external apps",
                "Run internal C code directly from HTML layers",
                "Send and pass data"
            ],
            correctAnswers: [0, 1, 3]
        },
        {
            question: "ما هي الأنواع المعروفة والمحددة للصلاحيات المقيدة بالنظام (Permissions) والتي تعتمد وتُطلب باستخدام علامات التعريف كـ <code>&lt;uses-permission&gt;</code>؟",
            questionEn: "What are the common predefined System Permissions relying on and requested via the &lt;uses-permission&gt; tag?",
            options: [
                "صلاحية طلب وتحكم الكاميرا لغرض الرؤية والالتقاط: <br><code>android.permission.CAMERA</code>",
                "صلاحية الاتصال واستهلاك الموارد الخاصة بالشبكة وتحديداً الإنترنت: <br><code>android.permission.INTERNET</code>",
                "لا يتطلب من التطبيقات الدخول وقراءة جهات الاتصال الخاصة بالمستخدم الاستعانة بتعريف أي صلاحيات قط",
                "تصريح الوصول وقراءة تفاصيل قوائم الاتصالات بالهاتف وأرقامها: <br><code>android.permission.READ_CONTACTS</code>"
            ],
            optionsEn: [
                "Camera hardware viewing and capturing permission: android.permission.CAMERA",
                "Network protocol and Internet resource consumption permission: android.permission.INTERNET",
                "Applications aren't required to specify reading contact policies and bypass system protections absolutely",
                "Device authorization to access and read phone contact directories: android.permission.READ_CONTACTS"
            ],
            correctAnswers: [0, 1, 3]
        },
        {
            question: "كيف توصف الفئة الثابتة <code>R</code> (Resource Reference Class) ومتى وكيف تقوم بتبسيط آلية استدعاء المصادر وتكوينها؟",
            questionEn: "How is the R (Resource Reference Class) static class described and how does it simplify resource retrieval?",
            options: [
                "هي كلاس فئة مُنشأة بشكل تفاعلي آلي وعشوائي بفضل معالج وأداة <code>aapt</code> لتوفير معرفات موارد الملفات",
                "تستخدم وتُشير للوصول لمورد ومحتوى محدد برمجياً بطريقة ذكية عبر هيكل <code>R.type.name</code> كما في <code>R.drawable.my_image</code>",
                "تتواجد جميع المصادر والموارد المحتفظة بداخل بيئتها كترتيب داخل مجلد عام وحيد يُسمى <code>res</code> بنواة المشروع",
                "في الواقع إنها مجرد حزمة كلاسات ومكتبات خاصة فقط لتفعيل والاتصال بتقنيات الـ 4G في شبكات الاتصال الخلوي بالجهاز"
            ],
            optionsEn: [
                "It is an automatically and dynamically generated auto-class thanks to the aapt tool to provide resource ID identifiers",
                "It points to and acts as a lookup for programmatically accessing resources with R.type.name syntax, e.g. R.drawable.my_image",
                "All retained raw sources and resources operate within their general directory called res at the project root",
                "It's reality is simply a suite of internal SDK connectivity packages designed to strictly handle 4G internet logic alone"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "ما هي طريقة ووسيلة استرجاع وتوظيف المراجع (Resources) والتعاريف إما كتابياً (XML) وإما ضمنياً (Code)؟",
            questionEn: "What is the mechanism and medium to retrieve and utilize Resources either declaratively (XML) or implicitly (Code)?",
            options: [
                "يُشار للمورد المطلوب بداخل شروح XML كقيمة باستخدام هيكلة نصية كالشكل الآتي: <code>@string/titre</code> أو مساره الإرشادي",
                "للحصول وعرض القيمة كنص برمجياً وجافا بلغة الكلاسات، يتم استخدام وتطبيق: <pre class='code-block'><code>getResources().getString(R.string.titre)</code></pre>",
                "يمكن للمبرمج تخزين وتنويع مجلد الـ Resources المصفوفات كنص <code>string-array</code> والألوان المترجمة <code>color</code>",
                "يتعين عليك أن تستخدم علامة الهاشتاج <code>#</code> لاسترداد أي صورة بالـ XML كالتالي بشكل حرفي: <code>#image/photo_bg</code>"
            ],
            optionsEn: [
                "A targeted resource is referenced visually within XML property bounds as: @string/titre or its associative routing",
                "To fetch and expose the textual values programmatically in Java, we implement: getResources().getString(R.string.titre)",
                "The coder can categorize and isolate Resource dictionaries containing textual string-array collections and color definitions",
                "You must mandatorily utilize the hashtag # to acquire any image in XML verbatim as: #image/photo_bg"
            ],
            correctAnswers: [0, 1, 2]
        }
    ],
    4: [
        {
            question: "كيف يتألف وينقسم إنشاء وبناء الواجهات المعتمدة كواجهة للمستخدم (Interfaces) داخل بيئة الـ Android الرسمية؟",
            questionEn: "How is User Interface (Interfaces) creation structured and divided within the official Android environment?",
            options: [
                "تعطى مساحة لتعريف عناصر التصميم والواجهة والالتقاء كأزرار وحاويات في هيكل داخلي ضمن أوامر ملف الـ XML",
                "المساحة الثانية مسؤولة في تعريف السلوك الحركي وبرمجة الأجزاء (Business Logic) الخاصة بالواجهات لتتم هندستها داخل كلاس كود Java / Kotlin",
                "يضمن هذا التقسيم تحقيق فصل هندسي ونسقي (Separation) نظيف لتجنب الفوضى بين عملية التصميم للشاشة (الواجهة) ومكونات المنطق البرمجي التنفيذي",
                "تُربط ويتم دمج وتخزين جميع أكواد وهاكات XML مع الـ Java معاً تماماً بحشو ممتلئ في ملف واحد منسق بامتداد صريح وهو .jxml للإخراج النهائي"
            ],
            optionsEn: [
                "A specialized domain defines interface layout components like buttons and containers in an XML file",
                "The second domain is responsible for creating the Business Logic mapping of the interactive views via Java/Kotlin",
                "This deliberate separation strictly ensures clean architectural split between the UI visual implementation and functional logic code",
                "All XML markups are fused densely inline with Java inside a definitive singular format named .jxml upon final build"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "في لغة الـ XML ما هي أشهر وأهم الخصائص الوعائية (XML Layout Properties) العامة التي تحدد شكل واحتلال العنصر؟",
            questionEn: "In the XML language layer, what are the most prominent global XML Layout Properties determining an element's spatial footprint?",
            options: [
                "نستعين بـ <code>match_parent</code> لكي يمتد ويأخذ العنصر كل تفاصيل المساحة المتوفرة الممنوحة والمطابقة من الحاوية التابعة له الأم",
                "نستخدم خاصية <code>wrap_content</code> بهدف تحديد وتقييد العنصر لأخذ مساحة تتناسب وفقط مع مساحة المحتوى الذي يعيش بداخله",
                "هنالك سمتان وهما <code>android:layout_width</code> و <code>android:layout_height</code> تعتبر أساسية ويراقب إدخالها كشرط أساسي لمرئيات بخصائص الكائن",
                "هناك سمة وحيدة ومبتكرة اسمها الـ <code>android:layout_size</code> والتي تُستخدم إجبارياً للارتفاع وتقبل إدخال مسافات وقياسات بالكيلومتر كطول المسار الجغرافي"
            ],
            optionsEn: [
                "We employ match_parent to allow the element to stretch out matching all provided bounding space from its parent container",
                "We utilize wrap_content intending to shrink elements fitting merely tight spaces relevant to their internal contents",
                "Both length attributes android:layout_width and android:layout_height are foundational properties absolutely required per visible entity",
                "There is a solo innovative constraint known as android:layout_size used forcefully for distance logic supporting inputs equivalent to precise kilometers"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "كيف يمكن في عالم الموبايل تعريف وكذلك استدعاء المعرفات الفريدة أو التوقيعات <code>Identifiers (ID)</code> للمكونات المرئية التي ستُنادى لاحقاً؟",
            questionEn: "How are unique Identifiers (ID) or signature bindings defined and invoked for later UI manipulation?",
            options: [
                "يتم صناعة وتعريف مَعلمة هوية ID فريد وجديد ضمن بيانات العنصر بالـ XML عبر الصيغة الثابتة كالتالي: <br><code>android:id=\"@+id/btn_name\"</code>",
                "يتم استدعاء وجلب كائن الـ ID مباشرة بمجرد كتابة اسمه كمتغير من متغيرات الـ Java العامة دون الاحتياج لوجود أو نداء أي دوال وسيطة",
                "تقوم الدالة المصممة خصيصاً باستدعائه برمجياً والوصول للـ كائن Object المرئي والموجود بالشاشة عبر عبارة بحث <code>findViewById(R.id.btn_name)</code>",
                "يجوز الإشارة للمعرّف باستخدام النمط المكتوب <code>@id/existing_name</code> (بدون علامة +) إذا أردنا وتطلب الأمر الإشارة لهوية موجودة وأُنشئت مُسبقاً داخل ملفات XML"
            ],
            optionsEn: [
                "A fresh exclusive ID parameter is baked into the UI visual's XML payload via the steady formula: android:id=\"@+id/btn_name\"",
                "The ID's object mapping is spontaneously materialized by simply typing its exact string identically like a public Java global",
                "A system handler dynamically polls its existence and grabs the Object from screen arrays through the query findViewById(R.id.btn_name)",
                "It is syntactically fine to reference existing identities via an @id/existing_name pattern (without a + label) connecting pre-instantiated bindings"
            ],
            correctAnswers: [0, 2, 3]
        },
        {
            question: "من أشهر تصميمات أنواع حاويات التخطيط والقوالب المعتمدة (Layout containers / ViewGroup) ما هي خيارات الترتيب؟",
            questionEn: "Among the widely acknowledged Layout containers and ViewGroup variants, what are the standard organizational choices?",
            options: [
                "أشهرهم الحاوية <code>LinearLayout</code>: ترتيب خطي مباشر يتم إما بمسار (عمودي <code>vertical</code> أو بشكل أفقي <code>horizontal</code>)",
                "حاوية مرنة كالـ <code>RelativeLayout</code>: ترتيب العناصر بصورة نسبية لعنصر مرجعي أخر أو للتنسيق البعدي لحواف وجوانب الحاوية",
                "الجدولية <code>TableLayout</code>: الترتيب وتصفيف الواجهات والعناصر المنبثقة بشكل جدولي منتظم عبر مربعات أعمدة وصفوف كالكلاسيكيات",
                "الحاوية الافتراضية للجميع <code>RandomLayout</code>: الترتيب العشوائي الذي يقوم بتغيير وخربطة أماكن العناصر وبعثرتها في كل صفحة لتحسين الشكل الفرضي للأنظمة"
            ],
            optionsEn: [
                "The most renowned is LinearLayout: arranging subjects serially aligned to linear trajectories (either vertical or horizontal flow)",
                "A flexible relative frame RelativeLayout: organizing subject positioning implicitly concerning references of sibling views or outer container edges",
                "The tabular TableLayout: uniformly grids interface elements and modules structurally across sequential matrices of rows and columns",
                "The universal meta-host RandomLayout: purely random spatial sorting scattering bounds out dynamically to improve UI stochastic behavior"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "بخصوص حاويات التخطيط (Layouts) والمناظر الرسومية الأساسية <code>Views</code> ومكوناتها:",
            questionEn: "Regarding Layout containers and basic graphical display mechanisms (Views) and their structure:",
            options: [
                "لدينا حاوية <code>AbsoluteLayout</code> التي لا تزال تُعتبر هي الأحدث والأكثر دعماً وتعتمد على مكان مطلق للخطوط بالبيكسل دون الأخذ بالاعتبار حجم الشاشة",
                "يُعرف بأن الفئة الوالدية والمنشأ الأساسية الكبرى لكافة المكونات الرسومية هي كلاس الـ <code>View</code> متضمنة في مسار حزم <code>android.widget</code>",
                "جميع العناصر سواء المكونات الفردية أو المتقدمة (أزرار وحاويات) تقبل بشكل منطقي تماماً وجود واستيعاب وسوم التضمين وحيازة العناصر والأبناء بداخلها بلا تمييز",
                "العناصر الفردية الخاصة بالنصوص أو الأفعال كـ <code>TextView</code>، والنصية <code>EditText</code>، أو أداة الـ <code>Button</code> جميعها ترث صفاتها الجوهرية المباشرة من الوالد كلاس الـ View"
            ],
            optionsEn: [
                "We have AbsoluteLayout which is still considered the most modern optimal support framework mapping coordinates per pixel blindly",
                "It is known that the foundational parent superclass for practically all visual presentation nodes is the View class encompassed in android.widget",
                "Generally, every graphical module (individual items and macro-containers) practically supports infinite seamless nested hierarchies natively",
                "Solitary action and character entities such as TextView, textual EditText, or the classical Button completely inherit their base structure directly from View"
            ],
            correctAnswers: [1, 3]
        },
        {
            question: "كيف يتم تطبيق ربط وتفعيل الواجهة المصممة (الشكل) بـ كلاس الـ Activity (الكود) لعرضها وتقديمها؟",
            questionEn: "How is the fully constructed UI layout visually connected and bound to the Java Activity instance?",
            options: [
                "يُجرى ذلك الربط كخطوة أساسية حينما يتم التجاوز وتضمين التعريف بداخل الدالة المبدئية والشهيرة الدالة <code>onCreate()</code>",
                "تتطلب القواعد أن يتم تمرير وحقن المعرف الروحي (ID) والمؤشر الخاص لملف التخطيط (على سبيل المثال: <code>R.layout.main_view</code>) بداخل الكود لبيئة الـ Java",
                "ينفذ عبر دالة تعيين محتوى وتعديل الواجهة المرئية استخداماً للدالة القوية والمباشرة <code>setContentView()</code> لتعين التصميم واعتماده",
                "ليس هنالك أي أمر للربط، بمجرد بناء المشروع وتشغيله سيقوم Android بربط ومزامنة الملفات بذكاء بناءً على تشابه الأسماء تلقائياً في واجهة الـ IDE"
            ],
            optionsEn: [
                "The assignment connection plays a fundamental step executing entirely overridden logic initially loaded inside the famous onCreate() routine",
                "The specification protocol demands passing the intrinsic resource pointer ID of the desired layout file (e.g. R.layout.main_view) into Java",
                "It executes by rendering the visual context setting using the dedicated powerful method setContentView() immediately validating the UI",
                "There isn't an explicit command; upon generating builds, the IDE matches similarities mapping project source code layouts autonomously via naming"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "عن كيفية أسر ومعالجة الأحداث والتدخلات للمستخدمين (Event Handling) كالضغط على زر داخل البرنامج لكشف الاستجابات:",
            questionEn: "Concerning the logic execution mechanism and input polling (Event Handling) like tapping buttons triggering code callbacks:",
            options: [
                "يتم إدارتها والتعامل الشامل معها عبر اعتماد وميكانيكية المستمع الخفي المنصت والمترقب للبيانات المدعوة بـ (Listener mechanism)",
                "يُمكن إسناد الحدث وتعريفه كتدخل كصنف مجهول (Anonymous inner listener) عند القيام بالنداء لدالة مثل <code>setOnClickListener</code>",
                "لتبسيط التكوين، يمكن وتسمح بيئة الأندرويد للمطور الإعلان عن تنفيذ دالة المستمع للضغط من داخل سطر الواجهة بالـ XML باستخدام صفة الأمر المباشر <code>android:onClick=\"...\"</code>",
                "يعد كل حدث ضغط أو سحب خارج النطاق الخاص بمعمارية المستمعات الـ Listener، بل يتطلب ويتعدى للمكتبات الخيطية المتقدمة للـ Threading لمعالجتها"
            ],
            optionsEn: [
                "They are directed and thoroughly managed leveraging the invisible waiting listener mechanics pattern via Listener algorithms",
                "A response event action can be seamlessly hooked dynamically via an Anonymous inner listener while invoking methods such as setOnClickListener",
                "To streamline implementation, devs can declare direct callback references statically in the layout markup strings via XML property android:onClick=\"...\"",
                "Every finger interaction gesture resides radically far beyond regular Listener designs essentially demanding threaded external networking layers"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "ما العمل المنطقي الذي سيطرح للحكم، إن أردنا استخدام نفس كود <code>OnClickListener</code> على أكثر من عنصر وزر <code>View</code> مختلف بنفس الصفحة؟",
            questionEn: "What is the logical approach required if we opted to use a uniform OnClickListener code block linked to multiple distinct Views simultaneously?",
            options: [
                "بصورة جازمة وفي بيئة الأندرويد تحديداً، لا يمكن بتاتاً ربط مستمع أو منادى واحد لأكثر من عنصر تفاعلي أو زر في بيئة الجافا مطلقاً",
                "ستبرز الحاجة، بأن نقوم باستخدام دالة الفحص الاستحواذية <code>getId()</code> وتوظيف عبارة الاختيار المتعددة <code>switch</code> أو الشروط للتفريق بين المتصلين بالحدث وتحديد الفاعل",
                "كجزئية هامة، تقوم الدالة المُنفذة للحدث وهي <code>onClick(View v)</code> بتمرير وتسجيل هوية الـ View الذي تسبب في انطلاق وصناعة الحدث لمعرفته كمدخل للمتغير `v`",
                "كمعالجة للضغط المشترك، يتوقف التطبيق عن العمل كإيقاف أمان ويبلغ المستخدم المطورين بخطأ تطفلي عنيف يتم ترحيله لقاعدة العمليات"
            ],
            optionsEn: [
                "In Android architectures specifically, it is completely forbidden to ever tie a singular listener entity across more than one UI object concurrently",
                "It highlights the necessity to utilize the capturing method getId() and pairing conditional switches to distinguish origins mapping the trigger to the correct caller",
                "As an essential detail, the executed event callback parameter onClick(View v) effectively receives the identity signature of the calling View mapped securely via argument 'v'",
                "To mitigate overlapping click events, the app defensively crashes providing the dev engineers with highly critical intrusive fault logs isolating overlapping elements"
            ],
            correctAnswers: [1, 2]
        }
    ],
    5: [
        {
            question: "ما هو مكون وبنية الـ نوايا أو المقاصد البرمجية (Intent) بشكل ملمي ومفصل حسب ذكر خصائص رسائله المتضمنة؟",
            questionEn: "What is the Intent entity programmatically, comprehensively based on the internal parameters it encompasses?",
            options: [
                "يُعرّف تقنياً بأنه هو مجرد وصف مجرد أو استخلاصي للمعلومات (Abstract Description) والتعليمات عن عملية أو تشغيل وأمر يُراد تنفيذه وأدائه داخلياً",
                "ضمن مهامه الأساسية، يمكن من خلال هذا الكائن الدقيق طلب خدمات عامة لاستخراجها من تطبيقات ومسارات خارجية كلياً ضمن مساحات وهياكل النظام الواسعة",
                "تحتوي على معلمات إضافية وتعددية خصبة التفريعات (مثل حقل Type ومجال الـ Extras وعلامات الـ Flags) من أجل تحجيم وتخصيص محتواه وطرق العرض بكفاءة ودقة",
                "هي عبارة رسالة وأداة تم التوصل لهندستها وتصميمها حصرياً للاستقصاء وإدارة وقراءة بنود قاعدة بيانات SQLite فقط لتطبيق الأمان"
            ],
            optionsEn: [
                "Technically, it is classified directly as a conceptual Abstract Description portraying a command instruction expected to be routed and performed internally",
                "Through its core mechanics, this object manages acquiring broader systemic services tapping into utterly disconnected components inside OS domains",
                "It incorporates auxiliary parameter fields (like the Type descriptor, Extras payloads, and operational Flags) to finely customize execution contexts effectively",
                "It is a specifically manufactured pipeline mechanism developed exclusively strictly handling indexing and polling secure databases under SQLite"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "أين يتجلى الفرق الجوهري والأساسي بين استخدام النية والتوجه الصريحة (Explicit Intent) مقابل النية المبطنة والتلميحية (Implicit Intent):",
            questionEn: "Where does the fundamental core difference lie differentiating Explicit Intents relative to Implicit ones?",
            options: [
                "الصريحة (Explicit) تحدد وتلقي إشارتها للهدف بصورة مباشرة وبوضوح تام وبمركب وبكلاس صريح جداً ومستهدف للتنفيذ والتطبيق المباشر بدون تدخل عوالم النظام",
                "المبطنة الضمنية (Implicit) لا تعرّف بتاتاً المكون المستقبل ولا تصارحه، بل تدع وتحول مسار القرار لتترك لآلية وخوارزمية النظام أن يحدد ويرجح الأفضل حسب وصف وحل المهمة",
                "النسخة الصريحة الـ (Explicit) تُستخدم وتقتصر فقط للتحويل والانتقال الواسع بين مختلف حزم تطبيقات النظام المنفصلة (عكس سلوك المبطنة كلياً)",
                "إصدارة التخاطب الصريحة الـ Explicit هي الاختيار الأفضل و والأكثر حصانة واستخداماً دوماً بفضل تقنيتها الجبارة بخاصية الإخفاء التام للمعلومات الحولية"
            ],
            optionsEn: [
                "Explicit targets aim signals directly identifying explicit destinations precisely defined executing explicit classes bypassing system guessworks",
                "Implicit approaches deliberately leave out exact target recipients, instead allowing the routing systems and native algorithms to designate solutions resolving tasks",
                "The strict Explicit variant exists primarily reserved to transition deeply unbundled remote apps completely out of context",
                "Explicit dialogue variants possess supreme security superiority globally resulting from perfectly isolated local data hiding"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "للتعاون والتخاطب البرمجي بغرض طلب وإطلاق نشاط وشاشة <code>Activity</code> جديد بشكل صريح ورأسمالي (بدون انتظار نتيجة مُعادة):",
            questionEn: "To request and strictly initialize a freshly spawned separate Activity implicitly standalone (excluding returning payloads):",
            options: [
                "نقوم باستخدام وتوجيه طلب وتمرير غرضنا من كائن رسالي عبر توجيه وتشغيل الدالة الوظيفية الجاهزة <code>startActivity(myIntent)</code>",
                "يُبنى طلب وإيعاز إطلاق الانتقال إلى الواجهة الجديدة بطريقة برمجية نموذجية كالتالي حصراً: <pre class='code-block'><code>new Intent(getApplicationContext(), TargetActivity.class);</code></pre>",
                "كخطوة تمهيدية قبل أداء أي أمانة انتقال، نقوم دوماً باستدعاء روتيني عاجل للدالة الدامرة <code>onDestroy</code> للـ Activity الحالية والنافذة المفتوحة لضمان نجاح عملية الانتقال وحماية الرام",
                "يستحدث القانون وتوجب اللوائح التنظيمية بأن يجب أولاً تعريف الحاوية المُستهدفة بداخل وثيقة ومعمار ملف XML على شكل صيغة ووسام قراءته كـ Implicit Content"
            ],
            optionsEn: [
                "We relay our request intent parameters launching functional requests employing the default system protocol startActivity(myIntent)",
                "Invoking a completely new visual interface transition strictly observes structural syntax roughly like: <br>new Intent(getApplicationContext(), TargetActivity.class);",
                "As an operational preparatory requirement before transition calls, we sequentially prompt routine defensive calls invoking onDestroy terminating screens freeing memory",
                "Statutory OS mandates enforce initializing the destination view implicitly configuring manifest parameters defined fundamentally as Implicit Content"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "كيف نمرر مصفوفات للبيانات إضافية وقيمة مركبة في الـ وسائط الاتصالية الـ Intents ونحضرها بالجهة الحاضرة والمستلمة بالمرصاد المقابلة لها برمجياً؟",
            questionEn: "How do we append multifaceted payloads within Intent arrays capturing them distinctly inside the destination?",
            options: [
                "تتكفل طريقة وإجراء دالة الإدراج <code>putExtra('KEY', VALUE)</code> لتضمين وإرفاق رسائل ومعلومات وحزم مرافقة مع كائن ومراسيل النية المرفقة والمرسلة لتتم مصافحتها في الطرف النهائي",
                "كعائق للمطور وكجزء من تقنيات القصور المعتمدة، لا يمكن تمرير أو تبليغ سوى نصوص ومكتوبات البيانات النصية القصيرة ذات حزمة ونوع <code>String</code> الخفيف فقط عبر رسائل الـ Intents",
                "البيانات والمرسلات تُحفظ وتجمع وتُحرس وتغلف بصورة نموذجية وعملية جداً في كائن مهيأ للاستقبال والتخزين يُدعى الـ حزمة الطرد المعلوماتية <code>Bundle</code> بالمحطة النهائية",
                "تُقرأ البيانات والمضمومات بصورة عكسية بالوصول واستنطاق بيانات حزمة الهدف المستقبل والمستلم عبر إيعاز شفرة استرداد محكمة وصيغتها في كود: <code>getIntent().getExtras()</code>"
            ],
            optionsEn: [
                "The insertion mechanism protocol utilizes putExtra('KEY', VALUE) inserting supplemental values and message clusters enveloping nested data values via transmissions",
                "Constituting a fundamental developer impediment technically engineered limitations forbid routing non-textual non-String datatypes via runtime Intents completely",
                "Transferred data is robustly aggregated, guarded and formally bundled via custom transport entity natively structured named Bundle accessible upon arrival",
                "Incorporated data clusters are fetched reversely pulling exact goal entities polling destination payloads securely formatted exactly reading: getIntent().getExtras()"
            ],
            correctAnswers: [0, 2, 3]
        }
    ],
        "t2": [
        {
            question: "في Exercise 1، كيف يتم برمجة عنصر النص <code>EditText</code> ليختفي نصه الإرشادي بمجرد وضع المؤشر عليه؟",
            questionEn: "How to display a placeholder text in EditText that disappears when focused?",
            options: [
                "عبر استخدام الخاصية <code>android:hint=\"Entrer le login\"</code>",
                "باستخدام الخاصية <code>android:text=\"Entrer le login\"</code> وتفريغها بالجافا",
                "عن طريق استخدام <code>android:placeholder=\"...\"</code> في خصائص العنصر",
                "باستخدام الخاصية <code>android:label=\"Login\"</code>"
            ],
            optionsEn: [
                "By using android:hint=\"Entrer le login\"",
                "By using android:text=\"...\" and clearing it in Java",
                "By using android:placeholder=\"...\"",
                "By using android:label=\"Login\""
            ],
            correctAnswers: [0]
        },
        {
            question: "كيف تقوم بمشاركة وتوزيع عرض الشاشة بالتساوي بنسبة 50% لكل زر داخل <code>LinearLayout</code>؟",
            questionEn: "How to share the screen width equally between two buttons in a LinearLayout?",
            options: [
                "ندمج <code>android:weightSum=\"100\"</code> للحاوية، ونعطي <code>android:layout_weight=\"50\"</code> لكل زر",
                "نعطي لكل زر قيمة طول <code>android:layout_width=\"50%\"</code> بصورة مباشرة",
                "نستخدم الخاصية <code>android:gravity=\"center\"</code> لكل الأزرار",
                "عبر جعل كلا الزرين يستعملان <code>android:layout_width=\"wrap_content\"</code> فقط"
            ],
            optionsEn: [
                "Add android:weightSum=\"100\" to the container, and android:layout_weight=\"50\" for each button",
                "Give each button a length of android:layout_width=\"50%\" directly",
                "Use the property android:gravity=\"center\" for all buttons",
                "By making both buttons use android:layout_width=\"wrap_content\" only"
            ],
            correctAnswers: [0]
        },
        {
            question: "في Exercise 2، كيف نموضع جميع المكونات وسط الشاشة تماماً؟",
            questionEn: "In Exercise 2, how do we position all components directly in the center of the screen?",
            options: [
                "بإسناد السمة <code>android:gravity=\"center\"</code> داخل الحاوية الأم <code>LinearLayout</code>",
                "باستخدام الكود البرمجي <code>setGravity(Center)</code> فور تشغيل الواجهة",
                "بإعطاء هوامش تلقائية <code>android:layout_margin=\"auto\"</code> لكل عنصر",
                "باستخدام <code>android:layout_centerInParent=\"true\"</code> لكن داخل LinearLayout"
            ],
            optionsEn: [
                "By applying the android:gravity=\"center\" attribute inside the parent LinearLayout",
                "Using the programming code setGravity(Center) right after interface startup",
                "By giving automatic margins android:layout_margin=\"auto\" to every element",
                "Using android:layout_centerInParent=\"true\" but inside a LinearLayout"
            ],
            correctAnswers: [0]
        },
        {
            question: "كيف يتم تطبيق ألوان خلفية معينة (مثل اللون الأزرق <code>#81D8D0</code> واللون الأصفر <code>#FFFF00</code>) على العناصر؟",
            questionEn: "How to apply custom background colors to Layout and EditText components?",
            options: [
                "بإضافة الخاصية <code>android:background=\"#81D8D0\"</code> في الحاوية <code>LinearLayout</code>",
                "بإضافة الخاصية <code>android:background=\"#FFFF00\"</code> داخل عناصر <code>EditText</code>",
                "عبر استبدال وسوم العناصر الرسومية بوسم خاص يدعى <code>&lt;Color&gt;</code>",
                "تلوين العناصر غير مدعوم في Android ويجب الاعتماد على صور بصيغة PNG فقط"
            ],
            optionsEn: [
                "By adding the attribute android:background=\"#81D8D0\" in the LinearLayout container",
                "By adding the attribute android:background=\"#FFFF00\" inside EditText components",
                "By replacing graphic element tags with a special tag called &lt;Color&gt;",
                "Coloring elements is unsupported in Android, only PNG images are accepted"
            ],
            correctAnswers: [0, 1]
        }
    ],
    "t3": [
        {
            question: "لبرمجة حدث الضغط (Click) لزر <code>Envoyer</code> لطباعة رسالة في الـ LogCat، نستعين بالدالة المدمجة:",
            questionEn: "To program a Click event for the 'Envoyer' button to print a message in LogCat, we use:",
            options: [
                "<code>envoyer.setOnClickListener(...)</code> وتعريف دالة onClick بداخلها",
                "أمر الطباعة المخصص <code>Log.v(\"Cours AM \", et.getText().toString());</code>",
                "<code>envoyer.onClick(Log.print())</code> بشكل مباشر",
                "الأمر System.out.println() العادي فقط"
            ],
            optionsEn: [
                "envoyer.setOnClickListener(...) and defning onClick method inside it",
                "The dedicated printing statement Log.v(\"Cours AM \", et.getText().toString());",
                "envoyer.onClick(Log.print()) directly",
                "The basic standard Java System.out.println() command only"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "حسب Exercise 2، ما هي الدالة أو الأمر البرمجي الصحيح الذي يغلق شاشة <code>SecondActivity</code> ليعود للصفحة السابقة؟",
            questionEn: "According to Exercise 2, what is the right command that closes SecondActivity to return to the previous page?",
            options: [
                "الاستدعاء لدالة <code>finish();</code> لإنهاء النشاط الحي",
                "استخدام أمر <code>destroy()</code>",
                "كتابة كود <code>System.exit(0);</code> لإغلاق التطبيق",
                "الاستعانة بدالة <code>startActivity(MainActivity.class)</code> لتشغيلها كنسخة ثانية"
            ],
            optionsEn: [
                "Invoking the finish(); method to end the live Activity",
                "Using the destroy() command",
                "Writing System.exit(0); code to exit the app",
                "Using the startActivity(MainActivity.class) function to launch it as a second duplicate"
            ],
            correctAnswers: [0]
        },
        {
            question: "في Exercise 3، كيف نقوم بإرفاق وتمرير قيم (مثل: login و Password) كنصوص للحمل مع الـ Intent الجديد قبل إطلاقه؟",
            questionEn: "In Exercise 3, how do we attach and pass values (like login/psw) as texts coupled with a new Intent?",
            options: [
                "<pre class='code-block'><code>Intent monIntent = new Intent(getApplicationContext(), SecondActivity.class);</code></pre>",
                "<pre class='code-block'><code>monIntent.putExtra(\"login\", userlogin.getText().toString());</code></pre>",
                "<pre class='code-block'><code>startActivity(monIntent);</code></pre>",
                "<pre class='code-block'><code>monIntent.sendValues(userlogin);</code></pre>"
            ],
            optionsEn: [
                "Intent monIntent = new Intent(getApplicationContext(), SecondActivity.class);",
                "monIntent.putExtra(\"login\", userlogin.getText().toString());",
                "startActivity(monIntent);",
                "monIntent.sendValues(userlogin);"
            ],
            correctAnswers: [0, 1, 2]
        },
        {
            question: "في الواجهة المستلمة <code>SecondActivity</code>، كيف نقوم باسترداد البيانات المرفقة بالنوايا وطباعتها ضمن مكونات الـ TextView؟",
            questionEn: "In the receiving SecondActivity, how do we retrieve Intent payloads and assign them to TextView components?",
            options: [
                "الحصول على الرسالة باستخدام: <code>Intent intent = getIntent();</code>",
                "جلب وتعبئة النص عبر: <code>lg.setText(intent.getStringExtra(\"login\"));</code>",
                "استخدام أمر الجلب <code>intent.getValues()</code> التلقائي",
                "لا يمكن إرسال بيانات نصية من شاشة لأخرى لأن الـ TextView مخصص لملفات الـ XML فقط"
            ],
            optionsEn: [
                "Retrieving the message object using: Intent intent = getIntent();",
                "Fetching and populating the string via: lg.setText(intent.getStringExtra(\"login\"));",
                "Using the automatic fetching command intent.getValues()",
                "Text data cannot be sent because TextView is reserved purely for XML logic only"
            ],
            correctAnswers: [0, 1]
        }
    ],
    "t4": [
        {
            question: "في Exercise 1، كيف يتم تشكيل وضبط الـ ListView في الـ XML لتقبل ميزة وتحديد أكثر من اختيار للمستخدم؟",
            questionEn: "In Exercise 1, how is the ListView configured in XML to accept multiple user selections?",
            options: [
                "إضافة الخاصية <code>android:choiceMode=\"multipleChoice\"</code> لعنصر ListView",
                "الاستعانة بالخاصية <code>android:selection=\"all\"</code> داخلها",
                "كتابة كود <code>list.setSelectable(true)</code> برمجياً فقط",
                "يجب التخلي عن ListView واستعمال CheckBox فقط"
            ],
            optionsEn: [
                "Adding the property android:choiceMode=\"multipleChoice\" to the ListView element",
                "Utilizing the android:selection=\"all\" attribute inside it",
                "Exclusively writing the code list.setSelectable(true) programmatically",
                "You must discard ListView over simply using simple CheckBoxes"
            ],
            correctAnswers: [0]
        },
        {
            question: "كيف نقوم بإدراج وحفظ صنف Module جديد من حقل الكتابة (EditText) ليظهر ديناميكياُ في نافذة الحوار (AlertDialog) للقائمة؟",
            questionEn: "How do we fetch and commit a new Module from an EditText to dynamically update visually on the Dialog confirmation?",
            options: [
                "نستخرج النص ونضيفه للمصفوفة: <code>modules.add(et.getText().toString());</code>",
                "نقوم بعمل تحديث حتمي للعرض عبر تنبيه المحوّل: <code>adapter.notifyDataSetChanged();</code>",
                "ندمج بيانات جديدة مع قاعدة الـ SQL السحابية حصراً",
                "يتم تحديث القائمة تلقائياً دون الحاجة لأي أوامر بمجرد الضغط على زر الموافقة"
            ],
            optionsEn: [
                "Extract the string and add it: modules.add(et.getText().toString());",
                "Issue a mandatory view refresh by notifying the adapter: adapter.notifyDataSetChanged();",
                "Merge the fresh data securely in a SQL cloud database directly",
                "The list magically autosyncs fully without any commands right after clicking OK"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "في Exercise 2، كيف تتم برمجة أيقونة الـ Menu (قائمة) لتظهر باستمرار ودوماً في شريط مساحة العنوان العلوي (Action Bar)؟",
            questionEn: "In Exercise 2, how is a Menu icon programmed to consistently display on the top Action Bar layout bounds?",
            options: [
                "باستخدام الخاصية <code>android:showAsAction=\"always\"</code> داخل أمر العنصر <code>&lt;item&gt;</code>",
                "عن طريق استخدام الخاصية <code>android:visibility=\"visible\"</code> العادية",
                "لا يمكن ذلك، لأن القوائم دائماً ما تكون مخفية تحت زر الـ (3 نقاط عمودية) ولا يمكن إظهارها بجانبه",
                "بإدراج صورة ImageView مسطحة في أعلى التطبيق فقط"
            ],
            optionsEn: [
                "By invoking the android:showAsAction=\"always\" property inside the &lt;item&gt; element component",
                "By natively leveraging the common android:visibility=\"visible\" property",
                "Impossible; menus must remain strictly veiled underneath the (3 dots) overflow icon contextually",
                "By merely throwing a flat ImageView directly at the apex of our app views"
            ],
            correctAnswers: [0]
        },
        {
            question: "لبرمجة وتفعيل أمر ضغط وتحديد المستخدم لأحد أزرار القائمة (مثل زر R.id.add)، نستخدم أداة الاستماع:",
            questionEn: "To program and activate click selections on Menu buttons (like the add R.id.add button), we use the listener:",
            options: [
                "الدالة القياسية المنفصلة <code>onOptionsItemSelected(MenuItem item)</code>",
                "أوامر <code>setOnClickListener(...)</code> التقليدية داخل أيقونة القائمة",
                "دالة <code>onCreateOptionsMenu(Menu menu)</code> التي تُلتقط التمريرات",
                "يستخدم الأمر المخفي <code>getMenuBarClicked()</code>"
            ],
            optionsEn: [
                "The dedicated isolated function onOptionsItemSelected(MenuItem item)",
                "Conventional setOnClickListener(...) operations planted right inside a Menu icon element",
                "The function onCreateOptionsMenu(Menu menu) which magically senses swipes implicitly",
                "The heavily veiled execution call getMenuBarClicked()"
            ],
            correctAnswers: [0]
        },
        {
            question: "كيف يمكن رصد الضغط وتمرير (رقم الموضع position واسم العنصر module) من عناصر قائمة ListView إلى نافذة Toast عائمة؟",
            questionEn: "How to capture clicks and pass (position number and item name module) of ListView items to a floating Toast window?",
            options: [
                "باستخدام منبه النقر الخاص <code>mListView.setOnItemClickListener(...)</code>",
                "باستخراج الاسم بناءً على المنصب المعطى: <code>(String) mListView.getItemAtPosition(position)</code>",
                "بالتعبير وإظهارهم في الرسالة عبر هيكلة التجميع: <code>Toast.makeText(...)</code>",
                "الـ ListView يتميز بخاصية سريّة تنفذ رسائل الـ Toast بدون أكواد المبرمج بمجرد نقر العنصر"
            ],
            optionsEn: [
                "By adopting the specific click monitor pattern mListView.setOnItemClickListener(...)",
                "Extracting the correct item title referenced at its offset: (String) mListView.getItemAtPosition(position)",
                "Declaring & reflecting them dynamically using compiler constructs: Toast.makeText(...)",
                "A ListView incorporates hidden sub-routines running visual Toast alerts fully independently on any clicks"
            ],
            correctAnswers: [0, 1, 2]
        }
    ],
    "t5": [
        {
            question: "بحسب Exercise 1، ما هي الآلية البرمجية لإنشاء وتجهيز مساحة <code>SharedPreferences</code> خاصة بتطبيقك باسم 'MySharedPref'؟",
            questionEn: "According to Exercise 1, what is the programmatic API mechanism to create and instantiate SharedPreferences memory context named 'MySharedPref'?",
            options: [
                "استخدام الدالة: <pre class='code-block'><code>getSharedPreferences(\"MySharedPref\", MODE_PRIVATE);</code></pre>",
                "إنشاء واستعمال كلاس: <pre class='code-block'><code>new SharedPreferences(\"MySharedPref\");</code></pre>",
                "يجب توفر سيرفر محلي وكتابة: <pre class='code-block'><code>Database.open(\"MySharedPref\");</code></pre>",
                "استدعاء الخاصية المخفية: <pre class='code-block'><code>Android.getMemory(\"MODE_PRIVATE\");</code></pre>"
            ],
            optionsEn: [
                "Leveraging the function: getSharedPreferences(\"MySharedPref\", MODE_PRIVATE);",
                "Creating via Instantiating class: new SharedPreferences(\"MySharedPref\");",
                "A server instance is demanded: Database.open(\"MySharedPref\");",
                "Summoning the restricted feature: Android.getMemory(\"MODE_PRIVATE\");"
            ],
            correctAnswers: [0]
        },
        {
            question: "ما الكلاس والمسار البرمجي المسؤول عن كسر الحماية وفتح قنوات تحرير (إضافة/تعديل) القيم بداخل الـ <code>SharedPreferences</code>؟",
            questionEn: "Which class and programming API pipeline handles cracking open the channel allowing writing/modifying logic values in SharedPreferences?",
            options: [
                "يتم جلب محرر الأوامر والكلاس <code>SharedPreferences.Editor</code> وحقنة بدالة الاقتباس <code>edit()</code> الخاصة بالمرجع",
                "برمجياً يكتب الكود الصحيح هكذا: <pre class='code-block'><code>SharedPreferences.Editor myEdit = SP.edit();</code></pre>",
                "نستطيع إدراج وتعديل المعطيات مباشرة دون محرر كالتالي: <pre class='code-block'><code>SP.add(\"login\");</code></pre>",
                "يتعين تحميل مكتبات SQLite وحقن واجهتها داخلياً للعمل كمحرر"
            ],
            optionsEn: [
                "Attracting the handler class SharedPreferences.Editor extracted leveraging the source ref edit() function contextively",
                "Algorithmically, the solid statement form relies strictly on: SharedPreferences.Editor myEdit = SP.edit();",
                "We can blindly inject and tamper metrics missing editors completely: SP.add(\"login\");",
                "Requires downloading massive SQLite package layers porting its inner shells functioning dynamically as editors"
            ],
            correctAnswers: [0, 1]
        },
        {
            question: "كيف يتم تخزين سلسلة نصية (كالبيانات السرية login و psw) بالاعتماد على كائن المحرر الذي أنشأته؟",
            questionEn: "How is string data (like secretive 'login' and 'psw') securely recorded engaging your newly active editor pipeline element?",
            options: [
                "استخدام أمر تمرير قيمة السلسلة <code>putString()</code> كما يلي: <pre class='code-block'><code>myEdit.putString(\"login\", \"valeur de login\");</code></pre>",
                "نستخدم الدالة <code>myEdit.write()</code> بشكل صريح",
                "من المحتم في نهاية جميع التعديلات استدعاء أداة وخاتمة الحفظ: <pre class='code-block'><code>myEdit.commit();</code></pre>",
                "تقوم الذاكرة بالحفظ الذاتي لحظياً دون الحاجة لأي أوامر مثل <code>commit()</code> على الإطلاق"
            ],
            optionsEn: [
                "Employing the insertion protocol putString() perfectly mapping: myEdit.putString(\"login\", \"valeur de login\");",
                "We lean entirely over the routine execution myEdit.write() primarily",
                "It is unconditionally critical anchoring modifications lastly asserting the save toolchain: myEdit.commit();",
                "The context autonomously commits snapshot intervals ignoring necessity demands deploying commands like commit() wholly"
            ],
            correctAnswers: [0, 2]
        },
        {
            question: "عند العبث بالإعدادات بواجهة التطبيق كـ (الإضاءة luminosité، الصوت son، السحب Seekbar) في Exercise 2 وتجاهل الحفظ بـ SharedPreferences ثم الخروج، ماذا سيحدث للإعدادات؟",
            questionEn: "When tinkering with configurations (luminescence, audio, Seekbars) in Exercise 2 without asserting SharedPreferences commits beforehand, what sequentially occurs upon application restarts?",
            options: [
                "البيانات لم ولن تُحفظ، وسيتم إعادة تعيين واجهات الإعدادات وقيمها للوضع الافتراضي عند تشغيل وإقلاع البرنامج مرة أخرى في الهاتف",
                "تمتلك أنظمة Android أداة خلفية مخفية تلتقط تحفظ هذه القيم العابرة رغماً عن ذلك بأعجوبة لضمان راحة المستخدم",
                "يقوم الـ <code>Seekbar</code> بتسريب وإبلاغ الإحداثيات الجديدة لسيرفر سحابي مخصص",
                "يسبب إهمال الحفظ مشكلة حرجة تمنع تطبيقك من الإقلاع والعودة للحياة مما يؤدي لانهياره"
            ],
            optionsEn: [
                "Data has failed to write fully out; layouts fall back discarding changes resuming entirely default logic attributes unrecoverably mapped to a fresh application opening",
                "Android architectures maintain a spectral concealed core entity miraculously grasping unfulfilled traces ensuring continuous ease",
                "Seekbar objects naturally leak tracking coordinates mapping actively to exclusive cloud endpoints dynamically instead",
                "Failure writing data produces crippling systemic violations rendering software builds terminally unbootable resulting directly in its collapse"
            ],
            correctAnswers: [0]
        }
    ],
    "ai_c1": [
        {
            question: "وفقاً لقواعد بناء الجملة (Syntaxe) في \"Logique des Prédicats\"، أي من العناصر التالية تُعتبر من المكونات الأساسية لتشكيل الصيغ المنطقية؟",
            questionEn: "According to the syntax rules in Predicate Logic, which of the following are essential components of logical formulas?",
            options: [
                "الروابط المنطقية (Connectors) والمحددات الكمية (Quantifiers)",
                "المحمولات الضبابية (Fuzzy predicates)",
                "المتغيرات (Variables) والثوابت (Constants)",
                "الدوال (Functions) والمحمولات (Predicates)"
            ],
            optionsEn: [
                "Logical Connectors and Quantifiers",
                "Fuzzy predicates",
                "Variables and Constants",
                "Functions and Predicates"
            ],
            correctAnswers: [0, 2, 3],
            hint: "تذكر أن المنطق الضبابي (Fuzzy logic) هو نوع آخر من المنطق جاء لاحقاً لمعالجة بعض عيوب المنطق الكلاسيكي، لذا فإن المحمولات الضبابية ليست من المكونات الأساسية لبناء الجملة في منطق المحمولات القياسي."
        },
        {
            question: "بناءً على تعريفات الـ \"Clause\" في المصدر، أي من العبارات التالية صحيحة؟",
            questionEn: "Based on the definition of a Clause, which of the following statements are true?",
            options: [
                "الـ Clause هي عبارة عن اتصال (Conjunction) لمجموعة من الـ Literals",
                "الـ Horn clause هي عبارة تحتوي على Literal إيجابي واحد على الأكثر",
                "الـ Concrete clause هي عبارة لا تحتوي على أي متغيرات (sans variable)",
                "الـ Literal يمكن أن يكون ذرة إيجابية (Atome positif) أو نفي لذرة (Négation d'un atome)"
            ],
            optionsEn: [
                "A Clause is a conjunction of a set of Literals",
                "A Horn clause contains at most one positive Literal",
                "A Concrete clause contains no variables",
                "A Literal can be a positive atom or the negation of an atom"
            ],
            correctAnswers: [1, 2, 3],
            hint: "ركز في تعريف الـ Clause؛ فهي تُبنى دائماً على أساس \"الفصل\" المنطقي (Disjonction - ˅) بين مجموعة من الحرفيات (Littéraux)، وليس \"الاتصال\" أو الوصل."
        },
        {
            question: "ما هو مبدأ الدقة (Principe de résolution) وعملية التوحيد (Unification) كما ورد في الملف؟",
            questionEn: "What is the Resolution principle and the Unification process as stated in the material?",
            options: [
                "عملية الـ Unification تهدف إلى إيجاد تعويض (Substitution) للمتغيرات لكي يتطابق مصطلحان (t1 و t2)",
                "مبدأ الـ Résolution هو قاعدة استدلال غير دقيقة وتنتج استنتاجات غير منطقية",
                "الـ Modus ponens والـ Modus tollens هما من الحالات الخاصة لمبدأ الـ Résolution",
                "يتطلب مبدأ الـ Résolution البحث عن Literals متتامة (مثل G1 و ¬G1) لحذفها"
            ],
            optionsEn: [
                "Unification aims to find a variable substitution to match two terms",
                "Resolution is an inaccurate inference rule producing illogical conclusions",
                "Modus ponens and Modus tollens are special cases of the Resolution principle",
                "Resolution requires finding complementary Literals (like G1 and ¬G1) to eliminate them"
            ],
            correctAnswers: [0, 2, 3],
            hint: "مبدأ الدقة (Résolution) يعتبر قاعدة استدلال سليمة ودقيقة (saine)، لذا أي خيار يصفه بأنه ينتج استنتاجات غير منطقية هو خيار مستبعد بكل تأكيد."
        },
        {
            question: "أي من التكافؤات المنطقية (Équivalences) التالية تعتبر صحيحة (Formules valides) لتمثيل المحددات الكمية؟",
            questionEn: "Which of the following logical equivalences are valid for representing quantifiers?",
            options: [
                "∀x ¬A ⇔ ¬∃x A",
                "∀x A ⇔ ¬∃x ¬A",
                "∃x ¬A ⇔ ∀x A",
                "∀x ¬A ⇔ ∃x A"
            ],
            optionsEn: [
                "∀x ¬A ⇔ ¬∃x A",
                "∀x A ⇔ ¬∃x ¬A",
                "∃x ¬A ⇔ ∀x A",
                "∀x ¬A ⇔ ∃x A"
            ],
            correctAnswers: [0, 1],
            hint: "القاعدة الرياضية الأساسية هنا هي أن تمرير إشارة النفي (¬) عبر المحدد الكمي تقوم بقلبه؛ فـ \"الكل\" (∀) يتحول إلى \"يوجد\" (∃)، والعكس صحيح."
        },
        {
            question: "على الرغم من قوة \"Logique des Prédicats\"، إلا أن له عدة قيود، فما هي أبرز هذه القيود والمزايا؟",
            questionEn: "Despite the power of Predicate Logic, it has limitations. What are its main constraints and advantages?",
            options: [
                "من مزاياه النمطية (Modularity) حيث يمكن إضافة الحقائق بشكل مستقل",
                "يتميز بقدرته العالية على معالجة الاستثناءات والمعلومات المفقودة بسهولة",
                "يعاني من الانفجار التوافقي (Explosion combinatoire) عندما يتجاوز عدد الحقائق حداً معيناً",
                "يتسم بالصلابة (Rigidity) مما يمنعه من التعامل مع المصطلحات اللغوية الضبابية"
            ],
            optionsEn: [
                "Modularity, as facts can be added independently",
                "Extremely capable of handling exceptions and missing info seamlessly",
                "Suffers from Combinatorial Explosion when facts exceed a certain limit",
                "Rigidity, preventing it from handling fuzzy linguistic modifiers"
            ],
            correctAnswers: [0, 2, 3],
            hint: "منطق المحمولات يتسم بالصلابة (Rigidité) العالية. فكر فيما إذا كانت هذه الصلابة تسمح له بالتعامل بمرونة مع الاستثناءات والمعلومات الناقصة أم لا."
        },
        {
            question: "لمعالجة قصور المنطق الكلاسيكي، تم اقتراح منطقيات أخرى. طابق بين المنطق ووظيفته الصحيحة:",
            questionEn: "To address classical logic limitations, other logics were proposed. Match the logic to its function:",
            options: [
                "المنطق الضبابي (Fuzzy logic) يعطي قيمة حقيقة للمحمول تنتمي إلى المجال [0, 1]",
                "المنطق الموجه (Modal logic) يتعامل مع الافتراضات والاستثناءات",
                "المنطق متعدد القيم (Logique multi-valués) ينسب مجموعة من القيم المنفصلة للمحمول",
                "منطق الافتراضات (Default logic) يحاول نمذجة الاستثناءات وهو من فئة المنطقيات غير الرتيبة"
            ],
            optionsEn: [
                "Fuzzy logic gives a truth value to a predicate belonging to the interval [0, 1]",
                "Modal logic deals with assumptions and exceptions",
                "Multi-valued logic assigns a discrete set of values to a predicate",
                "Default logic models exceptions and belongs to non-monotonic logics"
            ],
            correctAnswers: [0, 2, 3],
            hint: "المنطق الموجه (Logique modale) يتعامل مع «حتمية» و«إمكانية» الأشياء، بينما يوجد منطق آخر مخصص تحديداً لنمذجة الاستثناءات وهو (Logique des défauts)."
        },
        {
            question: "فيما يخص الفروق بين الأسلوب التصريحي والإجرائي لتمثيل المعرفة، أي العبارات التالية صحيحة؟",
            questionEn: "Regarding the differences between Declarative and Procedural knowledge representation, which are true?",
            options: [
                "الأسلوب الإجرائي (Procédural) مفيد للمشاكل الخوارزمية ويعبر عن \"كيف\" تنتقل المعرفة",
                "الأسلوب التصريحي (Déclaratif) يفصل بين هيكل التحكم والمعرفة المستقلة",
                "يوجد نظام تمثيل معرفة عالمي (Universel) يجمع بين الأسلوبين ويكون مناسباً لجميع المشاكل",
                "الأسلوب التصريحي يعتبر نظاماً مفتوحاً (Ouvert)، بينما الإجرائي يعتبر نظاماً مغلقاً (Fermé)"
            ],
            optionsEn: [
                "Procedural style is useful for algorithmic problems and expresses \"how\" knowledge transitions",
                "Declarative style separates the control structure from the independent knowledge",
                "There is a universal representation system suitable for all problems",
                "Declarative is considered an open system, while Procedural is a closed system"
            ],
            correctAnswers: [0, 1, 3],
            hint: "تذكر الخلاصة النهائية للمقرر: هل توصل العلماء إلى نظام سحري واحد يمكنه تمثيل جميع أنواع المعرفة بشكل عالمي؟ ابحث عن الخيار الذي يناقض هذه الخلاصة واستبعده."
        }
    ],
    "ai_c2": [
        {
            question: "بناءً على الفروق بين المصطلحات الأساسية في الذكاء الاصطناعي، أي من العبارات التالية تعتبر صحيحة؟",
            questionEn: "Based on the distinctions between fundamental AI concepts, which of the following statements are correct?",
            options: [
                "البيانات (Donnée) هي إشارات غير مُفسرة تنقل المعلومة",
                "المعلومات (Information) هي التفسير الذي نعطيه للبيانات",
                "المعرفة (Connaissance) تستخدم المعلومات بغرض اتخاذ الإجراءات والقرارات",
                "الاستدلال (Raisonnement) هو عملية عشوائية غير منطقية لجمع البيانات"
            ],
            optionsEn: [
                "Data (Donnée) are uninterpreted signals conveying information",
                "Information is the interpretation we give to data",
                "Knowledge uses information to take actions and make decisions",
                "Reasoning is a random, illogical process of data collection"
            ],
            correctAnswers: [0, 1, 2],
            hint: "راجع العلاقة التسلسلية بين (Data → Information → Knowledge). هل الاستدلال يمكن أن يكون عملية \"عشوائية\" في سياق الذكاء الاصطناعي؟"
        },
        {
            question: "ما هي الخصائص التي تميز نماذج تمثيل المعرفة (Paradigmes de représentation) التصريحية والإجرائية؟",
            questionEn: "What are the characteristics that distinguish declarative and procedural knowledge representation paradigms?",
            options: [
                "الأسلوب التصريحي (Déclaratif) يفصل بوضوح بين المعرفة وآلية الاستدلال",
                "الأسلوب الإجرائي (Procédural) يدمج المعرفة مع طريقة معالجتها واستخدامها",
                "الأسلوب التصريحي يصعب تعديله ولا يقبل إضافة حقائق جديدة",
                "الأسلوب التصريحي يتميز بقابليته للتوسيع (Extensible) وإمكانية استخدامه بطرق متعددة"
            ],
            optionsEn: [
                "The Declarative style clearly separates knowledge from the inference mechanism",
                "The Procedural style integrates knowledge with how it is processed and used",
                "The Declarative style is hard to modify and does not accept new facts",
                "The Declarative style is extensible and can be used in multiple ways"
            ],
            correctAnswers: [0, 1, 3],
            hint: "الأسلوب التصريحي مبني على استقلالية المعلومات، مما يجعله مرناً للغاية؛ هل تتوافق هذه المرونة مع فكرة صعوبة التعديل؟"
        },
        {
            question: "تتطلب الأنظمة الذكية 4 أنواع من المعرفة لتتصرف بذكاء، أي من هذه المطابقات صحيحة؟",
            questionEn: "Intelligent systems require 4 types of knowledge. Which of the following mappings are correct?",
            options: [
                "المعرفة الفوقية (Meta-connaissance) تمثل المعرفة حول ما نعرفه، مثل موثوقية المعلومات",
                "التنفيذ أو الإنجاز (Réalisation) يعبر عن كيفية فعل الأشياء مثل \"قيادة الدراجة\"",
                "الأحداث (Evénements) تمثل الأفعال والعلاقات السببية عبر الزمن",
                "الأشياء (Objets) تعبر عن معرفة كيفية إثبات النظريات المعقدة"
            ],
            optionsEn: [
                "Meta-knowledge represents knowledge about what we know, such as reliability of information",
                "Réalisation expresses how to do things, e.g. riding a bike",
                "Events represent actions and causal relationships over time",
                "Objects express knowledge of how to prove complex theorems"
            ],
            correctAnswers: [0, 1, 2],
            hint: "ركز على كلمة \"Meta\"، وتذكر أن \"Réalisation\" تتعلق بالجانب التطبيقي أو الحركي (مثل الدراجة). هل \"الأشياء\" (Objets) تتعلق بإثبات النظريات؟"
        },
        {
            question: "يواجه تمثيل المعرفة عدة مشاكل ويتطلب معايير اختيار (Critères de choix). أي من العبارات التالية صحيحة؟",
            questionEn: "Knowledge representation faces several problems and requires selection criteria. Which statements are correct?",
            options: [
                "القدرة على التعبير (Expressibilité) تعني القدرة على تمثيل كافة المعارف ذات الصلة بالمجال",
                "الدقة (Fidélité) تعني القدرة على شرح الاستدلال للبشر",
                "من مشاكل تمثيل المعرفة: تطور الكون (L'univers en évolution) والتعامل مع الاستثناءات",
                "المعلومات غير المكتملة أو غير المؤكدة (Informations incomplètes, incertaines) تعتبر من أبرز المشاكل"
            ],
            optionsEn: [
                "Expressibility means the ability to represent all knowledge relevant to the domain",
                "Fidélité means the ability to explain reasoning to humans",
                "Problems include the evolving universe and handling exceptions",
                "Incomplete or uncertain information is among the main problems of knowledge representation"
            ],
            correctAnswers: [0, 2, 3],
            hint: "معيار شرح الاستدلال للبشر يسمى التفسير (Explication) وليس الدقة (Fidélité). راجع قائمة مشاكل التمثيل."
        },
        {
            question: "فيما يخص تعريف وخصائص الشبكات الدلالية (Réseaux sémantiques)، أي من التالي صحيح؟",
            questionEn: "Regarding the definition and properties of Semantic Networks, which of the following are correct?",
            options: [
                "تم تطويرها بواسطة العالم Quillian عام 1968 استناداً إلى الحفظ الترابطي البشري",
                "تُمثل المفاهيم كعُقد (Nœuds) والعلاقات كأقواس (Arcs)",
                "العنصر الوظيفي الأساسي فيها يسمى \"الحقيقة\" (Fait) ويتكون من عقدتين يربط بينهما قوس",
                "لا تستطيع الشبكات الدلالية تمثيل العلاقات الزمنية والمكانية"
            ],
            optionsEn: [
                "Developed by Quillian in 1968, based on human associative memory",
                "Concepts are represented as nodes and relations as arcs",
                "The basic functional unit is called a Fait (fact), consisting of two nodes linked by an arc",
                "Semantic networks cannot represent temporal or spatial relationships"
            ],
            correctAnswers: [0, 1, 2],
            hint: "تذكر أن مكونات الشبكات الدلالية لا تقتصر على المفاهيم الهرمية فقط، بل تشمل أيضاً العلاقات المكانية والزمنية."
        },
        {
            question: "تستخدم الشبكات الدلالية عدة علاقات لربط العقد. أي من التطابقات التالية للعلاقات صحيحة؟",
            questionEn: "Semantic networks use several relations to link nodes. Which of the following relation mappings are correct?",
            options: [
                "علاقة (Est-un) تستخدم لربط كائن محدد (Instance) بمفهوم عام",
                "علاقة (Sorte-de) تعبر عن التدرج الهرمي واحتواء مفهوم داخل مفهوم آخر",
                "علاقة (Partie-de) تعبر عن العلاقات الهيكلية البنيوية بين الأجزاء",
                "الشبكات الدلالية تقتصر فقط على العلاقات الهرمية ولا تدعم الخصائص الأحادية (Prédicats unaires)"
            ],
            optionsEn: [
                "Est-un links a specific instance to a general concept",
                "Sorte-de expresses the hierarchy and containment of one concept inside another",
                "Partie-de expresses structural relationships between parts",
                "Semantic networks are limited to hierarchical relations and do not support unary predicates"
            ],
            correctAnswers: [0, 1, 2],
            hint: "تذكر الفرق بين أن تكون \"عضواً في فئة\" (مثل عصفور هو طائر) وبين أن تكون \"نسخة\" (instance). هل الشبكات الدلالية ترفض الخصائص الأحادية؟"
        },
        {
            question: "تتمتع الشبكات الدلالية بمزايا وعيوب (Avantages/Inconvénients). أي من العبارات التالية صحيحة؟",
            questionEn: "Semantic networks have both advantages and disadvantages. Which of the following are correct?",
            options: [
                "من مزاياها السماح بالوراثة (Héritage) ومعالجة الاستثناءات بسهولة",
                "من مزاياها طابعها الرسومي (Caractère graphique) الذي يجعلها سهلة الفهم",
                "من عيوبها صعوبة الاستدلال عندما تصبح قواعد البيانات ضخمة جداً",
                "من مزاياها قدرتها الفائقة على التعبير عن المعتقدات (Croyances) والغموض بدقة عالية"
            ],
            optionsEn: [
                "An advantage is allowing inheritance and handling exceptions easily",
                "An advantage is their graphical nature making them easy to understand",
                "A disadvantage is difficulty in reasoning when knowledge bases become very large",
                "An advantage is their excellent ability to express beliefs and ambiguity with high precision"
            ],
            correctAnswers: [0, 1, 2],
            hint: "كلما كبرت الشبكة الدلالية وزادت تعقيداتها، كيف يؤثر ذلك على كفاءة البحث؟ وهل الرسوم البيانية البسيطة جيدة لتمثيل المشاعر والشكوك؟"
        },
        {
            question: "بناءً على المخطط الشجري الذي يعرض أنماط تمثيل المعرفة (Modes de représentation)، أي من التصنيفات التالية صحيحة؟",
            questionEn: "Based on the tree diagram of knowledge representation modes, which of the following classifications are correct?",
            options: [
                "التمثيلات المنطقية (Les représentations logiques) تتفرع إلى منطق القضايا ومنطق المحمولات",
                "الكائنات المهيكلة (Les objets structurés) تتضمن الإطارات (Les Frames) والسيناريوهات (Le script)",
                "الشبكات الدلالية (Les réseaux sémantiques) تعتبر فرعاً مشتقاً من قواعد الإنتاج (Les règles de production)",
                "قواعد الإنتاج (Les règles de production) هي أحد الأنماط المستقلة لتمثيل المعرفة"
            ],
            optionsEn: [
                "Logical representations branch into propositional logic and predicate logic",
                "Structured objects include Frames and Scripts",
                "Semantic networks are a sub-branch of production rules",
                "Production rules are an independent knowledge representation paradigm"
            ],
            correctAnswers: [0, 1, 3],
            hint: "تخيل المخطط الشجري؛ هل قواعد الإنتاج والشبكات الدلالية يقعان في نفس المستوى كأنماط أساسية أم أن أحدهما يتفرع من الآخر؟"
        },
        {
            question: "كيف تتعامل الشبكات الدلالية مع التعبيرات المنطقية (Expressions logiques) واستخدام المتغيرات (Utilisation des variables)؟",
            questionEn: "How do semantic networks handle logical expressions and the use of variables?",
            options: [
                "يمكن تحويل العقدة (Noeud) إلى محمول (Prédicat)، مثل: Possède(oiseau, Ailes)",
                "تعجز الشبكات الدلالية تماماً عن تمثيل النفي (Négation) أو علاقات الانفصال (Ou)",
                "يمكن استخدام المتغيرات (مثل ?x) لتمثيل الجمل الشرطية (Si X Alors Y) والاستنتاجات",
                "يمكن للشبكات الدلالية التعبير عن علاقات التعدي (Transitivité)"
            ],
            optionsEn: [
                "A node can be converted to a predicate, e.g. Possède(oiseau, Ailes)",
                "Semantic networks completely fail to represent negation or disjunction",
                "Variables (e.g. ?x) can be used to represent conditional statements (If X Then Y)",
                "Semantic networks can express transitivity relations"
            ],
            correctAnswers: [0, 2, 3],
            hint: "على الرغم من أن تمثيل الأفكار المعقدة يعتبر من عيوب الشبكات الدلالية، إلا أنها تملك رسومات خاصة للتعامل مع \"النفي\" و\"أو\". هل يعني ذلك أنها تعجز \"تماماً\"؟"
        },
        {
            question: "ما هي الخطوات المنهجية لإنشاء شبكة دلالية (Création d'un RS) انطلاقاً من نص، كما ورد في المثال التطبيقي؟",
            questionEn: "What are the methodical steps to create a Semantic Network from a text, as described in the practical example?",
            options: [
                "قراءة النص بالكامل أولاً لتحديد الكائنات (Objets) والعلاقات (Relations) ومدى تكرارها",
                "رسم الشبكة بشكل نهائي ومباشر فور قراءة النص دون الحاجة لتجزئته",
                "فصل المقترحات الذرية (Propositions atomiques) ووضعها في شكل جدول (Forme tabulaire)",
                "رسم أجزاء الشبكة تباعاً، مع إمكانية التراجع وتعديل الشبكة (Rectifier le réseau) لاحقاً"
            ],
            optionsEn: [
                "First read the entire text to identify objects, relations, and their frequency",
                "Draw the final network immediately after reading, without breaking it down",
                "Separate atomic propositions and place them in tabular form",
                "Draw network parts sequentially, with the possibility to go back and correct later"
            ],
            correctAnswers: [0, 2, 3],
            hint: "فكر في الأمر كمهندس يبني منزلاً؛ هل يبدأ بالبناء المباشر أم يقوم أولاً بتفكيك الموارد وجدولتها قبل تجميعها مع إمكانية التعديل؟"
        }
    ]
};

// Navigation Variables
const homeView = document.getElementById('home-view');
const chaptersView = document.getElementById('chapters-view');
const quizView = document.getElementById('quiz-view');
const topNav = document.getElementById('top-nav');
const navTitle = document.getElementById('nav-title');
const backBtn = document.getElementById('back-btn');

let currentActiveView = 'home';
let currentChapterId = '1';
let currentSubjectId = 'mobile';
let currentSubjectName = 'Mobile Applications';

// Quiz State
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedOptions = new Set();
let isAnswerSubmitted = false;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const progress = document.getElementById('progress');
const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');

// View Controller
function navigateTo(view, title = '', subjectId = '') {
    // Hide all views first
    homeView.classList.add('hidden');
    chaptersView.classList.add('hidden');
    quizView.classList.add('hidden');
    
    currentActiveView = view;
    
    if (view === 'home') {
        homeView.classList.remove('hidden');
        topNav.classList.add('hidden');
    } else if (view === 'chapters') {
        chaptersView.classList.remove('hidden');
        topNav.classList.remove('hidden');
        navTitle.innerText = title;
        document.getElementById('chapters-subject-title').innerText = title;
        
        if (subjectId === 'mobile') {
            document.getElementById('mobile-sections').classList.remove('hidden');
            document.getElementById('ai-sections').classList.add('hidden');
        } else if (subjectId === 'ai') {
            document.getElementById('mobile-sections').classList.add('hidden');
            document.getElementById('ai-sections').classList.remove('hidden');
        }
    } else if (view === 'quiz') {
        quizView.classList.remove('hidden');
        topNav.classList.remove('hidden');
        navTitle.innerText = title;
        // Start the quiz logic
        startQuiz(); 
    }
    
    // Refresh SVG icons whenever view switches
    lucide.createIcons();
}

backBtn.addEventListener('click', () => {
    if (currentActiveView === 'chapters') {
        navigateTo('home');
    } else if (currentActiveView === 'quiz') {
        navigateTo('chapters', currentSubjectName, currentSubjectId);
    }
});

// Grid Cards Navigation Logic
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const subjectId = e.currentTarget.getAttribute('data-subject');
        const subjectName = e.currentTarget.querySelector('h3').innerText;
        
        if (subjectId === 'mobile' || subjectId === 'ai') {
            currentSubjectId = subjectId;
            currentSubjectName = subjectName;
            navigateTo('chapters', subjectName, subjectId);
        } else {
            alert('قريباً! هذه المادة ستكون متاحة قريباً في تحديثات لاحقة.');
        }
    });
});

// Attach handlers for chapters - Event Delegation to cover all cards
document.getElementById('chapters-view').addEventListener('click', (e) => {
    const chapter = e.target.closest('.chapter-card.active-chapter');
    if (!chapter) return;
    const chapId = chapter.getAttribute('data-chapter');
    currentChapterId = chapId;
    navigateTo('quiz', `Quiz`);
});

// Hint Modal Logic
const hintOverlay = document.getElementById('hint-overlay');
const hintText = document.getElementById('hint-text');
const hintCloseBtn = document.getElementById('hint-close');

function showHint(hint) {
    hintText.innerText = hint;
    hintOverlay.classList.remove('hidden');
    lucide.createIcons();
}

hintCloseBtn.addEventListener('click', () => {
    hintOverlay.classList.add('hidden');
});

hintOverlay.addEventListener('click', (e) => {
    if (e.target === hintOverlay) {
        hintOverlay.classList.add('hidden');
    }
});


function startQuiz() {
    currentQuestions = questionsData[currentChapterId];
    currentQuestion = 0;
    score = 0;
    resultArea.classList.add('hidden');
    quizArea.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    isAnswerSubmitted = false;
    selectedOptions.clear();
    submitBtn.innerHTML = '<span>تأكيد الإجابة</span><i data-lucide="check-circle"></i>';
    submitBtn.disabled = true;
    lucide.createIcons();
    
    // Setup hint button
    const q = currentQuestions[currentQuestion];
    const hintBtn = document.getElementById('hint-btn');
    if (q.hint) {
        hintBtn.classList.remove('hidden');
        hintBtn.onclick = () => showHint(q.hint);
    } else {
        hintBtn.classList.add('hidden');
    }
    
    questionText.innerHTML = `${q.question}<br><small class="en-translation">${q.questionEn}</small>`; 
    counter.innerText = `${currentQuestion + 1} / ${currentQuestions.length}`;
    progress.style.width = `${((currentQuestion) / currentQuestions.length) * 100}%`;
    
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `
            <div class="checkbox"></div>
            <div class="option-content">
                <div class="text-ar">${opt}</div>
                <div class="en-translation">${q.optionsEn[index]}</div>
            </div>
        `;
        
        div.addEventListener('click', () => {
            if(isAnswerSubmitted) return;
            
            if (selectedOptions.has(index)) {
                selectedOptions.delete(index);
                div.classList.remove('selected');
                div.querySelector('.checkbox').innerHTML = ''; // removed icon visually
            } else {
                selectedOptions.add(index);
                div.classList.add('selected');
                div.querySelector('.checkbox').innerHTML = '<i data-lucide="check"></i>';
                lucide.createIcons();
            }
            
            submitBtn.disabled = selectedOptions.size === 0;
        });
        
        optionsContainer.appendChild(div);
    });
}

// Logic validation on Submit
submitBtn.addEventListener('click', () => {
    if (!isAnswerSubmitted) {
        // Validation phase initiated
        isAnswerSubmitted = true;
        const q = currentQuestions[currentQuestion];
        
        const optionDivs = optionsContainer.children;
        
        let isCorrect = true;
        // Verify user selected ALL and ONLY correct options
        for (let i = 0; i < q.options.length; i++) {
            const isSelected = selectedOptions.has(i);
            const isActuallyCorrect = q.correctAnswers.includes(i);
            
            if (isActuallyCorrect) {
                 optionDivs[i].classList.add('correct');
                 optionDivs[i].querySelector('.checkbox').innerHTML = '<i data-lucide="check"></i>';
                 if(!isSelected) isCorrect = false;
            } else {
                if(isSelected) {
                    optionDivs[i].classList.add('wrong');
                    optionDivs[i].querySelector('.checkbox').innerHTML = '<i data-lucide="x"></i>';
                    isCorrect = false;
                }
            }
        }
        
        lucide.createIcons(); // Reactivate dynamically generated icons logic
        
        if (isCorrect) {
            score++;
        }
        
        if (currentQuestion === currentQuestions.length - 1) {
            submitBtn.innerHTML = '<span>عرض النتيجة النهائية</span><i data-lucide="award"></i>';
        } else {
            submitBtn.innerHTML = '<span>السؤال التالي</span><i data-lucide="arrow-left"></i>';
        }
        lucide.createIcons();
        submitBtn.disabled = false;
        
    } else {
        // Move to Navigation Phase
        currentQuestion++;
        if (currentQuestion < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }
});

function showResults() {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
    progress.style.width = '100%';
    
    document.getElementById('score-text').innerText = score;
    document.querySelector('.score-circle small').innerText = `من ${currentQuestions.length}`;
    
    const feedback = document.getElementById('feedback-text');
    
    if (score === currentQuestions.length) {
        feedback.innerText = "أداء استثنائي! درجة كاملة بلا أي أخطاء.";
    } else if (score >= currentQuestions.length * 0.7) {
        feedback.innerText = "أداء ممتاز! مجهود رائع تستحق الثناء عليه.";
    } else if (score >= currentQuestions.length / 2) {
        feedback.innerText = "أداء جيد، لكن يمكنك التحسن أكثر!";
    } else {
        feedback.innerText = "حاول مرة أخرى لمراجعة معلوماتك وإعادة تذكر المفاهيم!";
    }
}

document.getElementById('restart-btn').addEventListener('click', () => {
    navigateTo('chapters', currentSubjectName, currentSubjectId);
});

// App Entry Point
navigateTo('home');
lucide.createIcons();
