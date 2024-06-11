// Selection section
let wave = document.getElementsByClassName("wave")[0];
let pop_arrow_left = document.getElementById("pop-song-left");
let pop_arrow_right = document.getElementById("pop-song-right");
let pop_song = document.getElementsByClassName("pop-song")[0];
let masterPlay = document.getElementById("masterPlay");

// Music object
const Music = new Audio();

// Songs array
const songs = [
  {
    id: 1,
    songName: "Now Playing <div class='subtitle'>Lorem ipsu.</div>",
    poster: "assets/img/1.jpg",
  },
  {
    id: 2,
    songName: "Halki Halki Si <br><div class='subtitle'>Lorem ipsu.</div>",
    poster: "assets/img/2.jpg",
  },
  {
    id: 3,
    songName: "Gulaabi Shaadi <br><div class='subtitle'>Lorem ipsu.</div>",
    poster: "assets/img/3.jpg",
  },
  {
    id: 4,
    songName: "Mitti<br><div class='subtitle'>Lorem ipsu.</div>",
    poster: "assets/img/4.jpg",
  },
  // ... other songs
];

// Accessing all the elements with the class "songItem"
const songItems = document.getElementsByClassName("songItem");

// Loop through each song item and set the poster image and song name
Array.from(songItems).forEach((element, i) => {
  if (i < songs.length) {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
});

// Master play section
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

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playlistPlay")).forEach((el) => {
    el.classList.remove("bi-pause-circle-fill");
    el.classList.add("bi-play-circle-fill");
  });
}

const pauseAllSongs = () => {
  Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.classList.add("bi-play-circle-fill");
    element.classList.remove("bi-pause-circle-fill");
  });
}

// Set the source of the Music audio element when a song is clicked
let index = 0;

let posterPlace = document.getElementById("posterPlace");
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
  e.addEventListener("click", (event) => {
    index = event.target.id;
    Music.src = `assets/audio/${index}.mp3`;
    posterPlace.src = `assets/img/${index}.jpg`;
    Music.play();
    masterPlay.classList.add("bi-pause-circle-fill");
    masterPlay.classList.remove("bi-play-circle-fill");
    wave.classList.add('active1');
  });
});

// Function to handle adding a song to the menu-side
const addToMenuSide = (index) => {
  const song = songs[index];
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-song-item");
  menuItem.innerHTML = `
    <img src="${song.poster}" alt="Song Poster">
    <div class="song-info">
      <h5>${song.songName}</h5>
      <i class="bi bi-play-circle playlistPlay" id="${song.id}"></i>
    </div>
  `;
  document.querySelector(".menu-song").appendChild(menuItem);
};

// Event listener for clicking the heart icon to add a song to the menu-side
document.getElementById("heart-icon").addEventListener("click", () => {
  addToMenuSide(index - 1); // Subtract 1 to match the index in the songs array
});

// Scroll music in music side section
pop_arrow_right.addEventListener("click", () => {
  pop_song.scrollLeft += 400;
});

pop_arrow_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 400;
});

// Seek bar time section
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

Music.addEventListener("timeupdate", () => {
  let Music_currentTime = Music.currentTime;
  let Music_duration = Music.duration;

  if (!isNaN(Music_duration)) {
    let min1 = Math.floor(Music_duration / 60);
    let sec1 = Math.floor(Music_duration % 60);
    currentEnd.innerText = `${min1}:${sec1 < 10 ? "0" + sec1 : sec1}`;
    let min2 = Math.floor(Music_currentTime / 60);
    let sec2 = Math.floor(Music_currentTime % 60);
    currentStart.innerText = `${min2}:${sec2 < 10 ? "0" + sec2 : sec2}`;

    let progressBar = (Music.currentTime / Music.duration) * 100;
    seek.value = progressBar;
    bar2.style.width = `${progressBar}%`;
    dot.style.left = `${progressBar}%`;
  }
});

seek.addEventListener("input", () => {
  let newTime = (seek.value * Music.duration) / 100;
  Music.currentTime = newTime;
});

Music.addEventListener("ended", () => {
  Music.pause();
  masterPlay.classList.add("bi-play-circle-fill");
  masterPlay.classList.remove("bi-pause-circle-fill");
  wave.classList.remove('active1');
  seek.value = 0;
  bar2.style.width = "0%";
  Music.currentTime = 0;
});

// Volume control section
let vol_icon = document.getElementById("vol-icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol-bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("input", () => {
  let volume = vol.value;

  if (volume == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  } else if (volume > 0 && volume <= 50) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  } else if (volume > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  vol_bar.style.width = `${volume}%`;
  vol_dot.style.left = `${volume}%`;
  Music.volume = volume / 100;
});
