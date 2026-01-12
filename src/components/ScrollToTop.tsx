import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll ke posisi paling atas setiap kali pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
