// Save the hotel array to local storage 
function Save() {
    localStorage.setItem('listHotel', JSON.stringify(hotel));
}

// Load the hotel array from local storage
function load() {
    hotel = JSON.parse(localStorage.getItem('listHotel'));
}

// Display the hotel list in HTML
if (localStorage.getItem("listHotel") != null) {
    load();
}
Save();

var listLocal = function() { 
    var listhotel = "";
    for (var i in hotel) {
        var data = JSON.parse(JSON.stringify(hotel[i]));
        var listhotel = '<div class="">';
        listhotel += '<div class="card hotel p-2" style="width:auto">';
        listhotel += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listhotel += '<div class="card-title hotel-title text-center h5">' + data.name + '</div>';
        listhotel += '<div class="price text-center h6">' + data.price + '₫</div>';
        
        // Nút "Add to Cart"
        listhotel += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-location="' + data.location + '" data-price="' + data.price + '" onclick="tks()">';
        listhotel += '<a>';
        listhotel += '<i class="fas fa-cart-plus"></i>';
        listhotel += '</a>';
        listhotel += '</span>';

        // Nút "Xem Chi Tiết"
        listhotel += '<a href="hotel-detail.html?code=' + data.id + '" class="btn btn-primary mt-2">Xem Chi Tiết</a>';

        document.getElementById("Trend").innerHTML += listhotel;
    }
    Save();
}

listLocal();

function displayHotels() {
    const hotel = getHotelsFromLocalStorage();
    hotelList.innerHTML = '';

    hotel.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${hotel.img}" class="card-img-top" alt="${hotel.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${hotel.name}</h5>
                    <p class="card-text">Mã sản phẩm: ${hotel.code}</p>
                    <p class="card-text">Giá: ${hotel.price} VNĐ</p>
                   
                </div>
            </div>
        `;
        hotelList.appendChild(card);
    });
}