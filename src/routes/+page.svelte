<script lang="ts">
    import { appStore } from "$lib/stores/appState";
    import { fly, fade } from "svelte/transition";

    let isSessionActive = false;
    let isUnlocked = false;

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

    function handleComplete() {
        appStore.unlock();
    }

    function handleReset() {
        appStore.reset();
        isUnlocked = false;
    }

    import { onMount, onDestroy } from "svelte";

    // Memory Verses for Slideshow
    const MEMORY_VERSES = [
        {
            text: "Thy word is a lamp unto my feet, and a light unto my path.",
            ref: "Psalm 119:105",
        },
        {
            text: "I can do all things through Christ which strengtheneth me.",
            ref: "Philippians 4:13",
        },
        {
            text: "The Lord is my shepherd; I shall not want.",
            ref: "Psalm 23:1",
        },
        {
            text: "For God so loved the world, that he gave his only begotten Son.",
            ref: "John 3:16",
        },
        {
            text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
            ref: "Proverbs 3:5",
        },
    ];

    let currentVerseIndex = 0;
    let leftVerseIndex = 2; // Offset for variety

    // Timer for slideshow
    let slideInterval: any;

    onMount(() => {
        slideInterval = setInterval(() => {
            currentVerseIndex = (currentVerseIndex + 1) % MEMORY_VERSES.length;
            leftVerseIndex = (leftVerseIndex + 1) % MEMORY_VERSES.length;
        }, 5000); // Change verse every 5 seconds
    });

    onDestroy(() => {
        if (slideInterval) clearInterval(slideInterval);
    });

    // Format timer as mm:ss (though likely just seconds for now)
    $: formattedTime =
        $appStore.timer < 10 ? `0${$appStore.timer}` : $appStore.timer;
</script>

<div class="page-wrapper">
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
                            Unlock Screen
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
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <rect
                                    x="5"
                                    y="2"
                                    width="14"
                                    height="20"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <path d="M12 18h.01"></path>
                                <path d="M12 6v4"></path>
                                <path d="M10 8h4"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 class="hero-title">
                        Study the Word to <br class="desktop-br" /> unlock your apps
                    </h1>

                    <div class="store-badges">
                        <button class="store-btn">
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
                        </button>
                        <button class="store-btn">
                            <svg
                                class="store-icon"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                ><path
                                    d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15C3.84,2.15 6.05,2.66 6.05,2.66Z"
                                /></svg
                            >
                            <div class="btn-text">
                                <span class="small">GET IT ON</span>
                                <span class="large">Google Play</span>
                            </div>
                        </button>
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
                                {#key leftVerseIndex}
                                    <div
                                        class="fake-content verse-slide"
                                        in:fade={{ duration: 800 }}
                                    >
                                        <p class="slide-text">
                                            “{MEMORY_VERSES[leftVerseIndex]
                                                .text}”
                                        </p>
                                        <p class="slide-ref">
                                            {MEMORY_VERSES[leftVerseIndex].ref}
                                        </p>
                                    </div>
                                {/key}
                            </div>
                        </div>
                    </div>

                    <!-- Center Phone (Main) -->
                    <div class="phone-pos center">
                        <div class="phone-mockup main">
                            <div class="notch"></div>
                            <div class="screen">
                                <div class="status-bar">
                                    <span>9:41</span>
                                    <div class="status-icons">
                                        <svg
                                            width="14"
                                            height="10"
                                            viewBox="0 0 16 12"
                                            fill="currentColor"
                                            ><path
                                                d="M1 6h2v4H1zm4-2h2v6H5zm4-3h2v9H9zm4 4h2v5h-2z"
                                            /></svg
                                        >
                                    </div>
                                </div>

                                <div class="app-ui">
                                    <div class="app-header-text">
                                        <h2>
                                            It is time to study God's Word.
                                            Let's go!
                                        </h2>
                                        <p>
                                            App opens after you have read.<br
                                            />Tap on "Let's study" to get
                                            started.
                                        </p>
                                    </div>

                                    <div class="cross-card">
                                        <div class="cross-visual">
                                            <svg
                                                width="60"
                                                height="60"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                opacity="0.8"
                                            >
                                                <path
                                                    d="M11 2v8H3v4h8v8h4v-8h8v-4h-8V2h-4z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <button
                                        class="btn-app-action"
                                        on:click={handleStart}
                                    >
                                        Let's Study
                                    </button>
                                </div>
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
                                {#key currentVerseIndex}
                                    <div
                                        class="fake-content verse-slide"
                                        in:fade={{ duration: 800 }}
                                    >
                                        <p class="slide-text">
                                            “{MEMORY_VERSES[currentVerseIndex]
                                                .text}”
                                        </p>
                                        <p class="slide-ref">
                                            {MEMORY_VERSES[currentVerseIndex]
                                                .ref}
                                        </p>
                                    </div>
                                {/key}
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
                    </div>
                </footer>
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        background-color: #0b0b0b;
        color: #fff;
    }

    .page-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        overflow-x: hidden;
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
        width: 56px;
        height: 56px;
        background: rgba(255, 255, 255, 0.08); /* slight transparency */
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .brand-icon svg {
        color: #fff;
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
        border: 1px solid rgba(255, 255, 255, 0.2);
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
    }

    .store-btn:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: #fff;
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
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    }

    .phone-mockup.side {
        opacity: 0.6;
        filter: blur(0.5px);
    }

    .screen {
        background: #1c1c1e;
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

    .status-bar {
        height: 44px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0.5rem 1.5rem;
        font-size: 0.8rem;
        font-weight: 600;
        padding-bottom: 0.25rem;
        color: #fff;
    }

    .app-ui {
        flex: 1;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2.5rem;
        text-align: center;
    }

    .app-header-text h2 {
        font-family: var(--font-serif);
        font-size: 1.7rem;
        line-height: 1.2;
        margin-bottom: 0.75rem;
    }

    .app-header-text p {
        font-size: 0.8rem;
        color: #888;
        line-height: 1.4;
        margin: 0;
    }

    .cross-card {
        flex: 1;
        width: 100%;
        max-height: 220px;
        background: #2a2a2c;
        border-radius: 4px; /* Distinctive shape from image */
        margin: 1.5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .cross-card::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.05) 0%,
            transparent 100%
        );
    }

    .btn-app-action {
        width: 100%;
        background: #333;
        color: #fff;
        border: none;
        padding: 1rem;
        border-radius: 14px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
    }
    .btn-app-action:hover {
        background: #444;
    }

    /* Dummy Content for Side Phones */
    .fake-content {
        padding: 4rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        opacity: 0.8; /* Increased opacity for readability */
        height: 100%;
        justify-content: center;
    }

    .slide-text {
        font-family: var(--font-serif);
        font-size: 1.2rem;
        line-height: 1.5;
        color: #fff;
        margin: 0;
        margin-bottom: 1rem;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }

    .slide-ref {
        font-family: var(--font-sans);
        font-size: 0.8rem;
        color: #aaa;
        text-align: right;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
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
        font-family: var(--font-serif);
        font-size: 1.4rem;
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
        background: #fff;
        color: #000;
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
