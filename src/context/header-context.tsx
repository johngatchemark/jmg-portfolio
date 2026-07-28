import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface HeaderContextType {
  headerHeight: number;
  setHeaderRef: (node: HTMLElement | null) => void;
  headerRef: (node: HTMLElement | null) => void;
}

const HeaderContext = createContext<HeaderContextType>({
  headerHeight: 0,
  setHeaderRef: () => {},
  headerRef: () => {},
});

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);

  const setHeaderRef = useCallback((node: HTMLElement | null) => {
    setHeaderEl(node);
  }, []);

  useEffect(() => {
    if (!headerEl) return;

    const updateHeight = () => {
      const rect = headerEl.getBoundingClientRect();
      if (rect.height > 0) {
        setHeaderHeight(rect.height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(headerEl);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [headerEl]);

  return (
    <HeaderContext.Provider value={{ headerHeight, setHeaderRef, headerRef: setHeaderRef }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  return useContext(HeaderContext);
}
