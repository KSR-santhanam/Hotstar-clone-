let movies = [
  {
    name: "loki",
    des: "Loki is an American television series created by Michael Waldron for the streaming service Disney.",
    image: "./images/slider 1.PNG",
  },
  {
    name: "The Batman",
    des: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    image: "./images/slider 2.PNG",
  },
  {
    name: "Deadpool",
    des: "A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.",
    image: "./images/slider 3.PNG",
  },

  {
    name: "Vikram",
    des: "A special investigator discovers a case of serial killings is not what it seems to be, and leading down this path is only going to end in a war between everyone involved.",
    image: "./images/slider 4.PNG",
  },

  {
    name: "Superdelux",
    des: "An unfaithful newly-wed wife, an estranged father, a priest and an angry son suddenly find themselves in the most unexpected predicaments, each poised to experience their destiny, all on one fateful day.",
    image: "./images/slider 5.PNG",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create DOM Elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video cards

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// cards sliders

let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

// Function to scroll the card container to the left
function scrollLeft(container) {
  container.scrollLeft -= container.clientWidth;
}

// Function to scroll the card container to the right
function scrollRight(container) {
  container.scrollLeft += container.clientWidth;
}

// Attach click event listeners to previous and next buttons
preBtns.forEach((preBtn, index) => {
  preBtn.addEventListener("click", () => {
    scrollLeft(cardContainers[index]);
  });
});

nxtBtns.forEach((nxtBtn, index) => {
  nxtBtn.addEventListener("click", () => {
    scrollRight(cardContainers[index]);
  });
});

var youtubePlayer;

function openYouTubeModal(videoId) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "500");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + videoId + "?autoplay=1"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "");

  // Clear previous content
  $("#youtubePlayer").empty();

  // Append the new iframe
  $("#youtubePlayer").append(iframe);

  // Show the modal
  $("#youtubeModal")
    .modal({
      backdrop: "static",
      keyboard: false,
    })
    .modal("show");
}

function onYouTubeIframeAPIReady() {
  // You can add additional setup logic here if needed
}

// Function to handle player ready event
function onPlayerReady(event) {
  // Play the video when the player is ready
  event.target.playVideo();
}

// Close YouTube modal
function closeYouTubeModal() {
  // Pause the video and hide the modal
  if (youtubePlayer) {
    youtubePlayer.pauseVideo();
    youtubePlayer.seekTo(0); // Optional: Reset the video to start position
    youtubePlayer.stopVideo();
  }

  // Clear the source attribute of the iframe
  $("#youtubePlayer iframe").attr("src", "");

  // Hide the modal
  $("#youtubeModal").modal("hide");
}

// Wait for the document to be ready
$(document).ready(function () {
  // Initialize YouTube API when the document is ready
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

  // Set up event listener for close button
  $(".close").click(function () {
    closeYouTubeModal();
  });
});
