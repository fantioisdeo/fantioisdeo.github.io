function addSong() {
    const songTitle = document.getElementById("songTitle").value;
    const artistName = document.getElementById("artistName").value;
    const linkSong = document.getElementById("linkSong").value;

    if (songTitle === "" || artistName === "") {
        alert("Mohon masukkan judul lagu dan nama artis.");
        return;
    }

    const playlist = document.getElementById("playlist");
    const songItem = document.createElement("li");
    songItem.innerHTML = `
            <div>
                <div>
                    ${songTitle} - ${artistName} 
                </div>
            </div>
            <div style="display:flex; gap:4px;">
                <button>
                    <a href="${linkSong}" target="_blank">Link</a>
                </button>
                <button onclick="removeSong(this)">Hapus</button>
            </div>
    `;
    
    playlist.appendChild(songItem);

    // Reset input fields
    document.getElementById("songTitle").value = "";
    document.getElementById("artistName").value = "";
    document.getElementById("linkSong").value = "";
}

function removeSong(button) {
    const songItem = button.parentElement;
    songItem.classList.add('remove');
    setTimeout(() => songItem.remove(), 300);
}