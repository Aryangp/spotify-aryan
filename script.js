//initialize the variable
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
 let mastersongname= document.getElementById('mastersongname');
 let myProgressBar= document.getElementById('myProgressBar');
 let gif= document.getElementById('gif');
 let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Bad Liar", filePath:"songs/1.mp3", coverPath:"covers/img1.jpg"},
    {songName:"Fight Song", filePath:"songs/2.mp3", coverPath:"covers/img2.jpg"},
    {songName:"Heat wave", filePath:"songs/3.mp3", coverPath:"covers/img3.jfif"},
    {songName:"Infinity", filePath:"songs/4.mp3", coverPath:"covers/img4.jpg"},
    {songName:"Dynamite", filePath:"songs/5.mp3", coverPath:"covers/img5.jpg"},
    {songName:"Legends never die", filePath:"songs/6.mp3", coverPath:"covers/img6.jpeg"},
    {songName:"Deep Chill", filePath:"songs/7.mp3", coverPath:"covers/img7.jfif"},
    {songName:"Umbrella", filePath:"songs/8.mp3", coverPath:"covers/img8.jfif"},
    {songName:"Why do you love", filePath:"songs/9.mp3", coverPath:"covers/img9.jpg"},  
    {songName:"Peaches", filePath:"songs/10.mp3", coverPath:"covers/img10.jfif"},
   
]
songItems.forEach((element,i) => {
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
   
})
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seek bar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlay= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`
        mastersongname.innerText=songs[songIndex-1].songName
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById("next").addEventListener("click",()=>{
   if( songIndex>=9){
      songIndex=0;
   }else{
       songIndex+=1
   }
   audioElement.src=`songs/${songIndex}.mp3`
   mastersongname.innerText=songs[songIndex-1].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener("click",()=>{
   if( songIndex<=0){
      songIndex=0;
   }else{
       songIndex-=1
   }
   audioElement.src=`songs/${songIndex}.mp3`
   mastersongname.innerText=songs[songIndex-1].songName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})