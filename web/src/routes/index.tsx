import { Component, For, Show, createResource } from 'solid-js'
import { RouteDataArgs, useRouteData } from 'solid-start'
import { PostItem } from '~/types'
import { VnExpress } from '~/lib/vnexpress'
import NewCard from '~/components/new'
import './index.css'
import Article from '~/components/article'

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
    // <div class="news-view">
    //   <main class="news-list">
    //     <Show when={posts()}>
    //       <div style={{ display: 'grid' }}>
    //         <For each={posts()}>{post => <NewCard new={post} />}</For>
    //       </div>
    //     </Show>
    //   </main>
    // </div>

    <div>
      <div class="head">
        <div class="headerobjectswrapper">
          <header>Newpost York</header>
        </div>
        <div class="subhead">York, MA - Thursday August 30, 1978 - Seven Pages</div>
      </div>

      <div class="content">
        <div class="collumns">
          <div class="collumn">
            <For each={posts()}>{post => <Article post={post} />}</For>
          </div>
          <div class="collumn">
            <div class="article">
              <div class="head">
                <span class="headline hl5">Give people courage</span>
                <p>
                  <span class="headline hl6">The crowd seemed to grow</span>
                </p>
              </div>
              <p>
                The sunset faded to twilight before anything further happened. The crowd far away on the left, towards
                Woking, seemed to grow, and I heard now a faint murmur from it. The little knot of people towards
                Chobham dispersed. There was scarcely an intimation of movement from the pit.
              </p>
              <figure class="figure">
                <img class="media" src="http://i.giphy.com/PW7MoTD2d9pJK.gif" alt="" />
                <figcaption class="figcaption">Hermine hoping for courage.</figcaption>
              </figure>
              <p>
                It was this, as much as anything, that gave people courage, and I suppose the new arrivals from Woking
                also helped to restore confidence. At any rate, as the dusk came on a slow, intermittent movement upon
                the sand pits began, a movement that seemed to gather force as the stillness of the evening about the
                cylinder remained unbroken. Vertical black figures in twos and threes would advance, stop, watch, and
                advance again, spreading out as they did so in a thin irregular crescent that promised to enclose the
                pit in its attenuated horns. I, too, on my side began to move towards the pit.
              </p>
              <p>
                Then I saw some cabmen and others had walked boldly into the sand pits, and heard the clatter of hoofs
                and the gride of wheels. I saw a lad trundling off the barrow of apples. And then, within thirty yards
                of the pit, advancing from the direction of Horsell, I noted a little black knot of men, the foremost of
                whom was waving a white flag.
              </p>
            </div>
            <div class="article">
              <div class="head">
                <span class="headline hl1">May the Force be with you</span>
                <p>
                  <span class="headline hl2">Let go your conscious self and act on instinct</span>
                </p>
              </div>
              <p>
                Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. I have traced the
                Rebel spies to her. Now she is my only link to finding their secret base.
              </p>
              <figure class="figure">
                <img class="media" src="http://i.giphy.com/4fDWVPMoSyhgc.gif" alt="" />
                <figcaption class="figcaption">"This time, let go your conscious self and act on instinct."</figcaption>
              </figure>
              Leave that to me. Send a distress signal, and inform the Senate that all on board were killed.{' '}
            </div>
            <div class="article">
              <p>
                <span class="citation">"Don't under&shy;estimate the Force. I suggest you try it again, Luke."</span>{' '}
                This time, let go your conscious self and act on instinct. In my experience, there is no such thing as
                luck. You're all clear, kid. Let's blow this thing and go home!
              </p>
              <p>
                You don't believe in the Force, do you? Partially, but it also obeys your commands. The plans you refer
                to will soon be back in our hands. As you wish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
