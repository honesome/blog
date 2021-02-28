import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Post from '../../types/post'
import PostPreview from '../../components/post-preview'
import { tags } from '../../lib/tag'
import Intro from '../../components/intro'
import { GetStaticProps, GetStaticPropsContext } from 'next'

type Props = {
  taggedPosts: Post[]
}

const PostListsTagged: React.VFC<Props> = ({ taggedPosts }) => {
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-10 mb-10">
            {taggedPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default PostListsTagged

type Param = {
  tag: string
}

export const getStaticProps: GetStaticProps<Items[], Param> = async (context) => {
  console.log(context)
  const taggedPosts = getAllPosts(
    ['title', 'date', 'slug', 'excerpt', 'tags'],
    context?.params?.tag
  )

  return {
    props: { taggedPosts }
  } as const
}

export async function getStaticPaths() {
  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag.id
        }
      }
    }),
    fallback: false
  }
}
