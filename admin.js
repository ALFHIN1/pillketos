// Fungsi untuk menampilkan hasil voting pada halaman admin
function updateAdminVotes() {
    // Tampilkan hasil voting saat ini
    document.getElementById('adminVoteKandidat1').textContent = localStorage.getItem('voteKandidat1') || 0;
    document.getElementById('adminVoteKandidat2').textContent = localStorage.getItem('voteKandidat2') || 0;
    document.getElementById('adminVoteKandidat3').textContent = localStorage.getItem('voteKandidat3') || 0;
}

// Panggil fungsi untuk menampilkan hasil voting saat halaman dimuat
window.onload = function() {
    updateAdminVotes();
};

// Fungsi untuk me-reset voting
document.getElementById('resetVotesBtn').addEventListener('click', function() {
    // Konfirmasi sebelum reset voting
    if (confirm('Apakah Anda yakin ingin mereset semua hasil voting?')) {
        // Reset semua hasil voting
        localStorage.setItem('voteKandidat1', 0);
        localStorage.setItem('voteKandidat2', 0);
        localStorage.setItem('voteKandidat3', 0);

        // Reset status voting pengguna
        localStorage.setItem('hasVoted', 'false');

        // Update tampilan admin dengan nilai yang di-reset
        updateAdminVotes();

        alert('Hasil voting telah direset.');
    }
});