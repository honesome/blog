import React from 'react'
import Link from 'next/link'
type Props = {
  value: string
  path: string
}

const Tag: React.VFC<Props> = ({ value, path }) => {
  return (
    <div className="bg-green-400 rounded-sm cursor-pointer">
      <Link href={`/tags/${path}`}>
        <p className="p-1">{value}</p>
      </Link>
    </div>
  )
}

export default Tag
