const plans = {
  pre: {
    price: 'R$ 150,00',
    pages: 20,
    references: 15,
    title: 'Pré-Projeto'
  },
  tcc: {
    price: 'R$ 200,00',
    pages: 50,
    references: 20,
    title: 'TCC'
  },
  diss: {
    price: 'R$ 350,00',
    pages: 80,
    references: 35,
    title: 'Dissertação'
  },
  tese: {
    price: 'R$ 450,00',
    pages: 100,
    references: 45,
    title: 'Tese'
  },
  article: {
    price: 'R$ 400,00',
    pages: 25,
    references: 30,
    title: 'Artigo'
  }
};

function removeActiveClass() {
  const plansButtons = document.getElementsByClassName('option-btn');

  for (let i = 0; i < plansButtons.length; i++) {
    plansButtons[i].classList.remove('active');
  }
}

function onChangePlan(selectedPlan) {
  const priceEl = document.getElementById('price');
  const pagesEl = document.getElementById('pages');
  const refsEl = document.getElementById('refs');
  const titleEl = document.getElementById('plan-title');

  const plan = plans[selectedPlan];

  titleEl.innerHTML = plan.title;
  priceEl.innerHTML = plan.price;
  pagesEl.innerHTML = plan.pages;
  refsEl.innerHTML = plan.references;

  removeActiveClass();
  document.getElementById(`${selectedPlan}-btn`).classList.add('active');
}