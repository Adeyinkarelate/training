"use client";

import { Toaster } from "react-hot-toast";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4500,
          className:
            "!bg-[var(--bg-elevated)] !text-[var(--fg)] !border !border-[var(--border-strong)]",
          style: {
            borderRadius: "9999px",
            padding: "12px 16px",
            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.45)",
            fontSize: "13px",
          },
          success: {
            iconTheme: { primary: "#34d399", secondary: "#06101d" },
          },
          error: {
            iconTheme: { primary: "#f87171", secondary: "#06101d" },
          },
        }}
      />
    </>
  );
}
