import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import DashboardLayout from '@/layouts/dashboard'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}
