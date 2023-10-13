function goHome() {
  location.href = '/';
}

function instaClick() {
  window.open("https://www.instagram.com/scibees.solucoes/", "_blank");
}

function youtubeClick() {
  window.open("https://www.youtube.com/@scibees", "_blank");
}

function linkedinClick() {
  window.open("https://www.linkedin.com/company/scibees/", "_blank");
}

let bannerWordIndex = 0;
let bannerBeeImgIndex = 0;

/**
 * Interval to change banner words
 */
setInterval(() => {
  const homeWords = document.getElementsByClassName('banner-words');

  if (bannerWordIndex < 2) {
    bannerWordIndex += 1;
  } else {
    bannerWordIndex = 0;
  }

  for (let i = 0; i < 3; i++) {
    homeWords[i].classList.add('hide');

    if (bannerWordIndex === i) {
      homeWords[i].classList.remove('hide');
    }
  }
}, 1500);

/**
 * Interval to change bee images
 */
setInterval(() => {
  const bannerBees = document.getElementsByClassName('bee');

  if (bannerBeeImgIndex < 2) {
    bannerBeeImgIndex += 1;
  } else {
    bannerBeeImgIndex = 0;
  }

  for (let i = 0; i < 3; i++) {
    bannerBees[i].classList.add('hide');

    if (bannerBeeImgIndex === i) {
      bannerBees[i].classList.remove('hide');
    }
  }
}, 1500);