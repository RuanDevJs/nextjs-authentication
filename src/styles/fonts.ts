import { Poppins } from "next/font/google";

const fontPoppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export { fontPoppins }