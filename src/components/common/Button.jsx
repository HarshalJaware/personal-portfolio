const Button = ({
  children,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  download,
  target,
  rel,
  disabled = false,
  className: extraClassName = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400 hover:shadow-sky-400/30 active:scale-[0.98]',
    secondary:
      'border border-slate-700 bg-slate-900/60 text-slate-200 hover:border-sky-400 hover:text-sky-400 hover:bg-slate-900 active:scale-[0.98]',
    outline:
      'border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white active:scale-[0.98]',
  };

  const selectedVariant = variants[variant] || variants.primary;
  const combinedClasses = `${baseStyles} ${selectedVariant} ${extraClassName}`.trim();

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noreferrer noopener' : undefined)}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;