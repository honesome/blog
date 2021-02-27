import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug dark:text-green-500">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-small mb-1 ">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 ">{excerpt}</p>
    </div>
  )
}

export default PostPreview
