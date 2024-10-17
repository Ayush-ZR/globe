import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'remixicon/fonts/remixicon.css'

const LocomotiveWrapper = ({children}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      const locomotiveScroll = new LocomotiveScroll();

      const handleResize = () => {
        window.location.reload(); 
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        locomotiveScroll.destroy()
      };
    }
  });
  return <>{children}</>;
};

export default LocomotiveWrapper;
