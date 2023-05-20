var greetingElement = document.getElementById('greeting')
var currentTime = new Date()
var currentHour = currentTime.getHours()
var greeting
if (currentHour < 12) {
  greeting = 'Selamat Pagi!'
} else if (currentHour < 18) {
  greeting = 'Selamat Siang!'
} else if (currentHour < 20) {
  greeting = 'Selamat Sore!'
} else {
  greeting = 'Selamat Malam!'
}
greetingElement.textContent = greeting

function updateWaktu() {
    var waktu = new Date()
    var jam = waktu.getHours()
    var menit = waktu.getMinutes()
    var detik = waktu.getSeconds()
    jam = padZero(jam)
    menit = padZero(menit)
    detik = padZero(detik)

    var jamElement = document.getElementById('jam')
    jamElement.innerHTML = jam + ':' + menit + ':' + detik

    var hari = getNamaHari(waktu.getDay())
    var tanggal = waktu.getDate()
    var bulan = getNamaBulan(waktu.getMonth())
    var tahun = waktu.getFullYear()

    tanggal = padZero(tanggal)

    var tanggalElement = document.getElementById('tanggal')
    tanggalElement.innerHTML = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun
}

function padZero (angka) {
  return (angka < 10 ? '0' : '') + angka
}

function getNamaHari (index) {
  var namaHari = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu'
  ]
  return namaHari[index]
}

function getNamaBulan (index) {
  var namaBulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]
  return namaBulan[index]
}

setInterval(updateWaktu, 1000)
