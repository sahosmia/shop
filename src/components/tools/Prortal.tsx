import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    if (mount) {
      mount.appendChild(el);
      return () => {
        mount.removeChild(el);
      };
    }
  }, [el, mount]);

  if (!mount) return null;

  return createPortal(children, el);
};

export default Portal;
