import { AnimatePresence } from "framer-motion";
import { Toast } from "./Toast";
import { useToastStore } from "@/lib/toastStore";

export function ToastContainer() {
  const toasts = useToastStore();

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
