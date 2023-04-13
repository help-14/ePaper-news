export const GetCoverImage = (input: string): string => {
  const data = /<img.*?src="(.*?)"/g.exec(input)
  return data ? data[1] : ''
}
