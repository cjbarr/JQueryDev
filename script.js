$(document).ready(onReady);

//songs app

let songs = [];
//creation of songs array

function onReady(){
    $('#updateSongsButton').on('click',addSong);
    $('#songsOut').on('click','.dopeButton', dopeSong)
}//end onReady

function addSong(){
//select inputs by ID
//use data in a new song object (using .val as a getter)
    let newSong = {artist: $('#addArtist').val(),
        title: $('#addTitle').val(),
        album: $('#addAlbum').val(),
        year: $('#addYear').val(),
            }//end newSong
//empty inputs (using .val as a setter)
$('#addArtist').val('');
$('#addTitle').val('');
$('#addAlbum').val('');
$('#addYear').val('');
//push new song object to songs array
songs.push(newSong);
//display songs
displaySongs();

}//end addSong


function dopeSong(){
console.log('in dopeSong');
let el =$(this); //THIS clicked button
//if dope set to lame, otherwise set to dope
if (el.text() ==='Dope'){
    el.text('Lame')
}//end if 
else{el.text('Dope')
}//end else
//change style of parent
//select parent element
let parent = $(this).parent();
console.log("my parent is", parent)
parent.toggleClass('lame');
}//end dopeSong


function displaySongs(){
    console.log('in displaySongs');
//target output element by ID
let el = $('#songsOut');
//empty output element
el.empty();
//loop through songs array
for(let i=0;i<songs.length;i++){
// for ofs don't work in every language but standard for loops work across languages
// for( item of songs){
//append each song to DOM within loop
    el.append(`<li class="dope"> ${songs[i].title}: ${songs[i].artist}, ${songs[i].album}, (${songs[i].year})
    <button class="dopeButton">Dope</button></li>` )
    

}
//end displaySongs
}
//test song

songs.push({artist:'Red Hot Chili Peppers',
title: 'Under the Bridge',
album:'Blood Sugar Sex Magik',
year: 1991
})
