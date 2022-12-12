//GAME GUNTING BATU KERTAS

function gbk() {
  document.getElementById("focus").style = "display:block;opacity:1";
  var submitBtn = document.getElementById("var");
  submitBtn.style = "display:none";
//identifikasi user
var user = document.getElementById("user").value.toLowerCase();//toLowerCase mengubah huruf besar menjadi huruf kecil
//sampel pilihan user
const gbk = ["gunting", "batu", "kertas"]
//fungsi bot menggunakan Math.random
var bot = Math.floor(Math.random()*3);
const namabot = "Spark"; //nama bot
let pilihanbot; //pilihan bot
let pilihanuser; //pilihan pemain
//untuk memvalidasi jika user memasukkan input selain yang ada di sampel
var valid = gbk.includes(user);
//menampilkan gambar
var botchoice = document.getElementById("bot");
var player = document.getElementById("pemain");
//hasil dari permainan
let hasil;

//pilihan pemain
//mengubah inputan user menjadi integer

if (user == "gunting") {
	pilihanuser = 0;
	player.style = "background-image: url('image/gunting.png')";
} else if (user == "batu") {
	pilihanuser = 1;
	player.style = "background-image: url('image/new-batu.png')";
} else if (user == "kertas") {
	pilihanuser = 2;
	player.style = "background-image: url('image/kertas.png')";
} else {
	hasil = "invalid";
}

	//pilihan bot
//mengubah pilihan bot dari integer menjadi string
if (bot == 0) {
	pilihanbot = "gunting";
	botchoice.style = "background-image: url('image/gunting.png')";
} else if (bot == 1) {
	pilihanbot = "batu";
	botchoice.style = "background-image: url('image/new-batu.png')";
} else {
	pilihanbot = "kertas";
	botchoice.style = "background-image: url('image/kertas.png')";
}

//logika permainan
if (bot === pilihanuser) {
	hasil ="bot&nbsp;&nbsp;memilih" + "&nbsp;&nbsp;" + pilihanbot + "&nbsp;&nbsp;" + "dan&nbsp;&nbsp;<br>pemain&nbsp;&nbsp;memilih" + "&nbsp;&nbsp;" + user + "&nbsp;&nbsp;<br>" + "jadi&nbsp;&nbsp;hasilnya&nbsp;&nbsp;seri";
}
//saat pemain memasukkan input yang salah
//pembacaan code : JIKA INPUTAN USER TIDAK SESUAI YANG ADA DI SAMPEL
//JIKA VARIABEL valid BERNILAI FALSE 
else if (valid == false) {
	player.style = "background-image: url('image/wrong.png')";
	botchoice.style = "background-image: url('image/wrong.png')";
	hasil = "kamu&nbsp;&nbsp;memasukkan&nbsp;&nbsp;input&nbsp;&nbsp;<br>yang&nbsp;&nbsp;salah";
}
//logika ketika bot menang
/*maksud kode dibawah : KETIKA PILIHAN BOT LEBIH BESAR ANGKA NYA DARI INPUTAN USER ATAU JIKA BOT MEMILIH ANGKA 0 [GUNTING] DAN PEMAIN MEMILIH ANGKA 2[KERTAS] MAKA BOT YANG MEMENANGKAN PERMAINAN */
else if (bot > pilihanuser || bot === 0 && pilihanuser === 2) {
	hasil = "bot&nbsp;&nbsp;memilih" + "&nbsp;&nbsp;" + pilihanbot + "&nbsp;&nbsp;" + "dan&nbsp;&nbsp;<br>pemain&nbsp;&nbsp;memilih" + "&nbsp;&nbsp;" + user + "&nbsp;&nbsp;<br>" + "Dan&nbsp;&nbsp;pemenangnya&nbsp;&nbsp;adalah&nbsp;&nbsp;<br>" + namabot;
} else {//Selain dari kondisi diatas
	hasil = "bot&nbsp;&nbsp;memilih" + "&nbsp;&nbsp;" + pilihanbot + "&nbsp;&nbsp;" + "dan&nbsp;&nbsp;<br>pemain&nbsp;&nbsp;memilih" + "&nbsp;&nbsp;" + user + "&nbsp;&nbsp;<br>" + "Dan&nbsp;&nbsp;pemenangnya&nbsp;&nbsp;adalah&nbsp;&nbsp;<br>Player";
}
//Menampilkan hasil dari permianan
console.log(hasil);

document.getElementById("hasil").innerHTML=hasil;
var has = document.getElementById("result");
       
         has.style.display = "flex";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            has.style.opacity = 1;
         }, 10);
}
//THIS CODE MADE WITH MUFNI
//© Copyright by mufni 2022



function yes() {
	var elem = document.getElementById("gbk");
	elem.style.display="block";
      
         setTimeout(function() {
            elem.style.opacity = 1;
         }, 10);
 
/*	document.getElementById("gbk").style="display:block";*/
	var ye = document.getElementById("var");
      
         ye.style.opacity = 0;
         setTimeout(function() {
            ye.style.display = "none";
         }, 1000);
	document.getElementById("chatLog").innerHTML="permainan dimulai!!";
	setTimeout(function() {
	document.getElementById("chatLog").innerHTML=null;
	},2000);
}
function no() {
	var no = document.getElementById("var");
      
         no.style.opacity = 0;
         setTimeout(function() {
            no.style.display = "none";
         }, 1000);

	
	document.getElementById("chatLog").innerHTML="Berhasil membatalkan permainan!!";
	setTimeout(function() {
		var inv = document.getElementById("cc");
      
         inv.style.opacity = 0;
         setTimeout(function() {
            inv.style.display = "none";
         }, 1000);
	},3000);
}
