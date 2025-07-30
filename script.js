const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const playPause = document.getElementById("playPause");

const songs = [
  { title: "kangal yetho", artist: "santhosh narayanan", src: "songs/audio2.mp3" },
  { title: "kannum kannum nokia", artist: "andrea", src: "songs/audio3.mp3" },
  { title: "pirai thedum", artist: "Sainthavi", src: "songs/audio4.mp3" }
];

let songIndex = 0;

function loadSong(index) {
  audio.src = songs[index].src;
  title.innerText = songs[index].title;
  artist.innerText = songs[index].artist;
}

function playSong(index) {
  songIndex = index;
  loadSong(songIndex);
  audio.play();
  playPause.innerText = "⏸";
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPause.innerText = "⏸";
  } else {
    audio.pause();
    playPause.innerText = "▶";
  }
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  playPause.innerText = "⏸";
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  playPause.innerText = "⏸";
}

function seekTo() {
  audio.currentTime = (progress.value / 100) * audio.duration;
}

function setVolume(value) {
  audio.volume = value;
}

audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

audio.addEventListener("ended", () => {
  nextSong();
});

loadSong(songIndex);