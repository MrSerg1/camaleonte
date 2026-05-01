import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";
import { removeToast } from "@/lib/toastStore";

export function Toast({ id, type, message }) {
  const [progress, setProgress] = useState(100);
  const duration = 5000;

  useEffect(() => {
    const start = Date.now();
    let raf;

    const tick = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, duration - elapsed);
      setProgress((remaining / duration) * 100);
      if (remaining > 0) {
        raf = requestAnimationFrame(tick);
      } else {
        removeToast(id);
      }
    };

    const timeout = setTimeout(() => removeToast(id), duration);
    raf = requestAnimationFrame(tick);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [id]);

  const handleClose = useCallback(() => {
    removeToast(id);
  }, [id]);

  const isSuccess = type === "success";
  const accentColor = isSuccess ? "var(--color-green-camaleonte)" : "#ef4444";
  const Icon = isSuccess ? CheckCircle : XCircle;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="toast-item"
      style={{ borderLeftColor: accentColor }}
    >
      <div className="toast-content">
        <Icon size={18} style={{ color: accentColor, flexShrink: 0 }} />
        <span className="toast-message">{message}</span>
      </div>
      <button
        type="button"
        onClick={handleClose}
        className="toast-close"
        aria-label="Cerrar notificación"
      >
        <X size={14} />
      </button>
      <div
        className="toast-progress"
        style={{
          width: `${progress}%`,
          backgroundColor: accentColor,
        }}
      />
    </motion.div>
  );
}
