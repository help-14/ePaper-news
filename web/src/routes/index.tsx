import { Component, For, Show, createResource } from 'solid-js'
import { RouteDataArgs, useRouteData } from 'solid-start'
import { PostItem } from '~/types'
import { VnExpress } from '~/lib/vnexpress'
import NewCard from '~/components/new'

export const routeData = ({ location, params }: RouteDataArgs) => {
  const page = () => +location.query.page || 1

  const [posts] = createResource<PostItem[], number>(() => {
    return new VnExpress().GetHomePage(1)
  })

  return { posts, page }
}

const HomePage: Component = () => {
  const { page, posts } = useRouteData<typeof routeData>()
  return (
    <div class="news-view">
      <main class="news-list">
        <Show when={posts()}>
          <div style={{ display: 'grid' }}>
            <For each={posts()}>{post => <NewCard new={post} />}</For>
          </div>
        </Show>
      </main>
    </div>
  )
}

export default HomePage
