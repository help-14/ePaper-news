import { Component, Show } from 'solid-js'
import { A } from 'solid-start'
import './new.css'

import type { PostItem } from '../types'

const NewCard: Component<{ new: PostItem }> = props => {
  return (
    <div class="news-card">
      <div class="news-des">
        <img src={props.new.cover} />
        <h1>{props.new.title}</h1>
        {props.new.description}
      </div>
    </div>
  )
}

export default NewCard
