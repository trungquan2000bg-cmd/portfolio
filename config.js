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
        email: "trungquan.contactt@gmail.com", // Khi khách bấm gửi email sẽ tự động mở app gửi mail
    },

    // 2. KỸ NĂNG CỦA BẠN (Từng mục cách nhau bằng dấu phẩy)
    skills: [
        "Photoshop",
        "After Effects",
        "Premiere Pro",
        "CapCut",
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
            time: "07/2025 - Hiện nay",
            company: "Cửa hàng Thế Giới Cầu Lông",
            position: "Nhân viên Media",
            details: [
                "Biên tập và quản lý các trang social của công ty (FB, web, tiktok,...)",
                "Làm video giới thiệu sản phẩm, cửa hàng, giải đấu",
                "Hỗ trợ setup, điều hành các giải đấu"
            ]
        },
        {
            time: "07/2023 - 06/2025",
            company: "Công ty Cổ phần Thương mại và Xuất nhập khẩu Đức Tín",
            position: "Nhân viên Media",
            details: [
                "Hỗ trợ xây dựng content, hình ảnh cho các Brand",
                "Tiếp nhận, phân loại và xử lý source quay thô",
                "Phối hợp với design và content đưa ra video tối ưu nhất",
                "Làm video theo yêu cầu của brand",
                "Làm video Motion Graphics (TVC cho nhãn hàng, motion, chạy ads, truyền thông tiktok)"
            ]
        },
        {
            time: "11/2022 - 06/2023",
            company: "Công ty TNHH Sản xuất và Xuất nhập khẩu AD MART",
            position: "Nhân viên Marketing",
            details: [
                "Xây dựng content trên fanpage, tiktok, website",
                "Chỉnh sửa hình ảnh, video trước khi đăng lên những nền tảng của công ty"
            ]
        },
        {
            time: "02/2022 - 06/2022",
            company: "Xây dựng đồ án tốt nghiệp",
            position: "Xây dựng website cứu hộ ô tô",
            details: [
                "Xây dựng chương trình bằng ngôn ngữ PHP và framework Laravel",
                "Sử dụng MySQL server để chạy chương trình"
            ]
        },
        {
            time: "09/2021 - 01/2022",
            company: "Công ty Cổ phần Công nghệ Phần mềm Quản trị Doanh nghiệp Cybersoft",
            position: "Nhân viên triển khai dự án",
            details: [
                "Hỗ trợ triển khai dự án phần mềm đến công ty đối tác",
                "Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua các mạng xã hội"
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
        address: "Phú Đô, Từ Liêm, Hà Nội",
        dob: "14/10/2000",
        gender: "Nam"
    },
    socials: [
        { icon: "bx bx-phone", url: "tel:0854006616", text: "0854 006 616" },
        { icon: "bx bxl-facebook", url: "https://www.facebook.com/ntquan14", text: "Facebook" },
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
    // Link mở thư mục Google Drive khi bấm nút "Xem Đầy Đủ Sản Phẩm"
    viewAllFolderLink: "https://drive.google.com/drive/u/1/folders/12XfWVykjVRorH9741HuagBV-eP6bTGqR",

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
