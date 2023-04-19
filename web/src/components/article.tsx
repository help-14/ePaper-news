import { Component, Show } from 'solid-js'
import { PostItem } from '~/types'

const Article: Component<{ post: PostItem }> = props => {
  return (
    <div class="article">
      <div class="head">
        <p>
          <span class={randomHeadlineStyle()} innerText={props.post.title}></span>
        </p>
        <Show when={props.post.author?.length}>
          <p>
            <span class="headline hl6" innerText={'By ' + props.post.author}></span>
          </p>
        </Show>
      </div>
      <p innerText={props.post.description}></p>
      <Show when={props.post.cover?.length}>
        <figure class="figure">
          <img class="media" src={props.post.cover} />
          {/* <figcaption class="figcaption">Hermine hoping for courage.</figcaption> */}
        </figure>
      </Show>
    </div>
  )
}

function randomHeadlineStyle() {
  const styles = [1, 3, 5]
  return 'headline hl' + styles[Math.floor(Math.random() * styles.length)]
}

export default Article
