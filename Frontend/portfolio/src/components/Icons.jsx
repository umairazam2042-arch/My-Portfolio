// Small inline icon set. Each icon inherits color from currentColor.
const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true }

export const GithubIcon = (props) => (
  <svg {...base} {...props}>
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
    />
  </svg>
)

export const LinkedinIcon = (props) => (
  <svg {...base} {...props}>
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
    />
  </svg>
)

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

export const WhatsappIcon = (props) => (
  <svg {...base} {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-2-1.23 7.5 7.5 0 0 1-1.38-1.72c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.17 1.77 2.7 4.29 3.79 2.52 1.08 2.52.72 2.97.68.46-.04 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.17-.48-.29z"
    />
  </svg>
)

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const ExternalLinkIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowUpIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const InstagramIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
)
