import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/prism-a11y-dark.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
