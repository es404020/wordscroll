<script lang="ts">
    import { appStore } from "$lib/stores/appState";
    import { fly, fade } from "svelte/transition";

    import { onMount, onDestroy } from "svelte";

    let isSessionActive = false;
    let isUnlocked = false;

    // Mobile Slideshow Logic
    let isMobile = false;
    let mobileImageIndex = 0;
    const MOBILE_IMAGES = [
        "/screen-landing.png",
        "/screen-reading.png",
        "/screen-recite.png",
    ];
    let slideInterval: any;

    let isLoading = true;

    onMount(() => {
        setTimeout(() => {
            isLoading = false;
        }, 3000);

        checkMobile();
        window.addEventListener("resize", checkMobile);

        slideInterval = setInterval(() => {
            if (isMobile) {
                mobileImageIndex =
                    (mobileImageIndex + 1) % MOBILE_IMAGES.length;
            }
        }, 3000); // Cycle every 3 seconds

        return () => {
            window.removeEventListener("resize", checkMobile);
            clearInterval(slideInterval);
        };
    });

    function checkMobile() {
        isMobile = window.innerWidth <= 768; // Match CSS media query
    }

    // Reactively update local state based on store
    $: {
        if ($appStore.timer > 0 && $appStore.currentVerse) {
            isSessionActive = true;
            isUnlocked = false;
        } else if ($appStore.timer === 0 && $appStore.currentVerse) {
            isSessionActive = false; // Timer done, waiting for user to proceed
        }

        if (!$appStore.isLocked) {
            isUnlocked = true;
            isSessionActive = false;
        }
    }

    function handleStart() {
        appStore.startSession();
    }

    // Format timer as mm:ss (though likely just seconds for now)
    $: formattedTime =
        $appStore.timer < 10 ? `0${$appStore.timer}` : $appStore.timer;

    function handleReset(
        event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
    ) {
        throw new Error("Function not implemented.");
    }

    function handleComplete(
        event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
    ) {
        throw new Error("Function not implemented.");
    }
</script>

<div class="page-wrapper">
    {#if isLoading}
        <div class="preloader" out:fade={{ duration: 300 }}>
            <img src="/logo.png" alt="Wordscroll" class="preloader-logo" />
        </div>
    {/if}
    <div class="content-card">
        {#if isUnlocked}
            <div class="view-state success-view" in:fade={{ duration: 400 }}>
                <div class="icon-wrapper success-icon">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                        ></path><polyline points="22 4 12 14.01 9 11.01"
                        ></polyline></svg
                    >
                </div>
                <h1>Wordscroll Unlocked</h1>
                <p class="subtitle">You have redeemed the time.</p>
                <button class="btn-outline" on:click={handleReset}
                    >Lock App Again</button
                >
            </div>
        {:else if $appStore.currentVerse}
            <!-- Verse & Timer View -->
            <div
                class="view-state verse-view"
                in:fly={{ y: 30, duration: 600, opacity: 0 }}
            >
                <div class="progress-track">
                    <div
                        class="progress-bar"
                        style="width: {(($appStore.targetTime -
                            $appStore.timer) /
                            $appStore.targetTime) *
                            100}%"
                    ></div>
                </div>

                <div class="scroll-content">
                    <div class="verse-body">
                        <p class="verse-text">
                            “{$appStore.currentVerse.text}”
                        </p>
                        <p class="verse-ref">
                            {$appStore.currentVerse.reference}
                        </p>
                    </div>
                </div>

                <div class="action-area">
                    {#if $appStore.timer > 0}
                        <div class="timer-badge">
                            <span class="label">Reading Time</span>
                            <span class="time">{formattedTime}s</span>
                        </div>
                    {:else}
                        <button
                            class="btn-primary entrance-anim"
                            on:click={handleComplete}
                        >
                            Earn Screen Time
                        </button>
                    {/if}
                </div>
            </div>
        {:else}
            <!-- Locked / Landing View -->
            <div
                class="view-state locked-view"
                in:fly={{ y: 30, duration: 1000, delay: 200 }}
            >
                <!-- Header Section -->
                <header class="hero-header">
                    <div class="brand-icon">
                        <div class="icon-bg">
                            <img
                                src="/logo.png"
                                alt="Wordscroll Logo"
                                class="brand-logo"
                            />
                        </div>
                    </div>
                    <h1 class="hero-title">
                        Study the Word to <br class="desktop-br" /> unlock your apps
                    </h1>

                    <div class="store-badges">
                        <a
                            href="https://apps.apple.com/ng/app/word-scroll/id6756980228"
                            target="_blank"
                            class="store-btn"
                        >
                            <svg
                                class="store-icon"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                ><path
                                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.06 2.68.75 3.4 1.88-2.92 1.9-2.3 6.1.65 7.42-.69 1.76-1.63 3.5-2.64 3.73zM12.91 5.34C13.56 4.46 13.97 3.25 13.88 2c-1.31.05-2.73.91-3.35 1.73-.55.72-.98 1.95-.91 3.19 1.45.12 2.69-.75 3.29-1.58z"
                                /></svg
                            >
                            <div class="btn-text">
                                <span class="small">Download on the</span>
                                <span class="large">App Store</span>
                            </div>
                        </a>
                    </div>
                </header>

                <div class="phones-stage">
                    <!-- Left Phone (Background) -->
                    <div
                        class="phone-pos left"
                        in:fly={{ x: -100, duration: 1000, delay: 300 }}
                    >
                        <div class="phone-mockup side">
                            <div class="screen">
                                <img
                                    src="/screen-reading.png"
                                    alt="Reading View"
                                    class="app-screen-img"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Center Phone (Main) -->
                    <div class="phone-pos center">
                        <div class="phone-mockup main">
                            <div class="notch"></div>
                            <div class="screen">
                                {#key isMobile ? mobileImageIndex : "static"}
                                    <img
                                        src={isMobile
                                            ? MOBILE_IMAGES[mobileImageIndex]
                                            : "/screen-landing.png"}
                                        alt="App Screen"
                                        class="app-screen-img"
                                        in:fade={{
                                            duration: isMobile ? 500 : 0,
                                        }}
                                    />
                                {/key}
                                <button
                                    class="invisible-trigger"
                                    on:click={handleStart}
                                    aria-label="Start Session"
                                ></button>
                            </div>
                        </div>
                    </div>

                    <!-- Right Phone (Background) -->
                    <div
                        class="phone-pos right"
                        in:fly={{ x: 100, duration: 1000, delay: 300 }}
                    >
                        <div class="phone-mockup side">
                            <div class="screen">
                                <img
                                    src="/screen-recite.png"
                                    alt="Recite View"
                                    class="app-screen-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="legal-footer">
                    <p class="copyright">
                        © 2026 Wordscroll. All rights reserved.
                    </p>
                    <div class="legal-links">
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/support">Support</a>
                    </div>
                </footer>
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        background-color: var(--color-bg);
        color: var(--color-text-primary);
    }

    .page-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        overflow-x: hidden;
    }

    /* Preloader */
    .preloader {
        position: fixed;
        inset: 0;
        background-color: var(--color-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .preloader-logo {
        width: 80px;
        height: 80px;
        object-fit: contain;
        animation: pulse 2s infinite ease-in-out;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 0.8;
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0.8;
        }
    }

    .content-card {
        width: 100%;
        max-width: 1200px;
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* Transition Containers */
    .view-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        padding: 2rem 1rem;
    }

    /* --- LOCKED VIEW / LANDING PAGE --- */

    /* Hero Header */
    .hero-header {
        margin-top: 4vh;
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        z-index: 20;
    }

    .brand-icon .icon-bg {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .brand-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .hero-title {
        font-family: var(--font-serif);
        font-size: 3.5rem;
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: -0.01em;
        margin: 0;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }

    .store-badges {
        display: flex;
        gap: 1rem;
        margin-top: 0.5rem;
    }

    .store-btn {
        background: transparent;
        border: 1px solid var(--color-border);
        border-radius: 8px;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        color: #fff;
        min-width: 160px;
        text-align: left;
        text-decoration: none;
    }

    .store-btn:hover {
        background: rgba(165, 245, 156, 0.05);
        border-color: var(--color-accent);
        transform: translateY(-2px);
    }

    .store-icon {
        width: 24px;
        height: 24px;
        color: #ddd;
    }

    .btn-text {
        display: flex;
        flex-direction: column;
        line-height: 1.1;
    }

    .btn-text .small {
        font-size: 0.65rem;
        text-transform: uppercase;
        opacity: 0.8;
    }

    .btn-text .large {
        font-size: 1rem;
        font-weight: 600;
        font-family: var(--font-sans);
    }

    /* Phones Presentation */
    .phones-stage {
        position: relative;
        width: 100%;
        height: 520px;
        display: flex;
        justify-content: center;
        align-items: flex-start; /* Align to top so they hand down */
        margin-top: 1rem;
        perspective: 1000px;
    }

    /* Wrapper for Positioning */
    .phone-pos {
        position: absolute;
        width: 260px;
        height: 520px;
        left: 50%;
        /* Default anchor is center */
        transform-origin: center center;
    }

    /* Wrappers specific positions */
    .phone-pos.center {
        z-index: 10;
        transform: translateX(-50%);
    }

    .phone-pos.left {
        z-index: 5;
        /* Move left by 230px, down 40px, rotate -10deg */
        transform: translateX(-50%) translateX(-230px) translateY(40px)
            rotate(-10deg) scale(0.9);
    }

    .phone-pos.right {
        z-index: 5;
        /* Move right by 230px, down 40px, rotate 10deg */
        transform: translateX(-50%) translateX(230px) translateY(40px)
            rotate(10deg) scale(0.9);
    }

    /* The visual phone box */
    .phone-mockup {
        width: 100%;
        height: 100%;
        background: #000;
        border-radius: 40px;
        border: 8px solid #1a1a1a;
        overflow: hidden;
        box-shadow: 0 20px 50px rgba(0, 5, 0, 0.8);
    }

    .phone-mockup.side {
        opacity: 0.6;
        filter: blur(0.5px);
    }

    .screen {
        background: var(--color-bg);
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    /* Phone Internal UI (Center) */
    .notch {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40%;
        height: 24px;
        background: #000;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        z-index: 20;
    }

    .app-screen-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .invisible-trigger {
        position: absolute;
        bottom: 8%; /* Approximate button position */
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 60px;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 50;
    }

    /* Footer */
    .legal-footer {
        width: 100%;
        padding: 3rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        color: #555;
        max-width: 1000px;
        margin-top: auto;
    }

    .legal-links {
        display: flex;
        gap: 2rem;
    }

    .legal-links a {
        color: #555;
        text-decoration: none;
        transition: color 0.2s;
    }

    .legal-links a:hover {
        color: #888;
    }

    /* Existing Verse/Success View Styling (Preserved/Adapted) */
    .verse-view,
    .success-view {
        padding-top: 10vh;
        max-width: 480px;
        margin: 0 auto;
    }

    .progress-track {
        width: 100%;
        height: 4px;
        background: #222;
        margin-bottom: 2rem;
        border-radius: 2px;
        overflow: hidden;
    }
    .progress-bar {
        height: 100%;
        background: #fff;
        transition: width 1s linear;
    }
    .scroll-content {
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.03) 0%,
            rgba(255, 255, 255, 0.01) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 2rem;
        margin-bottom: 2rem;
        text-align: left;
    }
    .verse-text {
        font-family: var(--font-scripture);
        font-size: 1.5rem;
        line-height: 1.6;
        color: #e0e0e0;
        margin-bottom: 1.5rem;
    }
    .verse-ref {
        font-family: var(--font-sans);
        font-size: 0.85rem;
        text-align: right;
        color: #777;
    }
    .timer-badge .time {
        font-family: var(--font-serif);
        font-size: 1.5rem;
    }
    .btn-primary.entrance-anim {
        background: var(--color-accent);
        color: #050905;
        border-radius: 30px;
        border: none;
        padding: 1rem 2rem;
        font-weight: 600;
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .hero-title {
            font-size: 2.5rem;
        }

        .store-badges {
            flex-direction: column;
            width: 100%;
            align-items: center;
        }

        .store-btn {
            width: 100%;
            max-width: 240px;
            justify-content: center;
        }

        .phones-stage {
            height: 450px;
        }

        .phone-mockup {
            width: 240px;
            height: 460px;
        }

        .left,
        .right {
            display: none; /* Hide side phones on mobile to avoid clutter/overflow */
        }

        .legal-footer {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
