<script>
    import { fade } from "svelte/transition";
</script>

<div class="page-container">
    <div class="content-wrapper" in:fade={{ duration: 600 }}>
        <header class="terms-header">
            <div class="logo-area">
                <a href="/" class="home-link">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Wordscroll</span>
                </a>
            </div>
            <h1>Privacy Policy</h1>
            <p class="effective-date">Effective Date: October 14, 2024</p>
        </header>

        <section class="terms-content">
            <p class="intro">
                At Wordscroll, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard your data when you
                use our app.
            </p>

            <article>
                <h3>1. Information We Collect</h3>
                <p>We collect the following types of information:</p>
                <ul class="policy-list">
                    <li>
                        <strong>Personal Information:</strong> When you voluntarily
                        provide it to us (such as your email address, username, or
                        other identifiable information), we collect and store this
                        data to enhance your experience with the app.
                    </li>
                    <li>
                        <strong>Usage Data:</strong> We collect information on how
                        you use the app, such as the time you spend using the app,
                        features accessed, and any errors encountered.
                    </li>
                    <li>
                        <strong>Device Information:</strong> We may collect information
                        about the device you are using, such as device type, operating
                        system, and app version.
                    </li>
                </ul>
            </article>

            <article>
                <h3>2. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul class="policy-list">
                    <li>Provide, maintain, and improve Wordscroll.</li>
                    <li>
                        Send you updates, notifications, or important
                        information about the app.
                    </li>
                    <li>Respond to your questions or support requests.</li>
                    <li>
                        Ensure the app is functioning correctly and troubleshoot
                        issues.
                    </li>
                </ul>
                <p>
                    We may also use anonymized data for analytical purposes to
                    improve our app and user experience.
                </p>
            </article>

            <article>
                <h3>3. Third-Party Services</h3>
                <p>
                    Wordscroll may use third-party services, such as analytics
                    providers or payment processors. These third-party services
                    may collect information in accordance with their own privacy
                    policies. We recommend reviewing those policies when
                    applicable.
                </p>
            </article>

            <article>
                <h3>4. Data Sharing</h3>
                <p>
                    We do not sell, trade, or share your personal information
                    with third parties, except in the following situations:
                </p>
                <ul class="policy-list">
                    <li>
                        <strong>Legal Requirements:</strong> If we are required by
                        law to disclose information.
                    </li>
                    <li>
                        <strong>Protection:</strong> To protect our rights, privacy,
                        safety, or property, or that of others.
                    </li>
                </ul>
            </article>

            <article>
                <h3>5. Data Security</h3>
                <p>
                    We take reasonable steps to protect your information from
                    unauthorized access, disclosure, alteration, or destruction.
                    However, no method of electronic storage or transmission is
                    100% secure, and we cannot guarantee the absolute security
                    of your data.
                </p>
            </article>

            <article>
                <h3>6. Your Rights</h3>
                <p>
                    Depending on your location, you may have certain rights
                    regarding your personal information, such as:
                </p>
                <ul class="policy-list">
                    <li>
                        <strong>Access:</strong> You can request a copy of the data
                        we have about you.
                    </li>
                    <li>
                        <strong>Correction:</strong> You can request corrections
                        to any inaccurate information.
                    </li>
                    <li>
                        <strong>Deletion:</strong> You may request that we delete
                        your personal information, subject to certain legal obligations.
                    </li>
                </ul>
                <p>
                    If you would like to exercise any of these rights, please
                    contact us.
                </p>
            </article>

            <article>
                <h3>7. Data Retention</h3>
                <p>
                    We retain your personal data only for as long as necessary
                    to fulfill the purposes outlined in this Privacy Policy. We
                    may also retain certain information for legal or
                    administrative purposes.
                </p>
            </article>

            <article>
                <h3>8. Children’s Privacy</h3>
                <p>
                    Wordscroll is not intended for use by children under the age
                    of 13. We do not knowingly collect personal information from
                    children under 13. If we discover that a child under 13 has
                    provided us with personal data, we will delete it
                    immediately.
                </p>
            </article>

            <article>
                <h3>9. Changes to This Privacy Policy</h3>
                <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted within the app or on our website. By
                    continuing to use the app, you agree to the revised Privacy
                    Policy.
                </p>
            </article>

            <article>
                <h3>10. Contact Us</h3>
                <p>
                    If you have any questions or concerns regarding this Privacy
                    Policy, please contact us.
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
        background-color: #0b0b0b;
        color: #e0e0e0;
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
        color: #fff;
        font-family: var(--font-serif);
        font-size: 1.25rem;
        opacity: 0.8;
        transition: opacity 0.2s;
    }

    .home-link:hover {
        opacity: 1;
    }

    h1 {
        font-family: var(--font-serif);
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
        color: #fff;
    }

    .effective-date {
        font-family: var(--font-sans);
        color: #888;
        font-size: 0.9rem;
    }

    .intro {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #ccc;
        margin-bottom: 3rem;
    }

    article {
        margin-bottom: 2.5rem;
    }

    h3 {
        font-family: var(--font-serif);
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 1rem;
    }

    p {
        font-family: var(--font-sans);
        line-height: 1.7;
        color: #bbb;
        margin: 0;
        margin-bottom: 1rem;
    }

    .policy-list {
        list-style-type: none;
        padding-left: 0;
        margin: 1rem 0;
    }

    .policy-list li {
        font-family: var(--font-sans);
        color: #bbb;
        line-height: 1.7;
        margin-bottom: 0.75rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .policy-list li::before {
        content: "•";
        position: absolute;
        left: 0;
        color: #666;
    }

    .policy-list strong {
        color: #e0e0e0;
        font-weight: 600;
    }

    footer {
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        font-size: 0.85rem;
        color: #666;
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
