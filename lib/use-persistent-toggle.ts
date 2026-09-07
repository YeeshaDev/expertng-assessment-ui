"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_PREFIX = "expertng:";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function emitChange() {
  for (const listener of listeners) listener();
}

function getServerSnapshot() {
  return false;
}

/**
 * A boolean toggle backed by localStorage, keyed by `key`, so the value
 * survives a page refresh. Renders `false` on the server and on first
 * client paint (avoiding a hydration mismatch), then reflects the stored
 * value once React syncs the external store after hydration.
 */
export function usePersistentToggle(key: string): [boolean, () => void] {
  const storageKey = `${STORAGE_PREFIX}${key}`;

  const getSnapshot = useCallback(() => {
    try {
      return localStorage.getItem(storageKey) === "1";
    } catch {
      return false;
    }
  }, [storageKey]);

  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    try {
      const next = localStorage.getItem(storageKey) !== "1";
      localStorage.setItem(storageKey, next ? "1" : "0");
    } catch {
      // localStorage unavailable (private browsing, etc.) - nothing to persist
    }
    emitChange();
  }, [storageKey]);

  return [value, toggle];
}
