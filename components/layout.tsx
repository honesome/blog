import Footer from './footer'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen mr-auto ml-auto max-w-3xl">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
