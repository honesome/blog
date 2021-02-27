import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import PostPreview from '../components/post-preview'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-10 mb-20">
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts }
  }
}
