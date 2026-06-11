import type { ReactNode } from 'react';
import patternImport from '../../images/primary-button-pattern.svg';
import styles from './Button.module.css';

// Vite returns a string URL for SVG imports in .tsx files
const pattern = typeof patternImport === 'string'
  ? patternImport
  : (patternImport as { src: string }).src;

interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'leading' | 'trailing';
  children?: ReactNode;
}

export default function Button({
  href,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'trailing',
  children = 'Click Me',
}: ButtonProps) {
  const isLink = href !== undefined && href !== '';

  const inner = (
    <>
      <img src={pattern} width={51} height={45} aria-hidden="true" alt="" />
      {icon && iconPosition === 'leading' && (
        <span className={styles.iconLeading}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'trailing' && (
        <span className={styles.iconTrailing}>{icon}</span>
      )}
      <img src={pattern} width={51} height={45} aria-hidden="true" alt="" />
    </>
  );

  return (
    <div className={styles.buttonWrapper}>
      {isLink ? (
        <a href={href} className={`${styles.primary} ${className}`}>
          {inner}
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={`${styles.primary} ${className}`}
        >
          {inner}
        </button>
      )}
      <div className={styles.buttonOutline} aria-hidden="true" />
      <div className={styles.buttonFocusRing} aria-hidden="true" />
    </div>
  );
}
