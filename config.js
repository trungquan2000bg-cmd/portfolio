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
        role: "Video Editor",
        bio: "Xin chào! Tôi là một Video Editor chuyên nghiệp với đam mê biến những thước phim thô thành các tác phẩm hoàn chỉnh, mang đến trải nghiệm thị giác ấn tượng nhất.",
        about: "Dưới đây là chi tiết về quá trình học tập, kỹ năng và kinh nghiệm làm việc của tôi.",
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
            time: "2018 - 2022",
            school: "TRƯỜNG ĐẠI HỌC CÔNG NGHỆ GIAO THÔNG VẬN TẢI",
            major: "Công nghệ thông tin",
            grade: "Khá"
        }
    ],

    // 4. KINH NGHIỆM LÀM VIỆC
    experience: [
        {
            time: "09/2021 - 01/2022",
            company: "Công ty Cổ phần Công nghệ Phần mềm Quản trị Doanh nghiệp Cybersoft",
            position: "Nhân viên triển khai dự án",
            details: [
                "Hỗ trợ triển khai dự án phần mềm đến công ty đối tác",
                "Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua các mạng xã hội"
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
            time: "11/2022 - 06/2023",
            company: "Công ty TNHH Sản xuất và Xuất nhập khẩu AD MART",
            position: "Nhân viên Marketing",
            details: [
                "Xây dựng content trên fanpage, tiktok, website",
                "Chỉnh sửa hình ảnh, video trước khi đăng lên những nền tảng của công ty"
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
            time: "07/2025 - Hiện nay",
            company: "Cửa hàng Thế Giới Cầu Lông",
            position: "Nhân viên Media",
            details: [
                "Biên tập và quản lý các trang social của công ty (FB, web, tiktok,...)",
                "Làm video giới thiệu sản phẩm, cửa hàng, giải đấu",
                "Hỗ trợ setup, điều hành các giải đấu"
            ]
        }
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
            driveLink: "https://drive.google.com/file/d/1iYmPA--NOWj1xOv_7_NFV2ggMKCeDMFd/view?usp=drive_link",
            thumbnailLink: "https://drive.google.com/file/d/1iYmPA--NOWj1xOv_7_NFV2ggMKCeDMFd/view?usp=drive_link",
            description: "VFX & 3D Project"
        },
        {
            title: "Highlight",
            category: "Highlight",
            type: "video",
            driveLink: "https://drive.google.com/file/d/1PDZC8Ip2Hycq-jBDAyNAlT9ooCX-wRLR/view?usp=drive_link",
            thumbnailLink: "https://drive.google.com/file/d/1PDZC8Ip2Hycq-jBDAyNAlT9ooCX-wRLR/view?usp=drive_link",
            description: "Edit nhịp điệu nhanh, Sound Design cho các nền tảng dọc"
        }
    ],
    // Link mở thư mục Google Drive khi bấm nút "Xem Đầy Đủ Sản Phẩm"
    viewAllFolderLink: "https://drive.google.com/drive/u/1/folders/12XfWVykjVRorH9741HuagBV-eP6bTGqR",

    // 8. DANH SÁCH VIDEO NGẮN / REELS (Trượt ngang trên trang chủ)
    shortVideos: [
        {
            title: "JK Lab Việt",
            driveLink: "https://drive.google.com/file/d/1SPqIzAr4a9ksJ1M0iVpHOe9x8w4WuS_O/view?usp=drive_link"
        },
        {
            title: "Bản Đồ Nhật",
            driveLink: "https://drive.google.com/file/d/14sPPSneoAGGUR0SH3zWkFqc8GqHP8_kb/view?usp=drive_link"
        },
        {
            title: "Demo Day",
            driveLink: "https://drive.google.com/file/d/1Sx-UPTw_tPxwEABqDvOysKwS0hyJHT4w/view?usp=drive_link"
        },
        {
            title: "JKLAB",
            driveLink: "https://drive.google.com/file/d/1C8L3gDXG2Xd2Ymvwc0c_xy-f5Gnk32V6/view?usp=drive_link"
        },
        {
            title: "KB2 BSC",
            driveLink: "https://drive.google.com/file/d/1fW2J6ZRkCPrr5GPhdDxODzVZF5iyLUOm/view?usp=drive_link"
        },
        {
            title: "KICK OFF BSC 2024",
            driveLink: "https://drive.google.com/file/d/1PHh4QIvV1XXRvXYgcUVNopuRkPCDx7Vp/view?usp=drive_link"
        },
        {
            title: "Lacoste AGLT 23",
            driveLink: "https://drive.google.com/file/d/1A0fj1ihag9Llz5ogwB0lX73jkWQaovvs/view?usp=drive_link"
        },
        {
            title: "LaosApp",
            driveLink: "https://drive.google.com/file/d/1V1YpW7_snQ0_UVjqny_Jd6CbZ7yQvKe-/view?usp=drive_link"
        },
        {
            title: "Motion KB6",
            driveLink: "https://drive.google.com/file/d/113Y1h1q5ftL9Fwxh3wZaUWJZWEZVvN48/view?usp=drive_link"
        },
        {
            title: "Nhà Máy",
            driveLink: "https://drive.google.com/file/d/1fduC0xquIGl64wPQIoWS9dyZk1O_kBux/view?usp=drive_link"
        }
    ]
};
