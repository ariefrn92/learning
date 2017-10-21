alert ("Selamat datang di toko kami")

var namaBarang = prompt("Nama Barang");
var hargaBarang = prompt("Harga Barang")
var jumlahBarang = prompt("Jumlah "+namaBarang)
var total = eval(hargaBarang)*eval(jumlahBarang);

alert ("Blanjaan Anda adalah "+total );

var pembayaran = prompt ("Uang Customer");
var kembalian = eval(pembayaran)-eval(total)

alert ("Kembalian anda "+kembalian)