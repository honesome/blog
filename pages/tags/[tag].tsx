import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPosts, Items } from '../../lib/api'
import Post from '../../types/post'
import PostPreview from '../../components/post-preview'
import { getTagValue, tags } from '../../lib/tag'
import Intro from '../../components/intro'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import TagExplanation from '../../components/tag-explanation'
import SectionSeparator from '../../components/section-separator'

type Props = {
  taggedPosts: Post[]
  tagName: string
}

const PostListsTagged: React.VFC<Props> = ({ taggedPosts, tagName }) => {
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <TagExplanation tagName={tagName} />
          <div className="grid grid-cols-1 gap-y-10 md:gap-y-10 mb-10">
            {taggedPosts.map((post) => (
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

export default PostListsTagged

type Param = {
  tag: string
}

export const getStaticProps: GetStaticProps<Readonly<{ taggedPosts: Items[] }>, Param> = async (
  context
) => {
  const tagId = context?.params?.tag ?? ''
  const tagName = getTagValue(tagId)
  const taggedPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags'], tagId)

  return {
    props: { taggedPosts, tagName }
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
