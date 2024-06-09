
// this is selection section
let wave = document.getElementsByClassName("wave")[0];
let pop_arrow_left = document.getElementById("pop-song-left");
let pop_arrow_right = document.getElementById("pop-song-right");
let pop_song = document.getElementsByClassName("pop-song")[0];
let masterPlay = document.getElementById("masterPlay");

// This is our music all variable objects

const Music = new Audio('assets/img/3.jpg');

const songs = [
  {
    id: 1,
    songName: ` Now Playing
    <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/1.jpg",
  },

  {
    id: 2,
    songName: `Halki Halki Si <br>
     <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/2.jpg",
  },

  {
    id: 3,
    songName: `Gulaabi Shaadi <br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/3.jpg",
  },
  {
    id: 4,
    songName: `Mitti<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/4.jpg",
  },
  {
    id: 5,
    songName: ` Hass hass<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/5.jpg",
  },
  {
    id: 6,
    songName: `Lutt <br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/6.jpg",
  },
  {
    id: 7,
    songName: `Yimmi <br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/7.jpg",
  },
  {
    id: 8,
    songName: `Choli ke piche<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/8.jpg",
  },
  {
    id: 9,
    songName: `kalastar<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/9.jpg",
  },
  {
    id: 10,
    songName: ` Kuley<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/10.jpg",
  },
  {
    id: 11,
    songName: `Tujhpe Pyar<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/11.jpg",
  },
  {
    id: 12,
    songName: `Heer Hasmani<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/12.jpg",
  },
  {
    id: 13,
    songName: `Naina<br> 
    <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/13.jpg",
  },
  {
    id: 14,
    songName: `Vandemataram<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/14.jpg",
  },
  {
    id: 15,
    songName: `Dil Banaye<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/15.jpg",
  },
  {
    id: 16,
    songName: `Dil Jhoom<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/16.jpg",
  },
  {
    id: 17,
    songName: `Ranjha<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/17.jpg",
  },

  {
    id: 18,
    songName: `Pushpa<br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/audio/14.mp3",
  },

  {
    id: 19,
    songName: `Ve Haniya <br> <div class="subtitle">Lorem ipsu.</div>`,
    poster: "assets/img/19.jpg",
  },
];


// Accessing all the elements with the class "songItem"
const songItems = document.getElementsByClassName("songItem");

// Loop through each song item and set the poster image and song name
Array.from(songItems).forEach((element, i) => {
    // Check if the current index is within the range of the 'songs' array
    if (i < songs.length) {
        element.getElementsByTagName("img")[0].src = songs[i].poster;
        element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
    }
});



// master play section

masterPlay.addEventListener("click", () => {
  if (Music.paused || Music.currentTime <= 0) {
    Music.play();
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  } else {
    Music.pause();
    masterPlay.classList.add("bi-play-circle-fill");
    masterPlay.classList.remove("bi-pause-circle-fill");
    wave.classList.remove("active1");
  }
});

const makeAllPlays =()=>{
  Array.from(document.getElementsByClassName("playlistPlay")).forEach((el)=>{
    el.classList.remove("bi-pause-circle-fill");
    el.classList.add("bi-play-circle-fill");
  })
}

const pauseAllSongs = () => {
  Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
          element.classList.add("bi-play-circle-fill");
          element.classList.remove("bi-pause-circle-fill");
  })    
}

// Set the source of the Music audio element when a song is clicked
let index =0;

let posterPlace = document.getElementById("posterPlace");
Array.from(document.getElementsByClassName('playListPlay')).forEach((e,index) => {
 e.addEventListener("click", (e ) => {
            // Get the id of the clicked element
            index= e.target.id;
          
            // Find the corresponding song in the songs array
                Music.src = `assets/audio/${index}.mp3` // Assuming there's an audioSrc property in the songs array
                posterPlace.src = `assets/img/${index}.jpg`;
               Music.play();
               masterPlay.classList.add("bi-pause-circle-fill");
               masterPlay.classList.remove("bi-play-circle-fill");
               wave.classList.add('active1');
            
           
        });


});
    


// Function to handle adding a song to the menu-side
const addToMenuSide = (index) => {
    // Get the corresponding song from the 'songs' array
    const song = songs[index];
    // Create HTML elements for the song in the menu-side
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-song-item");
    menuItem.innerHTML = `
        <img src="${song.poster}" alt="Song Poster">
        <div class="song-info">
            <h5>${song.songName}</h5>
            <i class="bi bi-play-circle playlistPlay" id="${song.id}"></i>
        </div>
    `;
    // Append the created song item to the menu-side
    document.getElementById("menu-side").appendChild(menuItem);
};

// Event listener for clicking the heart icon to add a song to the menu-side
document.getElementById("heart-icon").addEventListener("click", () => {
    // Call the function to add the current song to the menu-side
    addToMenuSide(index);
});


//  this is our scroll music in music side section
pop_arrow_right.addEventListener("click", () => {
  pop_song.scrollLeft += 400;
});

pop_arrow_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 400;
});


// seek bar time section

let currentStart =  document.getElementById("currentStart");
let currentEnd =  document.getElementById("currentEnd");

let seek =  document.getElementById("seek");
let bar2 =  document.getElementById("bar2");
let dot =  document.getElementsByClassName("dot")[0];


Music.addEventListener("timeupdate", () => {
  let Music_currentTime = Music.currentTime;
  let Music_duration = Music.duration;

  // Check if duration is a valid number
  if (!isNaN(Music_duration)) {
    let min1 = Math.floor(Music_duration / 60);
    let sec1 = Math.floor(Music_duration % 60);
    currentEnd.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(Music_currentTime/60);
    let sec2 =Math.floor(Music_currentTime%60);
    currentStart.innerText = `${min2}:${sec2}`;
 
// Update dot position
let dotPosition = (Music.currentTime / Music.duration) * 100;
dot.style.left = `${dotPosition}%`;

  }
 // Assuming seek is the progress bar input element and bar2 is the progress bar itself

Music.addEventListener("timeupdate", () => {
  // Update progress bar
  let progressBar = (Music.currentTime / Music.duration) * 100;
  seek.value = progressBar;
  bar2.style.width = `${progressBar}%`;
});

// Assuming seek is the progress bar input element
seek.addEventListener("input", () => {
  // Calculate new playback time based on the position of the progress bar
  let newTime = (seek.value * Music.duration) / 100;
  // Update playback position
  Music.currentTime = newTime;
  Music.addEventListener("ended", () => {
    Music.pause();
    masterPlay.classList.add("bi-play-circle-fill");
    masterPlay.classList.remove("bi-pause-circle-fill");
    wave.classList.remove('active1');
    
    // Reset seek bar to the starting position
    seek.value = 0;
    bar2.style.width = "0%";
   
    // Reset current time of the music
    Music.currentTime = 0;
     // Play the next song
  
  });

});

 
  

});
 
// let vol_icon = docuemnt.getElementById("vol-icon");
// let vol = docuemnt.getElementById("vol");
// let vol_bar = docuemnt.getElementsByClassName("vol-bar");
// let vol_dot= docuemnt.getElementById("vol_dot");
// vol.addEventListener("change",()=>{
//   if(vol.value==0){
//     vol_icon.classList.remove("bi-volume-up-fill");
//     vol_icon.classList.remove("bi-volume-down-fill");
//     vol_icon.classList.add("bi-volume-off-fill");
//   }
//   if(vol.value>0){
//     vol_icon.classList.remove("bi-volume-up-fill");
//     vol_icon.classList.add("bi-volume-down-fill");
//     vol_icon.classList.remove("bi-volume-off-fill");
//   }
//   if(vol.value>50){
//     vol_icon.classList.add("bi-volume-up-fill");
//     vol_icon.classList.remove("bi-volume-down-fill");
//     vol_icon.classList.remove("bi-volume-off-fill");
//   }
// })


let vol_icon = document.getElementById("vol-icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol-bar")[0]; // corrected typo
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("input", () => { // changed "change" to "input" to detect real-time changes
  let volume = vol.value;

  if (volume == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  } else if (volume > 0 && volume <= 50) { // corrected condition
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  } else if (volume > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  // Control the actual sound level
  let vol_a = vol.value;
  vol_bar.style.width =`${vol_a}%`;
  vol_dot.style.left =`${vol_a}%`;
  Music.volume =vol_a/100;

});
