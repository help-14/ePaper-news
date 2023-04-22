export interface IComment {
  user: string
  time_ago: string
  content: string
  comments: IComment[]
}

export interface IStory {
  id: string
  points: string
  url: string
  title: string
  domain: string
  type: string
  time_ago: string
  user: string
  comments_count: number
  comments: IComment[]
}

export type PostItem = {
  title: string
  description: string
  cover: string
  author: string
  site: SiteEnum
  time: number
  link: string
  id: string
  content: any
}

export enum SiteEnum {
  VnExpress = 'vne',
  HackerNews = 'hkn',
  ThanhNien = 'tnvn',
}
