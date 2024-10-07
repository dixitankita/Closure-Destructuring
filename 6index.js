function createPlaylist(playlistName) {
    const playlist = [];

    return {
        addSong: function(songName, artist) {
            playlist.push({ songName, artist });
            console.log(`Added '${songName}' by ${artist} to the '${playlistName}' playlist.`);
        },
        listSongs: function() {
            if (playlist.length === 0) {
                console.log(`No songs in the '${playlistName}' playlist.`);
            } else {
                console.log(`Songs in '${playlistName}' playlist:`);
                playlist.forEach((song, index) => {
                    console.log(`${index + 1}. '${song.songName}' by ${song.artist}`);
                });
            }
        }
    };
}

const myPlaylist = createPlaylist("My Favorite Songs");
myPlaylist.addSong("Shape of You", "Ed Sheeran");
myPlaylist.addSong("Blinding Lights", "The Weeknd");

myPlaylist.listSongs();
