function programSederhana() {
    const namaPemesan = document.querySelector("input#nama-pemesanan");
    const tujuan = document.querySelector("select#tujuan");
    const kelas = document.querySelector("select#kelas");
    const jumlahTiket = document.querySelector("input#jumlah-tiket");
    const text = document.querySelector("p#text");
    const btnBeli = document.querySelector("button#beli");
    const nama = document.querySelector("p.nama");
    const outTujuan = document.querySelector("p.out-tujuan");
    const outKelas = document.querySelector("p.out-kelas");
    const outJumlahTiket = document.querySelector("p.out-jumlah-tiket");
    const outMember = document.querySelector("p.member");
    const btnConfirm = document.querySelectorAll(".tombol button");

    //? Output
    const hargaTiket = document.querySelector("p.harga-tiket");
    const subTotal = document.querySelector("p.sub-total");
    const diskon = document.querySelector("p.diskon");
    const totalBayar = document.querySelector("p.total-bayar");
    //? Pop up
    const popUp = document.querySelector(".container .pop-up");

    let allNeed = {
        subTotalToInt: null,
        hargaToint: null,
        diskonToInt: null,
        total: null,
        tujuanUser: "",
        kelasPilihan: "",
    };

    function hitungSubtotal(harga, jumlah) {
        allNeed.subTotalToInt = harga * jumlah;
        subTotal.textContent = "Sub total anda adalah : " + allNeed.subTotalToInt;
        return;
    }

    function hitungDiskon(hargaDiskon, subtotal) {
        allNeed.diskonToInt = hargaDiskon * subtotal;
        diskon.textContent = "Diskon : " + allNeed.diskonToInt;
    }

    function hitungTotal(subTotal, diskon) {
        allNeed.total = allNeed.subTotalToInt - allNeed.diskonToInt;
        totalBayar.textContent = "Total bayar : " + allNeed.total;
    }

    function tampilkanPopUp() {
        popUp.style.opacity = "1";
        popUp.style.pointerEvents = "all";
        nama.textContent = "Nama : " + namaPemesan.value;
        outTujuan.textContent = "Tujuan : " + tujuan.value;
        outJumlahTiket.textContent = "Jumlah Tiket : " + jumlahTiket.value;
    }

    tujuan.addEventListener("click", function() {
        if (tujuan.value == "jakarta") {
            allNeed.tujuanUser = "Jakarta";
        } else if (tujuan.value == "Solo") {
            allNeed.tujuanUser = "Solo";
        } else {
            allNeed.tujuanUser = "Surabaya";
        }
    });

    kelas.addEventListener("click", function() {
        if (kelas.value == "eksekutif") {
            allNeed.kelasPilihan = "Eksekutif";
        } else if (kelas.value == "bisnis") {
            allNeed.kelasPilihan = "Bisnis";
        } else {
            allNeed.kelasPilihan = "Ekonomi";
        }
    });

    function menentukanHarga(tujuanUser, kelasPilihan) {
        if (tujuanUser == "Jakarta") {
            if (kelasPilihan == "Eksekutif") {
                hargaTiket.textContent = "Harga Tiket : Rp. 70.000";
                allNeed.hargaToint = 70000;
            } else if (kelasPilihan == "Bisnis") {
                hargaTiket.textContent = "Harga Tiket : Rp. 40.000";
                allNeed.hargaToint = 40000;
            } else if (kelasPilihan == "Ekonomi") {
                hargaTiket.textContent = "Harga Tiket : Rp. 10.000";
                allNeed.hargaToint = 10000;
            }
        }
        if (tujuanUser == "Solo") {
            if (kelasPilihan == "Eksekutif") {
                hargaTiket.textContent = "Harga Tiket : Rp. 80.000";
                allNeed.hargaToint = 80000;
            } else if (kelasPilihan == "Bisnis") {
                hargaTiket.textContent = "Harga Tiket : Rp. 50.000";
                allNeed.hargaToint = 50000;
            } else if (kelasPilihan == "Ekonomi") {
                hargaTiket.textContent = "Harga Tiket : Rp. 20.000";
                allNeed.hargaToint = 20000;
            }
        }
        if (tujuanUser == "Surabaya") {
            if (kelasPilihan == "Eksekutif") {
                hargaTiket.textContent = "Harga Tiket : Rp. 90.000";
                allNeed.hargaToint = 90000;
            } else if (kelasPilihan == "Bisnis") {
                hargaTiket.textContent = "Harga Tiket : Rp. 60.000";
                allNeed.hargaToint = 60000;
            } else if (kelasPilihan == "Ekonomi") {
                hargaTiket.textContent = "Harga Tiket : Rp. 30.000";
                allNeed.hargaToint = 30000;
            }
        }
        outKelas.textContent = "Kelas : " + allNeed.kelasPilihan;
    }

    btnBeli.addEventListener("click", function() {
        if (namaPemesan.value == "" || jumlahTiket.value == "") {
            alert("Data yang anda masukan belum lengkap." + "\n" + "Silahkan lengkapi Data terlebih dahulu.");
            return;
        }
        let cek = confirm("Dapatkan Diskon 10% jika anda member Travel Bintang Abadi" + "\n" + "Apakah Anda Member ?");
        if (cek == true) {
            menentukanHarga(allNeed.tujuanUser, allNeed.kelasPilihan);
            hitungSubtotal(allNeed.hargaToint, parseInt(jumlahTiket.value));
            hitungDiskon(0.1, allNeed.subTotalToInt);
            hitungTotal(allNeed.subTotalToInt - allNeed.diskonToInt);
            outMember.textContent = "Anggota Member : Ya";
            tampilkanPopUp();
        } else {
            hitungSubtotal(allNeed.hargaToint, parseInt(jumlahTiket.value));
            hitungDiskon(0, allNeed.subTotalToInt);
            hitungTotal(allNeed.subTotalToInt - allNeed.diskonToInt);
            outMember.textContent = "Anggota Member : Tidak";
            tampilkanPopUp();
        }
    });
    btnConfirm.forEach(function(el) {
        el.addEventListener("click", function(e) {
            if (e.target.classList.contains("ok")) {
                window.location.reload();
            } else {
                popUp.style.opacity = "0";
                popUp.style.pointerEvents = "none";
            }
        });
    });
}
programSederhana();