import { useSearchParams } from 'react-router-dom';
import SEO from './SEO';
import { products, categories } from './content';
import { ProductCard, PageIntro, ContactStrip } from './Cards';
import { filterProducts } from '../lib/catalog';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const search = params.get('search') || '';
  const selected = params.get('category') || 'all';
  const category = categories.some((c) => c.id === selected) ? selected : 'all';
  const visible = filterProducts(products, search, category);
  function update(key, value, replace = false) {
    const next = new URLSearchParams(params);
    if (!value || value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace });
  }
  return <main><SEO title="Products" path="/products" description="Browse rice flour, chilli powder, rice, wheat flour, gram flour and turmeric listed by Sri Lakshmi Tirupatamma Flour Mill." />
    <PageIntro label="THE PANTRY / PRODUCT CATALOGUE" title="Ingredients for everyday cooking." description="Explore the products listed by our mill. Contact us to confirm current availability, quantity and pricing." />
    <section className="section catalogue-section"><div className="container">
      <div className="catalog-toolbar"><div><label htmlFor="product-search">Search products</label><div className="search-field"><input id="product-search" type="search" value={search} onChange={(e) => update('search', e.target.value, true)} placeholder="Try rice, flour, chilli..." />{search && <button type="button" onClick={() => update('search', '')} aria-label="Clear search">✕</button>}</div></div><span aria-live="polite">{visible.length} {visible.length === 1 ? 'product' : 'products'} found</span></div>
      <div className="filter-tabs" role="group" aria-label="Filter products by category">{categories.map(({ id, label }) => <button key={id} type="button" aria-pressed={category === id} className={category === id ? 'selected' : ''} onClick={() => update('category', id)}>{label}</button>)}</div>
      {visible.length ? <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h2>No products found</h2><p>Try another search or view the full catalogue.</p><button type="button" className="button button--green" onClick={() => setParams({})}>Clear filters</button></div>}
    </div></section><ContactStrip />
  </main>;
}
