const selector = document.querySelectorAll('.product-cars__size-selector');

selector.forEach(el => {
  const selectorModified = new Choices (el, {
    searchEnabled: false,
  });
});

