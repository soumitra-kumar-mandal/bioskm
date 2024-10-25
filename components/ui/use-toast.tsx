"use client";  // Added to make this file a client component

import { createContext, useContext, useState } from "react";

interface ToastContextType {
  toast: (message: { title: string; description: string }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastMessage, setToastMessage] = useState<{ title: string; description: string } | null>(null);

  const toast = (message: { title: string; description: string }) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null); // Hide the toast after 3 seconds
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-accent text-white px-4 py-2 rounded shadow-lg">
          <strong>{toastMessage.title}</strong>
          <p>{toastMessage.description}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
