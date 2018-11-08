function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json() )
        .then(json => console.log(json));
}

fetchAlbums();

async function fetchAlbums2() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();
    console.log(json);

}
fetchAlbums2();
