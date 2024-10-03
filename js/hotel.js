var hotel = [
    {
        id: "P1",
        name: "Hotel DaLAX",
        img: "hotel1.jpg",
       
        price: 2000,
    },
    {
        id: "P2",
        name: "Hotel CHiNsa",
        img: "hotel2.jpg",
    
        price: 4000,
    },
    {
        id: "P3",
        name: "Hotel asiA",
        img: "hotel3.jpg",
      
        price: 35000,
    },
    {
        id: "P4",
        name: "Hotel Modern",
        img: "hotel4.jpg",
    
        price: 5000,
    },
    {
        id: "P5",
        name: "Hotel UDER",
        img: "hotel5.jpg",
      
        price: 65000,
    },
    {
        id: "P6",
        name: "Hotel HONgKong",
        img: "hotel6.jpg",
       
        price: 1200,
    },
];

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
        listhotel += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-location="' + data.location + '" data-price="' + data.price + '" onclick="tks()">';
        listhotel += '<a>';
        listhotel += '<i class="fas fa-cart-plus"></i>';
        listhotel += '</a>';
        listhotel += '</span>';
        listhotel += '</div>';
        listhotel += '</div>';

        document.getElementById("toprate").innerHTML += listhotel;
    }
    Save();
}

listLocal();