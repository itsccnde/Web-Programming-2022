// input jam masuk
let jamMasuk = prompt ("Masukan jam masuk ? ");

// input jam keluar
let jamKeluar =  prompt ("Masukan jam keluar ?");

// selisih
let selisih = Number(jamKeluar) - Number(jamMasuk);

let hargaAwal = 3000;

if (selisih <= 2){
    alert(`Keluaran Biaya : ${hargaAwal}`);
} 
else {
    let hasil = hargaAwal + (selisih - 2)* 1000;
    alert(`Keluaran Biaya : ${hasil}`);
}