const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const forwardButton=document.getElementById("forward");
const backwardButton=document.getElementById("backward");
const seekbar=document.querySelector(".seekbar");
let singer=document.getElementById("singer");
let songname=document.getElementById("songname");
let songimg=document.getElementById("songimg");


let songs=[
    {
        name:'Champagne Problems',
        singer:'Taylor swift',
        path:'song2.mpeg',
        img:'img2.jpeg' 
    },
    {
        name:'How To Save A Life',
        singer:'Fray',
        path:'song3.mpeg',
        img:'img3.jpeg'
    },{
        name:'Make You Mine',
        singer:'PUBLIC',
        path:'song5.mpeg',
        img:'img4.jpeg'
    }
]
let i=0;
let currentsong=songs[i].path;
let audio=new Audio(currentsong);
seekbar.value=0;
seekbar.max=audio.duration;
playButton.onclick=function(){
    playButton.hidden = true;
    pauseButton.hidden = false;
   audio.play();
}
pauseButton.onclick=function() {
    pauseButton.hidden = true;
    playButton.hidden = false;
    audio.pause();
}
forwardButton.onclick=function(){
    seekbar.value=0;
    i = (i + 1+ songs.length) % songs.length;
    currentsong=songs[(i)].path;
    currentsongimg=songs[i].img;
    currentsongname=songs[i].name;
    currentsongsinger=songs[i].singer;
    singer.textContent=currentsongsinger;
    songname.textContent=currentsongname;
    songimg.src=currentsongimg;
    audio.src=currentsong;
    playButton.onclick();
}
backwardButton.onclick=function(){
    seekbar.value=0;
    i = (i - 1 + songs.length) % songs.length;
    currentsong=songs[i].path;
    currentsongimg=songs[i].img;
    currentsongname=songs[i].name;
    currentsongsinger=songs[i].singer;
    singer.textContent=currentsongsinger;
    songname.textContent=currentsongname;
    songimg.src = currentsongimg;
    audio.src=currentsong;
    playButton.onclick();
}
setInterval(()=>{
seekbar.value=audio.currentTime;
},1800)
seekbar.addEventListener('change',()=>{
    audio.currentTime=seekbar.value;
})