// Login functionality
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const kelas = document.getElementById('kelas').value;
        const password = document.getElementById('password').value;

        // Password untuk tiga kelas berbeda
        const kelasPasswords = {
            kelas10: '123',  // Password untuk Kelas 10
            kelas11: '1234',  // Password untuk Kelas 11
            kelas12: '12345'   // Password untuk Kelas 12
        };

        // Memeriksa apakah kelas dipilih dan password sesuai
        if (kelas === "") {
            errorMessage.textContent = 'Silakan pilih kelas!';
        } else if (password === kelasPasswords[kelas]) {
            window.location.href = 'visimisi.html';  // Redirect jika login berhasil
        } else {
            errorMessage.textContent = 'Password salah untuk kelas yang dipilih!';
        }
    });
}
document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah submit form secara default

    // Dapatkan kandidat yang dipilih
    const selectedCandidate = document.querySelector('input[name="kandidat"]:checked').value;

    // Simpan hasil voting di localStorage
    if (!localStorage.getItem('voteKandidat1')) {
        localStorage.setItem('voteKandidat1', 0);
        localStorage.setItem('voteKandidat2', 0);
        localStorage.setItem('voteKandidat3', 0);
    }

    // Perbarui hasil voting berdasarkan kandidat yang dipilih
    if (selectedCandidate === "Kandidat 1") {
        localStorage.setItem('voteKandidat1', parseInt(localStorage.getItem('voteKandidat1')) + 1);
    } else if (selectedCandidate === "Kandidat 2") {
        localStorage.setItem('voteKandidat2', parseInt(localStorage.getItem('voteKandidat2')) + 1);
    } else if (selectedCandidate === "Kandidat 3") {
        localStorage.setItem('voteKandidat3', parseInt(localStorage.getItem('voteKandidat3')) + 1);
    }

    // Sembunyikan form voting
    document.querySelector('.voting-container').style.display = 'none';
// Script untuk menangani voting
const votingForm = document.getElementById('votingForm');

if (votingForm) {
    votingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const kandidatTerpilih = document.querySelector('input[name="kandidat"]:checked').value;

        // Ambil data hasil voting dari local storage, jika ada
        let hasilVoting = JSON.parse(localStorage.getItem('hasilVoting')) || {
            kandidat1: 0,
            kandidat2: 0,
            kandidat3: 0
        };

        // Tambahkan suara pada kandidat yang terpilih
        if (kandidatTerpilih === 'Kandidat 1') {
            hasilVoting.kandidat1++;
        } else if (kandidatTerpilih === 'Kandidat 2') {
            hasilVoting.kandidat2++;
        } else if (kandidatTerpilih === 'Kandidat 3') {
            hasilVoting.kandidat3++;
        }

        // Simpan hasil voting kembali ke local storage
        localStorage.setItem('hasilVoting', JSON.stringify(hasilVoting));

        alert('Terima kasih telah memilih!');

        // Redirect kembali ke halaman utama atau halaman konfirmasi
        window.location.href = 'index.html';
    });
}

});