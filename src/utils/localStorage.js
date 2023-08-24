function getFromLocalStorage(itemsName) {
  const items = JSON.parse(localStorage.getItem(itemsName)) ?? [];
  return items;
}

function removeFromLocalStorage(index, itemsName, setItems) {
  const items = getFromLocalStorage(itemsName);

  items.splice(index, 1);

  localStorage.setItem(itemsName, JSON.stringify(items));

  setItems(items);
}

function setToLocalStorage(product, itemsName, setItems) {
  const items = getFromLocalStorage(itemsName);

  const existingIndex = items.findIndex((item) => item.id === product.id);

  if (existingIndex !== -1 && itemsName === "favorites") {
    // Remove the product
    items.splice(existingIndex, 1);
  } else {
    // Add the product
    items.push(product);
  }

  localStorage.setItem(itemsName, JSON.stringify(items));

  setItems(items);
}

export { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage };
