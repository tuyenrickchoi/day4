var hotelAdmin = function() {
    var listhotel1 = "";
    for (var i in hotel) {
        var data = JSON.parse(JSON.stringify(hotel[i]));
        var listhotel1 = '<tr>';
        listhotel1 += '<td>' + data.id + '</td>';
        listhotel1 += '<td>' + data.name + '</td>';
        listhotel1 += '<td><img src="../img/' + data.img + '" alt="" style="width: 50px;height: 50px;"></td>';
    
        listhotel1 += '<td>' + data.price + '</td>';
        listhotel1 += '<td><button onclick="updateHotel(' + i + ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateHotel"><i class="fas fa-cogs"></i></button>';
        listhotel1 += '<button onclick="deleteHotel(' + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listhotel1 += '</tr>';

        document.getElementById("hotel-admin").innerHTML += listhotel1;
    }
    // Save();
}

var addHotel = function() {
    var Hotel = {
        id: "SP" + parseInt(hotel.length + 1),
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        price: document.getElementById("price").value
    }
    hotel.push(Hotel);
    localStorage.setItem('listHotel', JSON.stringify(hotel));
    // Save();
    window.location.reload();
}

// Xóa khách sạn 
var deleteHotel = function(i) {
    hotel.splice(i, 1);
    localStorage.setItem('listHotel', JSON.stringify(hotel));
    window.location.reload();
}

// Sửa khách sạn 
var updateHotel = function(i) {
    var k = hotel[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')"> Đồng ý</button>'
}

var submitUpdate = function(i) {
    var k = hotel[i];
    k.id = document.getElementById("idd").value;
    k.name = document.getElementById("named").value;
    k.img = document.getElementById("imgd").value;
    k.price = document.getElementById("priced").value;
    localStorage.setItem('listHotel', JSON.stringify(hotel));
    window.location.reload();
}

var userAdmin = function() {
    var listhotel = "";
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]));
        var listhotel = '<tr>';
        listhotel += '<td>' + data.id + '</td>';
        listhotel += '<td>' + data.username + '</td>';
        listhotel+='<td><img src="'+data.img+'" alt="" style="width: 50px;height: 50px;"></td>';
        listhotel += '<td>' + data.email + '</td>';
        // listhotel1+='';
        listhotel += '<td><button onclick="updateHotel(' + i + ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateHotel"><i class="fas fa-cogs"></i></button>';
        listhotel += '<button onclick="deleteHotel(' + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listhotel += '</tr>';

        document.getElementById("user-admin").innerHTML += listhotel;
    }
    // Save();
}


hotelAdmin();
userAdmin();