console.log("Welcome to spotify");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem')); 

let songs = [
    {songName:"Let me down slowly", filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Bekhyali", filePath:"2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Chor bazari", filePath:"3.mp3",coverPath:"covers/3.jpg"},
    {songName:"kaise hua", filePath:"4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Moonlight", filePath:"5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Te amo", filePath:"6.mp3",coverPath:"covers/6.jpg"},
    {songName:"let me love you", filePath:"7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Socha vich tu", filePath:"8.mp3",coverPath:"covers/8.jpg"},
    {songName:"tum se hi", filePath:"9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Let me down slowly", filePath:"1.mp3",coverPath:"covers/10.jpg"},
    
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity= 0;

    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.addEventListener('click',()=>{
//             if(audioElement.paused){
//                 audioElement.play();
//                 element.classList.remove('fa-circle-pause')
//                 element.classList.add("fa-circle-play");
//                 gif.style.opacity= 1;
//             }
//             else{
//                 audioElement.pause();
//                 element.classList.remove('fa-circle-pause')
//                 element.classList.add("fa-circle-play");
//                 gif.style.opacity= 0;
        
//             }
//         })
//     })
// }


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})














