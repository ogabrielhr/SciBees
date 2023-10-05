const plans = {
  pre: {
    price: 'R$ 150,00',
    pages: 20,
    references: 15
  },
  tcc: {
    price: 'R$ 200,00',
    pages: 50,
    references: 20
  },
  diss: {
    price: 'R$ 350,00',
    pages: 80,
    references: 35
  },
  tese: {
    price: 'R$ 450,00',
    pages: 100,
    references: 45
  },
  article: {
    price: 'R$ 400,00',
    pages: 25,
    references: 30
  }
};

function onChangePlan(selectedPlan) {
  const priceEl = document.getElementById('price');
  const pagesEl = document.getElementById('pages');
  const refsEl = document.getElementById('refs');

  const plan = plans[selectedPlan];

  priceEl.innerHTML = plan.price;
  pagesEl.innerHTML = plan.pages;
  refsEl.innerHTML = plan.references;
}