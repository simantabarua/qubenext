const banners = [
  {
    text: 'Crafting Intuitive <span class="font-bold">Interfaces</span> that Engage and <span class="font-bold">Delight</span> Users.',
    imgSrc: "./assets/imgs/banner/banner-1.svg",
  },
  {
    text: 'Building Tailored <span class="font-bold">Software</span> Solutions that Empower Your <span class="font-bold">Business</span>',
    imgSrc: "./assets/imgs/banner/banner-2.svg",
  },
  {
    text: 'Guiding Your <span class="font-bold">Product</span> Journey From Idea to <span class="font-bold">Market</span> Success.',
    imgSrc: "./assets/imgs/banner/banner-3.svg",
  },
  {
    text: 'Creating Compelling <span class="font-bold">Visuals</span> that Tell <span class="font-bold">Brand’s</span> Story',
    imgSrc: "./assets/imgs/banner/banner-4.svg",
  },
  {
    text: '<span class="font-bold">Transforming</span> Your Online Presence With Stunning <span class="font-bold">Web Design</span>',
    imgSrc: "./assets/imgs/banner/banner-5.svg",
  },
  {
    text: 'Crafting Intuitive <span class="font-bold">Interfaces</span> that Engage and <span class="font-bold">Delight</span> Users.',
    imgSrc: "./assets/imgs/banner/banner-6.svg",
  },
  {
    text: 'Building Tailored <span class="font-bold">Software</span> Solutions that Empower Your <span class="font-bold">Business</span>',
    imgSrc: "./assets/imgs/banner/banner-7.svg",
  },
  {
    text: 'Guiding Your <span class="font-bold">Product</span> Journey From Idea to <span class="font-bold">Market</span> Success.',
    imgSrc: "./assets/imgs/banner/banner-8.svg",
  },
  {
    text: 'Creating Compelling <span class="font-bold">Visuals</span> that Tell <span class="font-bold">Brand’s</span> Story',
    imgSrc: "./assets/imgs/banner/banner-9.svg",
  },
  {
    text: '<span class="font-bold">Transforming</span> Your Online Presence With Stunning <span class="font-bold">Web Design</span>',
    imgSrc: "./assets/imgs/banner/banner-10.svg",
  },
  {
    text: '<span class="font-bold">Bringing</span> Your Ideas to Life With Seamless and Captivating <span class="font-bold">Apps</span>.',
    imgSrc: "./assets/imgs/banner/banner-11.svg",
  },
  {
    text: 'Building Tailored <span class="font-bold">Software</span> Solutions that Empower Your <span class="font-bold">Business</span>',
    imgSrc: "./assets/imgs/banner/banner-12.svg",
  },
  {
    text: 'Creating Compelling <span class="font-bold">Visuals</span> that Tell <span class="font-bold">Brand’s</span> Story',
    imgSrc: "./assets/imgs/banner/banner-13.svg",
  },
];

const bannerTextElement = document.getElementById("banner-text");
const bannerImgElement = document.getElementById("banner-img");
let currentBannerIndex = 0;


function updateBannerContent() {
  bannerTextElement.classList.add("text-animation-in");
  bannerImgElement.classList.add("img-animation-in");
  const banner = banners[currentBannerIndex];
  bannerTextElement.innerHTML = banner.text;
  bannerImgElement.src = banner.imgSrc;

  setTimeout(() => {
    bannerTextElement.classList.remove("text-animation-in");
    bannerImgElement.classList.remove("img-animation-in");
  }, 1000);
}

const interval = 5000;
function showNextBanner() {
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  updateBannerContent();
}
function startAutoChangeInterval() {
  setInterval(showNextBanner, interval);
}

startAutoChangeInterval();

// code for modal

// open the modal and show the overlay
document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("overlay").classList.remove("hidden");
});

// close the modal and hide the overlay
document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("modal").classList.add("closing");
  setTimeout(function () {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal").classList.remove("closing");
  }, 300);
  document.getElementById("overlay").classList.add("hidden");
});
