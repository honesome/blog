import React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import '../styles/index.css'
import '../styles/prism-a11y-dark.css'
import * as gtag from '../lib/gtag'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}
