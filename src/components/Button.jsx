import './Button.css';

function Button({ children, variant = 'primary', size = 'md', onClick, href, className = '', type = 'button', ...props }) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
