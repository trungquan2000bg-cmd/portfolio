# Video Editor Portfolio - Vũ Thế Anh

Bản sao mã nguồn hoàn chỉnh và chính xác 100% của website [vutheanhprofile.netlify.app](https://vutheanhprofile.netlify.app).

---

## 📁 Cấu Trúc Dự Án

```
vutheanh-portfolio/
├── index.html       # Cấu trúc HTML giao diện, các section và preloader
├── styles.css       # Toàn bộ CSS phong cách Dark/Neon Tech, hiệu ứng glow, kính mờ, responsive
├── config.js        # File cấu hình tập trung dữ liệu: thông tin cá nhân, dự án, video Drive, kỹ năng, kinh nghiệm...
├── script.js        # Script xử lý hiệu ứng: Preloader, Custom Cursor, Smooth Magnetic Buttons, Scroll Reveal, Render UI từ config
├── favicon.ico      # Icon đại diện website
└── README.md        # Hướng dẫn sử dụng và tùy biến
```

---

## 🚀 Cách Xem & Chạy Trên Máy Cục Bộ

Trang web là ứng dụng tĩnh (Static Web), không yêu cầu cài đặt thư viện nặng nề hay database.

### Cách 1: Sử dụng Python HTTP Server (Đang chạy tại cổng 8080)
```bash
python3 -m http.server 8080
```
Sau đó mở trình duyệt truy cập: `http://localhost:8080`

### Cách 2: Sử dụng VS Code / Live Server
1. Mở thư mục này bằng VS Code hoặc Antigravity IDE.
2. Chuột phải vào `index.html` chọn **Open with Live Server**.

### Cách 3: Mở trực tiếp
Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt Chrome, Safari, Edge...

---

## 🛠️ Hướng Dẫn Tùy Biến (Chỉ cần sửa file `config.js`)

Mọi thông tin trên trang web đều được điều khiển tập trung thông qua file `config.js`:

1. **Thông tin cá nhân**: Sửa `profile` (họ tên, chức danh, đoạn giới thiệu ngắn, email liên hệ).
2. **Kỹ năng**: Sửa mảng `skills` (Photoshop, Illustrator, Premiere Pro, After Effects, DaVinci Resolve, CapCut...). Màu sắc và icon Adobe/CapCut/DaVinci được tự động áp dụng tương ứng.
3. **Học vấn & Kinh nghiệm**: Sửa mảng `education` và `experience`.
4. **Dự án chính (Portfolio Grid)**: Thêm/sửa trong mảng `projects`. Hỗ trợ trực tiếp liên kết Google Drive video và ảnh thumbnail.
5. **Video ngắn / Reels / Shorts (Slider Trượt Ngang)**: Thêm/sửa trong mảng `shortVideos` với link Google Drive.
6. **Mạng xã hội & Liên hệ**: Sửa `contactInfo` và `socials` (số điện thoại gọi trực tiếp `tel:...`, link Facebook, Zalo, Behance...).

---

## 🌐 Triển Khai (Deploy Lên Mạng Miễn Phí)

Website có thể đưa lên mạng hoàn toàn miễn phí chỉ trong 1 phút qua các nền tảng sau:
- **Netlify**: Kéo thả toàn bộ thư mục này vào mục [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Chạy lệnh `npx vercel` hoặc kết nối GitHub repo với Vercel.
- **GitHub Pages**: Đẩy code lên GitHub repository và bật tính năng GitHub Pages trong Settings.
