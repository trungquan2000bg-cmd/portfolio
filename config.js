/**
 * ==========================================
 * CẤU HÌNH THÔNG TIN PORTFOLIO (Dành Cho Bạn)
 * ==========================================
 * Bạn chỉ cần thay đổi text và link trong file này, 
 * website sẽ tải lại toàn bộ hình ảnh và video từ Google Drive của bạn.
 */

const PORTFOLIO_CONFIG = {
    // 1. CHỈNH SỬA THÔNG TIN CÁ NHÂN
    profile: {
        name: "Nguyễn Trung Quân",
        role: "Video Editor & VFX Artist",
        bio: "Xin chào! Tôi là một Video Editor chuyên nghiệp với đam mê biến những thước phim thô thành các tác phẩm hoàn chỉnh, mang đến trải nghiệm thị giác ấn tượng nhất.",
        about: "Dưới đây là chi tiết về quá trình học tập, kinh nghiệm làm việc và những dự án tôi đã tham gia.",
        email: "vutheanh120100@gmail.com", // Khi khách bấm gửi email sẽ tự động mở app gửi mail
    },

    // 2. KỸ NĂNG CỦA BẠN (Từng mục cách nhau bằng dấu phẩy)
    skills: [
        "Photoshop",
        "Illustrator",
        "After Effects",
        "InDesign",
        "Premiere Pro",
        "Lightroom",
    ],

    // 3. HỌC VẤN
    education: [
        {
            time: "2018 - 2020",
            school: "TRƯỜNG CAO ĐẲNG CÔNG NGHỆ BÁCH KHOA HÀ NỘI",
            major: "Công nghệ thông tin",
            grade: "Khá"
        },
        {
            time: "2021 - 2023",
            school: "TRƯỜNG CAO ĐẲNG FPT POLETECHNIC",
            major: "Thiết kế đồ họa",
            grade: "Khá"
        }
    ],

    // 4. KINH NGHIỆM LÀM VIỆC
    experience: [
        {
            time: "04/2021 - 04/2022",
            company: "MIN PRODUCTION",
            position: "Editor",
            details: [
                "Tham gia học hỏi các dự án thực tế."
            ]
        },
        {
            time: "04/2022 - 09/2024",
            company: "CÔNG TY CỔ PHẦN TRUYỀN THÔNG DTA",
            position: "Editor",
            details: [
                "Học, phụ chụp, quay tại Công ty cổ phần truyền thông DTA.",
                "Phụ setup ánh sáng, bối cảnh quay phim trường, sự kiện.",
                "Tham gia sản xuất các phim TVC, MV, Viral,...",
                "Viết kịch bản tik tok cho Bentoni, MB Capital,...",
                "05/2023 - 09/2024: Trưởng nhóm phòng Editor."
            ]
        },
        {
            time: "09/2024 - 02/2026",
            company: "CTCP THƯƠNG MẠI VÀ XUẤT NHẬP KHẨU ĐỨC TÍN",
            position: "Editor",
            details: [
                "Vinh danh nhân viên xuất sắc năm 2024"
            ]
        }
    ],

    // 5. CÁC DỰ ÁN ĐÃ THAM GIA (Vai trò)
    participatedProjects: [
        "Lên kịch bản ra mắt quỹ Rodium cho MB Capital",
        "Lên kịch bản, sản xuất phim tết cho Panasonic.",
        "Sản xuất TVC VNPT SmartCloud, Phim doanh nghiệp."
    ],

    // 6. THÔNG TIN LIÊN HỆ & MẠNG XÃ HỘI
    contactInfo: {
        address: "110 Trần Duy Hưng, Hà Nội",
        dob: "12/01/2000",
        gender: "Nam"
    },
    socials: [
        { icon: "bx bx-phone", url: "tel:0392166954", text: "0392 166 954" },
        { icon: "bx bxl-facebook", url: "https://www.facebook.com/mrbro33/", text: "Facebook" },
    ],

    // 7. DANH SÁCH DỰ ÁN NỔI BẬT (HIỆN TRÊN TRANG CHỦ BẰNG GOOGLE DRIVE)
    projects: [
        {
            title: "Hologram",
            category: "Hologram",
            type: "video",
            driveLink: "https://drive.google.com/file/d/1B0d82PCE72FXSbE8fvEYJi07OC_HYIEZ/view?usp=drive_link",
            thumbnailLink: "https://drive.google.com/file/d/1BUOu-UG1p3XuKhfB07RRG8c-iNidytv0/view?usp=drive_link",
            description: "VFX"
        },
        {
            title: "Highlight",
            category: "Highlight",
            type: "video", // Đổi type thành video để phát bình thường
            driveLink: "https://drive.google.com/file/d/1JV_tYESf-68oM2eB3G4JG-oNtqxGlaQK/view?usp=drive_link",
            thumbnailLink: "https://drive.google.com/file/d/1WErIyL8MnIWXFE05SM2SVxHgKLotI4Xe/view?usp=drive_link", // Thêm dòng này để cài ảnh bìa riêng
            description: "Edit nhịp điệu nhanh, Sound Design cho các nền tảng dọc"
        }
    ],

    // 8. DANH SÁCH VIDEO NGẮN / REELS (Trượt ngang trên trang chủ)
    shortVideos: [
        {
            title: "Motion Graphics",
            driveLink: "https://drive.google.com/file/d/1rov_B6WGaA0mRR9AxR-3cE-XyHC-DJ_-/view?usp=drive_link"
        },
        {
            title: "Motion Graphics",
            driveLink: "https://drive.google.com/file/d/19CIUiARFY5GJsHGLs6DCbQzJTmClIS7V/view?usp=drive_link"
        },
        {
            title: "3D",
            driveLink: "https://drive.google.com/file/d/16Kb7hzaWBXsB1zbGUDHqU4e8co65nVAq/view?usp=drive_link"
        },
        {
            title: "Game",
            driveLink: "https://drive.google.com/file/d/1WefXkx05wTxdQArJc5zQ_pKzgCoOiJhw/view?usp=drive_link"
        },
        {
            title: "Hologram",
            driveLink: "https://drive.google.com/file/d/18x3Yg9zm7i4uHa82K7WdUAsqWkHlrF57/view?usp=drive_link"
        },
        {
            title: "Showreel",
            driveLink: "https://drive.google.com/file/d/1spwIzbZcZnwqy0pGw5VAOb_An5Xa97zD/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1ZyptuPYuAE37bDzrvfH1qm8JtBH2DdmU/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1hGLQs5rgWB9tbC5Y_dxz2JHKbOKEM8QU/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1sSlR-FQiCjvqCQOJU9VQ6bzYvDqQgo0U/view?usp=drive_link"
        },
        {
            title: "AI",
            driveLink: "https://drive.google.com/file/d/1ITzYLx7aHpS0c4wg-DVSyAN-s-Hm1jHA/view?usp=drive_link"
        },
        {
            title: "Motion",
            driveLink: "https://drive.google.com/file/d/1a6R31UDFXOPHzRjOEz4KYfyb2XxmadrZ/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1YbEeSpYKc11xR3eDzqddHhbNZzwxGbpl/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1af7HtBgMnKEiVomREaHys4cL74TGu0Ew/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/10RXoocouES7uKI4jvMvkFR0tF-9_fWxL/view?usp=drive_link"
        },
        {
            title: "Spa",
            driveLink: "https://drive.google.com/file/d/1NbB2abhhroiSlwax1PMrKA0SKyRpI6zP/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1p7XVrHUREwtqVwJa2TSl2VFXUy9NLutS/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1EDYkqRScc6XdAEFN8KJWJjbofsIpasmJ/view?usp=drive_link"
        },
        {
            title: "",
            driveLink: "https://drive.google.com/file/d/1BXUyc3I-5tB_D0Zht25Z01Xj677joddZ/view?usp=drive_link"
        },

    ]
};
