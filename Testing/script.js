const PIN_BENAR = "170626";
let pinInputSaatIni= "";

function tekanAngka(angka){

    if (pinInputSaatini.length < 6) {
        pinInputSaatini += angka;

        document.getElementById("pinDisplay").innerText = "• ".repeat(pinInputSaatIni.length) + "_ ".repeat(6-pinInputSaatIni.length);

    }

    if (pinInputSaatIni.length === 6) {
        
        setTimeout(cekPIN,300);

    }
}
function cekPIN() {
    if pinInputSaatIni === PIN_BENAR {
        alert("PIN Cocok!");

        document.querySelector(".pin-container).classList.add("hidden")
        
        
        document.getElementById("halamanHadiah").classList.remove("hidden");
     } else {
        alert("PIN Salah! Coba lagi.");
        hapusPIN();
     }

}

function hapusPIN() {
    pinInputSaatIni = "";
    document.getElementById("pinDisplay").innerText = "_ _ _ _ _ _";
}