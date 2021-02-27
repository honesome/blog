import DateFormatter from './date-formatter'
import Link from 'next/link'
import Tag from './tag'
import { getTagValue } from '../lib/tag'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
  tags: string[]
}

const PostPreview: React.VFC<Props> = ({ title, date, excerpt, slug, tags }) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug dark:text-green-500">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-small mb-1 flex flex-row items-center space-x-1 ">
        <DateFormatter dateString={date} />
        {tags.map((tag) => (
          <Tag key={tag} value={getTagValue(tag)} path={tag} />
        ))}
      </div>
      <p className="text-lg leading-relaxed mb-4 ">{excerpt}</p>
    </div>
  )
}

export default PostPreview
