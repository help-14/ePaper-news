import { PostItem } from '~/types'

export interface NewSiteBase {
  GetHomePage(page: number): Promise<PostItem[]>
  GetPost(id: string): Promise<PostItem>
}
