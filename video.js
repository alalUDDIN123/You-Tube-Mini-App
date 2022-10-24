window.onload = () => {
  // fetech data from LS
  let video = JSON.parse(localStorage.getItem("video")) || [];
  displayVideos(video);
};

let displayVideos = (data) => {
  if (!data)
   return;

  let iframe = document.querySelector("iframe");
  iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;

  let title = document.querySelector("#title");
  title.innerText = data.snippet.title;

  let views = document.querySelector("#views");
  views.innerText = "90,09,677 views • July,07-06-2022";
};

let logoYouTube=document.getElementById("youtube-logo").addEventListener("click", GoBack);
let youtubeText=document.getElementById("YouTubeLogo_Text").addEventListener("click", GoBack);

function GoBack()
{
 window.location.href="index.html"
}
