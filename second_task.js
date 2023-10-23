//Should be implemented in Adobe Target for both https://www.tui.se and Regex .*tui\.se\/se\/hitta-din-resa.* pages

(function () {
  const reorderListItems = () => {
    const ul = document.querySelector('.SelectAirports__listStyle');
    if (!ul) return;

    const order = [
      'Stockholm-Arlanda',
      'Göteborg-Landvetter',
      'Malmö Sturup flygplats',
    ];

    const lis = Array.from(ul.children).sort((a, b) => {
      const textA = a.querySelector('.inputs__text').textContent.trim();
      const textB = b.querySelector('.inputs__text').textContent.trim();
      return order.indexOf(textA) - order.indexOf(textB);
    });

    lis.forEach((li) => ul.appendChild(li));
  };

  const inputElement = document.querySelector('.SelectAirports__pointer');
  const parentDiv = inputElement ? inputElement.parentElement : null;

  if (parentDiv) {
    parentDiv.addEventListener('click', () => {
      const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const ul = mutation.target.querySelector(
              '.SelectAirports__listStyle'
            );
            if (ul) {
              reorderListItems();
            }
          }
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();
