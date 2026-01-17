import React, { useState } from 'react';
import Typography from '../components/Typography';
import styles from './LandingPage.module.scss';
import { Button } from '../components/Form';
import Stack from '../components/Layout/Stack';
import { Menu, X, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Logo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <Stack direction="row" gap="1rem" align="center">
                    <Logo />
                </Stack>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    {['Products', 'Solutions', 'Community', 'Resources', 'Pricing', 'Contact'].map(item => (
                        <a key={item} href="#" className={styles.navItem}>{item}</a>
                    ))}
                </nav>

                {/* Auth Buttons */}
                <div className={styles.authButtons}>
                    <Button variant="secondary">Sign In</Button>
                    <Button variant="primary">Register</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {['Products', 'Solutions', 'Community', 'Resources', 'Pricing', 'Contact'].map(item => (
                        <a key={item} href="#" className={styles.navItem} onClick={toggleMenu} style={{ fontSize: '1.25rem', padding: '0.5rem 0' }}>{item}</a>
                    ))}
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Button variant="secondary" onClick={toggleMenu}>Sign In</Button>
                        <Button variant="primary" onClick={toggleMenu}>Register</Button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className={styles.hero}>
                <Typography variant="title-hero" style={{ marginTop: '2rem' }}>Title</Typography>
                <Typography variant="subtitle" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                    Subtitle describing the value proposition in a concise and engaging way.
                </Typography>
                <Stack direction="row" gap="1rem" style={{ marginTop: '1rem' }}>
                    <Button variant="secondary">Button</Button>
                    <Button variant="primary" style={{ backgroundColor: '#333' }}>Button</Button>
                </Stack>
            </section>

            {/* Banner Placeholder */}
            <div className={styles.banner}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            </div>

            {/* Testimonials / Content Section */}
            <section className={styles.contentSection}>
                <Typography variant="heading">Heading</Typography>
                <Typography variant="body-base" style={{ color: 'var(--color-text-secondary)' }}>Subheading</Typography>

                <div className={styles.grid}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className={styles.card}>
                            <Typography variant="heading" style={{ fontSize: '1.25rem' }}>"Quote"</Typography>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: 'auto' }}>
                                <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Avatar" className={styles.avatar} />
                                <div>
                                    <Typography variant="body-strong" style={{ display: 'block' }}>Title</Typography>
                                    <Typography variant="body-small" style={{ color: 'var(--color-text-secondary)' }}>Description</Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerColumn} style={{ maxWidth: '300px' }}>
                    <Logo />
                    <div className={styles.socials} style={{ marginTop: '1rem' }}>
                        <Twitter size={20} />
                        <Instagram size={20} />
                        <Youtube size={20} />
                        <Linkedin size={20} />
                    </div>
                </div>

                <div className={styles.footerColumn}>
                    <Typography variant="body-strong">Use cases</Typography>
                    <a href="#" className={styles.footerLink}>UI design</a>
                    <a href="#" className={styles.footerLink}>UX design</a>
                    <a href="#" className={styles.footerLink}>Wireframing</a>
                    <a href="#" className={styles.footerLink}>Diagramming</a>
                    <a href="#" className={styles.footerLink}>Brainstorming</a>
                    <a href="#" className={styles.footerLink}>Online whiteboard</a>
                    <a href="#" className={styles.footerLink}>Team collaboration</a>
                </div>

                <div className={styles.footerColumn}>
                    <Typography variant="body-strong">Explore</Typography>
                    <a href="#" className={styles.footerLink}>Design</a>
                    <a href="#" className={styles.footerLink}>Prototyping</a>
                    <a href="#" className={styles.footerLink}>Development features</a>
                    <a href="#" className={styles.footerLink}>Design systems</a>
                    <a href="#" className={styles.footerLink}>Collaboration features</a>
                    <a href="#" className={styles.footerLink}>Design process</a>
                    <a href="#" className={styles.footerLink}>FigJam</a>
                </div>

                <div className={styles.footerColumn}>
                    <Typography variant="body-strong">Resources</Typography>
                    <a href="#" className={styles.footerLink}>Blog</a>
                    <a href="#" className={styles.footerLink}>Best practices</a>
                    <a href="#" className={styles.footerLink}>Colors</a>
                    <a href="#" className={styles.footerLink}>Color wheel</a>
                    <a href="#" className={styles.footerLink}>Support</a>
                    <a href="#" className={styles.footerLink}>Developers</a>
                    <a href="#" className={styles.footerLink}>Resource library</a>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
