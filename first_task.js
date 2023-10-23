(function () {
  function buttonChange() {
    const priceSum = document.querySelectorAll('.List__priceSummary');

    priceSum.forEach((container) => {
      let actualPrice;
      const primaryButton = container.querySelector('.buttons__primary');

      if (
        primaryButton.textContent != 'VALITSE' ||
        primaryButton.textContent != 'FORTSÄTT'
      ) {
        actualPrice = container.querySelector('.List__value');
      } else {
        actualPrice = container.querySelector('.List__actualPrice');
      }

      if (actualPrice && primaryButton) {
        const price = actualPrice.textContent.trim();

        if (primaryButton.textContent != price) {
          primaryButton.textContent = price;
          actualPrice.remove();
        }
      }
    });
  }

  let hotelCardsContainer;
  const url = window.document.location.href;
  if (url.includes('tui.dk/tilbud/kanariske-vinter')) {
    hotelCardsContainer = document.querySelector(
      '#cmsitem_00338083-tuiProductCardComponent'
    );
  }
  if (url.includes('tui.se/erbjudanden/all-inclusive-kanarieoarna-vinter')) {
    hotelCardsContainer = document.querySelector(
      '#cmsitem_00241027-tuiProductCardComponent'
    );
  }
  if (url.includes('tui.no/tilbud/kanarioyene-vinter/')) {
    hotelCardsContainer = document.querySelector(
      '#cmsitem_00242261-tuiProductCardComponent'
    );
  }
  if (url.includes('tui.fi/matkatarjoukset/kanaria-hotellit/')) {
    hotelCardsContainer = document.querySelector(
      '#cmsitem_00283043-tuiProductCardComponent'
    );
  }
  const observer = new MutationObserver((mutations) => {
    buttonChange();
    if (hotelCardsContainer) {
      observer.observe(hotelCardsContainer, {
        childList: true,
        subtree: true,
      });
    }
  });
  if (hotelCardsContainer) {
    buttonChange();
    observer.observe(hotelCardsContainer, {
      childList: true,
      subtree: true,
    });
  }
})();
