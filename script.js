/*  ========================================
        DATA MENU JUS
    ======================================== */
    const menuJus = [
    {
        nama: 'Jus Alpukat',
        desc: 'Alpukat segar blended dengan susu coklat, creamy dan mengenyangkan.',
        harga: 6000,
        badge: 'Popular',
        badgeClass: 'badge-popular',
        img: 'alpukat.jpeg'
    },
    {
        nama: 'Jus Jeruk',
        desc: 'Perasan jeruk manis asli, vitamin C terjamin.',
        harga: 6000,
        badge: 'Fresh',
        badgeClass: 'badge-fresh',
        img: 'jeruk.jpeg'
    },
    {
        nama: 'Jus Mangga',
        desc: 'Mangga harum manis pilihan, tekstur halus dengan rasa tropis.',
        harga: 6000,
        badge: 'Popular',
        badgeClass: 'badge-popular',
        img: 'mangga.jpeg'
    },
    {
        nama: 'Jus Kueni',
        desc: 'Kueni segar, aroma khas yang kuat dengan rasa manis asam yang unik.',
        harga: 6000,
        badge: 'Popular',
        badgeClass: 'badge-popular',
        img: 'kueni.jpeg'
    },
    {
        nama: 'Jus Buah Naga',
        desc: 'Buah pilihan, tekstur halus dengan rasa manis ringan yang menyegarkan.',
        harga: 6000,
        badge: 'Fresh',
        badgeClass: 'badge-fresh',
        img: 'buah naga.jpeg'
    },
    {
        nama: 'Jus Jambu',
        desc: 'Jambu biji merah kaya antioksidan, dibuat tanpa ampas.',
        harga: 6000,
        badge: 'Fresh',
        badgeClass: 'badge-fresh',
        img: 'jambu.jpeg'
    },
    {
        nama: 'Jus Wortel',
        desc: 'Wortel bertekstur lembut dengan rasa manis alami, baik untuk mata.',
        harga: 6000,
        badge: 'Fresh',
        badgeClass: 'badge-fresh',
        img: 'wortel.jpeg'
    },
    {
        nama: 'Jus Terong Belanda',
        desc: 'Terong Belanda pilihan, rasa segar sedikit asam dengan sensasi eksotis.',
        harga: 6000,
        badge: 'Fresh',
        badgeClass: 'badge-fresh',
        img: 'terong belanda.jpeg'
    }
    ];

    /* ========================================
        DATA JAM BUKA
       ======================================== */
    const jamBuka = [
        { hari: 'Senin', jam: '09.00 — 21.00' },
        { hari: 'Selasa', jam: '09.00 — 21.00' },
        { hari: 'Rabu', jam: '09.00 — 21.00' },
        { hari: 'Kamis', jam: '09.00 — 21.00' },
        { hari: 'Jumat', jam: '09.00 — 21.00' },
        { hari: 'Sabtu', jam: '09.00 — 21.00' },
        { hari: 'Minggu', jam: '09.00 — 21.00' }
    ];

    /* ========================================
        DATA GALERI
       ======================================== */
    const dataGaleri = [
        { img: 'proses pembuatan.jpeg', caption: 'Proses pembuatan jus segar', tall: false },
        { img: 'buah buahan.jpeg', caption: 'Buah-buahan pilihan dari petani lokal', tall: false },
        { img: 'tim markicob.jpeg', caption: 'Tim Markicob', tall: false },
        { img: 'Juice buah.jpeg', caption: 'Juice Buah', tall: false },
        { img: 'tampilan depan.jpeg', caption: 'Tampilan depan Juice Markicob', tall: false },
        { img: 'dengan pengunjung.jpeg', caption: 'Dengan Pembuat Website', tall: false }
    ];

    /* ========================================
        RENDER MENU JUS
       ======================================== */
    function renderMenuJus() {
        const grid = document.getElementById('jusGrid');
        grid.innerHTML = menuJus.map((jus, i) => `
        <article class="jus-card anim-in" style="animation-delay:${0.05 * (i + 1)}s;">
            <figure class="jus-card-img-wrap">
            <img src="${jus.img}" alt="Jus ${jus.nama}" class="jus-card-img" loading="lazy">
            <span class="jus-card-badge ${jus.badgeClass}">${jus.badge}</span>
            </figure>
            <div class="jus-card-body">
                <h3 class="jus-card-name">${jus.nama}</h3>
                <p class="jus-card-desc">${jus.desc}</p>
                
                <div class="jus-card-footer">
                    <span class="jus-card-price">Rp ${jus.harga.toLocaleString('id-ID')}</span>
                    <button class="jus-card-btn" onclick="pesanJus('${jus.nama}')">Pesan</button>
                </div>
            </div>
        </article>
        `).join('');
    }

    /* ========================================
        RENDER JAM BUKA
       ======================================== */
    function renderJamBuka() {
        const list = document.getElementById('hoursList');
        const now = new Date();
        const dayIndex = now.getDay(); // 0=Minggu, 1=Senin...
        const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1; // Konversi ke Senin=0

        list.innerHTML = jamBuka.map((j, i) => `
        <div class="hours-item ${i === mappedIndex ? 'open-now' : ''}">
            <span>${j.hari} ${i === mappedIndex ? '<span class="pulse-dot"></span>' : ''}</span>
            <span>${j.jam}</span>
        </div>
        `).join('');
    }

    /* ========================================
        RENDER GALERI
       ======================================== */
    function renderGaleri() {
        const grid = document.getElementById('galeriGrid');
        grid.innerHTML = dataGaleri.map((g, i) => `
        <figure class="galeri-item ${g.tall ? 'tall' : ''}">
            <img src="${g.img}" alt="${g.caption}" loading="lazy">
            <figcaption class="galeri-overlay">
            <span>${g.caption}</span>
            </figcaption>
        </figure>
        `).join('');
    }

    /* ========================================
        RENDER DROPDOWN MENU DI FORM
       ======================================== */
    function renderDropdownMenu() {
        const select = document.getElementById('menuJus');
        menuJus.forEach(jus => {
        const opt = document.createElement('option');
        opt.value = jus.nama;
        opt.textContent = `${jus.nama} — Rp ${jus.harga.toLocaleString('id-ID')}`;
        select.appendChild(opt);
        });
    }

    /* ========================================
        NAVIGASI HALAMAN (SPA)
       ======================================== */
    let currentPage = 'home';

    function navigateTo(pageName) {
        if (pageName === currentPage) return;

      // Sembunyikan halaman
    const currentEl = document.getElementById('page-' + currentPage);
    if (currentEl) {
        currentEl.classList.remove('visible');
        setTimeout(() => {
            currentEl.classList.remove('active');
        }, 300);
        }

      // Tampilkan halaman baru
        setTimeout(() => {
        const nextEl = document.getElementById('page-' + pageName);
        if (nextEl) {
            nextEl.classList.add('active');
          // Trigger reflow agar transisi berjalan
            void nextEl.offsetWidth;
            nextEl.classList.add('visible');

          // Re-trigger animasi elemen di dalamnya
            nextEl.querySelectorAll('.anim-in').forEach(el => {
            el.style.animation = 'none';
            void el.offsetWidth;
            el.style.animation = '';
            });
        }
        currentPage = pageName;
        }, 320);

      // Update nav aktif
        document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === pageName);
        });

      // Scroll ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ========================================
        MOBILE NAV
       ======================================== */
    function toggleMobile() {
        const nav = document.getElementById('mobileNav');
        const icon = document.getElementById('hamburgerIcon');
        const isOpen = nav.classList.toggle('open');
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
    function closeMobile() {
        const nav = document.getElementById('mobileNav');
        const icon = document.getElementById('hamburgerIcon');
        nav.classList.remove('open');
        icon.className = 'fa-solid fa-bars';
    }

    /* ========================================
        TOMBOL PESAN DI CARD JUS
       ======================================== */
    function pesanJus(namaJus) {
        navigateTo('form');
        setTimeout(() => {
        const select = document.getElementById('menuJus');
        if (select) {
            select.value = namaJus;
        }
        }, 400);
    }

    /* ========================================
        TOAST NOTIFICATION
       ======================================== */
    function showToast(message, type) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
        toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;
        container.appendChild(toast);

      // Tampilkan
        requestAnimationFrame(() => {
        toast.classList.add('show');
        });

      // Hilangkan setelah 4 detik
        setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    /* ========================================
        VALIDASI & SUBMIT FORM
       ======================================== */
    function initForm() {
        const form = document.getElementById('orderForm');

        form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset error
        form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => el.classList.remove('error'));
        form.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));

        // Validasi Nama
        const nama = document.getElementById('nama');
        if (!nama.value.trim()) {
            nama.classList.add('error');
            document.getElementById('errNama').classList.add('show');
            isValid = false;
        }

        // Validasi Telepon
        const telepon = document.getElementById('telepon');
        const phoneRegex = /^(08|\+62)[0-9]{8,13}$/;
        if (!phoneRegex.test(telepon.value.trim())) {
            telepon.classList.add('error');
            document.getElementById('errTelepon').classList.add('show');
            isValid = false;
        }

        // Validasi Alamat
        const alamat = document.getElementById('alamat');
        if (!alamat.value.trim()) {
            alamat.classList.add('error');
            document.getElementById('errAlamat').classList.add('show');
            isValid = false;
        }

        // Validasi Menu
        const menu = document.getElementById('menuJus');
        if (!menu.value) {
            menu.classList.add('error');
            document.getElementById('errMenu').classList.add('show');
            isValid = false;
        }

        // Validasi Jumlah
        const jumlah = document.getElementById('jumlah');
        const jml = parseInt(jumlah.value);
        if (isNaN(jml) || jml < 1 || jml > 20) {
            jumlah.classList.add('error');
            document.getElementById('errJumlah').classList.add('show');
            isValid = false;
        }

        if (!isValid) {
            showToast('Mohon lengkapi form dengan benar.', 'error');
            return;
        }

        // Sukses
        // 1. nilai input form
        const namaUser = document.getElementById('nama').value;
        const waUser = document.getElementById('telepon').value;
        const alamatUser = document.getElementById('alamat').value;
        const menuUser = document.getElementById('menuJus').value;
        const jumlahUser = document.getElementById('jumlah').value;
        const catatanUser = document.getElementById('catatan').value || "-";

        // 2. Hitung total harga
        const jusDipilih = menuJus.find(j => j.nama === menuUser);
        const total = jusDipilih ? jusDipilih.harga * jumlahUser : 0;

        // 3. Kalimat LENGKAP
        const kalimatPesan = 
            `*PESANAN BARU - JUICE MARKICOB*%0A` +
            `-------------------------------------------%0A` +
            `*Data Pemesan:*%0A` +
            `• Nama: ${namaUser}%0A` +
            `• No. WA: ${waUser}%0A` +
            `• Alamat: ${alamatUser}%0A%0A` +
            `*Detail Pesanan:*%0A` +
            `• Menu: *${menuUser}*%0A` +
            `• Jumlah: ${jumlahUser} porsi%0A` +
            `• Total: *Rp ${total.toLocaleString('id-ID')}*%0A` +
            `• Catatan: ${catatanUser}%0A` +
            `-------------------------------------------%0A` +
            `Mohon segera diproses ya, Kak! Terimakasih.`;

        // 4. Buka WhatsApp
        const linkWA = `https://wa.me/628?text=${kalimatPesan}`;
        window.open(linkWA, '_blank');

        // 5. Notifikasi di web
        showToast(`Pesanan diproses! Mengalihkan ke WhatsApp...`, 'success');

        // Reset form   
        form.reset();
        }); 

      // Hapus error saat user mulai mengetik
        ['nama', 'telepon', 'alamat', 'jumlah'].forEach(id => {
        const el = document.getElementById(id);
        el.addEventListener('input', () => {
            el.classList.remove('error');
            const errId = 'err' + id.charAt(0).toUpperCase() + id.slice(1);
            const errEl = document.getElementById(errId);
            if (errEl) errEl.classList.remove('show');
        });
        });
        document.getElementById('menuJus').addEventListener('change', function() {
        this.classList.remove('error');
        document.getElementById('errMenu').classList.remove('show');
        });
    }

    /* ========================================
        HEADER SCROLL EFFECT
       ======================================== */
    function initHeaderScroll() {
        const header = document.getElementById('mainHeader');
        window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    /* ========================================
        INISIALISASI
       ======================================== */
    document.addEventListener('DOMContentLoaded', function() {
        renderMenuJus();
        renderJamBuka();
        renderGaleri();
        renderDropdownMenu();
        initForm();
        initHeaderScroll();

      // Halaman home dengan animasi
        requestAnimationFrame(() => {
            document.getElementById('page-home').classList.add('visible');
        });
    });
