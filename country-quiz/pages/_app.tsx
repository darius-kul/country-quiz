import { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/styles/reset.css";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
