// ============== review slider

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.further');


let currentSlide = 0;
const totalSlides = slides.length;
// Получаем ширину слайдера

function showSlide(index) {

  if (index >= (totalSlides / 3) - 1) {
    currentSlide = (totalSlides / 3) - 1;
  } else if (index <= 0) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  const offsetSlide = -currentSlide * 1320;
  slider.style.transform = `translateX(${offsetSlide}px)`;
  setTimeout(getActive, 1000)
}

function getActive() {
  const viewportWidth = window.innerWidth;
  slides.forEach(slide => {
    if (slide.getBoundingClientRect().left >= 0 && slide.getBoundingClientRect().right <= viewportWidth) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  })
  lastFurtherPosition(currentSlide);
  lastBackPosition(currentSlide);
}

getActive();

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

prevBtn.addEventListener('mousedown', () => {
  prevBtn.classList.add('back-clicked');
});

prevBtn.addEventListener('mouseup', () => {
  setTimeout(() => {
    prevBtn.classList.remove('back-clicked');
  }, 1500)
}
)

nextBtn.addEventListener('mousedown', () => {
  nextBtn.classList.add('further-clicked');
});

nextBtn.addEventListener('mouseup', () => {
  setTimeout(() => {
    nextBtn.classList.remove('further-clicked');
  }, 1500)
}
)

// Инициализация: показать первый слайд
showSlide(currentSlide);

function lastBackPosition(index) {
  if (index == 0) {
    prevBtn.classList.add('last-back-position');
  } else {
    prevBtn.classList.remove('last-back-position');
  }
}

function lastFurtherPosition(index) {
  if (index == (totalSlides / 3) - 1) {
    nextBtn.classList.add('last-further-position');
  } else {
    nextBtn.classList.remove('last-further-position');
  }
}



// for (i = 0; i < lastSlides.length; i++) {
//   lastSlides[i].addEventListener('click', () => {
//     lastSlides[i].classList.add('last-slide-btn-clicked');
//   })
// }

// =========================================== inf slider

const infSlider = document.querySelector('.inf-slider');
const infSlides = document.querySelectorAll('.news-block');
const prev = document.querySelector('.inf-back');
const next = document.querySelector('.inf-further');

let infIndex = 0;
const allSlides = infSlides.length;

function showBlock(index) {
  if (index >= (allSlides / 3) - 1) {
    infIndex = (allSlides / 3) - 1;
  }
  else if (index <= 0) {
    infIndex = 0;
  } else {
    infIndex = index;
  }

  const infOffset = -infIndex * 1320;
  infSlider.style.transform = `translateX(${infOffset}px)`;
  setTimeout(getActiveBlock, 1000);
}

function getActiveBlock() {
  const viewportWidth = window.innerWidth;
  infSlides.forEach(infSlide => {
    if (infSlide.getBoundingClientRect().left >= 0 && infSlide.getBoundingClientRect().right <= viewportWidth) {
      infSlide.classList.add('active');
    } else {
      infSlide.classList.remove('active');
    }
  })
  lastBackInfPosition(infIndex);
  lastFurtherInfPosition(infIndex);
}

getActiveBlock();

prev.addEventListener('click', () => {
  showBlock(infIndex - 1);
});

next.addEventListener('click', () => {
  showBlock(infIndex + 1);
});

showBlock(infIndex);

function lastBackInfPosition(index) {
  if (index == 0) {
    prev.classList.add('last-back-inf-position');
  } else {
    prev.classList.remove('last-back-inf-position');
  }
}

function lastFurtherInfPosition(index) {
  if (index == (allSlides / 3) - 1) {
    next.classList.add('last-further-inf-position');
  } else {
    next.classList.remove('last-further-inf-position');
  }
}

prev.addEventListener('mousedown', () => {
  prev.classList.add('inf-back-clicked');
});

prev.addEventListener('mouseup', () => {
  setTimeout(() => {
    prev.classList.remove('inf-back-clicked');
  }, 1500)
}
)

next.addEventListener('mousedown', () => {
  next.classList.add('inf-further-clicked');
});

next.addEventListener('mouseup', () => {
  setTimeout(() => {
    next.classList.remove('inf-further-clicked');
  }, 1500)
}
)


// ===================== portfolio slider

const portSlider = document.querySelector('.portfolio-slider');
const portSlides = document.querySelectorAll('.portfolio-slide');
const portPrev = document.querySelector('.portfolio-back');
const portNext = document.querySelector('.portfolio-further');

let portIndex = 0;
const allPortSlides = portSlides.length;
const portSlideWidth = portSlider.offsetWidth; // Получаем ширину слайдера

function showNewPort(index) {
  if (index <= 0) {
    portIndex = 0;
  } else if (index >= allPortSlides) {
    portIndex = allPortSlides;
  } else {
    portIndex = index;
  }

  const portOffset = -portIndex * 488;
  portSlider.style.transform = `translateX(${portOffset}px)`;

  setTimeout(getActivePort, 1000)

}

function getActivePort() {
  const viewportWidth = window.innerWidth;
  portSlides.forEach(portSlide => {
    if (portSlide.getBoundingClientRect().left >= 0 && portSlide.getBoundingClientRect().right <= viewportWidth) {
      portSlide.classList.add('active');
    } else {
      portSlide.classList.remove('active');
    }
  })
  lastBackPortPosition(portIndex);
  lastFurtherPortPosition(portIndex);
}

portPrev.addEventListener('click', () => {
  showNewPort(portIndex - 1);
});

portNext.addEventListener('click', () => {
  showNewPort(portIndex + 1);
});

// Инициализация: показать первый слайд
document.addEventListener('DOMContentLoaded', showNewPort(portIndex));


function lastBackPortPosition(index) {
  if (index == 0) {
    portPrev.classList.add('last-back-port-position');
  } else {
    portPrev.classList.remove('last-back-port-position');
  }
}

function lastFurtherPortPosition(index) {
  if (index == allPortSlides - 1) {
    portNext.classList.add('last-further-port-position');
  } else {
    portNext.classList.remove('last-further-port-position');
  }
}

portPrev.addEventListener('mousedown', () => {
  portPrev.classList.add('port-back-clicked');
});

portPrev.addEventListener('mouseup', () => {
  setTimeout(() => {
    portPrev.classList.remove('port-back-clicked');
  }, 1500)
}
)

portNext.addEventListener('mousedown', () => {
  portNext.classList.add('port-further-clicked');
});

portNext.addEventListener('mouseup', () => {
  setTimeout(() => {
    portNext.classList.remove('port-further-clicked');
  }, 1500)
}
)



// ========================= hover.logo


// const logoRefers = document.querySelectorAll('.list-refer')

// const activeClass = 'active';

// for (let i = 0; i < logoRefers.length; i++) {
//   logoRefers[i].addEventListener('click', function() {
//     for (let j = 0; j < logoRefers.length; j++) {
//       logoRefers[j].classList.remove(activeClass);
//     }
//     this.classList.add(activeClass);
//   });
// }


// =================== btn hover

const readFull = document.querySelectorAll('.read-full');
const text = document.querySelectorAll('.read-full');
activeClass = 'full-review';
const content = 'hide-text';

for (let i = 0; i < readFull.length; i++) {
  readFull[i].addEventListener('click', function () {
    slides[i].classList.toggle(activeClass);
    this.classList.toggle('hide-text');
    getClass(readFull[i]);
  });
}

function getClass(type) {
  if (type.classList.contains('hide-text')) {
    type.innerText = 'Скрыть';
  } else {
    type.innerText = 'Читать полностью'
  }
}


// =================== calender hover question


const question = document.querySelector('.question');
const whiteBlock = document.querySelector('.white-block');

question.addEventListener('mouseover', () => {
  question.classList.add('active-question');
  isVisible(question);
})

question.addEventListener('mouseout', () => {
  question.classList.remove('active-question');
  isVisible(question);
})

function isVisible(someClass) {
  if (someClass.classList.contains('active-question')) {
    whiteBlock.classList.add('visible');
  } else {
    whiteBlock.classList.remove('visible');
  }
}


// ======================= footer clicked

const footerGmail = document.querySelector('.footer-gmail');
const footerNumber = document.querySelector('.footer-number');
const whatsapp = document.querySelector('.hover-whatsapp');
const youtube = document.querySelector('.hover-youtube');
const instagram = document.querySelector('.hover-instagram');
const telegram = document.querySelector('.hover-telegram');


whatsapp.addEventListener('click', () => {
  whatsapp.classList.add('whatsapp-clicked');
})

youtube.addEventListener('click', () => {
  youtube.classList.add('youtube-clicked');
})

instagram.addEventListener('click', () => {
  instagram.classList.add('instagram-clicked');
})

telegram.addEventListener('click', () => {
  telegram.classList.add('telegram-clicked');
})

footerGmail.addEventListener('click', () => {
  footerGmail.classList.add('gmail-clicked');
})

footerNumber.addEventListener('click', () => {
  footerNumber.classList.add('number-clicked')
})



// =======================   sign up

const signUpBtn = document.querySelector('.sign-up-btn');
const blurStepOneBlock = document.querySelector('.blur-step-one');
const blurStepTwoBlock = document.querySelector('.blur-step-two');
const deleteBlurStepTwo = document.querySelector('.delete-blur-step-two');
const deleteBlurStepOne = document.querySelector('.delete-blur-step-one');
const backdropElement = document.querySelector('.backdrop');

deleteBlurStepTwo.addEventListener('click', () => {
  blurStepTwoBlock.classList.remove('visible-two');
  blurExcute(blurStepTwoBlock);
}
)

deleteBlurStepOne.addEventListener('click', () => {
  blurStepOneBlock.classList.remove('visible');
  blurExcute(blurStepOneBlock);
}
)

signUpBtn.addEventListener('click', () => {
  blurStepOneBlock.classList.add('visible');
  blurExcute(blurStepOneBlock);
}
)


function blurExcute(element) {
  if (element.classList.contains('visible') || element.classList.contains('visible-two')) {
    backdropElement.classList.add('active-bd');
  } else {
    backdropElement.classList.remove('active-bd');
  }
}

// ======================== form


const chooseService = document.querySelectorAll('.choose-servise');
const signUpSelect = document.querySelectorAll('.sign-up-select');
const imgContainers = document.querySelectorAll('.select-img-container');
const nextStep = document.querySelector('.next-step');
const openItem =  document.querySelectorAll('.open');

imgContainers.forEach(function (element) {
  element.addEventListener('mouseover', () => {
    element.parentNode.classList.add('choosen')
  })
})

chooseService.forEach(function (element) {
  element.addEventListener('mouseover', () => {
    element.parentNode.classList.add('choosen');
  })
})

chooseService.forEach(function (element) {
  element.addEventListener('mouseout', () => {
    element.parentNode.classList.remove('choosen');
  })
})

imgContainers.forEach(function (element) {
  element.addEventListener('click', () => {
    element.parentNode.classList.toggle('full-select');
    element.classList.toggle('open');
    if (element.classList.contains('open')) {
      for (i=0; i<imgContainers.length; i++) {
        imgContainers[i].classList.add('blocked');
      }
      element.classList.remove('blocked');
    } else {
      for (i=0; i<imgContainers.length; i++) {
        imgContainers[i].classList.remove('blocked');
      }
    }
    }
  )}
)


nextStep.addEventListener('click', () => {
  blurStepTwoBlock.classList.add('visible-two');
  blurExcute(blurStepTwoBlock);
  blurStepOneBlock.classList.remove('visible');
})


//  =================== mobile menu


const menu = document.querySelector('#mobile-menu')
const spisok = document.querySelector('.nav-list')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    spisok.classList.toggle('active')
})



