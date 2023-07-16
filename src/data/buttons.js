/************** Button Event Listeners **************/
export function btnListeners() {
  const btns = document.querySelectorAll('.menu__btn');
  const errMsg = document.getElementById('error');
  const orderBtn = document.querySelector('.menu__order');
  const favBtn = document.querySelector('.restaurant__option--favIcon');
  const selectedMeals = [];

  favBtn.addEventListener('click', e => e.target.classList.toggle('active'));

  btns.forEach((btn, i) => {
    const id = 'MEAL' + `${i + 1}`.padStart(3, '0');

    btn.addEventListener('click', e => {
      const btn = e.target;
      btn.classList.toggle('active');
      addMeal(btn, id, selectedMeals);
      if (errMsg.classList.contains('active')) errMsg.classList.remove('active');
    });

    btn.style.animationDelay = `${+btn.dataset.order * 200}ms`;

    btn.addEventListener('mouseenter', e => e.target.classList.add('hoverIn'));
    btn.addEventListener('mouseleave', e => {
      const btn = e.target;
      if (!btn.classList.contains('active')) btn.classList.remove('hoverIn');
    });
  });

  placeOrder(orderBtn, selectedMeals, errMsg);
}

function addMeal(btn, id, arr) {
  if (btn.classList.contains('active')) arr.push(id);
  else arr.splice(arr.indexOf(id), 1);
}

function placeOrder(btn, arr, errMsg) {
  btn.addEventListener('click', e => {
    if (arr.length < 1) {
      errMsg.classList.remove('active');
      void errMsg.offsetWidth;
      errMsg.classList.add('active');
    } else {
      location.replace('/pages/order.html');
    }
  });
}

/************** Generate Buttons Markup **************/
export function generateBtns(res) {
  const titles = document.querySelectorAll('.menu__title h1');
  const restaurantName = res.name;
  titles.forEach(title => (title.innerText = restaurantName));

  const menu = res.menu
    .map(men => men.items.map(item => ({category: men.type, ...item})))
    .flat()
    .map((item, i) => ({order: i, ...item}));

  console.log(menu);

  menu.forEach(item => {
    const container = document.getElementById(item.category);
    const btn = markup(item);
    container.insertAdjacentHTML('beforeend', btn);
  });
}

function markup(obj) {
  const markup = `
    <button class="menu__btn" data-order="${obj.order}">
      <span class="menu__btn--labels">
        <span class="menu__btn--title">${obj.name}</span>
        <span class="menu__btn--description">${obj.description}</span>
      </span>
      <span class="menu__btn--price">€${obj.price}</span>
      <span class="menu__btn--check">
        <span class="icon-container">
            <i class="fa-solid fa-circle-check icon"></i>
        </span>
      </span>
    </button>`;

  return markup;
}
