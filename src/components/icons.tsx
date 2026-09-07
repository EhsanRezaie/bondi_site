interface IconProps {
  size?: number
  className?: string
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export const Heart = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .8-4.5 2-1.5-1.2-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />
  </svg>
)

export const Sun = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
  </svg>
)

export const Moon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
)

export const Shield = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
)

export const Check = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const Lock = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

export const Compass = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m16 8-2 6-6 2 2-6 6-2Z" />
  </svg>
)

export const Chat = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 20l1-4.9a8.4 8.4 0 1 1 17-3.6Z" />
    <path d="M8.5 10.5h7m-7 3.5h4" />
  </svg>
)

export const BadgeCheck = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.3 2.3L15.8 9.6" />
    <path d="m12 3 1.4-1h-2.8L12 3Z" opacity="0" />
  </svg>
)

export const Pin = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const Crown = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="m3 7 4.5 4L12 5l4.5 6L21 7l-1.8 11H4.8L3 7Z" />
  </svg>
)

export const Gift = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="11" width="16" height="9" rx="1.5" />
    <path d="M12 11v9M4 7h16v4H4zM12 7V4.5A2 2 0 0 1 14 2.5c1.7 0 2.5 1.5 2 3-1 .5-3-.2-4 .5ZM12 7V4.5A2 2 0 0 0 10 2.5C8.3 2.5 7.5 4 8 5.5c1 .5 3-.2 4 .5Z" />
  </svg>
)

export const Flag = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M5 21V4" />
    <path d="M5 4c3-1.5 5.5 1.5 9 0v8c-3.5 1.5-6-1.5-9 0" />
  </svg>
)

export const EyeOff = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M17.9 17.9A10 10 0 0 1 2 12a10 10 0 0 1 15.9-5.9M7.4 7.4A3.5 3.5 0 0 0 16.6 12M2 2l20 20" />
    <path d="M9.9 9.9a3.5 3.5 0 0 0 4.2 4.2" opacity="0" />
  </svg>
)

export const FlagShield = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 2 4 4.5v6c0 4.7 3.4 8.3 8 10 4.6-1.7 8-5.3 8-10v-6L12 2Z" />
    <path d="m8.8 11.8 2.2 2.2 4.2-4.2" />
  </svg>
)

export const MapPinOff = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s6.5-5 6.5-10.3A6.5 6.5 0 0 0 5.5 10.7C5.5 16 12 21 12 21Z" />
    <path d="M12 2v4m0 4a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3Z" opacity="0" />
  </svg>
)

export const Refresh = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M3 12a9 9 0 0 1 15.3-6.3L21 8" />
    <path d="M21 3v5h-5M21 12a9 9 0 0 1-15.3 6.3L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
)

export const Menu = ({ size = 24, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export const X = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Chevron = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const AndroidIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 10v5m16-5v5" />
    <path d="M5 10h14v4a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5v-4Z" />
    <path d="M7 9a5 5 0 0 1 10 0" />
    <path d="m8.5 5-1-2M15.5 5l1-2" />
  </svg>
)

export const AppleIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 7c-1.6 0-2.9-1-3.9-2.4C7.1 3 7 1 7.1 1c1.7 0 3 .9 3.9 2.4.9 1.3 1.2 3.6 1 3.6Z" />
    <path d="M16.5 8.5c-1.5 0-2.8 1-4.5 1s-3-1-4.5-1c-2 0-4 1.5-4 5 0 4 3 8.5 4.2 8.5.6 0 1-.5 2-.5s1.4.5 2 .5c1.3 0 3.4-4.2 3.8-5.6-2.3-1.2-2.9-4.4-1-6.9Z" />
  </svg>
)

export const Globe = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
  </svg>
)

export const Instagram = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
)

export const Telegram = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M21.5 4.5 2.8 11.6c-.9.35-.86 1.63.05 1.92l4.6 1.46 1.75 5.24c.3.9 1.45 1.1 2.03.36l2.5-3.2 4.8 3.52c.7.52 1.68.15 1.86-.7L22.6 5.6c.2-.9-.65-1.6-1.1-1.1Z" />
  </svg>
)

export const Twitter = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 4l7.2 9.3L4.4 20h2.5l5.4-5.2L16.6 20H20l-7.5-9.7L18.9 4h-2.5l-4.8 4.7L8 4H4Z" />
  </svg>
)

export const Mail = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const MessageHeart = ({ size = 22, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 20l1-4.9a8.4 8.4 0 1 1 17-3.6Z" />
    <path d="M12 14.5s-3.2-2-3.2-4a1.6 1.6 0 0 1 3.2-.6 1.6 1.6 0 0 1 3.2.6c0 2-3.2 4-3.2 4Z" />
  </svg>
)

/** Bondi logo mark — heart in a warm-orange gradient squircle. */
export const BondiMark = ({ size = 34, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
    <defs>
      <linearGradient id="bondiMarkG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF6B6B" />
        <stop offset="1" stopColor="#FFA751" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="16" fill="url(#bondiMarkG)" />
    <path
      fill="#fff"
      d="M32 48c-1 0-2-.4-2.7-1.1C21.4 39 16 34.6 16 28.5 16 23.7 19.7 20 24.5 20c2.9 0 5.7 1.5 7.5 3.9 1.8-2.4 4.6-3.9 7.5-3.9 4.8 0 8.5 3.7 8.5 8.5 0 6.1-5.4 10.5-13.3 18.4C34 47.6 33 48 32 48z"
    />
  </svg>
)
