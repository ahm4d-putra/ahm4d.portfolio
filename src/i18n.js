import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // === NAVBAR ===
      nav_projects: "Projects",
      nav_insights: "Insights",
      nav_about: "About",
      nav_contact: "Contact",

      // === HERO ===
      hero_role: "Full-Stack Engineer",
      hero_title1: "I build real things",
      hero_title2: "that actually work",
      hero_desc:
        "A software engineering student focused on building performant and scalable applications, while continuously learning to create impactful solutions.",
      btn_work: "View My Work",
      btn_contact: "Get In Touch",

      // === PROJECTS ===
      projects_subtitle: "Portfolio",
      projects_title: "Featured Projects",
      projects_desc:
        "A selection of projects that reflect how I learn, solve problems, and build real-world applications.",

      // Project 1
      projects_1_title: "Hand Gesture Control",
      projects_1_problem:
        "Interacting with applications using traditional input devices like keyboard and mouse can be limiting, especially for more intuitive or touchless experiences.",
      projects_1_solution:
        "Built a hand gesture recognition system using computer vision to detect and track hand movements in real-time, enabling basic interaction through gestures.",
      // Project 2
      projects_2_title: "Financial Tracker",
      projects_2_problem:
        "Many students struggle to track their daily expenses, often losing control of their spending due to lack of simple and accessible tools.",
      projects_2_solution:
        "Developed a web-based financial tracker that allows users to record income and expenses, with real-time data storage using Supabase for easy access and updates.",
      // Project 3
      projects_3_title: "TikTok Downloader",
      projects_3_problem:
        "Users often want to download TikTok videos without watermarks, but many existing tools are filled with ads or have unreliable performance.",
      projects_3_solution:
        "Created a backend service to fetch and process TikTok video data, combined with a clean frontend interface to provide a simple and fast downloading experience.",
      // Project 4
      projects_4_title: "QR Code Generator",
      projects_4_problem:
        "Generating QR codes often requires using online tools, which may not always be efficient or available offline.",
      projects_4_solution:
        "Built a desktop application that allows users to generate and store QR codes locally, using a simple GUI and local database for saving history.",

      // === INSIGHTS ===
      insights_subtitle: "Engineering",
      insights_title: "Technical Insights",
      insights_desc:
        "Key architectural decisions and principles that guide my development process.",
      insight_1_title: "Structured Components",
      insight_1_desc:
        "I organize UI into reusable components to keep code clean, easier to maintain, and consistent across the app.",
      insight_2_title: "Simple State Handling",
      insight_2_desc:
        "Managing state using basic React patterns and keeping data flow simple to avoid unnecessary complexity.",
      insight_3_title: "Performance Awareness",
      insight_3_desc:
        "I try to keep applications lightweight by minimizing unnecessary re-renders and optimizing basic loading performance.",
      insight_4_title: "User-Focused Design",
      insight_4_desc:
        "Building interfaces that are simple, clear, and easy to use, with attention to layout and responsiveness.",
      code_comment: "// My development philosophy in code",
      code_learning: "Keep building and keep improving",
      code_consistency: "Small progress every day matters",
      code_problemSolving: "Understand the problem before coding",
      code_simplicity: "Start simple, then improve step by step",
      code_curiosity: "Always explore how things work",

      // === ABOUT ===
      about_subtitle: "About Me",
      about_title: "The Journey",
      about_bio1:
        "I’m Ahmad Putra Ramadhan, a student from SMK 20 with a strong determination to learn and grow in the field of software engineering. I’m passionate about understanding how software is built, from the fundamentals to real-world applications, and continuously improving my skills to create useful and impactful solutions.",
      about_bio2:
        "My approach combines deep technical knowledge with product thinking. I believe the best code isn't just clean—it's strategic, solving the right problems in the simplest way possible.",

      // === JOURNEY / TIMELINE (PENTING INI!) ===
      journey_0_year: "2017",
      journey_0_title: "First Exposure to Technology",
      journey_0_desc:
        "Started elementary school and became familiar with computers, learning basic operations and developing curiosity about how technology works.",
      journey_1_year: "2022",
      journey_1_title: "Curiosity About Coding",
      journey_1_desc:
        "During middle school, I became interested in programming and began exploring how websites and applications are built.",
      journey_2_year: "2025",
      journey_2_title: "Choosing Software Engineering",
      journey_2_desc:
        "Started studying at SMK 20, majoring in Software Engineering (RPL) to deepen my understanding and build real projects.",
      journey_3_year: "Now",
      journey_3_title: "Building & Improving",
      journey_3_desc:
        "Currently focused on improving my skills by building projects, learning new technologies, and strengthening my problem-solving mindset.",

      // === CONTACT ===
      contact_subtitle: "Contact",
      contact_title: "Let's Build Something",
      contact_desc:
        "Have a project in mind or just want to chat? I'm always open to discussing new opportunities and interesting ideas.",
      contact_quick_info: "Quick Info",
      contact_response_title: "Response Time",
      contact_response_desc:
        "I typically respond within 24 hours. For urgent matters, reach out via Instagram.",
      contact_name_label: "Name",
      contact_name_placeholder: "Your name",
      contact_email_label: "Email",
      contact_email_placeholder: "you@example.com",
      contact_message_label: "Message",
      contact_message_placeholder: "Tell me about your project...",
      contact_success_msg:
        "Message sent successfully! I'll get back to you soon.",
      contact_btn_send: "Send Message",

      // === PLAYGROUND ===
      playground_title: "Interactive Playground",
      playground_subtitle: "Test your coding speed. Type the code below.",
      playground_speed: "Speed",
      playground_accuracy: "Accuracy",
      playground_success: "Perfect!",
    },
  },
  id: {
    translation: {
      // === NAVBAR ===
      nav_projects: "Proyek",
      nav_insights: "Wawasan",
      nav_about: "Tentang",
      nav_contact: "Kontak",

      // === HERO ===
      hero_role: "Insinyur Full-Stack",
      hero_title1: "Saya membangun hal nyata",
      hero_title2: "yang benar-benar bekerja",
      hero_desc:
        "Seorang mahasiswa teknik perangkat lunak yang fokus pada pembangunan aplikasi yang berkinerja dan terukur, sambil terus belajar menciptakan solusi berdampak.",
      btn_work: "Lihat Karya Saya",
      btn_contact: "Hubungi Saya",

      // === PROJECTS ===
      projects_subtitle: "Portofolio",
      projects_title: "Proyek Unggulan",
      projects_desc:
        "Pilihan proyek yang mencerminkan bagaimana saya belajar, memecahkan masalah, dan membangun aplikasi dunia nyata.",

      // Project 1
      projects_1_title: "Kontrol Gerakan Tangan",
      projects_1_problem:
        "Berinteraksi dengan aplikasi menggunakan perangkat input tradisional seperti keyboard dan mouse bisa membatasi, terutama untuk pengalaman yang lebih intuitif atau tanpa sentuhan.",
      projects_1_solution:
        "Membangun sistem pengenalan gerakan tangan menggunakan computer vision untuk mendeteksi dan melacak pergerakan tangan secara real-time, memungkinkan interaksi dasar melalui gerakan.",
      // Project 2
      projects_2_title: "Pelacak Keuangan",
      projects_2_problem:
        "Banyak siswa kesulitan melacak pengeluaran harian mereka, sering kehilangan kendali atas pengeluaran karena kurangnya alat yang sederhana dan mudah diakses.",
      projects_2_solution:
        "Mengembangkan pelacak keuangan berbasis web yang memungkinkan pengguna mencatat pemasukan dan pengeluaran, dengan penyimpanan data real-time menggunakan Supabase.",
      // Project 3
      projects_3_title: "Pengunduh TikTok",
      projects_3_problem:
        "Pengguna sering ingin mengunduh video TikTok tanpa watermark, tapi banyak alat yang ada penuh iklan atau kinerjanya tidak dapat diandalkan.",
      projects_3_solution:
        "Membuat layanan backend untuk mengambil dan memproses data video TikTok, dikombinasikan dengan antarmuka frontend yang bersih untuk memberikan pengalaman unduh yang cepat.",
      // Project 4
      projects_4_title: "Generator Kode QR",
      projects_4_problem:
        "Membuat kode QR seringkali memerlukan alat online, yang mungkin tidak selalu efisien atau tersedia secara offline.",
      projects_4_solution:
        "Membangun aplikasi desktop yang memungkinkan pengguna membuat dan menyimpan kode QR secara lokal, menggunakan GUI sederhana dan database lokal untuk menyimpan riwayat.",

      // === INSIGHTS ===
      insights_subtitle: "Teknik",
      insights_title: "Wawasan Teknis",
      insights_desc:
        "Keputusan arsitektur dan prinsip utama yang memandu proses pengembangan saya.",
      insight_1_title: "Komponen Terstruktur",
      insight_1_desc:
        "Saya mengatur UI menjadi komponen yang dapat digunakan ulang agar kode tetap bersih, mudah dipelihara, dan konsisten.",
      insight_2_title: "Penanganan State Sederhana",
      insight_2_desc:
        "Mengelola state menggunakan pola React dasar dan menjaga alur data tetap sederhana untuk menghindari kompleksitas.",
      insight_3_title: "Kesadaran Kinerja",
      insight_3_desc:
        "Saya berusaha menjaga aplikasi tetap ringan dengan meminimalkan re-render yang tidak perlu dan mengoptimalkan kinerja.",
      insight_4_title: "Desain Berfokus Pengguna",
      insight_4_desc:
        "Membangun antarmuka yang sederhana, jelas, dan mudah digunakan, dengan memperhatikan tata letak dan responsivitas.",
      code_comment: "// Filosofi pengembangan saya dalam kode",
      code_learning: "Terus membangun dan terus berkembang",
      code_consistency: "Kemajuan kecil setiap hari itu penting",
      code_problemSolving: "Pahami masalah sebelum menulis kode",
      code_simplicity: "Mulai dari sederhana, tingkatkan tahap demi tahap",
      code_curiosity: "Selalu eksplorasi cara kerja sesuatu",

      // === ABOUT ===
      about_subtitle: "Tentang Saya",
      about_title: "Perjalanan",
      about_bio1:
        "Saya Ahmad Putra Ramadhan, seorang siswa dari SMK 20 dengan tekad kuat untuk belajar dan berkembang di bidang rekayasa perangkat lunak. Saya memiliki hasrat untuk memahami bagaimana perangkat lunak dibangun, dari fundamental hingga aplikasi dunia nyata, dan terus meningkatkan keterampilan saya untuk menciptakan solusi yang bermanfaat dan berdampak.",
      about_bio2:
        "Pendekatan saya menggabungkan pengetahuan teknis mendalam dengan pemikiran produk. Saya percaya kode terbaik tidak hanya bersih—itu strategis, memecahkan masalah yang tepat dengan cara sesederhana mungkin.",

      // === JOURNEY / TIMELINE (PENTING INI!) ===
      journey_0_year: "2017",
      journey_0_title: "Pengenalan Pertama Teknologi",
      journey_0_desc:
        "Mulai SD dan mulai mengenal komputer, belajar operasi dasar dan mengembangkan rasa ingin tahu tentang cara kerja teknologi.",
      journey_1_year: "2022",
      journey_1_title: "Rasa Ingin Tahu Soal Koding",
      journey_1_desc:
        "Saat SMP, saya mulai tertarik dengan pemrograman dan mulai mengeksplorasi bagaimana website dan aplikasi dibangun.",
      journey_2_year: "2025",
      journey_2_title: "Memilih Rekayasa Perangkat Lunak",
      journey_2_desc:
        "Mulai belajar di SMK 20, jurusan Rekayasa Perangkat Lunak (RPL) untuk memperdalam pemahaman dan membangun proyek nyata.",
      journey_3_year: "Sekarang",
      journey_3_title: "Membangun & Berkembang",
      journey_3_desc:
        "Saat ini fokus pada peningkatan keterampilan dengan membangun proyek, belajar teknologi baru, dan memperkuat pola pikir pemecahan masalah.",

      // === CONTACT ===
      contact_subtitle: "Kontak",
      contact_title: "Mari Membangun Sesuatu",
      contact_desc:
        "Punya proyek di pikiran atau ingin mengobrol? Saya selalu terbuka untuk mendiskusikan peluang baru dan ide-ide menarik.",
      contact_quick_info: "Info Cepat",
      contact_response_title: "Waktu Respon",
      contact_response_desc:
        "Saya biasanya merespons dalam waktu 24 jam. Untuk hal mendesak, hubungi via Instagram.",
      contact_name_label: "Nama",
      contact_name_placeholder: "Nama kamu",
      contact_email_label: "Email",
      contact_email_placeholder: "kamu@contoh.com",
      contact_message_label: "Pesan",
      contact_message_placeholder: "Ceritakan tentang proyekmu...",
      contact_success_msg:
        "Pesan berhasil terkirim! Saya akan segera menghubungi Anda.",
      contact_btn_send: "Kirim Pesan",

      // === PLAYGROUND ===
      playground_title: "Area Eksperimen",
      playground_subtitle:
        "Uji kecepatan mengetis kodenya. Ketik kode di bawah ini.",
      playground_speed: "Kecepatan",
      playground_accuracy: "Akurasi",
      playground_success: "Sempurna!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
