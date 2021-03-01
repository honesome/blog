type Props = {
  tagName: string
}

const TagExplanation: React.VFC<Props> = ({ tagName }) => {
  return <p className="text-3xl mb-4">{`タグ: ${tagName}`}</p>
}

export default TagExplanation
