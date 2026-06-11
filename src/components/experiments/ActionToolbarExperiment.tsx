import { useState } from 'react';
// iconPosition is always 'trailing' in this experiment
import Button from './Button';
import landscapeImport from '../../images/case-studies-landscape.png';

const landscapeSrc = typeof landscapeImport === 'string'
  ? landscapeImport
  : (landscapeImport as { src: string }).src;

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  id: string;
}

function Toggle({ checked, onChange, id }: ToggleProps) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        width: 40,
        height: 24,
        borderRadius: 12,
        padding: 3,
        border: 'none',
        cursor: 'pointer',
        background: checked ? '#E0196A' : 'rgba(255,255,255,0.12)',
        transition: 'background 0.2s ease',
        flexShrink: 0,
      }}
    >
      <span style={{
        display: 'block',
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: '#ffffff',
        transform: checked ? 'translateX(16px)' : 'translateX(0)',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.4, 0.64, 1)',
      }} />
    </button>
  );
}

export default function ActionToolbarExperiment() {
  const [showIcon, setShowIcon] = useState(false);
  const [showOnImage, setShowOnImage] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Preview */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 160,
        borderRadius: 12,
        overflow: 'hidden',
        background: showOnImage ? undefined : 'rgba(255,255,255,0.03)',
      }}>
        {showOnImage && (
          <img
            src={landscapeSrc}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
        <div style={{ position: 'relative', width: '100%', maxWidth: 320, padding: '0 24px' }}>
          <Button icon={showIcon ? <ArrowIcon /> : undefined} iconPosition="trailing">
            Blog
          </Button>
        </div>
      </div>

      {/* Controls — inline, no card */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <label htmlFor="toggle-icon" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
            Show icon
          </label>
          <Toggle id="toggle-icon" checked={showIcon} onChange={setShowIcon} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <label htmlFor="toggle-image" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
            Show on image
          </label>
          <Toggle id="toggle-image" checked={showOnImage} onChange={setShowOnImage} />
        </div>
      </div>
    </div>
  );
}
