<script>
    import { fade } from "svelte/transition";
</script>

<div class="page-container">
    <div class="content-wrapper" in:fade={{ duration: 600 }}>
        <header class="terms-header">
            <div class="logo-area">
                <a href="/" class="home-link">
                    <img
                        src="/logo.png"
                        alt="Wordscroll Logo"
                        class="brand-logo"
                    />
                    <span>Wordscroll</span>
                </a>
            </div>
            <h1>Support</h1>
            <p class="subtitle">We're here to help</p>
        </header>

        <section class="support-content">
            <p class="intro">
                Have a question, issue, or suggestion? We'd love to hear from
                you. Reach out to us through any of the channels below and we'll
                get back to you as soon as possible.
            </p>

            <div class="contact-cards">
                <article class="contact-card">
                    <div class="card-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path
                                d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                            />
                        </svg>
                    </div>
                    <h3>Email Us</h3>
                    <p>
                        For general inquiries, bug reports, or feature requests.
                    </p>
                    <a href="mailto:es404020@gmail.com" class="contact-link">
                        es404020@gmail.com
                    </a>
                </article>

                <article class="contact-card">
                    <div class="card-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                            />
                        </svg>
                    </div>
                    <h3>Call or Text</h3>
                    <p>
                        Need immediate assistance? Give us a call or send a
                        text.
                    </p>
                    <a href="tel:+18143064024" class="contact-link">
                        +1 (814) 306-4024
                    </a>
                </article>
            </div>

            <article class="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div class="faq-item">
                    <h3>How do I reset my progress?</h3>
                    <p>
                        You can reset your progress from the settings menu
                        within the app. If you're having trouble, reach out to
                        us and we'll help you out.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>Is Wordscroll free to use?</h3>
                    <p>
                        Wordscroll is a paid application. A purchase or
                        subscription is required to use the app.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>Which Bible translations are supported?</h3>
                    <p>
                        We currently support major English translations. We're
                        working on adding more translations and languages in
                        future updates.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>How do I report a bug?</h3>
                    <p>
                        Please send us an email at
                        <a href="mailto:es404020@gmail.com"
                            >es404020@gmail.com</a
                        >
                        with a description of the issue, your device model, and OS
                        version. Screenshots are always helpful!
                    </p>
                </div>
            </article>
        </section>

        <footer>
            <div class="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <span class="divider">·</span>
                <a href="/terms">Terms of Service</a>
            </div>
            <p>© 2026 Wordscroll. All rights reserved.</p>
        </footer>
    </div>
</div>

<style>
    :global(body) {
        background-color: var(--color-bg);
        color: var(--color-text-primary);
    }

    .page-container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        padding: 4rem 1.5rem;
    }

    .content-wrapper {
        max-width: 800px;
        width: 100%;
    }

    .terms-header {
        margin-bottom: 4rem;
        text-align: center;
    }

    .logo-area {
        margin-bottom: 2rem;
    }

    .home-link {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: var(--color-text-primary);
        font-family: var(--font-serif);
        font-size: 1.25rem;
        opacity: 0.8;
        transition: opacity 0.2s;
    }

    .brand-logo {
        width: 32px;
        height: 32px;
        object-fit: contain;
    }

    .home-link:hover {
        opacity: 1;
    }

    h1 {
        font-family: var(--font-serif);
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        color: var(--color-text-primary);
    }

    .subtitle {
        font-family: var(--font-sans);
        color: var(--color-text-secondary);
        font-size: 1.1rem;
        margin: 0;
    }

    .intro {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--color-text-dim);
        margin-bottom: 3rem;
    }

    /* Contact Cards */
    .contact-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        margin-bottom: 4rem;
    }

    .contact-card {
        background: var(--color-surface, rgba(255, 255, 255, 0.03));
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        transition:
            border-color 0.3s,
            transform 0.3s;
    }

    .contact-card:hover {
        border-color: var(--color-text-dim);
        transform: translateY(-2px);
    }

    .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        color: var(--color-text-primary);
        margin-bottom: 1.25rem;
    }

    .contact-card h3 {
        font-family: var(--font-serif);
        font-size: 1.35rem;
        color: var(--color-text-primary);
        margin-bottom: 0.75rem;
    }

    .contact-card p {
        font-family: var(--font-sans);
        color: var(--color-text-secondary);
        line-height: 1.6;
        font-size: 0.95rem;
        margin-bottom: 1.25rem;
    }

    .contact-link {
        font-family: var(--font-sans);
        color: var(--color-text-primary);
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
        padding: 0.5rem 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: 8px;
        transition:
            background 0.2s,
            border-color 0.2s;
        display: inline-block;
    }

    .contact-link:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: var(--color-text-dim);
    }

    /* FAQ Section */
    .faq-section {
        margin-bottom: 2rem;
    }

    .faq-section h2 {
        font-family: var(--font-serif);
        font-size: 2rem;
        font-weight: 400;
        color: var(--color-text-primary);
        margin-bottom: 2rem;
    }

    .faq-item {
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--color-border);
    }

    .faq-item:first-of-type {
        border-top: 1px solid var(--color-border);
    }

    .faq-item h3 {
        font-family: var(--font-serif);
        font-size: 1.25rem;
        color: var(--color-text-primary);
        margin-bottom: 0.75rem;
    }

    .faq-item p {
        font-family: var(--font-sans);
        line-height: 1.7;
        color: var(--color-text-secondary);
        margin: 0;
    }

    .faq-item a {
        color: var(--color-text-primary);
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    /* Footer */
    footer {
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid var(--color-border);
        text-align: center;
    }

    .footer-links {
        margin-bottom: 1rem;
    }

    .footer-links a {
        font-family: var(--font-sans);
        color: var(--color-text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.2s;
    }

    .footer-links a:hover {
        color: var(--color-text-primary);
    }

    .divider {
        color: var(--color-text-dim);
        margin: 0 0.75rem;
    }

    footer p {
        font-size: 0.85rem;
        color: var(--color-text-dim);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        .page-container {
            padding: 2rem 1rem;
        }

        .contact-cards {
            grid-template-columns: 1fr;
        }

        .faq-section h2 {
            font-size: 1.75rem;
        }
    }
</style>
