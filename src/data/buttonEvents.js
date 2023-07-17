Listeners();

function Listeners() {
  const btns = document.querySelectorAll('.menu__btn');
  const errMsg = document.getElementById('error');
  const orderBtn = document.querySelector('.menu__order');
  const favBtns = document.querySelectorAll('.restaurant__option--favIcon');
  const selectedMeals = [];

  favBtns.forEach(btn =>
    btn.addEventListener('click', () =>
      favBtns.forEach(button => button.classList.toggle('active'))
    )
  );

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
