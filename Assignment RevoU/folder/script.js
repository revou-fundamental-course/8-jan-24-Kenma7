function hitungLuas() {
    var sideLength = document.getElementById('sideLength').value;

    if (sideLength === '' || isNaN(sideLength)) {
        alert('Masukkan panjang sisi yang valid.');
        return;
    }

    var luas = sideLength * sideLength;
    var luasResultElement = document.getElementById('luasResult');
    luasResultElement.innerHTML = 'Luas Persegi: ' + luas;
    luasResultElement.style.display = 'block';
}

function hitungKeliling() {
    var sideLengthKeliling = document.getElementById('sideLengthKeliling').value;

    if (sideLengthKeliling === '' || isNaN(sideLengthKeliling)) {
        alert('Masukkan panjang sisi yang valid.');
        return;
    }

    var keliling = 4 * sideLengthKeliling;
    var kelilingResultElement = document.getElementById('kelilingResult');
    kelilingResultElement.innerHTML = 'Keliling Persegi: ' + keliling;
    kelilingResultElement.style.display = 'block';
}
