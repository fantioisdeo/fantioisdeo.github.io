let name = prompt("Input Username");

if (name) {
    document.getElementById('greet').innerText = name;
} else {
    document.getElementById('greet').innerText = "Guest";
}

function addSong() {
    const songTitle = document.getElementById("songTitle").value;
    const artistName = document.getElementById("artistName").value;
    const linkSong = document.getElementById("linkSong").value;

    if (songTitle === "" || artistName === "") {
        alert("Please input Song Title and Artist Name.");
        return;
    }

    const playlistTable = $('#playlist').DataTable();
    playlistTable.row.add([
        songTitle,
        artistName,
        `
        <div class="aksi">
            <a class="link-button" href="${linkSong}" target="_blank">
                <button class="link-button">
                    Lets Go!
                </button>
            </a>
            <button class="update-button" onclick="updateSong(this)">Edit</button>
            <button class="remove-button" onclick="removeSong(this)">Delete</button>
        </div>
        `
    ]).draw();

    // Reset input fields
    document.getElementById("songTitle").value = "";
    document.getElementById("artistName").value = "";
    document.getElementById("linkSong").value = "";
}

function removeSong(button) {
    const playlistTable = $('#playlist').DataTable();
    const row = $(button).closest('tr');
    playlistTable.row(row).remove().draw();
}

function updateSong(button) {
    const row = $(button).closest('tr');
    const data = $('#playlist').DataTable().row(row).data();

    const newSongTitle = prompt("Edit Song Title:", data[0]);
    const newArtistName = prompt("Edit Artist Name:", data[1]);
    const newLink = prompt("Edit link:", data[2].match(/href="([^"]+)"/)[1]);

    if (newSongTitle !== null && newArtistName !== null && newSongTitle !== "" && newArtistName !== "") {
        $('#playlist').DataTable().row(row).data([
            newSongTitle,
            newArtistName,
            `<div class="aksi">
                <a class="link-button" href="${newLink}" target="_blank">
                    <button class="link-button">
                        Lets Go!
                    </button>
                </a>
                <button class="update-button" onclick="updateSong(this)">Edit</button>
                <button class="remove-button" onclick="removeSong(this)">Delete</button>
            </div>`
        ]).draw();
    }
}
