// Danh sách các truyện và hình ảnh tương ứng
const truyenList = [
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/thap-dai-de-hoang-deu-la-de-tu-cua-ta_1680852978.jpg", title: "Thập đại đế hoàng đều là đệ tử của ta" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/vo-luyen-dinh-phong_1514903369.jpg", title: "Võ luyện đỉnh phong" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/tien-vo-de-ton_1574509924.jpg", title: "Tiên võ đế tôn" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/vi-than-tro-lai_1654154498.jpg", title: "Vị thần trở lại" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/kiem-si-thien-tai-cua-hoc-vien_1690685403.jpg", title: "Kiếm sĩ thiên tài của học viện" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/de-tu-tu-luyen-con-ta-thi-luoi-bieng_1701395178.jpg", title: "Đệ tử tự luyện, còn ta thì lười biếng" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/do-de-cua-ta-deu-la-dai-phan-phai_1670692557 (1).jpg", title: "Đồ đệ của ta đều là đại phản phái" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/nguoi-choi-khong-the-thang-cap_1615044913 (1).jpg", title: "Người chơi không thể thăng cấp" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/sat-thu-thien-tai-don-doc_1700968916 (1).jpg", title: "Sát thủ thiên tài đơn độc" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/vua-choi-da-co-tai-khoan-vuong-gia_1606175910 (1).jpg", title: "Vừa chơi đã có tài khoản vương giả" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/chom-sao-la-de-tu-cua-toi_1678116785.jpg", title: "Chòm sao là đệ tử của tôi" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/tinh-tu-kiem-si_1695172672.jpg", title: "Tinh tú kiếm sĩ" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/toi-cuong-than-vuong_1563181989.jpg", title: "Tối cường thần vương" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ta-ky-ket-khe-uoc-voi-chinh-minh_1716975446.png", title: "Ta ký kết khế ước với chính mình" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ban-chat-cua-chuyen-sinh_1660188109.jpg", title: "Bản chất của chuyển sinh" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ta-tung-la-thap-vuong_1669291559.jpg", title: "Ta từng là thập vương" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/bach-luyen-thanh-than_1444715692.jpg", title: "Bách luyện thành thần" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ma-thu-sieu-than_1664880426.jpg", title: "Ma thú siêu thần" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/thien-tai-ma-phap-su-giau-nghe_1642818386.jpg", title: "Thiên tài ma pháp sư giấu nghề" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/nguoi-la-hang-nguoi-gi-cung-dam-o-tien-gioi-len-mat-voi-ta_1689574138.jpg", title: "Người là hạng người gì cũng dám ở tiên giới lên mặt với ta" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ta-bi-ket-cung-mot-ngay-1000-nam_1680226223.jpg", title: "Ta bị kẹt cứng một ngày 1000 năm" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ta-co-the-sua-chua-van-vat-tren-dong-thoi-gian_1685410801.jpg", title: "Ta có thể sửa chữa vạn vật trên dòng thời gian" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/chuyen-sinh-vao-the-gioi-vo-lam_1669905137.jpg", title: "Chuyển sinh vào thế giới võ lâm" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/nguoi-tren-van-nguoi_1620540971.jpg", title: "Người trên vạn người" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/nguyen-lai-ta-la-tu-tien-dai-lao_1644166269.jpg", title: "Nguyên lại ta là tu tiên đại lão" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/vua-thang-cap_1571835515.jpg", title: "Vừa thăng cấp" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ta-chinh-la-khong-theo-sao-lo-ra-bai_1634198413.jpg", title: "Ta chính là không theo sao lộ ra bài" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ta-that-su-khong-phai-la-cai-the-cao-nhan_1669626849.jpg", title: "Ta thật sự không phải là cái thế cao nhân" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/duy-nga-doc-tien_1547809333.jpg", title: "Duy ngã độc tiên" },
    { img: "https://nguyenbinh2005.github.io/webtruyen/img/ta-la-sat-than_1624109192.jpg", title: "Ta là sát thần" }
    // Bạn có thể thêm nhiều truyện khác vào danh sách này
];

// Truy cập vào phần tử .box-details
const boxDetails = document.getElementById('box-details');

// Tạo các box tự động từ danh sách
truyenList.forEach(truyen => {
    // Tạo phần tử div chứa mỗi box
    const box = document.createElement('div');
    box.classList.add('hot-top');
    
    // Tạo phần tử img
    const img = document.createElement('img');
    img.src = truyen.img;
    img.classList.add('img-hottop');
    
    // Tạo phần tử p chứa tiêu đề truyện
    const title = document.createElement('p');
    title.innerHTML = truyen.title;

    // Thêm ảnh và tiêu đề vào box
    box.appendChild(img);
    box.appendChild(title);

    // Thêm box vào container .box-details
    boxDetails.appendChild(box);
});
