export interface LanguageContent {
  navbar: {
    solutions: string;
    useCases: string;
    howItWorks: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: {
    tag: string;
    title: string;
    description: string;
    trappedTitle: string;
    trappedPoints: string[];
    structuredTitle: string;
    structuredPoints: string[];
  };
  solution: {
    tag: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  useCases: {
    tag: string;
    title: string;
    description: string;
    items: {
      title: string;
      desc: string;
      badge?: string;
    }[];
    ctaCustom: string;
  };
  pipeline: {
    tag: string;
    title: string;
    description: string;
    input: {
      title: string;
      messages: string[];
    };
    intelligence: {
      title: string;
      actions: string[];
    };
    operation: {
      title: string;
      records: {
        label: string;
        value: string;
      }[];
    };
  };
  models: {
    tag: string;
    title: string;
    description: string;
    points: {
      title: string;
      desc: string;
    }[];
  };
  howItWorks: {
    tag: string;
    title: string;
    description: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  whyStenku: {
    tag: string;
    title: string;
    description: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    footnote: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    solutions: string;
    useCases: string;
    howItWorks: string;
    contact: string;
    copyright: string;
  };
}

export const content: Record<'en' | 'id', LanguageContent> = {
  en: {
    navbar: {
      solutions: "Solutions",
      useCases: "Use Cases",
      howItWorks: "How It Works",
      cta: "Talk to Stenku"
    },
    hero: {
      title: "Turn Conversations Into Intelligent Operations",
      subtitle: "Stenku builds custom AI agents that transform conversations, workflows, and scattered business knowledge into structured data, automation, and intelligent internal systems.",
      ctaPrimary: "Build Your AI Agent",
      ctaSecondary: "Explore Use Cases"
    },
    problem: {
      tag: "The Business Challenge",
      title: "Your Business Is Already Generating Data. It's Just Trapped in Conversations.",
      description: "Critical business decisions, client records, inventory states, and tasks are continuously shared in messaging threads. Without automation, this knowledge is lost, resulting in repeated work and operational bottlenecks.",
      trappedTitle: "Trapped Operations (Manual & Fragile)",
      trappedPoints: [
        "Scattered WhatsApp conversations",
        "Manual reporting and copy-pasting",
        "Lost order records & specifications",
        "Repeated manual data entry",
        "Operational bottlenecks & slow response times"
      ],
      structuredTitle: "Stenku Operations (Structured & Automated)",
      structuredPoints: [
        "Structured, auto-updating WhatsApp CRM",
        "Automated PDF reporting dashboards",
        "Instantly updated inventory pipelines",
        "Extracted tasks with automated assigning",
        "Searchable company knowledge management"
      ]
    },
    solution: {
      tag: "The Solution Architecture",
      title: "How Stenku Transforms Scattered Chats into Code Execution",
      description: "Our custom AI agents connect directly to your communication endpoints, parse semantic content, run business logic, and interface with your core internal databases.",
      steps: [
        { number: "01", title: "Conversation", desc: "Team members text naturally, write operational notes, or log details on standard messaging apps." },
        { number: "02", title: "Understanding", desc: "The Stenku Agent parses the semantic intent, languages, context, and operational entities." },
        { number: "03", title: "Extraction", desc: "Raw sentences are converted into machine-readable JSON structured data (IDs, dates, counts)." },
        { number: "04", title: "Business Logic", desc: "Validations, calculations, notifications, and company compliance checks are executed." },
        { number: "05", title: "Structured Operation", desc: "Database records are updated, tasks are created, and inventory actions are processed." }
      ]
    },
    useCases: {
      tag: "What We Build",
      title: "AI Agents Built Around Your Current Operations",
      description: "We do not sell boxed products that force you to change your workflow. We analyze how you currently execute tasks and automate them using intelligent agents.",
      items: [
        {
          title: "WhatsApp CRM",
          desc: "Automatically sync chat history, customer orders, shipment status, and requests from WhatsApp conversations straight into your CRM without manual data input."
        },
        {
          title: "AI Operations Assistant",
          desc: "Extract task assignments, delivery deadlines, and operational logs shared in group chats. The assistant coordinates who does what and tracks completion."
        },
        {
          title: "AI Warehouse Admin",
          desc: "Let staff log inventory in/out using plain text chat. The AI updates database values, generates packing labels, and alerts on low-stock conditions."
        },
        {
          title: "Automated Reporting",
          desc: "Compile conversations, receipts, and invoices into structured summaries. Generate daily, weekly, or monthly PDF business reports automatically."
        },
        {
          title: "AI POS Workflow",
          desc: "Bridge physical business operations with digital ledgers. Transform transaction logs and invoice conversations into structured accounts ledger actions."
        },
        {
          title: "Custom AI Agent",
          desc: "Have a completely unique business workflow? We design and build an AI agent tailored exactly to your operation's custom rules and proprietary schemas.",
          badge: "Specialized Integration"
        }
      ],
      ctaCustom: "Design Custom Workflow"
    },
    pipeline: {
      tag: "Live Pipeline Preview",
      title: "From Chat Text to Database Execution in Real-Time",
      description: "Observe how a single plain WhatsApp message is understood, validated, and converted into action by a custom Stenku Agent.",
      input: {
        title: "WhatsApp Group (Input Stream)",
        messages: [
          "Masuk barang: Produk X 20 unit",
          "Customer Budi Hartono sudah bayar lunas Invoice #1204",
          "Stok sisa Produk Y tinggal 5 unit, tolong order lagi"
        ]
      },
      intelligence: {
        title: "Stenku AI Processing Core",
        actions: [
          "Semantic Parsing & Intent Extraction",
          "Entity Classification & Validation",
          "Business Rule Checking & Processing"
        ]
      },
      operation: {
        title: "Structured Operations (Output)",
        records: [
          { label: "Inventory Action", value: "ADD Product X (+20 qty)" },
          { label: "Accounts Receivable", value: "SET Invoice #1204 -> Status: Paid" },
          { label: "Procurement Task", value: "CREATE Order Request (Product Y)" }
        ]
      }
    },
    models: {
      tag: "Intelligence Architecture",
      title: "Powered by the Best AI. Designed Around Your Business.",
      description: "We are model-flexible. We match the unique processing strengths of different models to your specific operational constraints, ensuring performance, speed, and cost efficiency.",
      points: [
        {
          title: "Model Flexibility",
          desc: "We don't limit you to a single vendor. Whether it is Claude for heavy reasoning, GPT-4o for speed, Gemini for large contexts, or DeepSeek for cost efficiency, we select the optimal mix."
        },
        {
          title: "Hybrid Routing",
          desc: "Different steps use different engines. A cheap, fast model handles message routing, while a reasoning-heavy model compiles end-of-day compliance reports."
        },
        {
          title: "Privacy & Security",
          desc: "Data is processed securely. We set up isolated API endpoints, data retention limits, and enterprise-grade compliance so your proprietary knowledge remains yours."
        }
      ]
    },
    howItWorks: {
      tag: "Our Engagement Process",
      title: "From Consultation to Production Integration",
      description: "How we collaborate to build, test, and host the custom AI agents for your business.",
      steps: [
        {
          step: "01",
          title: "Show Us Your Workflow",
          desc: "We study how your team communicates, where data gets trapped, and which repetitive tasks cause the most operational delays."
        },
        {
          step: "02",
          title: "We Build the Intelligence",
          desc: "Stenku designs the extraction pipelines, sets up data parsing engines, and integrates the agent with your databases, CRM, or POS."
        },
        {
          step: "03",
          title: "Your Team Works Smarter",
          desc: "Your team goes back to working on high-value tasks while the AI agent quietly structures conversations and keeps database records perfectly in sync."
        }
      ]
    },
    whyStenku: {
      tag: "Why Stenku",
      title: "Building AI Around How Your Business Actually Works",
      description: "Generic AI chatbots force you to change your workflow. Stenku adapts directly to your existing systems.",
      items: [
        {
          title: "Custom Built",
          desc: "Built around your precise data schemas, WhatsApp formats, and internal software stacks. No generic out-of-the-box template compromises."
        },
        {
          title: "Internal First",
          desc: "Engineered specifically to solve back-office operational inefficiencies, supply chain leaks, and admin overhead."
        },
        {
          title: "Model Flexible",
          desc: "We choose models based on speed, cost, and complexity requirements, avoiding vendor lock-in completely."
        },
        {
          title: "Scalable Growth",
          desc: "Start by automating a single WhatsApp group CRM, and scale the agent to handle invoices, warehouse systems, and reporting later."
        }
      ]
    },
    cta: {
      title: "What Could AI Do Inside Your Business?",
      subtitle: "Your business is already generating valuable conversational data every day. Let's turn it into structured, automated operational strength.",
      button: "Talk to Stenku",
      footnote: "Start with one workflow. Scale as you grow."
    },
    footer: {
      tagline: "Custom AI agents built around how your business actually works. Not a generic chatbot company.",
      navTitle: "Navigation",
      solutions: "Solutions",
      useCases: "Use Cases",
      howItWorks: "How It Works",
      contact: "Build Your Agent",
      copyright: "© 2026 Stenku. All rights reserved. Custom AI Operations."
    }
  },
  id: {
    navbar: {
      solutions: "Solusi",
      useCases: "Kasus Penggunaan",
      howItWorks: "Cara Kerja",
      cta: "Hubungi Stenku"
    },
    hero: {
      title: "Ubah Percakapan Menjadi Operasional Cerdas",
      subtitle: "Stenku membangun agen AI kustom yang mengubah percakapan, alur kerja, dan pengetahuan bisnis yang tersebar menjadi data terstruktur, otomatisasi, dan sistem internal yang cerdas.",
      ctaPrimary: "Bangun Agen AI Anda",
      ctaSecondary: "Pelajari Kasus Penggunaan"
    },
    problem: {
      tag: "Tantangan Bisnis",
      title: "Bisnis Anda Sudah Menghasilkan Data. Semuanya Terperangkap dalam Percakapan.",
      description: "Keputusan bisnis penting, catatan pelanggan, status inventaris, dan tugas terus dibagikan dalam obrolan chat. Tanpa otomatisasi, pengetahuan ini hilang, menyebabkan pekerjaan berulang dan hambatan operasional.",
      trappedTitle: "Operasional Terperangkap (Manual & Rentan)",
      trappedPoints: [
        "Percakapan WhatsApp yang berantakan",
        "Pelaporan manual dan salin-tempel data",
        "Catatan pesanan & spesifikasi hilang",
        "Entri data manual yang berulang",
        "Hambatan operasional & respon yang lambat"
      ],
      structuredTitle: "Operasional Stenku (Terstruktur & Otomatis)",
      structuredPoints: [
        "WhatsApp CRM terstruktur & otomatis diperbarui",
        "Dasbor pelaporan PDF otomatis",
        "Saluran inventaris yang langsung diperbarui",
        "Tugas diekstraksi & ditugaskan otomatis",
        "Manajemen pengetahuan perusahaan yang mudah dicari"
      ]
    },
    solution: {
      tag: "Arsitektur Solusi",
      title: "Bagaimana Stenku Mengubah Obrolan Menjadi Eksekusi Kode",
      description: "Agen AI kustom kami terhubung langsung dengan titik komunikasi Anda, menganalisis konten semantik, menjalankan logika bisnis, dan terintegrasi dengan database internal utama Anda.",
      steps: [
        { number: "01", title: "Percakapan", desc: "Anggota tim mengirim pesan secara alami, menulis catatan operasional, atau mencatat detail di aplikasi obrolan standar." },
        { number: "02", title: "Pemahaman", desc: "Agen Stenku menganalisis maksud semantik, bahasa, konteks, dan entitas operasional." },
        { number: "03", title: "Ekstraksi", desc: "Kalimat mentah dikonversi menjadi data terstruktur JSON yang dapat dibaca mesin (ID, tanggal, jumlah)." },
        { number: "04", title: "Logika Bisnis", desc: "Validasi, perhitungan, notifikasi, dan kepatuhan perusahaan dijalankan secara otomatis." },
        { number: "05", title: "Operasional Terstruktur", desc: "Data database diperbarui, tugas dibuat, dan tindakan inventaris langsung diproses." }
      ]
    },
    useCases: {
      tag: "Apa yang Kami Bangun",
      title: "Agen AI yang Dibangun Sesuai Operasional Anda Saat Ini",
      description: "Kami tidak menjual produk jadi yang memaksa Anda mengubah alur kerja. Kami menganalisis cara kerja Anda saat ini dan mengotomatiskannya menggunakan agen cerdas.",
      items: [
        {
          title: "WhatsApp CRM",
          desc: "Sinkronisasi otomatis riwayat obrolan, pesanan pelanggan, status pengiriman, dan permintaan dari WhatsApp langsung ke CRM tanpa entri data manual."
        },
        {
          title: "Asisten Operasional AI",
          desc: "Ekstrak pembagian tugas, tenggat waktu pengiriman, dan log operasional yang dibagikan di grup chat. Asisten mengoordinasikan siapa melakukan apa dan melacak penyelesaiannya."
        },
        {
          title: "Admin Gudang AI",
          desc: "Staf dapat mencatat inventaris masuk/keluar lewat chat teks biasa. AI memperbarui nilai database, membuat label pengepakan, dan memberi peringatan stok menipis."
        },
        {
          title: "Pelaporan Otomatis",
          desc: "Kompilasi percakapan, kuitansi, dan faktur menjadi ringkasan terstruktur. Buat laporan bisnis PDF harian, mingguan, atau bulanan secara otomatis."
        },
        {
          title: "Alur Kerja POS AI",
          desc: "Jembatani operasional bisnis fisik dengan pembukuan digital. Ubah log transaksi dan obrolan faktur menjadi tindakan buku besar akun terstruktur."
        },
        {
          title: "Agen AI Kustom",
          desc: "Punya alur kerja bisnis yang unik? Kami merancang dan membangun agen AI yang disesuaikan persis dengan aturan khusus dan skema data perusahaan Anda.",
          badge: "Integrasi Khusus"
        }
      ],
      ctaCustom: "Rancang Alur Kerja Kustom"
    },
    pipeline: {
      tag: "Pratinjau Saluran Langsung",
      title: "Dari Teks Chat ke Eksekusi Database Secara Real-Time",
      description: "Amati bagaimana satu pesan WhatsApp biasa dipahami, divalidasi, dan dikonversi menjadi tindakan oleh Agen Stenku kustom.",
      input: {
        title: "Grup WhatsApp (Input Pesan)",
        messages: [
          "Masuk barang: Produk X 20 unit",
          "Customer Budi Hartono sudah bayar lunas Invoice #1204",
          "Stok sisa Produk Y tinggal 5 unit, tolong order lagi"
        ]
      },
      intelligence: {
        title: "Inti Pemrosesan AI Stenku",
        actions: [
          "Parsing Semantik & Ekstraksi Maksud",
          "Klasifikasi Entitas & Validasi",
          "Pengecekan Aturan Bisnis & Pemrosesan"
        ]
      },
      operation: {
        title: "Operasional Terstruktur (Output)",
        records: [
          { label: "Tindakan Inventaris", value: "TAMBAH Produk X (+20 qty)" },
          { label: "Piutang Usaha", value: "UBAH Invoice #1204 -> Status: Lunas" },
          { label: "Tugas Pengadaan", value: "BUAT Permintaan Pesanan (Produk Y)" }
        ]
      }
    },
    models: {
      tag: "Arsitektur Kecerdasan",
      title: "Didukung oleh AI Terbaik. Dirancang untuk Bisnis Anda.",
      description: "Kami fleksibel terhadap model AI. Kami mencocokkan keunggulan pemrosesan unik dari berbagai model dengan batasan operasional Anda, memastikan performa, kecepatan, dan efisiensi biaya.",
      points: [
        {
          title: "Fleksibilitas Model",
          desc: "Kami tidak membatasi Anda pada satu vendor. Baik itu Claude untuk penalaran berat, GPT-4o untuk kecepatan, Gemini untuk konteks besar, atau DeepSeek untuk efisiensi biaya, kami memilih kombinasi yang optimal."
        },
        {
          title: "Rute Hibrida",
          desc: "Langkah-langkah yang berbeda menggunakan mesin yang berbeda. Model yang cepat dan murah menangani perutean pesan, sementara model yang kaya penalaran menyusun laporan kepatuhan akhir hari."
        },
        {
          title: "Privasi & Keamanan",
          desc: "Data diproses dengan aman. Kami menyiapkan titik akhir API terisolasi, batas retensi data, dan kepatuhan tingkat perusahaan sehingga pengetahuan kepemilikan Anda tetap menjadi milik Anda."
        }
      ]
    },
    howItWorks: {
      tag: "Proses Kolaborasi Kami",
      title: "Dari Konsultasi hingga Integrasi Produksi",
      description: "Bagaimana kami bekerja sama untuk membangun, menguji, dan menghosting agen AI kustom untuk bisnis Anda.",
      steps: [
        {
          step: "01",
          title: "Tunjukkan Alur Kerja Anda",
          desc: "Kami mempelajari cara tim Anda berkomunikasi, di mana data terperangkap, dan tugas berulang mana yang paling banyak menyebabkan penundaan operasional."
        },
        {
          step: "02",
          title: "Kami Membangun Kecerdasan",
          desc: "Stenku merancang saluran ekstraksi, menyiapkan mesin analisis data, dan mengintegrasikan agen dengan database, CRM, atau POS Anda."
        },
        {
          step: "03",
          title: "Tim Anda Bekerja Lebih Cerdas",
          desc: "Tim Anda kembali fokus pada tugas-tugas bernilai tinggi sementara agen AI bekerja di latar belakang menyusun percakapan dan memperbarui catatan database."
        }
      ]
    },
    whyStenku: {
      tag: "Mengapa Stenku",
      title: "Membangun AI Sesuai Cara Kerja Bisnis Anda Sebenarnya",
      description: "Chatbot AI generik memaksa Anda mengubah alur kerja Anda. Stenku beradaptasi langsung dengan sistem Anda yang sudah ada.",
      items: [
        {
          title: "Dibangun Kustom",
          desc: "Dibangun sesuai skema data persis, format WhatsApp, dan tumpukan perangkat lunak internal Anda. Tanpa kompromi template generik."
        },
        {
          title: "Fokus Internal",
          desc: "Dirancang khusus untuk memecahkan inefisiensi operasional kantor belakang, kebocoran rantai pasokan, dan beban admin."
        },
        {
          title: "Fleksibel Model",
          desc: "Kami memilih model berdasarkan kecepatan, biaya, dan kompleksitas kebutuhan, menghindari ketergantungan pada satu vendor."
        },
        {
          title: "Pertumbuhan Terukur",
          desc: "Mulai dengan mengotomatisasi satu CRM grup WhatsApp, lalu kembangkan agen untuk menangani faktur, sistem gudang, dan pelaporan nanti."
        }
      ]
    },
    cta: {
      title: "Apa yang Bisa AI Lakukan di Dalam Bisnis Anda?",
      subtitle: "Bisnis Anda sudah menghasilkan data percakapan yang berharga setiap hari. Mari ubah itu menjadi kekuatan operasional terstruktur yang otomatis.",
      button: "Hubungi Stenku",
      footnote: "Mulai dengan satu alur kerja. Kembangkan seiring waktu."
    },
    footer: {
      tagline: "Agen AI kustom yang dibangun sesuai cara kerja bisnis Anda sebenarnya. Bukan perusahaan chatbot biasa.",
      navTitle: "Navigasi",
      solutions: "Solusi",
      useCases: "Kasus Penggunaan",
      howItWorks: "Cara Kerja",
      contact: "Bangun Agen Anda",
      copyright: "© 2026 Stenku. Hak cipta dilindungi undang-undang. Operasional AI Kustom."
    }
  }
};

export const config = {
  contactEmail: "hello@stenku.biz.id"
};
