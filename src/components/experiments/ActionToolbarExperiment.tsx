import { useState, useRef } from 'react';
import Button from './Button';
import landscapeImport from '../../images/experiments/blue-mosque-bg.png';

const landscapeSrc = typeof landscapeImport === 'string'
  ? landscapeImport
  : (landscapeImport as { src: string }).src;

const LENS_R = 40;

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

const previewContentStyle = (showOnImage: boolean): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  background: showOnImage ? undefined : 'transparent',
});

export default function ActionToolbarExperiment() {
  const [showIcon, setShowIcon] = useState(false);
  const [showOnImage, setShowOnImage] = useState(false);
  const [magnifier, setMagnifier] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseInPreview, setMouseInPreview] = useState(false);
  const [previewDims, setPreviewDims] = useState({ w: 0, h: 0 });
  const previewRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = previewRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    if (previewDims.w !== rect.width || previewDims.h !== rect.height) {
      setPreviewDims({ w: rect.width, h: rect.height });
    }
  };

  const showLens = magnifier && mouseInPreview && previewDims.w > 0;

  const backgroundImage = showOnImage ? (
    <img
      src={landscapeSrc}
      alt=""
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.48' }}
    />
  ) : null;

  const buttonContent = (
    <div style={{ position: 'relative', width: '100%', maxWidth: 320, padding: '0 24px' }}>
      <Button icon={showIcon ? <ArrowIcon /> : undefined} iconPosition="trailing">
        Blog
      </Button>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', paddingBottom: 88 }}>
      {/* Preview */}
      <div
        ref={previewRef}
        style={{
          position: 'relative',
          flex: 1,
          minHeight: 160,
          borderRadius: 4,
          overflow: 'hidden',
          cursor: magnifier ? 'none' : 'default',
          ...previewContentStyle(showOnImage),
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setMouseInPreview(true)}
        onMouseLeave={() => setMouseInPreview(false)}
      >
        {backgroundImage}
        {buttonContent}

        {/* Magnifier lens */}
        {showLens && (
          <div style={{
            position: 'absolute',
            left: mousePos.x - LENS_R,
            top: mousePos.y - LENS_R,
            width: LENS_R * 2,
            height: LENS_R * 2,
            borderRadius: '50%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 10,
            background: '#1E2020',
            border: '1.5px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
          }}>
            {/* Replica of preview content, scaled 2× around cursor point */}
            <div style={{
              position: 'absolute',
              left: LENS_R - mousePos.x,
              top: LENS_R - mousePos.y,
              width: previewDims.w,
              height: previewDims.h,
              transform: 'scale(2)',
              transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: showOnImage ? undefined : 'transparent',
            }}>
              {backgroundImage}
              {buttonContent}
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <style>{`
        .exp-controls { display: flex; align-items: center; justify-content: center; gap: 24px; }
        .exp-control { display: flex; align-items: center; gap: 8px; }
        @media (max-width: 480px) {
          .exp-control { flex-direction: column; gap: 4px; }
        }
      `}</style>
      <div className="exp-controls" style={{ position: 'absolute', bottom: 16, left: 0, right: 0 }}>
        <div className="exp-control">
          <label htmlFor="toggle-icon" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
            Show icon
          </label>
          <Toggle id="toggle-icon" checked={showIcon} onChange={setShowIcon} />
        </div>
        <div className="exp-control">
          <label htmlFor="toggle-image" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
            Show on image
          </label>
          <Toggle id="toggle-image" checked={showOnImage} onChange={setShowOnImage} />
        </div>
        <div className="exp-control">
          <label htmlFor="toggle-magnifier" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
            Magnifier
          </label>
          <Toggle id="toggle-magnifier" checked={magnifier} onChange={setMagnifier} />
        </div>
      </div>
    </div>
  );
}
