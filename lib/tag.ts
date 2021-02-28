import ts from "typescript"

export type Tag = {id: string, value: string}

export const tags: Tag[] = [{id: 'other', value: 'その他'}, {id: 'react', value: 'React'}]  
export const getTagValue = (id: string) => tags.find(tag => tag.id === id)?.value || ''