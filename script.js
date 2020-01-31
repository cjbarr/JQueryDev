$(document).ready(onReady);

//songs app

let songs = [];
//creation of songs array

function onReady(){
    $('#updateSongsButton').on('click',displaySongs);
    
}//end onReady


function displaySongs(){
    console.log('in displaySongs');
//target output element by ID
let el = $('#songsOut')
//empty output element
el.empty();
//loop through songs array
//for(let i=0;i<songs.length;i++)
// for ofs don't work in every language but standard for loops work across languages
for( item of songs){
//append each song to DOM within loop
//el.append(`<li> ${songs[i].title} </li >`)
    el.append(`<li> ${item.title}: ${item.artist}, ${item.album}, (${item.year}) </li>`)

}
}//end displaySongs

//test song
songs.push({artist:'Red Hot Chili Peppers',
title: 'Under the Bridge',
album:'Blood Sugar Sex Magik',
year: 1991
})