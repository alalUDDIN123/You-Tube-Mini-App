//take btn
let search_btn = document.querySelector("#Sear_btn");
let search_input = document.querySelector("#input-text");
let body = document.querySelector("body");


//const api_key='AIzaSyBFhTsLcIfzHeanKkPwo8wStdIfzzN6Uyg';
//const api_key='AIzaSyCJRKNl4829KwdvKVFAChPJ7GJ4c2NM6ro'
const api_key='AIzaSyDe3QLETbEm562vvcdFS-kfIUL3RRGbhr4'

//event for searching events
search_btn.addEventListener("click", function (event) {
  
  let query = document.querySelector("#input-text").value;
  if(query=="")
  {
    alert("Kindly Write Someting On The Input Box")
  }
  searchFunc(query);
});

// Keyboard eventlister

search_input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
     event.preventDefault();
    let quer = document.querySelector("#input-text").value;
    searchFunc(quer);
  }
});

// Defaults video


window.onload= async () => {
  let urlDefault=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=most%20popular%20video%20in%20India&key=${api_key}`;

  let res=await fetch(urlDefault);
  let data= await res.json();
  displayVideos(data.items);
  //  console.log(data.items)

}


//get serach data
// let q="";

let searchFunc = async (query) => {
  let data = await getData(query);
  displayVideos(data);
};

//api fetch
let getData = async (query) => {
 
  let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`

  let data = await fetch(url)
  let DataObj = await data.json();
  console.log(DataObj)
  return DataObj.items;
};

//display videos
let displayVideos = (data) => {
  let videos_container = document.querySelector("#videos-container");
  videos_container.innerHTML = "";

  if (!data)
   return;

  data.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("id", "EachDiv");
    card.addEventListener("click", (event) => {
      saveVideo(element);
    });

    let thumbnail = document.createElement("img");
    thumbnail.src = element.snippet.thumbnails.medium.url;
    thumbnail.setAttribute("class", "thumbnail");

    let title = document.createElement("h3");
    title.innerText = element.snippet.title;
    title.setAttribute("class", "title");

    card.append(thumbnail, title);
    videos_container.append(card);
  });
};

// save vide in localStorage
let saveVideo = (element) => {
  localStorage.setItem("video", JSON.stringify(element));
  window.location.href = "./video.html";
};


// Filter Section 

let filter = async (DataObj) => {
  let data = await getData(DataObj);
  console.log(data);
  data = data.filter((el) => {
    return el.snippet.channelId === "UCc5FkTYiWH5L3Gk5IyW6Rmw";
  });
 displayVideos(data);
};