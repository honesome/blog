import ts from "typescript"

const tags = [{id: 'other', value: 'その他'}, {id: 'react', value: 'React'}]  
export const getTagValue  = (id: string) => tags.find(tag => tag.id === id)?.value || ''