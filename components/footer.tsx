import Container from './container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-10 flex flex-col items-center">
          <div className="text-lg font-bold tracking-tighter leading-tight text-center">
            <h3>
              © {new Date().getFullYear()} Statically Generated with{' '}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="underline cursor-pointer"
                rel="external noopener"
              >
                Next.js
              </a>
            </h3>
            <h3>This site uses Google Analytics</h3>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
