//  Lấy mã khách sạn (code) từ URL
const urlParams = new URLSearchParams(window.location.search);
const hotelCode = urlParams.get('code');

// Lấy danh sách khách sạn từ localStorage
let hotelList = JSON.parse(localStorage.getItem('listHotel'));

// Tìm khách sạn theo mã (code)
const hotelDetail = hotelList.find(hotel => hotel.id === hotelCode);

// Hiển thị thông tin khách sạn nếu tìm thấy
if (hotelDetail) {
    document.getElementById('hotelName').textContent = hotelDetail.name;
    document.getElementById('hotelImage').src = 'img/' + hotelDetail.img;
    document.getElementById('hotelPrice').textContent = 'Giá: ' + hotelDetail.price + ' VNĐ';
    document.getElementById('hotelLocation').textContent = 'Vị trí: ' + (hotelDetail.location ||'DaLat' );
    document.getElementById('hotelDescription').textContent = 'Mô tả: ' + (hotelDetail.description || 'Is an architectural work built independently, with regulations of 10 bedrooms or more, ensuring the quality of facilities, equipment, and necessary services to serve tourists...');
} else {
    document.body.innerHTML = '<h2>Khách sạn không tồn tại!</h2>';
}

// Hàm lấy sản phẩm từ Local Storage
function getHotelsFromLocalStorage() {
    const hotels = JSON.parse(localStorage.getItem('hotels'));
    return hotels ? hotels : [];
}

// Hiển thị chi tiết sản phẩm khi trang được tải
document.addEventListener('DOMContentLoaded', displayHotelDetail);