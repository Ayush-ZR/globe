import LocomotiveWrapper from "@/components/locomotive/LocomotiveWrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
<LocomotiveWrapper>
<Component {...pageProps} />
</LocomotiveWrapper>

  );
}
