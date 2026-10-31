/**
 * ==========================================
 * XỬ LÝ DỮ LIỆU & HIỆU ỨNG NÂNG CAO (PREMIUM FX)
 * ==========================================
 */

// Format Google Drive Links
function parseDriveLink(url, type) {
    if (!url || typeof url !== 'string') return url;
    if (!url.includes('drive.google.com')) return url;

    let fileId = null;
    const regexPath = /\/file\/d\/([a-zA-Z0-9_-]+)/;
    const matchPath = url.match(regexPath);
    if (matchPath) {
        fileId = matchPath[1];
    }
    if (!fileId) {
        const regexQuery = /id=([a-zA-Z0-9_-]+)/;
        const matchQuery = url.match(regexQuery);
        if (matchQuery) { fileId = matchQuery[1]; }
    }
    if (!fileId) return url;

    return (type === 'video') ?
        `https://drive.google.com/file/d/${fileId}/preview` :
        `https://drive.google.com/thumbnail?id=${fileId}&sz=w1920-h1080`;
}

// Hàm Tạo Dữ Liệu Lên UI
function buildUI() {
    const setInner = (id, text) => {
        const el = document.getElementById(id);
        if (el && text) el.innerText = text;
    };
    const setInnerHtml = (id, html) => {
        const el = document.getElementById(id);
        if (el && html) el.innerHTML = html;
    };

    setInner('hero-name', PORTFOLIO_CONFIG.profile.name);
    setInner('hero-role', PORTFOLIO_CONFIG.profile.role);
    setInner('hero-bio', PORTFOLIO_CONFIG.profile.bio);
    setInner('about-text', PORTFOLIO_CONFIG.profile.about);
    setInner('footer-name', PORTFOLIO_CONFIG.profile.name);

    // Logo (thêm dấu chấm HTML)
    setInnerHtml('nav-logo', `${PORTFOLIO_CONFIG.profile.name.split(' ')[0]}<span class="dot">.</span>`);

    const emailBtn = document.getElementById('email-btn');
    if (emailBtn) emailBtn.href = `mailto:${PORTFOLIO_CONFIG.profile.email}`;

    const viewAllBtn = document.getElementById('view-all-btn');
    if (viewAllBtn && PORTFOLIO_CONFIG.viewAllFolderLink) {
        viewAllBtn.href = PORTFOLIO_CONFIG.viewAllFolderLink;
    }

    // Render Timeline: Học vấn
    const eduTimeline = document.getElementById('education-timeline');
    if (eduTimeline && PORTFOLIO_CONFIG.education) {
        PORTFOLIO_CONFIG.education.forEach(item => {
            eduTimeline.innerHTML += `
                <div class="timeline-item">
                    <div class="timeline-time">${item.time}</div>
                    <div class="timeline-title">${item.school}</div>
                    <div class="timeline-text">Chuyên ngành: <strong>${item.major}</strong> <br> Xếp loại: ${item.grade}</div>
                </div>
            `;
        });
    }

    // Render Kỹ Năng (Icon Apps & Office)
    const appSkillsContainer = document.getElementById('app-skills-container');
    if (appSkillsContainer && PORTFOLIO_CONFIG.skills) {
        // Map màu sắc cho các icon phần mềm phổ biến (Màu chuẩn Adobe CC)
        const getAppColor = (skillName) => {
            const name = skillName.toLowerCase();
            if (name.includes('premiere') || name === 'pr') return { text: 'Pr', color: '#ECAAFF', bg: '#000033' }; // Tím nhạt
            if (name.includes('after effects') || name === 'ae') return { text: 'Ae', color: '#9999FF', bg: '#000033' }; // Tím xanh
            if (name.includes('photoshop') || name === 'ps') return { text: 'Ps', color: '#31A8FF', bg: '#001E36' }; // Xanh sáng
            if (name.includes('illustrator') || name === 'ai') return { text: 'Ai', color: '#FF9A00', bg: '#331100' }; // Cam
            if (name.includes('indesign') || name === 'id') return { text: 'Id', color: '#FF3366', bg: '#33001A' }; // Đỏ hồng
            if (name.includes('lightroom') || name === 'lr') return { text: 'Lr', color: '#31A8FF', bg: '#001E36' }; // Xanh sáng giống PS
            if (name.includes('capcut')) return {
                text: '',
                svg: '<svg width="38" height="38" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z" fill="#FFFFFF"/></svg>',
                color: '#FFF', bg: '#0A0B10'
            };
            if (name.includes('davinci')) return { text: 'Da', color: '#FF5733', bg: '#330000' };
            // Mặc định
            return { text: skillName.substring(0, 2), color: '#FFF', bg: '#222' };
        };

        PORTFOLIO_CONFIG.skills.forEach(skill => {
            const app = getAppColor(skill);
            // Ưu tiên render SVG nếu có, nếu không thì render Text
            const innerContent = app.svg ? app.svg : app.text;
            appSkillsContainer.innerHTML += `
                <div class="app-icon" style="color: ${app.color}; background: ${app.bg};" title="${skill}">
                    ${innerContent}
                </div>
            `;
        });
    }

    const officeText = document.getElementById('office-skills-text');
    if (officeText && PORTFOLIO_CONFIG.officeSkills) {
        officeText.innerHTML = PORTFOLIO_CONFIG.officeSkills;
    }

    // Render Kinh nghiệm
    const expTimeline = document.getElementById('experience-timeline');
    if (expTimeline && PORTFOLIO_CONFIG.experience) {
        PORTFOLIO_CONFIG.experience.forEach(item => {
            let detailsHtml = '<ul class="timeline-details">';
            item.details.forEach(detail => detailsHtml += `<li>${detail}</li>`);
            detailsHtml += '</ul>';

            expTimeline.innerHTML += `
                <div class="timeline-item">
                    <div class="timeline-time">${item.time}</div>
                    <div class="timeline-title">${item.company}</div>
                    <div class="timeline-subtitle">Vị trí: ${item.position}</div>
                    ${detailsHtml}
                </div>
            `;
        });
    }

    // Render Dự án tham gia
    const partProj = document.getElementById('participated-projects');
    if (partProj && PORTFOLIO_CONFIG.participatedProjects) {
        PORTFOLIO_CONFIG.participatedProjects.forEach(item => {
            partProj.innerHTML += `<li>${item}</li>`;
        });
    }

    // Render MXH & Liên Hệ
    const socialsContainer = document.getElementById('social-links');
    if (socialsContainer && PORTFOLIO_CONFIG.socials) {
        PORTFOLIO_CONFIG.socials.forEach(social => {
            const hasText = social.text ? `<span class="social-text" style="margin-left:8px; font-weight:600; font-size:1.1rem;">${social.text}</span>` : '';
            // Sử dụng link tel: cho sdt để bấm gọi ngay hoặc target _blank cho link thường
            const targetAttr = social.url.startsWith('tel:') ? '' : 'target="_blank"';

            socialsContainer.innerHTML += `
                <a class="social-icon magnetic-btn" href="${social.url}" ${targetAttr} style="width: auto; padding: 0 20px; border-radius: 30px;">
                    <i class='${social.icon}'></i>
                    ${hasText}
                </a>
            `;
        });
    }

    // Render Contact Info
    const contactDetails = document.getElementById('contact-details');
    if (contactDetails && PORTFOLIO_CONFIG.contactInfo) {
        contactDetails.innerHTML = `
            <div class="contact-detail-item">
                <h4>Địa chỉ</h4>
                <p>${PORTFOLIO_CONFIG.contactInfo.address}</p>
            </div>
            <div class="contact-detail-item">
                <h4>Năm Sinh</h4>
                <p>${PORTFOLIO_CONFIG.contactInfo.dob}</p>
            </div>
            <div class="contact-detail-item">
                <h4>Giới Tính</h4>
                <p>${PORTFOLIO_CONFIG.contactInfo.gender}</p>
            </div>
        `;
    }

    // Render Portfolio Grid
    const grid = document.getElementById('portfolio-grid');
    if (grid && PORTFOLIO_CONFIG.projects) {
        PORTFOLIO_CONFIG.projects.forEach((project, idx) => {
            // Delay sole cho lưới
            const delayClass = `delay-${(idx % 3) + 1}`;

            const embedUrl = parseDriveLink(project.driveLink, project.type);

            let mediaHtml = '';

            // Nếu người dùng cung cấp CÓ SẴN 1 Link Ảnh làm Thumbnail (thumbnailLink)
            if (project.type === 'video' && project.thumbnailLink) {
                const thumbUrl = parseDriveLink(project.thumbnailLink, 'image');
                mediaHtml = `
                   <div class="video-thumbnail-container" onclick="this.outerHTML='<iframe src=\\'${embedUrl}\\' allow=\\'autoplay; fullscreen\\' loading=\\'lazy\\' style=\\'width:100%; height:100%; border:none;\\'></iframe>'" style="cursor: pointer; position: relative; width: 100%; height: 100%;">
                       <img src="${thumbUrl}" alt="${project.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                       <div class="play-overlay" style="position: absolute; top:50%; left:50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.6); border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;">
                           <i class='bx bx-play' style="font-size: 40px; color: white; margin-left: 5px;"></i>
                       </div>
                   </div>
                 `;
            } else {
                // Revert về Iframe mặc định nếu KHÔNG có Ảnh Bìa thủ công
                mediaHtml = project.type === 'video'
                    ? `<iframe src="${embedUrl}" allow="autoplay; fullscreen" loading="lazy" style="width:100%; height:100%; border:none;"></iframe>`
                    : `<img src="${embedUrl}" alt="${project.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">`;
            }

            grid.innerHTML += `
                <div class="project-card reveal-up ${delayClass}" data-tilt>
                    <div class="card-border-glow"></div>
                    <div class="media-container">${mediaHtml}</div>
                    <div class="project-info">
                        <div class="project-type">${project.category}</div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.description}</p>
                    </div>
                </div>
            `;
        });
    }

    // Render Shorts / Reels Slider
    const marqueeTrack = document.getElementById('marquee-track');
    if (marqueeTrack && PORTFOLIO_CONFIG.shortVideos) {
        let reelHtml = '';
        PORTFOLIO_CONFIG.shortVideos.forEach(video => {
            const embedUrl = parseDriveLink(video.driveLink, 'video');
            reelHtml += `
                <div class="marquee-item" onclick="window.open('${embedUrl}', '_blank')" style="cursor: pointer;">
                    <iframe src="${embedUrl}" allow="autoplay; fullscreen" loading="lazy" style="width:100%; height:100%; border:none; border-radius: 15px;"></iframe>
                    <div class="marquee-caption">${video.title}</div>
                </div>
            `;
        });
        marqueeTrack.innerHTML = reelHtml;
    }
}


// ==========================================
// LOGIC HIỆU ỨNG (PRELOADER, CURSOR, SCROLL, 3D GLOW)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Build Data
    buildUI();

    // 2. Preloader Logic
    const preloader = document.getElementById('preloader');
    const loaderBar = document.querySelector('.loader-bar');
    const loadPercent = document.querySelector('.loader-percentage');
    let percent = 0;

    // Giả lập loading ảo tạo cảm giác pro
    const interval = setInterval(() => {
        percent += Math.floor(Math.random() * 10) + 5;
        if (percent > 100) percent = 100;

        loaderBar.style.width = percent + '%';
        loadPercent.innerText = percent + '%';

        if (percent === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Trigger h1, h2 entry animations cho Hero
                    triggerHeroAnimations();
                }, 800);
            }, 500);
        }
    }, 100);

    // 3. Custom Cursor Tracking
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Cập nhật vị trí dot tức thì
        if (cursorDot) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }

        // CSS Variable tính năng Glow Hover cho Cards
        const cards = document.querySelectorAll('.glass-card, .project-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Lấy tọa độ tương đối từ chuột với cạnh của Card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Tạo hiệu ứng chuyển động mượt cho Cursor Outline (Lerp)
    function animateCursor() {
        if (cursorOutline) {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Thêm hiệu ứng to ra khi Hover vào các phím tắt (A, Button)
    document.querySelectorAll('a, button, .magnetic-btn').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // 4. Nút bấm mượt (Magnetic Effect) cho các thành phần
    const magnets = document.querySelectorAll('.magnetic-btn');
    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', (e) => {
            const pos = magnet.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;
            magnet.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        magnet.addEventListener('mouseleave', () => {
            magnet.style.transform = 'translate(0px, 0px)';
        });
    });

    // 5. Scroll Variables (Navbar Blur & Animation Trigger)
    const navbar = document.getElementById('navbar');
    const revealElements = document.querySelectorAll('.reveal-text, .reveal-up');
    const timelineAnim = document.querySelector('.timeline-animated');

    // Hàm gọi các animation xuất hiện
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        // Xử lý NavBar
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');

        // Text & Box reveals
        revealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) el.classList.add('is-visible');
        });

        // Vẽ dây dóng Timeline
        if (timelineAnim) {
            const timelineTop = timelineAnim.getBoundingClientRect().top;
            if (timelineTop < triggerBottom) timelineAnim.classList.add('is-visible');
        }
    }

    // Trigger hàm khi scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Chạy ngay lần đầu

    function triggerHeroAnimations() {
        document.querySelectorAll('.hero-section .reveal-text').forEach(el => el.classList.add('is-visible'));
        document.querySelectorAll('.hero-section .reveal-up').forEach(el => el.classList.add('is-visible'));
    }

    // 6. Navbar Menu cho Mobile
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Tự đóng menu lại khi bấm liên kết
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 7. Slider Controls (Next/Prev)
    const sliderContainer = document.getElementById('slider-container');
    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');

    if (sliderContainer && sliderPrev && sliderNext) {
        sliderPrev.addEventListener('click', () => {
            const scrollAmount = window.innerWidth > 768 ? 600 : 350;
            sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        sliderNext.addEventListener('click', () => {
            const scrollAmount = window.innerWidth > 768 ? 600 : 350;
            sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

});
