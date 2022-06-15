let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 1.2,
    opacity: 1,
    repeat: -1,
    yoyo: true,
    repeatDelay: 2,
  });
});


const ul = document.querySelector('.lists');
const inputList = document.querySelector('.input_list');
const listAdd = document.querySelector('.list_add');


const addList = () => {
  const text = inputList.value;
  if (inputList.value === '') {
    inputList.focus();
    return;
  }

  const li = document.createElement('li');
  li.setAttribute('class', 'list');

  const listLabel = document.createElement('label');
  listLabel.setAttribute('class','list_label');

  listLabel.innerHTML = text;
  
  const listInput = document.createElement('input');
  listInput.setAttribute('type', 'checkbox');
  listInput.setAttribute('name', 'todolist');
  listInput.setAttribute('class', 'input_todolist');

  

  li.appendChild(listLabel);
  li.appendChild(listInput);
  ul.appendChild(li);
  inputList.value = '';
  inputList.focus();
}

listAdd.addEventListener('click', () => {
  addList();
});

inputList.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addList();
  }
  return;
});