function cetak_gambar() {
    const hewan= document.getElementById("hewan");
    const gambar= document.getElementById("gambar");

    if (hewan.value == "Kucing"){
        gambar.src = "kucing2.jpeg"
        alert("gambar kucing");
    }

    if (hewan.value == "Panda"){
        gambar.src = "panda.jpg"
        alert("gambar panda");
    }

   if (hewan.value == "Kelinci"){
       gambar.src = "kelinci.jpg"
       alert("gambar kelinci");
   } 

   if (hewan.value == "Jerapah"){
       gambar.src = "jerpah.JPG"
       alert("gambar jerapah");
   }

   if (hewan.value == "Kura-Kura"){
       gambar.src = "kura-kura.jpg"
       alert("gambar kura-kura");
   }
}