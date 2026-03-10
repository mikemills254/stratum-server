import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Section,
    Text,
} from '@react-email/components';
import React from "react"

interface TwoFactorTemplateProps {
    code?: string;
    expiryMinutes?: number;
}

export const TwoFactorTemplate = ({ code, expiryMinutes }: TwoFactorTemplateProps) => (
    <Html>
        <Head />
        <Body style={styles.body}>
            <Container style={styles.container}>

                <div style={styles.logoWrapper}>
                    <span style={styles.logoText}>
                        Strat<span style={styles.logoAccent}>um</span>
                    </span>
                </div>

                <Text style={styles.label}>Verify Your Identity</Text>

                <Heading style={styles.heading}>
                    Your two-factor authentication code
                </Heading>

                <Section style={styles.codeSection}>
                    <Text style={styles.codeText}>{code}</Text>
                </Section>

                <Text style={styles.expiryText}>
                    This code expires in {expiryMinutes} minutes.
                </Text>

                <div style={styles.divider} />

                <Text style={styles.footerNote}>
                    Not expecting this email?{' '}
                    <Link href="mailto:[EMAIL_ADDRESS]" style={styles.link}>
                        Contact support
                    </Link>{' '}
                    if you did not request this code.
                </Text>
            </Container>

            <Text style={styles.poweredBy}>Securely powered by Stratum</Text>
        </Body>
    </Html>
);

// --- Stratum design tokens (mirrored from index.css) ---
const PRIMARY = '#e8a020';                      // --color-amber
const PRIMARY_BRIGHT = '#ffb733';                      // --color-amber-bright
const PRIMARY_DIM = 'rgba(232, 160, 32, 0.08)';    // --color-amber-dim
const PRIMARY_GLOW = 'rgba(232, 160, 32, 0.20)';    // --color-amber-glow
const BG = '#05050a';                      // --color-bg
const SURFACE = '#0c0c14';                      // --color-surface
const BORDER = '#1e1e30';                      // --color-border
const TEXT = '#eeeef5';                      // --color-text
const TEXT_MID = '#8888aa';                      // --color-text-mid
const TEXT_DIM = '#44445a';                      // --color-text-dim

const styles: Record<string, React.CSSProperties> = {
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

export default TwoFactorTemplate;