import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import PostPreview from '../components/post-preview'
import SectionSeparator from '../components/section-separator'

type Props = {
  allPosts: Post[]
}

const Index: React.VFC<Props> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-10 mb-10">
            {allPosts.map((post) => (
              <>
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  tags={post.tags}
                />
                <SectionSeparator />
              </>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags'])

  return {
    props: { allPosts }
  }
}
