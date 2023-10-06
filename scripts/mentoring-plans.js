const packages = {
  dissertation: {
    standard: {
      sessionsQtd: 1,
      laudsQtd: '+5',
      semiAnnualPrice: 'R$ 270,00',
      annualPrice: 'R$ 255,00'
    },
    premium: {
      sessionsQtd: 2,
      laudsQtd: '+10',
      semiAnnualPrice: 'R$ 445,00',
      annualPrice: 'R$ 420,75'
    }
  },
  thesis: {
    standard: {
      sessionsQtd: 1,
      laudsQtd: '+15',
      semiAnnualPrice: 'R$ 364,00',
      annualPrice: 'R$ 344,00'
    },
    premium: {
      sessionsQtd: 2,
      laudsQtd: '+15',
      semiAnnualPrice: 'R$ 568,00',
      annualPrice: 'R$ 536,00'
    }
  }
};

function removeActiveClass() {
  const plansButtons = document.getElementsByClassName('option-btn');

  for (let i = 0; i < plansButtons.length; i++) {
    plansButtons[i].classList.remove('active');
  }
}

function onChangePlan(selectedPackage) {
  removeActiveClass();

  const package = packages[selectedPackage];

  const stdSessionsEl = document.getElementById('standard-sessions');
  const stdLaudsEl = document.getElementById('standard-lauds');
  const stdSemiPriceEl = document.getElementById('standard-semi-price');
  const stdAnnualPriceEl = document.getElementById('standard-annual-price');

  const prmSessionsEl = document.getElementById('premium-sessions');
  const prmLaudsEl = document.getElementById('premium-lauds');
  const prmSemiPriceEl = document.getElementById('premium-semi-price');
  const prmAnnualPriceEl = document.getElementById('premium-annual-price');

  stdSessionsEl.innerHTML = package.standard.sessionsQtd;
  stdLaudsEl.innerHTML = package.standard.laudsQtd;
  stdSemiPriceEl.innerHTML = package.standard.semiAnnualPrice;
  stdAnnualPriceEl.innerHTML = package.standard.annualPrice;

  prmSessionsEl.innerHTML = package.premium.sessionsQtd;
  prmLaudsEl.innerHTML = package.premium.laudsQtd;
  prmSemiPriceEl.innerHTML = package.premium.semiAnnualPrice;
  prmAnnualPriceEl.innerHTML = package.premium.annualPrice;

  document.getElementById(`${selectedPackage}-btn`).classList.add('active');
}
