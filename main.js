const content = "Hello, I'm JeongEun!"
const text = document.querySelector(".text");
let i = 0;

function typing(){
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}

setInterval(typing,300);

// 댓글 추가 삭제 기능

const input = document.querySelector('.input');
const itemAdd = document.querySelector('.itemAdd');
const items = document.querySelector('.items');

const onAdd = () => {
  const text = input.value;
  if (input.value === '') {
      input.focus();
      return;
  }

  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const itemText = document.createElement('span');
  itemText.setAttribute('class','itemText');
  itemText.innerHTML = text;

  const itemDel = document.createElement('button');
  itemDel.setAttribute('class', 'itemDel');
  itemDel.innerHTML = '<i class="fa-solid fa-person-circle-minus"></i>';
  itemDel.addEventListener('click', () => {
    items.removeChild(item);
  })

  item.appendChild(itemText);
  item.appendChild(itemDel);
  items.appendChild(item);
  input.value = '';
  input.focus();
}

itemAdd.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
  return;
});

