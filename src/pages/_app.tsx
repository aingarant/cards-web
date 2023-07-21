import Layout from "@/components/layout"
import { ReduxProvider } from "@/redux/provider"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Layout>

      <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  )
}
