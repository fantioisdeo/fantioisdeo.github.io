function addSong() {
    const songTitle = document.getElementById("songTitle").value;
    const artistName = document.getElementById("artistName").value;

    if (songTitle === "" || artistName === "") {
        alert("Mohon masukkan judul lagu dan nama artis.");
        return;
    }

    const playlistTable = $('#playlist').DataTable();
    playlistTable.row.add([
        songTitle,
        artistName,
        `<button class="update-button" onclick="updateSong(this)">Edit</button>
         <button class="remove-button" onclick="removeSong(this)">Hapus</button>`
    ]).draw();

    // Reset input fields
    document.getElementById("songTitle").value = "";
    document.getElementById("artistName").value = "";
}

function removeSong(button) {
    const playlistTable = $('#playlist').DataTable();
    const row = $(button).closest('tr');
    playlistTable.row(row).remove().draw();
}

function updateSong(button) {
    const row = $(button).closest('tr');
    const data = $('#playlist').DataTable().row(row).data();

    const newSongTitle = prompt("Edit judul lagu:", data[0]);
    const newArtistName = prompt("Edit nama artis:", data[1]);

    if (newSongTitle !== null && newArtistName !== null && newSongTitle !== "" && newArtistName !== "") {
        $('#playlist').DataTable().row(row).data([
            newSongTitle,
            newArtistName,
            `<button class="update-button" onclick="updateSong(this)">Edit</button>
             <button class="remove-button" onclick="removeSong(this)">Hapus</button>`
        ]).draw();
    }
}