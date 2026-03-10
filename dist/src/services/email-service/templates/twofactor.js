"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const TwoFactorTemplate = ({ code, expiryMinutes }) => ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsxs)(components_1.Body, { style: styles.body, children: [(0, jsx_runtime_1.jsxs)(components_1.Container, { style: styles.container, children: [(0, jsx_runtime_1.jsx)("div", { style: styles.logoWrapper, children: (0, jsx_runtime_1.jsxs)("span", { style: styles.logoText, children: ["Strat", (0, jsx_runtime_1.jsx)("span", { style: styles.logoAccent, children: "um" })] }) }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.label, children: "Verify Your Identity" }), (0, jsx_runtime_1.jsx)(components_1.Heading, { style: styles.heading, children: "Your two-factor authentication code" }), (0, jsx_runtime_1.jsx)(components_1.Section, { style: styles.codeSection, children: (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.codeText, children: code }) }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: styles.expiryText, children: ["This code expires in ", expiryMinutes, " minutes."] }), (0, jsx_runtime_1.jsx)("div", { style: styles.divider }), (0, jsx_runtime_1.jsxs)(components_1.Text, { style: styles.footerNote, children: ["Not expecting this email?", ' ', (0, jsx_runtime_1.jsx)(components_1.Link, { href: "mailto:[EMAIL_ADDRESS]", style: styles.link, children: "Contact support" }), ' ', "if you did not request this code."] })] }), (0, jsx_runtime_1.jsx)(components_1.Text, { style: styles.poweredBy, children: "Securely powered by Stratum" })] })] }));
exports.TwoFactorTemplate = TwoFactorTemplate;
// --- Stratum design tokens (mirrored from index.css) ---
const PRIMARY = '#e8a020'; // --color-amber
const PRIMARY_BRIGHT = '#ffb733'; // --color-amber-bright
const PRIMARY_DIM = 'rgba(232, 160, 32, 0.08)'; // --color-amber-dim
const PRIMARY_GLOW = 'rgba(232, 160, 32, 0.20)'; // --color-amber-glow
const BG = '#05050a'; // --color-bg
const SURFACE = '#0c0c14'; // --color-surface
const BORDER = '#1e1e30'; // --color-border
const TEXT = '#eeeef5'; // --color-text
const TEXT_MID = '#8888aa'; // --color-text-mid
const TEXT_DIM = '#44445a'; // --color-text-dim
const styles = {
    body: {
        backgroundColor: BG,
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        margin: 0,
        padding: '40px 0',
    },
    container: {
        backgroundColor: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: '12px',
        boxShadow: `0 0 40px -10px rgba(232, 160, 32, 0.15)`,
        maxWidth: '400px',
        margin: '0 auto',
        padding: '48px 40px 40px',
    },
    logoWrapper: {
        textAlign: 'center',
        marginBottom: '32px',
    },
    logoText: {
        fontSize: '26px',
        fontWeight: 800,
        fontFamily: 'monospace',
        color: TEXT,
        letterSpacing: '-0.5px',
    },
    logoAccent: {
        color: PRIMARY,
    },
    label: {
        color: PRIMARY,
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        textAlign: 'center',
        margin: '0 0 10px',
    },
    heading: {
        color: TEXT,
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '26px',
        textAlign: 'center',
        margin: '0 0 28px',
        fontFamily: 'monospace',
    },
    codeSection: {
        background: PRIMARY_DIM,
        border: `1px solid ${PRIMARY_GLOW}`,
        borderRadius: '8px',
        padding: '16px',
        margin: '0 0 16px',
        textAlign: 'center',
    },
    codeText: {
        color: TEXT,
        fontSize: '36px',
        fontWeight: 800,
        letterSpacing: '10px',
        lineHeight: '44px',
        margin: 0,
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    expiryText: {
        color: TEXT_MID,
        fontSize: '13px',
        textAlign: 'center',
        margin: '0 0 24px',
    },
    divider: {
        borderTop: `1px solid ${BORDER}`,
        margin: '0 0 20px',
    },
    footerNote: {
        color: TEXT_MID,
        fontSize: '13px',
        lineHeight: '20px',
        textAlign: 'center',
        margin: 0,
    },
    link: {
        color: PRIMARY_BRIGHT,
        textDecoration: 'underline',
    },
    poweredBy: {
        color: TEXT_DIM,
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '20px',
    },
};
exports.default = exports.TwoFactorTemplate;
//# sourceMappingURL=twofactor.js.map