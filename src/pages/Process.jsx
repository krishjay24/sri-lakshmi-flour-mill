import SectionTitle from '../components/SectionTitle';
import './Process.css';

const detailedSteps = [
  {
    num: '01',
    title: 'Grain Sourcing & Selection',
    desc: 'We partner directly with farmers in Guntur and surrounding districts of Andhra Pradesh. Each grain lot is hand-inspected for moisture content, protein level, and visual quality before being accepted into our facility. Substandard grain never enters our mill.',
    icon: '🌾',
    tags: ['Farm Direct', 'Quality Inspected', 'Local Sourcing'],
  },
  {
    num: '02',
    title: 'Cleaning & Sorting',
    desc: 'Accepted grains pass through our multi-stage cleaning system. First a dry aspirator removes dust and chaff, then a destoner removes heavy impurities, and finally a vibrating sieve ensures uniform grain size for consistent milling performance.',
    icon: '🔄',
    tags: ['Triple-Stage Clean', 'Destoned', 'Sorted by Size'],
  },
  {
    num: '03',
    title: 'Stone Cold Milling',
    desc: 'Our traditional granite stone mills rotate at low RPM — a deliberate choice to keep the grain cool throughout the grinding process. Heat is the enemy of nutrition; our cold-grinding method preserves natural vitamins, enzymes, and the bran\'s essential oils.',
    icon: '⚙️',
    tags: ['Stone Ground', 'Low Temperature', 'Nutrients Preserved'],
    highlight: true,
  },
  {
    num: '04',
    title: 'Triple Sifting',
    desc: 'The freshly milled flour is passed through three sequential sifters of different mesh grades. This achieves the target fineness for each product while retaining the appropriate amount of dietary fiber — nothing unnecessary is removed.',
    icon: '🔮',
    tags: ['Fine Mesh', 'Consistent Texture', 'Fibre Retained'],
  },
  {
    num: '05',
    title: 'Quality Inspection',
    desc: 'Every batch undergoes rigorous testing in our on-site lab. We check moisture percentage, protein content, gluten development, and microbiological safety. Batches failing any parameter are rejected and not packed.',
    icon: '🔬',
    tags: ['Lab Tested', 'Moisture Check', 'Protein Analysis'],
  },
  {
    num: '06',
    title: 'Hygienic Packing',
    desc: 'Approved flour is packed in food-grade, BPA-free packaging under our climate-controlled packing room. All operators wear gloves, masks, and hair nets. Packs are heat-sealed and date-stamped before being moved to our clean dispatch zone.',
    icon: '📦',
    tags: ['Food-Grade Pack', 'Sealed', 'Date Stamped'],
  },
];

const qualityPoints = [
  { icon: '🌡️', title: 'Temperature Monitoring', desc: 'Mill chamber temperature is monitored every 15 minutes during operation.' },
  { icon: '💧', title: 'Moisture Control', desc: 'Target moisture content is maintained at 12–14% for optimal shelf life.' },
  { icon: '🔬', title: 'Microbiological Safety', desc: 'Each batch is checked for mold, yeast, and total plate count.' },
  { icon: '🏷️', title: 'Traceability', desc: 'Every pack carries a batch code that links back to the source farm lot.' },
];

function Process() {
  return (
    <main className="process-page">
      {/* Hero */}
      <section className="page-hero process-hero">
        <div className="container">
          <span className="page-hero__label">How We Work</span>
          <h1 className="page-hero__title">Our Process</h1>
          <p className="page-hero__desc">
            From grain selection to your kitchen table — every step is guided by our
            commitment to nutrition, hygiene, and authenticity.
          </p>
        </div>
      </section>

      {/* Detailed steps */}
      <section className="process-steps">
        <div className="container">
          <SectionTitle
            label="Step by Step"
            title="The Journey of Every Grain"
            description="Six carefully controlled steps separate your grain from the finest stone-ground flour available in Andhra Pradesh."
          />
          <div className="process-steps__grid">
            {detailedSteps.map((step) => (
              <div
                key={step.num}
                className={`process-step-card ${step.highlight ? 'process-step-card--highlight' : ''}`}
              >
                <div className="process-step-card__header">
                  <span className="process-step-card__num">{step.num}</span>
                  <span className="process-step-card__icon">{step.icon}</span>
                </div>
                <h3 className="process-step-card__title">{step.title}</h3>
                <p className="process-step-card__desc">{step.desc}</p>
                <div className="process-step-card__tags">
                  {step.tags.map((tag) => (
                    <span key={tag} className="process-step-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality section */}
      <section className="process-quality">
        <div className="container">
          <SectionTitle
            label="Quality Assurance"
            title="Quality Checked at Every Step"
            description="Our quality assurance protocol isn't a final checkpoint — it's woven into every stage of the milling process."
          />
          <div className="process-quality__grid">
            {qualityPoints.map((pt) => (
              <div key={pt.title} className="process-quality__card">
                <div className="process-quality__icon">{pt.icon}</div>
                <div>
                  <h3>{pt.title}</h3>
                  <p>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing section */}
      <section className="process-packing">
        <div className="container process-packing__inner">
          <div className="process-packing__content">
            <span className="section-label">Packing Standards</span>
            <h2 className="process-packing__title">Sealed for Freshness, Stamped for Trust</h2>
            <p className="process-packing__desc">
              Our packing room is maintained at controlled humidity and temperature. All operators
              follow strict hygiene protocols. Every pack is heat-sealed to lock in freshness and
              prominently stamped with batch code, milling date, and best-before date.
            </p>
            <ul className="process-packing__list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Food-grade, BPA-free packaging
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Available in 500g, 1kg, 5kg, and 25kg bulk packs
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Heat-sealed for maximum shelf life
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Batch traceability code on every pack
              </li>
            </ul>
          </div>
          <div className="process-packing__visual">
            <div className="process-packing__img">
              <span style={{ fontSize: '100px' }}>📦</span>
              <p>Hygienic Packing Unit</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Process;
