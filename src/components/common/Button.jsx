
const Button = ({
  children,
  href,
  variant = 'primary',
  onClick,
  type = 'button'
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition';

  const variants = {
    primary:
      'bg-sky-500 text-slate-950 hover:bg-sky-400',
    secondary:
      'border border-slate-600 text-slate-200 hover:border-sky-400 hover:text-sky-400',
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;