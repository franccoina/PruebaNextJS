import type { Metadata } from "next";
import { Providers } from './Providers';
import SessionAuthProvider from "@/context/SessionAuthProvider";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { NextIntlClientProvider } from 'next-intl';
import { Quicksand} from "next/font/google"
import { getLocale,getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] , weight: ["300", "400", "500", "600", "700"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={quicksand.className}
      > 
        <StyledComponentsRegistry>
        <NextIntlClientProvider messages={messages}>
        <SessionAuthProvider>
        <Providers>
            {children}
        </Providers>
          </SessionAuthProvider>
        </NextIntlClientProvider>
        </StyledComponentsRegistry>
          <ToastContainer />
      </body>
    </html>
  );
}
