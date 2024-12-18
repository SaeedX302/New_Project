interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const baseClasses = 'text-gray-700 hover:text-indigo-600';
  const classes = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}