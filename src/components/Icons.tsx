import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function baseProps(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };
}

export function ArrowUpRight({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ArrowRight({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Download({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function Github({ size = 20, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  );
}

export function Linkedin({ size = 20, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

export function Mail({ size = 20, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone({ size = 20, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function MapPin({ size = 20, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Menu({ size = 24, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close({ size = 24, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Sun({ size = 19, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function Moon({ size = 19, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

export function VolumeOff({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="m22 9-6 6M16 9l6 6" />
    </svg>
  );
}

export function Check({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function ExternalLink({ size = 18, ...props }: IconProps) {
  return <ArrowUpRight size={size} {...props} />;
}

export function ChevronDown({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
