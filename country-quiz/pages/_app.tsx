import { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/styles/reset.css";
import styled from "styled-components";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;
