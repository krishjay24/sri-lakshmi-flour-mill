import './BeforeAfterCard.css';

function BeforeAfterCard({ item }) {
  const { beforeEmoji, beforeLabel, afterEmoji, afterLabel, beforeBg, afterBg, description } = item;

  return (
    <div className="ba-card">
      <div className="ba-card__before" style={{ background: beforeBg }}>
        <span className="ba-card__emoji">{beforeEmoji}</span>
        <span className="ba-card__tag">Before</span>
        <p className="ba-card__label">{beforeLabel}</p>
      </div>
      <div className="ba-card__arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      <div className="ba-card__after" style={{ background: afterBg }}>
        <span className="ba-card__emoji">{afterEmoji}</span>
        <span className="ba-card__tag ba-card__tag--after">After</span>
        <p className="ba-card__label">{afterLabel}</p>
      </div>
      {description && <p className="ba-card__desc">{description}</p>}
    </div>
  );
}

export default BeforeAfterCard;
