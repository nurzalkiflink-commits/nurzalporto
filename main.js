// ===================================================
// NURZAL KIFLI PORTFOLIO — MAIN JAVASCRIPT
// Features: Scroll Reveal, Lightbox, Counter, Filter,
//           Skill Bars, Theme Toggle, Language (i18n)
// ===================================================

// ── TRANSLATIONS ──────────────────────────────────
const i18n = {
  id: {
    // Navbar
    'nav.home': 'Home',
    'nav.photography': 'Fotografi',
    'nav.design': 'Desain Grafis',
    'nav.contractor': 'Kontraktor',
    'nav.about': 'Tentang',
    'nav.projects': 'Projects',
    'nav.tutorial': 'Tutorial Ai',
    'nav.contact': 'Hubungi Saya',

    // Footer
    'footer.tagline': 'Dibuat dengan &#x2726; Passion',
    'footer.rights': '&copy; 2024 Nurzal Kifli. Semua hak dilindungi.',
    'footer.pages': 'Halaman',
    'footer.contact-col': 'Kontak',
    'footer.bio.home': 'Profesional multi-bidang yang berdedikasi menghadirkan karya terbaik &mdash; Fotografi, Desain Grafis, dan Konstruksi.',
    'footer.bio.photo': 'Fotografer profesional yang berdedikasi mengabadikan momen terbaik dalam hidup Anda.',
    'footer.bio.design': 'Desainer grafis kreatif yang siap mewujudkan identitas visual impian brand Anda.',
    'footer.bio.contractor': 'Kontraktor profesional dengan pengalaman luas dalam pembangunan dan renovasi hunian berkualitas.',
    'footer.bio.about': 'Profesional multi-bidang yang berdedikasi menghadirkan karya terbaik di setiap proyek.',
    'footer.bio.contact': 'Siap berkolaborasi untuk mewujudkan proyek impian Anda. Jangan ragu untuk menghubungi saya!',

    // Index - Hero
    'index.eyebrow': '&#x2736; Portfolio Profesional',
    'index.hero.greeting': 'Halo, Saya',
    'index.hero.role1': '&#x1F4F7; Fotografer',
    'index.hero.role2': '&#x1F3A8; Desainer Grafis',
    'index.hero.role3': '&#x1F3D7;&#xFE0F; Kontraktor',
    'index.hero.desc': 'Profesional multi-bidang dengan dedikasi penuh dalam menciptakan karya visual memukau, identitas brand yang kuat, dan bangunan berkualitas tinggi.',
    'index.hero.btn1': 'Lihat Portfolio &rarr;',
    'index.hero.btn2': 'Hubungi Saya',
    'index.hero.follow': 'Follow',
    'index.hero.badge1.lbl': 'Tahun Pengalaman',
    'index.hero.badge2.lbl': 'Proyek Selesai',

    // Index - Stats
    'stat.projects': 'Proyek Selesai',
    'stat.clients': 'Klien Puas',
    'stat.years': 'Tahun Pengalaman',
    'stat.skills': 'Bidang Keahlian',

    // Index - Services
    'services.label': '&#x2736; Keahlian Saya',
    'services.title': 'Apa yang Saya <span class="text-grad">Tawarkan</span>',
    'services.subtitle': 'Tiga bidang utama dengan standar profesional tertinggi dan passion yang mendalam di setiap karya.',
    'services.photo.title': 'Fotografi',
    'services.photo.desc': 'Mengabadikan momen berharga dengan perspektif artistik &mdash; portrait, landscape, wedding, dan product photography.',
    'services.photo.link': 'Lihat Galeri &rarr;',
    'services.design.title': 'Desain Grafis',
    'services.design.desc': 'Menciptakan identitas visual yang kuat &mdash; logo, branding, poster, dan materi marketing yang efektif.',
    'services.design.link': 'Lihat Karya &rarr;',
    'services.contractor.title': 'Kontraktor',
    'services.contractor.desc': 'Konstruksi dan renovasi berkualitas tinggi &mdash; dari pondasi hingga finishing dengan tenaga ahli berpengalaman.',
    'services.contractor.link': 'Lihat Proyek &rarr;',

    // Index - Testimonials
    'testi.label': '&#x2736; Testimoni',
    'testi.title': 'Apa Kata <span class="text-grad">Klien</span>',
    'testi.1.text': 'Hasil fotonya luar biasa! Nurzal sangat profesional dan mampu menangkap momen pernikahan kami dengan sangat indah.',
    'testi.1.name': 'Rizky &amp; Nabila',
    'testi.1.role': 'Klien Foto Pernikahan',
    'testi.2.text': 'Desain logo brand kami jauh melampaui ekspektasi. Nurzal benar-benar memahami visi dan menuangkannya sempurna.',
    'testi.2.name': 'Andi Firmansyah',
    'testi.2.role': 'Pemilik Usaha',
    'testi.3.text': 'Renovasi rumah kami selesai tepat waktu dengan kualitas memuaskan. Tim Nurzal sangat rapi dan bertanggung jawab.',
    'testi.3.name': 'Siti Rahayu',
    'testi.3.role': 'Klien Renovasi Rumah',

    // Index - CTA
    'cta.label': '&#x2736; Mulai Sekarang',
    'cta.title': 'Siap Wujudkan <span class="text-grad">Proyek Anda?</span>',
    'cta.desc': 'Konsultasi gratis untuk semua bidang &mdash; fotografi, desain grafis, dan konstruksi. Mari berkolaborasi!',
    'cta.btn1': '&#x1F4AC; Hubungi Saya',
    'cta.btn2': '&#x1F4F1; WhatsApp',

    // Photography
    'photo.hero.tag': '&#x1F4F7; Galeri Foto',
    'photo.hero.title': 'Fotografi <span class="text-grad">Profesional</span>',
    'photo.hero.desc': 'Mengabadikan keindahan dunia melalui lensa &mdash; setiap frame adalah sebuah cerita. Eksplorasi koleksi karya fotografi terbaik saya.',
    'photo.hero.btn1': '&#x1F4F8; Pesan Sesi Foto',
    'photo.hero.btn2': 'Instagram &#x2197;',
    'photo.filter.all': 'Semua',
    'photo.filter.portrait': 'Portrait',
    'photo.filter.landscape': 'Landscape',
    'photo.filter.wedding': 'Wedding',
    'photo.filter.product': 'Product',
    'photo.services.label': '&#x2728; Layanan',
    'photo.services.title': 'Paket <span class="text-grad">Fotografi</span>',
    'photo.services.subtitle': 'Pilih paket yang sesuai dengan kebutuhan Anda. Konsultasi gratis untuk semua paket.',
    'photo.pkg.portrait.title': 'Portrait',
    'photo.pkg.portrait.desc': 'Sesi foto portrait profesional di studio atau outdoor. Hasil berkualitas tinggi dengan editing terbaik.',
    'photo.pkg.portrait.price': 'Mulai dari Rp 500K',
    'photo.pkg.landscape.title': 'Landscape',
    'photo.pkg.landscape.desc': 'Ekspedisi fotografi alam &mdash; gunung, pantai, persawahan. Mengabadikan keindahan alam Indonesia.',
    'photo.pkg.landscape.price': 'Hubungi untuk harga',
    'photo.pkg.wedding.title': 'Wedding',
    'photo.pkg.wedding.desc': 'Dokumentasi hari spesial pernikahan Anda &mdash; dari akad sampai resepsi. Kenangan indah seumur hidup.',
    'photo.pkg.wedding.price': 'Mulai dari Rp 3.5JT',
    'photo.pkg.product.title': 'Product',
    'photo.pkg.product.desc': 'Foto produk komersial berkualitas untuk marketplace, website, dan media sosial brand Anda.',
    'photo.pkg.product.price': 'Mulai dari Rp 800K',
    'photo.cta.btn': '&#x1F4DE; Konsultasi Gratis',

    // Design
    'design.hero.tag': '&#x1F3A8; Desain Grafis',
    'design.hero.title': 'Kreativitas yang <span class="text-grad">Berbicara</span>',
    'design.hero.desc': 'Desain bukan hanya tentang keindahan visual &mdash; ini tentang komunikasi yang efektif. Setiap karya dirancang untuk memberikan dampak nyata pada brand Anda.',
    'design.hero.btn1': '&#x1F3A8; Pesan Desain',
    'design.hero.btn2': 'Lihat di Instagram &#x2197;',
    'design.portfolio.label': '&#x2728; Portfolio',
    'design.portfolio.title': 'Karya <span class="text-grad">Terbaik</span>',
    'design.portfolio.subtitle': 'Koleksi proyek desain yang telah memperkuat identitas brand dan meningkatkan engagement klien.',
    'design.filter.all': 'Semua',
    'design.filter.logo': 'Logo &amp; Branding',
    'design.filter.poster': 'Poster &amp; Iklan',
    'design.filter.identity': 'Brand Identity',
    'design.process.label': '&#x26A1; Proses Kerja',
    'design.process.title': 'Bagaimana Saya <span class="text-grad">Bekerja</span>',
    'design.process.step1.title': 'Brief &amp; Konsultasi',
    'design.process.step1.desc': 'Memahami kebutuhan, target audience, dan visi Anda secara mendalam.',
    'design.process.step2.title': 'Konsep &amp; Sketsa',
    'design.process.step2.desc': 'Mengembangkan ide kreatif dan membuat sketsa konsep awal.',
    'design.process.step3.title': 'Desain &amp; Revisi',
    'design.process.step3.desc': 'Eksekusi desain digital dengan revisi hingga Anda puas.',
    'design.process.step4.title': 'Pengiriman Final',
    'design.process.step4.desc': 'Mengirimkan file dalam berbagai format siap pakai.',
    'design.tools.label': '&#x1F6E0;&#xFE0F; Software',
    'design.tools.title': 'Tools yang <span class="text-grad">Saya Gunakan</span>',
    'design.cta.title': 'Siap Tingkatkan Brand <span class="text-grad">Anda?</span>',
    'design.cta.desc': 'Investasi pada desain yang baik adalah investasi terbaik untuk bisnis Anda. Hubungi saya sekarang!',
    'design.cta.btn1': '&#x1F4AC; Diskusi Proyek',
    'design.cta.btn2': '&#x1F4F1; WhatsApp Sekarang',

    // Contractor
    'contractor.hero.tag': '&#x1F3D7;&#xFE0F; Jasa Kontraktor',
    'contractor.hero.title': 'Membangun <span class="text-grad">Impian Anda</span>',
    'contractor.hero.desc': 'Konstruksi berkualitas tinggi dengan tenaga ahli berpengalaman. Dari pondasi hingga finishing, kami pastikan setiap detail sempurna sesuai standar terbaik.',
    'contractor.hero.btn1': '&#x1F4CB; Konsultasi Gratis',
    'contractor.hero.btn2': '&#x1F4F1; WhatsApp Langsung',
    'contractor.stat.projects': 'Proyek Selesai',
    'contractor.stat.years': 'Tahun Pengalaman',
    'contractor.stat.satisfaction': 'Kepuasan Klien',
    'contractor.stat.delay': 'Hari Terlambat',
    'contractor.projects.label': '&#x1F3C6; Portfolio',
    'contractor.projects.title': 'Proyek <span class="text-grad">Unggulan</span>',
    'contractor.projects.subtitle': 'Beberapa proyek terbaik yang telah berhasil kami selesaikan dengan standar kualitas tertinggi.',
    'contractor.services.label': '&#x1F6E0;&#xFE0F; Layanan',
    'contractor.services.title': 'Apa yang <span class="text-grad">Kami Kerjakan</span>',
    'contractor.why.label': '&#x2B50; Keunggulan',
    'contractor.why.title': 'Mengapa Memilih <span class="text-grad">Kami?</span>',
    'contractor.why.1.title': 'Tepat Waktu',
    'contractor.why.1.desc': 'Berkomitmen menyelesaikan setiap proyek sesuai jadwal yang disepakati tanpa kompromi kualitas.',
    'contractor.why.2.title': 'Kualitas Terjamin',
    'contractor.why.2.desc': 'Menggunakan material pilihan dan metode konstruksi standar terbaik untuk hasil yang tahan lama.',
    'contractor.why.3.title': 'Harga Transparan',
    'contractor.why.3.desc': 'Penawaran harga yang jelas dan transparan. Tidak ada biaya tersembunyi &mdash; semua tertulis di RAB.',
    'contractor.why.4.title': 'Tenaga Ahli',
    'contractor.why.4.desc': 'Tim tukang dan pekerja berpengalaman dengan keahlian khusus di bidangnya masing-masing.',
    'contractor.why.5.title': 'RAB Lengkap',
    'contractor.why.5.desc': 'Rencana Anggaran Biaya yang detail dan komprehensif sebelum pekerjaan dimulai.',
    'contractor.why.6.title': 'Garansi Pekerjaan',
    'contractor.why.6.desc': 'Garansi 1 tahun untuk setiap pekerjaan konstruksi. Kepuasan Anda adalah prioritas kami.',
    'contractor.cta.label': '&#x1F3E0; Mulai Proyek Anda',
    'contractor.cta.title': 'Wujudkan Rumah <span class="text-grad">Impian Anda</span>',
    'contractor.cta.desc': 'Konsultasi awal GRATIS. Hubungi kami sekarang dan dapatkan penawaran terbaik untuk proyek konstruksi Anda.',
    'contractor.cta.btn1': '&#x1F4CB; Isi Form Konsultasi',
    'contractor.cta.btn2': '&#x1F4AC; Chat WhatsApp',

    // About
    'about.label': '&#x1F464; Tentang Saya',
    'about.title': 'Halo, Saya <span class="text-grad">Nurzal Kifli</span>',
    'about.lead': 'Seorang profesional multi-disiplin yang berpassion di tiga bidang utama &mdash; Fotografi, Desain Grafis, dan Konstruksi.',
    'about.text1': 'Saya percaya bahwa setiap karya &mdash; baik itu sebuah foto, desain, maupun bangunan &mdash; adalah cerminan dari dedikasi dan detail yang tidak ternilai. Dengan pengalaman lebih dari 4 tahun, saya telah berhasil menyelesaikan lebih dari 100 proyek untuk berbagai klien.',
    'about.text2': 'Semangat saya adalah menciptakan sesuatu yang bermakna dan memberikan nilai nyata. Setiap proyek selalu dikerjakan dengan penuh tanggung jawab, kreativitas, dan standar profesional tertinggi.',
    'about.info.name': 'Nama',
    'about.info.email': 'Email',
    'about.info.skills': 'Keahlian',
    'about.info.skills.val': 'Fotografi &middot; Desain &middot; Konstruksi',
    'about.info.ig': 'Instagram',
    'about.info.wa': 'WhatsApp',
    'about.info.status': 'Status',
    'about.info.status.val': '&#x2714; Tersedia untuk Proyek',
    'about.btn1': '&#x1F4AC; Hubungi Saya',
    'about.btn2': '&#x1F4F1; WhatsApp',
    'about.badge.label': 'Profesional Sejak 2020',
    'about.badge.sub': '4+ Tahun Pengalaman',
    'about.skills.label': '&#x26A1; Keahlian',
    'about.skills.title': 'Skill &amp; <span class="text-grad">Kemampuan</span>',
    'about.exp.label': '&#x1F4BC; Pengalaman',
    'about.exp.title': 'Perjalanan <span class="text-grad">Karier</span>',
    'about.values.label': '&#x2B50; Nilai',
    'about.values.title': 'Nilai yang <span class="text-grad">Saya Pegang</span>',
    'about.values.1.title': 'Kualitas Tanpa Kompromi',
    'about.values.1.desc': 'Setiap karya dikerjakan dengan standar tertinggi. Kualitas bukan pilihan &mdash; itu adalah komitmen.',
    'about.values.2.title': 'Kejujuran &amp; Transparansi',
    'about.values.2.desc': 'Komunikasi terbuka dan jujur dengan klien adalah fondasi dari setiap hubungan kerja yang baik.',
    'about.values.3.title': 'Inovasi Berkelanjutan',
    'about.values.3.desc': 'Selalu belajar dan berkembang mengikuti tren terbaru untuk memberikan solusi yang relevan dan segar.',
    'about.cta.title': 'Mari <span class="text-grad">Berkolaborasi!</span>',
    'about.cta.desc': 'Punya proyek menarik? Saya selalu terbuka untuk peluang baru dan kolaborasi yang saling menguntungkan.',
    'about.cta.btn1': '&#x1F4E9; Kirim Pesan',
    'about.cta.btn2': '&#x1F4F8; Follow Instagram',

    // Contact
    'contact.hero.tag': '&#x2709;&#xFE0F; Kontak',
    'contact.hero.title': 'Mari <span class="text-grad">Berkolaborasi</span>',
    'contact.hero.desc': 'Punya proyek menarik atau pertanyaan? Saya siap mendengarkan dan memberikan solusi terbaik. Respon dalam waktu kurang dari 24 jam.',
    'contact.info.bio': 'Fotografer &middot; Desainer Grafis &middot; Kontraktor<br>Siap membantu mewujudkan proyek impian Anda dengan profesionalisme dan dedikasi penuh.',
    'contact.ig.label': 'Instagram',
    'contact.ig.action': 'Lihat karya terbaru saya &#x2197;',
    'contact.wa.label': 'WhatsApp',
    'contact.wa.action': 'Chat langsung sekarang &#x2197;',
    'contact.email.label': 'Email',
    'contact.email.action': 'Kirim email sekarang &#x2197;',
    'contact.avail.title': '&#x1F7E2; Ketersediaan',
    'contact.avail.weekday': 'Senin &mdash; Jumat',
    'contact.avail.weekday.time': '08.00 &mdash; 18.00',
    'contact.avail.saturday': 'Sabtu',
    'contact.avail.saturday.time': '09.00 &mdash; 15.00',
    'contact.avail.sunday': 'Minggu',
    'contact.avail.sunday.time': 'Untuk proyek urgent',
    'contact.form.title': 'Kirim <span class="text-grad">Pesan</span>',
    'contact.form.subtitle': 'Isi form di bawah ini dan saya akan segera menghubungi Anda dalam 24 jam kerja.',
    'contact.form.name': 'Nama Lengkap *',
    'contact.form.phone': 'Nomor HP',
    'contact.form.email': 'Email *',
    'contact.form.service': 'Layanan yang Dibutuhkan *',
    'contact.form.service.opt': 'Pilih layanan...',
    'contact.form.budget': 'Estimasi Anggaran',
    'contact.form.budget.opt': 'Pilih range anggaran...',
    'contact.form.message': 'Deskripsi Proyek *',
    'contact.form.submit': '&#x1F680; Kirim Pesan Sekarang',
    'contact.form.sending': '&#x23F3; Mengirim...',
    'contact.form.success': 'Pesan berhasil terkirim! Saya akan segera menghubungi Anda. &#x1F389;',
    'contact.loc.title': 'Lokasi &amp; Area Layanan',
    'contact.loc.desc': 'Berbasis di <strong style="color:var(--purple-light);">Indonesia</strong> &mdash; siap melayani klien dari seluruh penjuru nusantara. Untuk fotografi dan desain dapat dilakukan secara remote. Untuk konstruksi, tersedia area Makassar dan sekitarnya.',
    'contact.loc.btn': '&#x1F4F1; Tanya Area',
    'contact.faq.label': '&#x2753; FAQ',
    'contact.faq.title': 'Pertanyaan yang <span class="text-grad">Sering Diajukan</span>',
    'contact.faq.1.q': 'Berapa lama waktu pengerjaan proyek desain?',
    'contact.faq.1.a': 'Tergantung kompleksitas. Logo design biasanya 3-5 hari kerja, brand identity package 1-2 minggu. Saya selalu memberikan estimasi waktu yang realistis sebelum memulai.',
    'contact.faq.2.q': 'Apakah ada konsultasi gratis?',
    'contact.faq.2.a': 'Ya! Konsultasi awal selalu gratis. Kita bisa diskusi via WhatsApp atau telepon untuk memahami kebutuhan Anda sebelum memulai proyek.',
    'contact.faq.3.q': 'Bagaimana sistem pembayaran untuk proyek konstruksi?',
    'contact.faq.3.a': 'Pembayaran dibagi dalam termin: DP 30% sebelum mulai, 40% di pertengahan proyek, dan 30% setelah selesai dan diterima klien. Semua tertulis dalam kontrak yang jelas.',
    'contact.faq.4.q': 'Apakah foto wedding bisa dikirim online?',
    'contact.faq.4.a': 'Ya, hasil foto dikirim via Google Drive atau WeTransfer dalam format full resolution. Biasanya dalam 1-2 minggu setelah acara sudah selesai diedit.',
    'contact.faq.5.q': 'Berapa kali revisi untuk proyek desain?',
    'contact.faq.5.a': 'Setiap paket desain sudah termasuk 3x revisi gratis. Revisi tambahan tersedia dengan biaya yang wajar. Kepuasan Anda adalah prioritas saya!',
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.photography': 'Photography',
    'nav.design': 'Graphic Design',
    'nav.contractor': 'Contractor',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact Me',

    // Footer
    'footer.tagline': 'Made with &#x2726; Passion',
    'footer.rights': '&copy; 2024 Nurzal Kifli. All rights reserved.',
    'footer.pages': 'Pages',
    'footer.contact-col': 'Contact',
    'footer.bio.home': 'A multi-disciplinary professional dedicated to delivering the best work in Photography, Graphic Design, and Construction.',
    'footer.bio.photo': 'Professional photographer dedicated to capturing your most precious life moments.',
    'footer.bio.design': 'Creative graphic designer ready to bring your brand\'s visual identity dreams to life.',
    'footer.bio.contractor': 'Professional contractor with extensive experience in quality residential construction and renovation.',
    'footer.bio.about': 'A multi-disciplinary professional dedicated to delivering the best work in every project.',
    'footer.bio.contact': 'Ready to collaborate and bring your dream projects to life. Don\'t hesitate to reach out!',

    // Index - Hero
    'index.eyebrow': '&#x2736; Professional Portfolio',
    'index.hero.greeting': "Hello, I'm",
    'index.hero.role1': '&#x1F4F7; Photographer',
    'index.hero.role2': '&#x1F3A8; Graphic Designer',
    'index.hero.role3': '&#x1F3D7;&#xFE0F; Contractor',
    'index.hero.desc': 'A multi-disciplinary professional fully dedicated to creating stunning visual work, powerful brand identities, and high-quality construction.',
    'index.hero.btn1': 'View Portfolio &rarr;',
    'index.hero.btn2': 'Contact Me',
    'index.hero.follow': 'Follow',
    'index.hero.badge1.lbl': 'Years of Experience',
    'index.hero.badge2.lbl': 'Projects Completed',

    // Index - Stats
    'stat.projects': 'Projects Done',
    'stat.clients': 'Happy Clients',
    'stat.years': 'Years Experience',
    'stat.skills': 'Fields of Expertise',

    // Index - Services
    'services.label': '&#x2736; My Expertise',
    'services.title': 'What I <span class="text-grad">Offer</span>',
    'services.subtitle': 'Three main fields with the highest professional standards and deep passion in every work created.',
    'services.photo.title': 'Photography',
    'services.photo.desc': 'Capturing precious moments with an artistic perspective &mdash; portrait, landscape, wedding, and product photography.',
    'services.photo.link': 'View Gallery &rarr;',
    'services.design.title': 'Graphic Design',
    'services.design.desc': 'Creating strong visual identities &mdash; logos, branding, posters, and effective marketing materials.',
    'services.design.link': 'View Work &rarr;',
    'services.contractor.title': 'Contractor',
    'services.contractor.desc': 'High-quality construction and renovation &mdash; from foundation to finishing with experienced professionals.',
    'services.contractor.link': 'View Projects &rarr;',

    // Index - Testimonials
    'testi.label': '&#x2736; Testimonials',
    'testi.title': 'What <span class="text-grad">Clients</span> Say',
    'testi.1.text': 'The photos were absolutely stunning! Nurzal was very professional and captured our wedding moments beautifully.',
    'testi.1.name': 'Rizky &amp; Nabila',
    'testi.1.role': 'Wedding Photography Client',
    'testi.2.text': 'Our brand logo design far exceeded expectations. Nurzal truly understood our vision and executed it perfectly.',
    'testi.2.name': 'Andi Firmansyah',
    'testi.2.role': 'Business Owner',
    'testi.3.text': 'Our home renovation was completed on time with satisfying quality. Nurzal\'s team was very neat and responsible.',
    'testi.3.name': 'Siti Rahayu',
    'testi.3.role': 'Home Renovation Client',

    // Index - CTA
    'cta.label': '&#x2736; Start Now',
    'cta.title': 'Ready to Bring Your <span class="text-grad">Project to Life?</span>',
    'cta.desc': 'Free consultation for all fields &mdash; photography, graphic design, and construction. Let\'s collaborate!',
    'cta.btn1': '&#x1F4AC; Contact Me',
    'cta.btn2': '&#x1F4F1; WhatsApp',

    // Photography
    'photo.hero.tag': '&#x1F4F7; Photo Gallery',
    'photo.hero.title': 'Professional <span class="text-grad">Photography</span>',
    'photo.hero.desc': 'Capturing the beauty of the world through the lens &mdash; every frame tells a story. Explore my best photography collection.',
    'photo.hero.btn1': '&#x1F4F8; Book a Photo Session',
    'photo.hero.btn2': 'Instagram &#x2197;',
    'photo.filter.all': 'All',
    'photo.filter.portrait': 'Portrait',
    'photo.filter.landscape': 'Landscape',
    'photo.filter.wedding': 'Wedding',
    'photo.filter.product': 'Product',
    'photo.services.label': '&#x2728; Services',
    'photo.services.title': 'Photography <span class="text-grad">Packages</span>',
    'photo.services.subtitle': 'Choose a package that suits your needs. Free consultation for all packages.',
    'photo.pkg.portrait.title': 'Portrait',
    'photo.pkg.portrait.desc': 'Professional portrait photo session in studio or outdoor. High quality results with the best editing.',
    'photo.pkg.portrait.price': 'Starting from Rp 500K',
    'photo.pkg.landscape.title': 'Landscape',
    'photo.pkg.landscape.desc': 'Nature photography expeditions &mdash; mountains, beaches, rice fields. Capturing the beauty of Indonesia.',
    'photo.pkg.landscape.price': 'Contact for pricing',
    'photo.pkg.wedding.title': 'Wedding',
    'photo.pkg.wedding.desc': 'Documenting your special wedding day &mdash; from ceremony to reception. Beautiful memories for a lifetime.',
    'photo.pkg.wedding.price': 'Starting from Rp 3.5M',
    'photo.pkg.product.title': 'Product',
    'photo.pkg.product.desc': 'Quality commercial product photos for marketplace, website, and your brand\'s social media.',
    'photo.pkg.product.price': 'Starting from Rp 800K',
    'photo.cta.btn': '&#x1F4DE; Free Consultation',

    // Design
    'design.hero.tag': '&#x1F3A8; Graphic Design',
    'design.hero.title': 'Creativity that <span class="text-grad">Speaks</span>',
    'design.hero.desc': 'Design is not just about visual beauty &mdash; it\'s about effective communication. Every work is crafted to create a real impact on your brand.',
    'design.hero.btn1': '&#x1F3A8; Order Design',
    'design.hero.btn2': 'See on Instagram &#x2197;',
    'design.portfolio.label': '&#x2728; Portfolio',
    'design.portfolio.title': 'Best <span class="text-grad">Works</span>',
    'design.portfolio.subtitle': 'A collection of design projects that have strengthened brand identities and increased client engagement.',
    'design.filter.all': 'All',
    'design.filter.logo': 'Logo &amp; Branding',
    'design.filter.poster': 'Poster &amp; Ads',
    'design.filter.identity': 'Brand Identity',
    'design.process.label': '&#x26A1; Work Process',
    'design.process.title': 'How I <span class="text-grad">Work</span>',
    'design.process.step1.title': 'Brief &amp; Consultation',
    'design.process.step1.desc': 'Deeply understanding your needs, target audience, and vision.',
    'design.process.step2.title': 'Concept &amp; Sketch',
    'design.process.step2.desc': 'Developing creative ideas and creating initial concept sketches.',
    'design.process.step3.title': 'Design &amp; Revision',
    'design.process.step3.desc': 'Digital design execution with revisions until you are satisfied.',
    'design.process.step4.title': 'Final Delivery',
    'design.process.step4.desc': 'Delivering files in various ready-to-use formats.',
    'design.tools.label': '&#x1F6E0;&#xFE0F; Software',
    'design.tools.title': 'Tools I <span class="text-grad">Use</span>',
    'design.cta.title': 'Ready to Elevate Your <span class="text-grad">Brand?</span>',
    'design.cta.desc': 'Investing in good design is the best investment for your business. Contact me now!',
    'design.cta.btn1': '&#x1F4AC; Discuss Project',
    'design.cta.btn2': '&#x1F4F1; WhatsApp Now',

    // Contractor
    'contractor.hero.tag': '&#x1F3D7;&#xFE0F; Contractor Services',
    'contractor.hero.title': 'Building Your <span class="text-grad">Dreams</span>',
    'contractor.hero.desc': 'High-quality construction with experienced professionals. From foundation to finishing, we ensure every detail is perfect according to the highest standards.',
    'contractor.hero.btn1': '&#x1F4CB; Free Consultation',
    'contractor.hero.btn2': '&#x1F4F1; WhatsApp Direct',
    'contractor.stat.projects': 'Projects Done',
    'contractor.stat.years': 'Years Experience',
    'contractor.stat.satisfaction': 'Client Satisfaction',
    'contractor.stat.delay': 'Days Delayed',
    'contractor.projects.label': '&#x1F3C6; Portfolio',
    'contractor.projects.title': 'Featured <span class="text-grad">Projects</span>',
    'contractor.projects.subtitle': 'Some of the best projects that we have successfully completed with the highest quality standards.',
    'contractor.services.label': '&#x1F6E0;&#xFE0F; Services',
    'contractor.services.title': 'What We <span class="text-grad">Do</span>',
    'contractor.why.label': '&#x2B50; Advantages',
    'contractor.why.title': 'Why Choose <span class="text-grad">Us?</span>',
    'contractor.why.1.title': 'On Time',
    'contractor.why.1.desc': 'Committed to completing every project according to the agreed schedule without compromising quality.',
    'contractor.why.2.title': 'Guaranteed Quality',
    'contractor.why.2.desc': 'Using selected materials and best-standard construction methods for durable results.',
    'contractor.why.3.title': 'Transparent Pricing',
    'contractor.why.3.desc': 'Clear and transparent pricing offers. No hidden costs &mdash; everything is written in the Bill of Quantities.',
    'contractor.why.4.title': 'Expert Team',
    'contractor.why.4.desc': 'Experienced workers and craftsmen with specialized expertise in their respective fields.',
    'contractor.why.5.title': 'Complete BOQ',
    'contractor.why.5.desc': 'Detailed and comprehensive Bill of Quantities before work begins.',
    'contractor.why.6.title': 'Work Guarantee',
    'contractor.why.6.desc': '1-year guarantee for every construction work. Your satisfaction is our priority.',
    'contractor.cta.label': '&#x1F3E0; Start Your Project',
    'contractor.cta.title': 'Realize Your <span class="text-grad">Dream Home</span>',
    'contractor.cta.desc': 'FREE initial consultation. Contact us now and get the best offer for your construction project.',
    'contractor.cta.btn1': '&#x1F4CB; Fill Consultation Form',
    'contractor.cta.btn2': '&#x1F4AC; Chat WhatsApp',

    // About
    'about.label': '&#x1F464; About Me',
    'about.title': "Hello, I'm <span class=\"text-grad\">Nurzal Kifli</span>",
    'about.lead': 'A multi-disciplinary professional with passion in three main fields &mdash; Photography, Graphic Design, and Construction.',
    'about.text1': 'I believe that every work &mdash; whether a photo, a design, or a building &mdash; is a reflection of dedication and priceless attention to detail. With over 4 years of experience, I have successfully completed over 100 projects for various clients.',
    'about.text2': 'My passion is creating something meaningful and delivering real value. Every project is always carried out with full responsibility, creativity, and the highest professional standards.',
    'about.info.name': 'Name',
    'about.info.email': 'Email',
    'about.info.skills': 'Expertise',
    'about.info.skills.val': 'Photography &middot; Design &middot; Construction',
    'about.info.ig': 'Instagram',
    'about.info.wa': 'WhatsApp',
    'about.info.status': 'Status',
    'about.info.status.val': '&#x2714; Available for Projects',
    'about.btn1': '&#x1F4AC; Contact Me',
    'about.btn2': '&#x1F4F1; WhatsApp',
    'about.badge.label': 'Professional Since 2020',
    'about.badge.sub': '4+ Years of Experience',
    'about.skills.label': '&#x26A1; Expertise',
    'about.skills.title': 'Skills &amp; <span class="text-grad">Capabilities</span>',
    'about.exp.label': '&#x1F4BC; Experience',
    'about.exp.title': 'Career <span class="text-grad">Journey</span>',
    'about.values.label': '&#x2B50; Values',
    'about.values.title': 'Values I <span class="text-grad">Hold</span>',
    'about.values.1.title': 'Uncompromising Quality',
    'about.values.1.desc': 'Every work is done to the highest standards. Quality is not a choice &mdash; it is a commitment.',
    'about.values.2.title': 'Honesty &amp; Transparency',
    'about.values.2.desc': 'Open and honest communication with clients is the foundation of every good working relationship.',
    'about.values.3.title': 'Continuous Innovation',
    'about.values.3.desc': 'Always learning and growing to follow the latest trends and deliver relevant, fresh solutions.',
    'about.cta.title': "Let's <span class=\"text-grad\">Collaborate!</span>",
    'about.cta.desc': 'Have an interesting project? I am always open to new opportunities and mutually beneficial collaborations.',
    'about.cta.btn1': '&#x1F4E9; Send Message',
    'about.cta.btn2': '&#x1F4F8; Follow Instagram',

    // Contact
    'contact.hero.tag': '&#x2709;&#xFE0F; Contact',
    'contact.hero.title': "Let's <span class=\"text-grad\">Collaborate</span>",
    'contact.hero.desc': 'Have an interesting project or question? I am ready to listen and provide the best solution. Response within 24 hours.',
    'contact.info.bio': 'Photographer &middot; Graphic Designer &middot; Contractor<br>Ready to help bring your dream projects to life with professionalism and full dedication.',
    'contact.ig.label': 'Instagram',
    'contact.ig.action': 'See my latest works &#x2197;',
    'contact.wa.label': 'WhatsApp',
    'contact.wa.action': 'Chat directly now &#x2197;',
    'contact.email.label': 'Email',
    'contact.email.action': 'Send an email now &#x2197;',
    'contact.avail.title': '&#x1F7E2; Availability',
    'contact.avail.weekday': 'Monday &mdash; Friday',
    'contact.avail.weekday.time': '08:00 &mdash; 18:00',
    'contact.avail.saturday': 'Saturday',
    'contact.avail.saturday.time': '09:00 &mdash; 15:00',
    'contact.avail.sunday': 'Sunday',
    'contact.avail.sunday.time': 'For urgent projects',
    'contact.form.title': 'Send a <span class="text-grad">Message</span>',
    'contact.form.subtitle': 'Fill in the form below and I will get back to you within 24 business hours.',
    'contact.form.name': 'Full Name *',
    'contact.form.phone': 'Phone Number',
    'contact.form.email': 'Email *',
    'contact.form.service': 'Service Needed *',
    'contact.form.service.opt': 'Select a service...',
    'contact.form.budget': 'Estimated Budget',
    'contact.form.budget.opt': 'Select budget range...',
    'contact.form.message': 'Project Description *',
    'contact.form.submit': '&#x1F680; Send Message Now',
    'contact.form.sending': '&#x23F3; Sending...',
    'contact.form.success': 'Message sent successfully! I will contact you shortly. &#x1F389;',
    'contact.loc.title': 'Location &amp; Service Area',
    'contact.loc.desc': 'Based in <strong style="color:var(--purple-light);">Indonesia</strong> &mdash; ready to serve clients from across the nation. Photography and design can be done remotely. Construction is available in Makassar and surrounding areas.',
    'contact.loc.btn': '&#x1F4F1; Ask About Area',
    'contact.faq.label': '&#x2753; FAQ',
    'contact.faq.title': 'Frequently <span class="text-grad">Asked Questions</span>',
    'contact.faq.1.q': 'How long does a design project take?',
    'contact.faq.1.a': 'It depends on complexity. Logo design usually takes 3-5 business days, brand identity packages 1-2 weeks. I always provide a realistic time estimate before starting.',
    'contact.faq.2.q': 'Is there a free consultation?',
    'contact.faq.2.a': 'Yes! Initial consultation is always free. We can discuss via WhatsApp or phone to understand your needs before starting the project.',
    'contact.faq.3.q': 'What is the payment system for construction projects?',
    'contact.faq.3.a': 'Payment is split in stages: 30% DP before starting, 40% at the midpoint of the project, and 30% after completion and client acceptance. All written in a clear contract.',
    'contact.faq.4.q': 'Can wedding photos be delivered online?',
    'contact.faq.4.a': 'Yes, photos are sent via Google Drive or WeTransfer in full resolution format. Usually within 1-2 weeks after the event editing is complete.',
    'contact.faq.5.q': 'How many revisions are included in design packages?',
    'contact.faq.5.a': 'Every design package includes 3 free revisions. Additional revisions are available at a fair price. Your satisfaction is my priority!',
  }
};

// ── THEME ──────────────────────────────────────────
let currentTheme = localStorage.getItem('nk-theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('nk-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeBtn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '&#x2600;&#xFE0F;' : '&#x1F319;';
    btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

// ── LANGUAGE ───────────────────────────────────────
let currentLang = localStorage.getItem('nk-lang') || 'id';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('nk-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'id' ? 'id' : 'en');

  // Translate all marked elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18n[lang] && i18n[lang][key]) {
      el.placeholder = i18n[lang][key].replace(/&[^;]+;/g, '');
    }
  });

  // Update lang button
  const btn = document.getElementById('langBtn');
  if (btn) {
    btn.textContent = lang === 'id' ? 'EN' : 'ID';
    btn.title = lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia';
  }
}

// ── MAIN DOMContentLoaded ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved preferences immediately
  applyTheme(currentTheme);
  applyLang(currentLang);

  // Theme toggle
  document.getElementById('themeBtn')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Lang toggle
  document.getElementById('langBtn')?.addEventListener('click', () => {
    applyLang(currentLang === 'id' ? 'en' : 'id');
  });

  // ── Navbar scroll effect ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // ── Mobile Hamburger ──
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  const navCloseBtn = document.getElementById('navClose');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.add('open'));
  }
  if (navCloseBtn && navLinks) {
    navCloseBtn.addEventListener('click', () => navLinks.classList.remove('open'));
  }
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── Active Nav Link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });

  // ── Scroll Reveal ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── Skill Bars ──
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          const pct = bar.dataset.width;
          setTimeout(() => { bar.style.width = pct; }, 300);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) skillObserver.observe(skillsSection);

  // ── Counter Animation ──
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number[data-target]').forEach(el => {
          animateCounter(el, parseInt(el.dataset.target));
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.stats-grid, [class*="stat-card"]').forEach(el => {
    const parent = el.closest('section') || el.parentElement;
    if (parent) counterObserver.observe(parent);
  });
  document.querySelectorAll('section').forEach(sec => {
    if (sec.querySelector('.stat-number[data-target]')) counterObserver.observe(sec);
  });

  function animateCounter(el, target) {
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ── Lightbox ──
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.dataset.src || el.querySelector('img')?.src;
      if (lightbox && lightboxImg && src) {
        lightboxImg.src = src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // ── Toast Notification ──
  window.showToast = function(message, icon = '&#x2713;') {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="toast-icon">${icon}</span> ${message}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  };

  // ── Contact Form Handler ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      const sendingText = i18n[currentLang]['contact.form.sending'] || '&#x23F3; Mengirim...';
      btn.innerHTML = sendingText;
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        this.reset();
        const successMsg = i18n[currentLang]['contact.form.success'] || 'Pesan terkirim! &#x1F389;';
        showToast(successMsg, '&#x2713;');
      }, 2000);
    });
  }

  // ── Gallery Filter ──
  const filterBtns = document.querySelectorAll('[data-filter]');
  const galleryItems = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.opacity = '0';
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; }, 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // ── Particle Cursor (Home only) ──
  if (document.querySelector('.home-hero')) {
    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.87) createParticle(e.clientX, e.clientY);
    });
  }

  function createParticle(x, y) {
    const p = document.createElement('div');
    p.style.cssText = `
      position:fixed;pointer-events:none;z-index:9990;
      width:4px;height:4px;border-radius:50%;
      background:var(--purple-light,#a78bfa);opacity:0.7;
      left:${x}px;top:${y}px;
      transform:translate(-50%,-50%);
      transition:all 0.8s ease;
    `;
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.opacity = '0';
      p.style.transform = `translate(${(Math.random()-0.5)*60}px,${-30-Math.random()*40}px) scale(0)`;
    });
    setTimeout(() => p.remove(), 900);
  }

  // ── FAQ Accordion (Contact page) ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.faq-question').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling?.classList.add('open');
      }
    });
  });

});
