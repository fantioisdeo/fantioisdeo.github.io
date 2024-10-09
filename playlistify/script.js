function addSong() {
    const songTitle = document.getElementById("songTitle").value;
    const artistName = document.getElementById("artistName").value;

    if (songTitle === "" || artistName === "") {
        alert("Mohon masukkan judul lagu dan nama artis.");
        return;
    }

    const playlist = document.getElementById("playlist");
    const songItem = document.createElement("li");
    songItem.innerHTML = `${songTitle} - ${artistName} <button onclick="removeSong(this)">Hapus</button>`;
    
    playlist.appendChild(songItem);

    // Reset input fields
    document.getElementById("songTitle").value = "";
    document.getElementById("artistName").value = "";
}

function removeSong(button) {
    const songItem = button.parentElement;
    songItem.classList.add('remove');
    setTimeout(() => songItem.remove(), 300);
}