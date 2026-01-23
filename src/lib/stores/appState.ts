import { writable } from 'svelte/store';
import { verses, type Verse } from '../data/verses';

interface AppState {
    isLocked: boolean;
    currentVerse: Verse | null;
    timer: number;
    targetTime: number;
}

const initialState: AppState = {
    isLocked: true,
    currentVerse: null,
    timer: 0,
    targetTime: 10 // Shortened for demo (usually 40s)
};

function createAppStore() {
    const { subscribe, set, update } = writable<AppState>(initialState);

    let intervalId: any;

    return {
        subscribe,
        startSession: () => {
            // Pick random verse
            const randomVerse = verses[Math.floor(Math.random() * verses.length)];
            const time = randomVerse.type === 'memory' ? 15 : 40; // longer for passages

            update(state => ({
                ...state,
                isLocked: true,
                currentVerse: randomVerse,
                timer: time,
                targetTime: time
            }));

            // Clear any existing interval
            if (intervalId) clearInterval(intervalId);

            // Start countdown
            intervalId = setInterval(() => {
                update(state => {
                    if (state.timer > 0) {
                        return { ...state, timer: state.timer - 1 };
                    } else {
                        clearInterval(intervalId);
                        return state;
                    }
                });
            }, 1000);
        },
        unlock: () => {
            update(state => ({ ...state, isLocked: false }));
        },
        reset: () => {
            set(initialState);
            if (intervalId) clearInterval(intervalId);
        }
    };
}

export const appStore = createAppStore();
