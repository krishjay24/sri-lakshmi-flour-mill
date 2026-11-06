export function filterProducts(items, search, category) {
  const term = search.trim().toLocaleLowerCase();
  return items.filter((item) =>
    (category === 'all' || item.category === category) &&
    (!term || `${item.name} ${item.description} ${item.categoryLabel}`.toLocaleLowerCase().includes(term)));
}
