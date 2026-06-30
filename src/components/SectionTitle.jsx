import './SectionTitle.css';

function SectionTitle({ label, title, description, align = 'center', labelColor = 'accent' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {label && (
        <span className={`section-title__label section-title__label--${labelColor}`}>
          {label}
        </span>
      )}
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  );
}

export default SectionTitle;
