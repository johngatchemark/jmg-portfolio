import { createContext, useContext, useState, useEffect, useRef, type ReactNode, type RefObject } from "react";

interface HeaderContextType {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
  headerRef: RefObject<HTMLElement | null>;
}

const HeaderContext = createContext<HeaderContextType>({
  headerHeight: 0,
  setHeaderHeight: () => {},
  headerRef: { current: null },
});

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <HeaderContext.Provider value={{ headerHeight, setHeaderHeight, headerRef }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  return useContext(HeaderContext);
}
