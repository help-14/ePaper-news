import { XMLParser } from 'fast-xml-parser'
import { NewSiteBase } from './base'
import { PostItem, SiteEnum } from '~/types'
import { GetCoverImage } from '~/utils/parser'

export class ThanhNien implements NewSiteBase {
  private xmlParser: XMLParser = new XMLParser()

  async GetHomePage(page: number): Promise<PostItem[]> {
    const response = await fetch('https://thanhnien.vn/rss/home.rss')
    const xml = this.xmlParser.parse(await response.text())
    return xml.rss.channel.item.map(
      (item: RssItem): Partial<PostItem> => ({
        title: item.title,
        description: GetDescriptionText(item.description),
        time: new Date(item.pubDate).getTime(),
        link: item.link,
        id: item.guid,
        cover: GetCoverImage(item.description),
        site: SiteEnum.ThanhNien,
      })
    )
  }

  async GetPost(id: string): Promise<PostItem> {
    throw new Error('Method not implemented.')
  }
}

type RssItem = {
  title: string
  description: string
  pubDate: string
  link: string
  guid: string
}

function GetDescriptionText(input: string): string {
  const desSeperator = '</br>'
  const seperatorIndex = input.lastIndexOf(desSeperator)
  if (seperatorIndex > 0) {
    return input.substring(seperatorIndex + desSeperator.length)
  }
  return input
}
