import { RefObject, useEffect } from "react";

export function useOnClickOutside(ref: RefObject<HTMLUListElement>, handler: () => void): void {
    useEffect(() => {
        const listener = (event: MouseEvent & { target: Node | null }): void => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}
