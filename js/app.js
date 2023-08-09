const banners = [
  {
    text: 'Crafting Intuitive <span class="font-bold">Interfaces</span> that Engage and <span class="font-bold">Delight</span> Users.',
    imgSrc: "./assets/banner/banner-1.svg",
  },
  {
    text: 'Building Tailored <span class="font-bold">Software</span> Solutions that Empower Your <span class="font-bold">Business</span>',
    imgSrc: "./assets/banner/banner-2.svg",
  },
  {
    text: 'Guiding Your <span class="font-bold">Product</span> Journey From Idea to <span class="font-bold">Market</span> Success.',
    imgSrc: "./assets/banner/banner-3.svg",
  },
  {
    text: 'Creating Compelling <span class="font-bold">Visuals</span> that Tell <span class="font-bold">Brand’s</span> Story',
    imgSrc: "./assets/banner/banner-4.svg",
  },
  {
    text: '<span class="font-bold">Transforming</span> Your Online Presence With Stunning <span class="font-bold">Web Design</span>',
    imgSrc: "./assets/banner/banner-5.svg",
  },
  {
    text: 'Crafting Intuitive <span class="font-bold">Interfaces</span> that Engage and <span class="font-bold">Delight</span> Users.',
    imgSrc: "./assets/banner/banner-6.svg",
  },
  {
    text: 'Building Tailored <span class="font-bold">Software</span> Solutions that Empower Your <span class="font-bold">Business</span>',
    imgSrc: "./assets/banner/banner-7.svg",
  },
  {
    text: 'Guiding Your <span class="font-bold">Product</span> Journey From Idea to <span class="font-bold">Market</span> Success.',
    imgSrc: "./assets/banner/banner-8.svg",
  },
  {
    text: 'Creating Compelling <span class="font-bold">Visuals</span> that Tell <span class="font-bold">Brand’s</span> Story',
    imgSrc: "./assets/banner/banner-9.svg",
  },
  {
    text: '<span class="font-bold">Transforming</span> Your Online Presence With Stunning <span class="font-bold">Web Design</span>',
    imgSrc: "./assets/banner/banner-10.svg",
  },
  {
    text: '<span class="font-bold">Bringing</span> Your Ideas to Life With Seamless and Captivating <span class="font-bold">Apps</span>.',
    imgSrc: "./assets/banner/banner-11.svg",
  },
  {
    text: 'Building Tailored <span class="font-bold">Software</span> Solutions that Empower Your <span class="font-bold">Business</span>',
    imgSrc: "./assets/banner/banner-12.svg",
  },
  {
    text: 'Creating Compelling <span class="font-bold">Visuals</span> that Tell <span class="font-bold">Brand’s</span> Story',
    imgSrc: "./assets/banner/banner-13.svg",
  },
];

const bannerTextElement = document.getElementById("banner-text");
const bannerImgElement = document.getElementById("banner-img");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentBannerIndex = 0;

// update banner content
function updateBannerContent() {
  const banner = banners[currentBannerIndex];
  bannerTextElement.innerHTML = banner.text;
  bannerImgElement.src = banner.imgSrc;
}

prevButton.addEventListener("click", () => {
  currentBannerIndex =
    (currentBannerIndex - 1 + banners.length) % banners.length;
  updateBannerContent();
});

nextButton.addEventListener("click", () => {
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  updateBannerContent();
});

const interval = 3000; 

function showNextBanner() {
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    updateBannerContent();
}
function startAutoChangeInterval() {
    setInterval(showNextBanner, interval);
}
updateBannerContent();
startAutoChangeInterval();