import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
  const currentTheme = (() => {
    if (browser) {
      return localStorage.getItem('theme-preference') || 'auto';
    }
  })();

  const { subscribe, set } = writable<string>(currentTheme);

  return {
    subscribe,
    set: (value: string) => {
      if (browser) {
        localStorage.setItem('theme-preference', value);
        document.firstElementChild?.setAttribute('data-theme', value);
      }
      set(value);
    }
  };
}

export const theme = createTheme();