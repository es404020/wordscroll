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
            <h1>Terms of Service</h1>
            <p class="effective-date">Effective Date: October 14, 2024</p>
        </header>

        <section class="terms-content">
            <p class="intro">
                Welcome to Wordscroll! By using our app, you agree to the
                following Terms of Service. Please read them carefully before
                using the app.
            </p>

            <article>
                <h3>1. Acceptance of Terms</h3>
                <p>
                    By downloading, installing, or using Wordscroll (“the App”),
                    you agree to be bound by these Terms of Service (“Terms”).
                    If you do not agree to these Terms, please do not use the
                    App.
                </p>
            </article>

            <article>
                <h3>2. Eligibility</h3>
                <p>
                    You must be at least 13 years of age to use this app. By
                    using the App, you affirm that you meet this age
                    requirement.
                </p>
            </article>

            <article>
                <h3>3. Usage of the App</h3>
                <p>
                    Wordscroll is designed to help users pause and study the
                    Word before using their phones. You agree to use the app
                    only for lawful purposes and in accordance with these Terms.
                    You must not use the App in any way that could damage or
                    impair its functionality or access to other users.
                </p>
            </article>

            <article>
                <h3>4. Privacy</h3>
                <p>
                    We respect your privacy. Please review our Privacy Policy
                    for details about how we collect, use, and protect your
                    personal data.
                </p>
            </article>

            <article>
                <h3>5. User Content</h3>
                <p>
                    Wordscroll may allow users to create personalized
                    reflections or other content (“User Content”). You are
                    responsible for your User Content and agree not to post or
                    share any material that is offensive, harmful, or violates
                    any laws.
                </p>
            </article>

            <article>
                <h3>6. License</h3>
                <p>
                    Wordscroll grants you a limited, non-exclusive,
                    non-transferable, revocable license to use the App for
                    personal, non-commercial use. You agree not to modify,
                    distribute, or create derivative works based on the App.
                </p>
            </article>

            <article>
                <h3>7. Donations</h3>
                <p>
                    Wordscroll may offer donation options to support the app.
                    Donations are voluntary and non-refundable. By making a
                    donation, you agree to the terms associated with the payment
                    service provider used.
                </p>
            </article>

            <article>
                <h3>8. Modifications to the App</h3>
                <p>
                    We reserve the right to modify or discontinue the App at any
                    time without notice. We are not liable to you or any third
                    party for any modification, suspension, or discontinuation
                    of the App.
                </p>
            </article>

            <article>
                <h3>9. Termination</h3>
                <p>
                    We reserve the right to suspend or terminate your access to
                    the App if you violate these Terms. Upon termination, your
                    right to use the App will cease immediately.
                </p>
            </article>

            <article>
                <h3>10. Disclaimer of Warranties</h3>
                <p>
                    Wordscroll is provided on an “as is” and “as available”
                    basis. We do not guarantee that the App will be error-free,
                    secure, or uninterrupted.
                </p>
            </article>

            <article>
                <h3>11. Limitation of Liability</h3>
                <p>
                    To the maximum extent permitted by law, Wordscroll and its
                    developers will not be liable for any damages arising out of
                    your use of the App.
                </p>
            </article>

            <article>
                <h3>12. Governing Law</h3>
                <p>
                    These Terms are governed by and construed in accordance with
                    the laws of your jurisdiction. Any legal actions arising
                    from these Terms will be brought in the courts of your
                    jurisdiction.
                </p>
            </article>

            <article>
                <h3>13. Changes to Terms</h3>
                <p>
                    We may update these Terms from time to time. Any changes
                    will be posted within the App or on our website. By
                    continuing to use the App, you accept the updated Terms.
                </p>
            </article>

            <article>
                <h3>14. Contact Information</h3>
                <p>
                    If you have any questions or concerns about these Terms,
                    please contact us.
                </p>
            </article>
        </section>

        <footer>
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

    .effective-date {
        font-family: var(--font-sans);
        color: var(--color-text-secondary);
        font-size: 0.9rem;
    }

    .intro {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--color-text-dim);
        margin-bottom: 3rem;
    }

    article {
        margin-bottom: 2.5rem;
    }

    h3 {
        font-family: var(--font-serif);
        font-size: 1.5rem;
        color: var(--color-text-primary);
        margin-bottom: 1rem;
    }

    p {
        font-family: var(--font-sans);
        line-height: 1.7;
        color: var(--color-text-secondary);
        margin: 0;
    }

    footer {
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid var(--color-border);
        text-align: center;
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
    }
</style>
