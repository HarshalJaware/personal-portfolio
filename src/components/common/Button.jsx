function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}) {
  const variants = {
    primary:
      'bg-sky-500 text-slate-950 hover:bg-sky-400',
    secondary:
      'border border-slate-600 text-slate-100 hover:border-sky-400 hover:text-sky-400',
  };

  const classes = `inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}

export default Button;