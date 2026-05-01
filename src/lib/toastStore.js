import { useState, useEffect } from "react";

let toasts = [];
let listeners = [];
let idCounter = 0;

function notifyListeners() {
  listeners.forEach((cb) => cb([...toasts]));
}

export function addToast({ type = "success", message }) {
  const id = ++idCounter;
  toasts = [...toasts, { id, type, message }];
  // Keep max 3
  if (toasts.length > 3) {
    toasts = toasts.slice(toasts.length - 3);
  }
  notifyListeners();
  return id;
}

export function removeToast(id) {
  toasts = toasts.filter((t) => t.id !== id);
  notifyListeners();
}

export function useToastStore() {
  const [state, setState] = useState([...toasts]);

  useEffect(() => {
    const cb = (next) => setState(next);
    listeners.push(cb);
    return () => {
      listeners = listeners.filter((l) => l !== cb);
    };
  }, []);

  return state;
}
