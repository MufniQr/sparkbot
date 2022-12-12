    

var user = document.getElementById("userBox").value.toLowerCase();
var chatUser = document.getElementById("chat-user").innerHTML = user;

function talk() {
	var nama_user = document.getElementById("nama_cache").value;
    var date = new Date();
    var h = date.getHours();
    var user = document.getElementById("userBox").value.toLowerCase().trim();
    
   // document.getElementById("chatLog").innerHTML = user;
    //EFEK FADE OUT
    var hilang = document.getElementById("cc");
      
         hilang.style.opacity = 0;
         if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user];
        document.getElementById("chat-user").innerHTML = user;
    } 
         setTimeout(function() {
            hilang.style.display = "none";
            
         }, 300);
      
    //EFEK FADE IN
    setTimeout(function() {
    var efek = document.getElementById("cc");
       
         efek.style.display = "block";
         otak();
                  if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user];
        document.getElementById("chat-user").innerHTML = user;
    }  
    
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            efek.style.opacity = 1;
         }, 10);
        
   },300);
    
    //mencegah virtext
if(user.length > 100) {
	Swal.fire({
title: "Wow anda memasukkan lebih dari 100 karakter",
text: "",
icon:"error",
button:"oke",
});
}
function otak() {
  var cookienama = document.cookie;
  var array = cookienama.split("=");
  var arr = array[1];
    //menghilangkan isi inputan user ketika tonbol submit ditekan
    setTimeout(function() {
    	document.getElementById("userBox").value=null;
    },50)
    
    //sensor kata ktaa kasar
    var larangan = "asu kontol bangsat stfu bego goblok celeng ngentod ngentot";
    var sortir = larangan.indexOf(user);


    
    
     if (user == "") {
        document.getElementById("chatLog").innerHTML = "<h5>Kamu belum menulis sesuatu!!</h5>";
    }
    else if(user == " "){
        document.getElementById("chatLog").innerHTML = "<h5>Kamu belum menulis sesuatu!!</h5>";
 }
 else if (sortir != -1) {
   document.getElementById("chatLog").innerHTML="maaf, anda menulis kata yang dilarang";
   document.getElementById("chat-user").innerHTML="";
 }
 else if (user == "pick color") {
 document.getElementById("index_color").style = "display:flex";
   }
   else if (user == "color") {
 document.getElementById("index_color").style = "display:flex";
   }
   else if (user == "pick") {
 document.getElementById("index_color").style = "display:flex";
   }
   else if(user == "quotes hari ini"){
        
        quoteRandom(1, 20);
    }
    else if(user == "quotes"){
        
        quoteRandom(1, 20);
    }
    else if(user == "quote"){
        
        quoteRandom(1, 20);
    }
    else if (user == "q") {
    
      quoteRandom(1, 20);
    }
    else if(user == "kata bijak"){
        
        quoteRandom(1, 20);
    }
    else if(user == "kata motivasi"){
        
        quoteRandom(1, 20);
    }
    else if(user == "motivasi"){
        
        quoteRandom(1, 20);
    }
    else if(user == "kata mutiara"){
        
        quoteRandom(1, 20);
    }
    else if (user == "jam berapa sekarang"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "sekarang jam berapa"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "jam berapa ini"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "waktu saat ini"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "pukul berapa sekarang"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "jam"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "jam berapa"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "jam berapa ini"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "ini jam berapa"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "waktu"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "time now"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "time"){
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "cek jam") {
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "cek waktu") {
    	document.getElementById("chat-user").innerHTML=user;
    	tampilwaktu();
    }
    else if (user == "tanggal berapa sekarang") {
    	kalender();
    }
    else if (user == "cek hari") {
    	kalender();
    }
    else if (user == "cek tanggal") {
    	kalender();
    }
    else if (user == "cek tahun") {
    	kalender();
    }
    else if (user == "hari ini tanggal berapa") {
    	kalender();
    }
    else if (user == "tanggal berapa hari ini") {
    	kalender();
    }
    else if (user == "bulan berapa sekarang") {
    	kalender();
    }
    else if (user == "bulan apa sekarang") {
    	kalender();
    }
    else if (user == "bulan apa ini") {
      kalender();
    }
    else if (user == "ini bulan apa") {
      kalender();
    }
    else if (user == "sekarang bulan apa") {
      kalender();
    }
    else if (user == "sekarang bulan berapa") {
      kalender();
    }
    else if (user == "tahun berapa sekarang") {
    	kalender();
    }
    else if (user == "tanggal") {
    	kalender();
    }
    else if (user == "hari") {
    	kalender();
    }
    else if (user == "hari ini") {
    	kalender();
    }
    else if (user == "hari ini adalah") {
    	kalender();
    }
    else if (user == "hari apa") {
    	kalender();
    }
    else if (user == "hari apa ini") {
    	kalender();
    }
    else if (user == "ini hari apa") {
    	kalender();
    }
    else if (user == "tanggal sekarang") {
    	kalender();
    }
    else if (user == "kalender") {
    	kalender();
    }
    else if (user == "gbk") {
document.getElementById("chatLog").innerHTML="Anda yakin ingin bermain game gunting, batu, kertas ??";
setTimeout(function() {
	
	var elem = document.getElementById("var");
       
         elem.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            elem.style.opacity = 1;
            document.getElementById("chat-user").innerHTML=null;
         }, 10);
  
},2000);
    }
    else if (user == "cekgay") { 
    	//fun command
numrandom(1, 100);
    }
    else if (user == "cek gay") {
    	numrandom(1, 100);
    }
    else if (user == "gay") {
    	numrandom(1, 100);
    }
    else if (user == "presentasi gay") {
    	numrandom(1, 100);
    }
    else if (user == "gay saya") {
    	numrandom(1, 100);
    }
    else if (user == "presentase gay") {
    	numrandom(1, 100);
    }
    else if (user == "presentase gay aku") {
    	numrandom(1, 100);
    }
    else if (user == "presentase gay ku") {
    	numrandom(1, 100);
    }
    else if (user == "presentase gay saya") {
    	numrandom(1, 100);
    }
    else if (user == "presentasi gay aku") {
    	numrandom(1, 100);
    }
    else if (user == "presentasi gay ku") {
    	numrandom(1, 100);
    }
    else if (user == "presentasi gay saya") {
    	numrandom(1, 100);
    }
    else if (user == "quit") {
    	var el = document.getElementById("gbk");
      
         el.style.opacity = 0;
         setTimeout(function() {
            el.style.display = "none";
         }, 1000);
      
    }
    else if (user == "siapa namaku") {
    	sebutnama();
    }
    else if (user == "siapa aku") {
    	sebutnama();
    }
    else if (user == "siapa saya") {
    	sebutnama();
    }
    else if (user == "hapus nama") {
     hpsnama();
    }
    else if (user == "hai spark" || user == "hey spark" || user == "hi spark" || user == "hallo spark" || user == "halo spark" || user == "hello spark" || user == "helo spark" || user == "hay spark") {
      hello();
    }
    else if (user == "pw random") {
      pwacak();
    }
    else if (user == "password random") {
      pwacak();
    }
    else if (user == "pasword random") {
      pwacak();
    }
    else if (user == "pw") {
      pwacak();
    }
    else if (user == "password") {
      pwacak();
    }
    else if (user == "pasword") {
      pwacak();
    }
    else if (user == "docs" || user == "buka docs" || user == "buka docs spark" || user == "docs spark" || user == "spark docs") {
          /*new swal({
            title: "Info",
            text: "Anda akan diarahkan ke halaman DOCS spark",
            icon: "info",
          });*/
          console.log("anda akab diarahkan ke docs spark");
setTimeout(function() {
      location.href = "docs.html";
},3000);
    }
    else if (user == "hapus") {
      document.getElementById("chat-user").innerHTML="";
      document.getElementById("chatLog").innerHTML="";
    }
    else {
      document.getElementById("chatLog").innerHTML="Maaf saya tidak menemukan seperti yang anda maksud!!";
    }}
   
    
    //fungsi
//angka random untuk cek gay
function numrandom(min, max) {
  document.getElementById("chat-user").innerHTML=user;
	var acak = Math.floor(Math.random() * (max - min)) + min;
	document.getElementById("chatLog").innerHTML="Presentasi gay kamu adalah" + " " + acak + "%" + " " + "🏳️‍🌈";
}
//fungsi menampilkan waktu
function tampilwaktu() {
    	var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
   document.getElementById("chatLog").innerHTML="Sekarang pukul" + " " + h + " " + session + " " + "lebih" + " " + m + " " + "menit";
    
}

function rmv() {
    document.getElementById("index_color").style = "display: none";
}


//jam virtual
/*var myInterval = setInterval(function() {

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;



    var time = h + ":" + m + ":" + s + "" + session;

    document.getElementById("MyClockDisplay").innerHTML = time;
}, 1000);
*/
//fungsi tanggal, bulan, tahun
function kalender() {
	var user = document.getElementById("userBox").value.toLowerCase();
	var date = new Date();
    	var tanggal = date.getDate();
    	var bulan = date.getMonth();
    	var tahun = date.getFullYear();
    	var namabulan = "Januari";
    	var hari = date.getDay();
    	var namahari = null;
    	console.log(hari);
    	console.log(bulan);
    	//mendefinisikan nama hari
    	if (hari == 0) {
    		namahari = "Ahad";
    	}
    	else if (hari == 1) {
    		namahari = "Senin";
    	}
    	else if (hari == 2) {
    		namahari = "Selasa";
    	}
    	else if (hari == 3) {
    		namahari = "Rabu";
    	}
    	else if (hari == 4) {
    		namahari = "Kamis";
    	}
    	else if (hari == 5) {
    		namahari = "Jumat";
    	}
    	else if (hari == 6) {
    		namahari = "Sabtu";
    	}else {
    		console.log(err);
    	}
    	
    	//mendefinisikan nama bulan
    	if (bulan == 0) {
    		namabulan = "Januari";
    	}
    	else if (bulan == 1) {
    		namabulan = "Februari";
    	}
    	    	else if (bulan == 2) {
    		namabulan = "Maret";
    	}
    	    	else if (bulan == 3) {
    		namabulan = "April";
    	} 
    	    	else if (bulan == 4) {
    		namabulan = "Mei";
    	}
    	    	else if (bulan == 5) {
    		namabulan = "Juni";
    	}
    	    	else if (bulan == 6) {
    		namabulan = "Juli";
    	}
    	    	else if (bulan == 7) {
    		namabulan = "Agustus";
    	}
    	    	else if (bulan == 8) {
    		namabulan = "September";
    	}
    	    	else if (bulan == 9) {
    		namabulan = "Oktober";
    	}
    	    	else if (bulan == 10) {
    		namabulan = "November";
    	}
    	    	else if (bulan == 11) {
    		namabulan = "Desember";
    	}
    	else {
    		console.log(err);
    	}
    	
    	document.getElementById("chat-user").innerHTML=user;
      document.getElementById("chatLog").innerHTML="Hari ini," + " " + namahari + "," + " " + tanggal + " " + namabulan + " " + tahun;
     
}


//quotes
function quoteRandom(min, max){
  document.getElementById("chat-user").innerHTML="";
       var inter =  document.getElementById("interaksi").innerHTML = Math.floor(Math.random() * (max - min)) + min;
       
       //logic
             if(inter == 1){
           document.getElementById("chatLog").innerHTML='<i><h5>"Waktumu terbatas, jadi jangan <br>sia-siakan dengan menjalani hidup orang lain.<br> Jangan terjebak oleh dogma – yaitu <br>hidup dengan hasil pemikiran orang lain.”<br><br> – Steve Jobs –</h5>';
       }else if(inter == 2){
           document.getElementById("chatLog").innerHTML='<i><h5>“Hidup tidak pernah mudah. <br>Ada pekerjaan yang harus dilakukan<br> dan kewajiban yang harus dipenuhi – <br>kewajiban terhadap kebenaran, keadilan, dan kebebasan.”<br><br> — John F. Kennedy —</h5>';
       }else if(inter == 3){
           document.getElementById("chatLog").innerHTML='<i><h5>“Teruslah tersenyum, karena hidup adalah hal yang indah<br> dan ada banyak hal untuk disyukuri.” <br><br>— Marilyn Monroe —</h5>';
       }else if(inter == 4){
           document.getElementById("chatLog").innerHTML='<i><h5>“Hidup itu sederhana, <br>kita yang membuatnya sulit.”<br><br> – Confucius —</h5>';
       }else if(inter == 5){
           document.getElementById("chatLog").innerHTML='<i><h5>“Tidak apa-apa untuk merayakan<br> kesuksesan tapi lebih penting untuk<br>memperhatikan pelajaran tentang kegagalan.” <br><br>– Bill Gates —</h5>';
       }else if(inter == 6){
           document.getElementById("chatLog").innerHTML='<i><h5>"Satu-satunya sumber dari pengetahuan<br>adalah pengalaman." <br><br>- Albert Einstein  -</h5>';
       }else if(inter == 7){
           document.getElementById("chatLog").innerHTML='<i><h5>“Yang membuatku terus berkembang <br><br>adalah tujuan-tujuan hidupku.” <br><br>- Muhammad Ali -</h5>';
       }else if(inter == 8){
           document.getElementById("chatLog").innerHTML='<i><h5>"Aku paling takut pada sapi, <br>sebab ia punya tanduk, namun tak punya akal."<br><br> -Ibnu Sina -</h5>';
       }else if(inter == 9){
           document.getElementById("chatLog").innerHTML='<i><h5>"Nafsu bisa membuat seorang Raja<br> menjadi Budak. Sementara sabar bisa<br> membuat seorang Budak menjadi Raja."<br><br> - Imam Al-Ghazali -</h5>';
       }else if(inter == 10){
           document.getElementById("chatLog").innerHTML='<i><h5> "Banyak orang yang telah meninggal,<br> tapi nama baik mereka tetap kekal. <br>Dan banyak orang yang masih hidup, <br>tapi seakan mereka orang mati yang tak berguna."<br><br> - Imam Syafi i -</h5>';
       }else if(inter == 11){
           document.getElementById("chatLog").innerHTML='<i><h5>"Lidah seseorang dapat menggambarkan<br> bagaimanakah hatinya."<br><br> - Ibnu Qayyim -</h5>';
       }else if(inter == 12){
           document.getElementById("chatLog").innerHTML='<i><h5>“Sukses mewakili 1% dari pekerjaan Anda<br> yang dihasilkan dari 99% yang disebut kegagalan.”<br><br>- Orville and Wilbur Wright -</h5>';
       }else if(inter == 13){
           document.getElementById("chatLog").innerHTML='<i><h5>“Jangan takut untuk membuat sebuah<br> kesalahan. Tapi pastikan Anda tidak<br> melakukan kesalahan yang sama dua kali.”<br><br> - Hellen Keller -</h5>';
       }else if(inter == 14){
           document.getElementById("chatLog").innerHTML='<i><h5>“Tidak ada dalam hidup yang perlu ditakuti,<br> itu hanya untuk dipahami. Sekaranglah<br> waktunya untuk lebih memahami, sehingga <br>rasa takut kita berkurang”<br><br>- Nicola Tesla -</h5>';
       }else if(inter == 15){
           document.getElementById("chatLog").innerHTML='<i><h5>"Banyak orang mengatakan bahwa<br> kecerdasanlah yang menjadikan seseorang<br> sebagai seorang ilmuwan hebat.<br> Mereka salah: karakterlah yang membuatnya."<br><br>- Albert Einstein -</h5>';
       }else if(inter == 16){
           document.getElementById("chatLog").innerHTML='<i><h5>"Jika kebetulan terjadi terlalu banyak,<br> seorang ilmuwan akan mencari pola, <br>dan seorang beriman akan mencari Tuhan."<br><br>- Ayu Utami -</h5>';
       }else if(inter == 17){
           document.getElementById("chatLog").innerHTML='<i><h5>"Risiko terbesar adalah tidak<br> mengambil risiko apa pun. Di dunia yang <br>berubah sangat cepat, satu-satunya strategi<br> yang dijamin gagal adalah tidak mengambil risiko."<br><br>- mark zuckerberg -</h5>';
       }else if(inter == 18){
           document.getElementById("chatLog").innerHTML='<i><h5>“Kenapa khawatir? Jika Anda telah<br> melakukan yang terbaik yang Anda bisa,<br> maka khawatir tidak akan <br>membuatnya menjadi lebih baik.”<br><br>- Walt Disney -</h5>';
       }else if(inter == 19){
           document.getElementById("chatLog").innerHTML='<i><h5>“Teruslah tersenyum, karena hidup itu indah<br> dan ada banyak hal yang bisa disyukuri.”<br><br>- Marilyn Monroe -</h5>';
       }else if(inter == 20){
           
           document.getElementById("chatLog").innerHTML='<i><h5>“Bekerja keras dan mencari tahu bagaimana<br> menjadi berguna dan jangan mencoba<br> meniru kesuksesan orang lain.<br> Cari tahu bagaimana melakukannya<br> untuk diri Anda sendiri.”<br><br>- Harrison Ford -</h5>';
       }
      }
}
    
    
      //matematika
function mtk() {
    var val = document.getElementById("userBox").value;
    if (val) {
        document.getElementById("userBox").value = eval(val);
        document.getElementById("chatLog").innerHTML=val;
        setTimeout(function() {
          var val = document.getElementById("userBox").value;
          document.getElementById("chatLog").innerHTML="hasilnya adalah" + " " + val;
        }, 300);
       
        
    }
}

function keluar() {
	setTimeout(function() {
	  var frame = document.getElementById("focus");
	var exit = document.getElementById("result");
      frame.style.opacity =0;
         exit.style.opacity = 0;
         setTimeout(function() {
           frame.style.display = "none";
            exit.style.display = "none";
         }, 1000);
      
}, 1200);
}

//submit nama
function sebutnama() {
	var cookienama = document.cookie;
	//menghilangkan tanda equal agar menjadi sebuah array
	var string = cookienama.split("=");
	//mengakses array ke 2 menggunakan integer
	var sebut = string[1];
var namao =	document.getElementById("nameuser").value;
//var cache = document.getElementById("nama_cache").value;
if(cookienama === ""){
	document.getElementById("chatLog").innerHTML="Sepertinya kamu belum memberi tau ku, silahkan masukkan nama kamu";
	var tampil = document.getElementById("nama");
       
         tampil.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            tampil.style.opacity = 1;
         }, 10);
      
} else {
	document.getElementById("chatLog").innerHTML="Nama kamu adalah" + " " + sebut;
}

}

//saat tombol submit nama ditekan
function submitname() {
  //hapus input user ketika tombol submit ditekan
  setTimeout(function(){
    
  document.getElementById("nameuser").value="";
  },10);
  
  //jalankan fungsi setcookie
  setcookie();
  var namauser = document.getElementById("nameuser").value.trim();
  var nama = document.getElementById("nama_cache").value;
  if(namauser == "") {
    Swal.fire({
title: "Kesalahan",
text: "Anda tidak memasukkan input apapun",
icon:"info",
button:"oke",
});
document.getElementById("chatLog").innerHTML="kamu tidak memasukkan input apapun, mungkin kamu bisa memberitahu nama kamu lain kali!!";
var aran = document.getElementById("nama");
      
         aran.style.opacity = 0;
         setTimeout(function() {
            elem.style.display = "none";
         }, 1000);

  } else {
    Swal.fire({
title: "Berhasil",
text: "hai" + " " + nama + " " + "sekarang aku akan mengingat nama kamu",
icon:"success",
button:"oke",
});
document.getElementById("chatLog").innerHTML="Berhasil memasukkan nama";
  var elem = document.getElementById("nama");
  var chat = document.getElementById("cc");
      
         elem.style.opacity = 0;
         chat.style.opacity = 0;
         setTimeout(function() {
           chat.style.display = "none";
            elem.style.display = "none";
         }, 1000);
         setTimeout(function() {
           
           var logchat = document.getElementById("cc");
           
       document.getElementById("chatLog").innerHTML="Hai" + " " + "<b>" + nama + "</b>" + " " + "semoga hari mu menyenangkan";
         logchat.style.display = "block";
         
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            logchat.style.opacity = 1;
         }, 10);
           
         },2000)
}
chatout();
tampilinput();
}
function chatout() {
         var elem = document.getElementById("action-btn2");
      
         elem.style.opacity = 0;
         setTimeout(function() {
            elem.style.display = "none";
         }, 1000);
      }
      function tampilinput() {
         var elem = document.getElementById("cont-inp");
       
         elem.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            elem.style.opacity = 1;
         }, 10);
      }
      
     

function load() {
  console.log("Fungsi Load berhasil dijalankan");
  var cookienama = document.cookie;
  var string = cookienama.split("=");
  var arr = string[1];
  if (cookienama == "") {
  setTimeout(function() {
    
    var elem = document.getElementById("cc");
       
         elem.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            elem.style.opacity = 1;
         }, 10);
      
document.getElementById("chatLog").innerHTML = "Hey, yo";

    
  },1000)
  setTimeout(function() {
      
document.getElementById("chatLog").innerHTML = "perkenalkan namaku adalah spark";
  },3000)
  setTimeout(function() {
    var act = document.getElementById("action-btn");
       
         act.style.display = "block";
         document.getElementById("action-body").innerHTML="Hello spark";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            act.style.opacity = 1;
         }, 10);
      
  },4000)
  
} else {
  var tampill = document.getElementById("cc");
       
         tampill.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            tampill.style.opacity = 1;
         }, 10);
      
 document.getElementById("chatLog").innerHTML="Hello";
 
 
  
  setTimeout(function() {
  var tampil = document.getElementById("cc");
       
         tampil.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            tampil.style.opacity = 1;
         }, 10);
         document.getElementById("chatLog").innerHTML="Selamat datang kembali kak" + " " + "<b>" + arr + "</b>";
         tampilinput();
  },2000);
      
}
}

//action function
function action() {
  var chat = document.getElementById("action-body").innerHTML;
  
  document.getElementById("chat-user").innerHTML = chat;
  //menghilangkan tombol chat
  var elem = document.getElementById("action-btn");
      
         elem.style.opacity = 0;
         setTimeout(function() {
            elem.style.display = "none";
         }, 1000);
         //jawaban bot
       document.getElementById("chatLog").innerHTML="hello juga, btw sepertinya aku belum mengenalmu";
       setTimeout(function() {
         document.getElementById("chat-user").innerHTML = "";
         document.getElementById("chatLog").innerHTML="Silahkan tulis nama kamu dibawah agar aku dapat mengingat nya!!";
         
        
       var aran = document.getElementById("nama");
       var tombol = document.getElementById("action-btn2");
       document.getElementById("action-body2").innerHTML="Tidak mau memberi tau";
       
       aran.style.display = "block";
       tombol.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            aran.style.opacity = 1;
            tombol.style.opacity = 1;
         }, 10);
      
       },4000)
       

}
function action2() {
  var act = document.getElementById("action-btn2");
      var aran = document.getElementById("nama");
      
      act.style.opacity = 0;
         aran.style.opacity = 0;
         setTimeout(function() {
           act.style.display = "none";
            aran.style.display = "none";
         }, 1000);
         
           
     var inp = document.getElementById("cont-inp");
     var chat = document.getElementById("cc");
       
       chat.style.display = "block";
         inp.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
           document.getElementById("chatLog").innerHTML="baiklah mungkin kamu bisa memberi tau ku lain kali";
            inp.style.opacity = 1;
            chat.style.opacity = 1;
         }, 10);
         
      
}
//fungsi set cookie nama
function setcookie() {
  var name = document.getElementById("nameuser").value;
  document.cookie = "nama"+"="+name;
  var cookienama = document.cookie;
  document.getElementById("nama_cache").value = name;
   
}

//hapus cookie name
function hpsnama() {
  var cookienama = document.cookie;
  document.cookie = cookienama + ";max-age=0";
  document.getElementById("chatLog").innerHTML = "nama berhasil dihapus";
  setTimeout(function() {
    document.getElementById("chatLog").innerHTML = "";
    document.getElementById("chat-user").innerHTML = "";
  },3000)
}

//fungsi pengambilan input warna heksadecimal
function pickcolor() {
    var pick = document.getElementById("color").value;
    Swal.fire({
      title: "ini angka heksadecimal dari warna yang kamu pilih",
      text: pick,
      icon: "success",
      button: "oke",
    });
  
  
  }
//fungsi sapaan
function hello() {
  var cookienama = document.cookie;
  var str = cookienama.split("=");
  var arr = str[1];
  if(cookienama != 0 && cookienama == "") {
    document.getElementById("chatLog").innerHTML = "hello nama ku Spark, aku adalah virtual bot";
  } else {
    document.getElementById("chatLog").innerHTML = "hai" + " " + arr + "," + " " + "adakah yang bisa saya bantu?";
  }
  
  
}

//password generator 2 digit
function pwacak() {
  var abjad = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
    var random = Math.floor(Math.random()*36);
    var a = Math.floor(Math.random()*36);
    var b = Math.floor(Math.random()*36);
    var c = Math.floor(Math.random()*36);
    var d = Math.floor(Math.random()*36);
    var e = Math.floor(Math.random()*36);
    var f = Math.floor(Math.random()*36);
    var g = Math.floor(Math.random()*36);
    var h = Math.floor(Math.random()*36);
    var i = Math.floor(Math.random()*36);
    var j = Math.floor(Math.random()*36);
    var k = Math.floor(Math.random()*10);
    
    //12 digit password
    var password = abjad[random] + abjad[a] + abjad[b] + abjad[c] + abjad[d] +abjad[e] + abjad[f] + abjad[g] + abjad[h] + abjad[i] + abjad[j] + abjad[k];
    document.getElementById("chat-user").innerHTML="";
    document.getElementById("chatLog").innerHTML="Ini password random yang telah saya buat" + " " + "<b style = 'background-color:white;border-radius:5px;padding:5px'>"+password+"</b>";
}
