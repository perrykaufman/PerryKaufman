<template>
  <article class="project-card">
    <a class="card-image" :href="url" target="_blank">
      <picture >
        <img v-if="image" :src="require('projects/images/' + image + '.png')" :alt="title.toLowerCase() + ' preview image'" />
      </picture>
    </a>
    <header class="card-header">
      <a class="card-heading" :href="url" target="_blank">
        <h1 >{{title}}</h1>
      </a>
      <span v-if="keywords && keywords.length > 0" class="card-keywords">{{keywords.join(', ')}}</span>
    </header>
    <p class="card-content">
      {{description}}
    </p>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    },
    keywords: {
      required: false,
      type: Array,
      validator(value) {
        if (!value) return true
        return value.every((el) => typeof el === 'string')
      }
    },
    description: {
      required: true,
      type: String
    },
    image: {
      required: false,
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/palette.styl'

  /* sizes */
  card-padding = 10px

  .project-card
    background gray-color
    border-radius 5px
    box-shadow 3px 3px 5px gray-color-darker
    display grid
    font-size 1em
    grid auto-flow max-content / 1fr
    grid-gap card-padding * .5
    margin 0
    padding card-padding
    width 100%
  
    .card-image
      align-self start
      display block
      img
        margin 0

    .card-header
      align-self center
      min-width 0

    .card-heading
      display block
      text-decoration none
      h1
        color primary-color-dark
        font-size 1.2em
        margin 0
        overflow hidden
        text-align center
        text-decoration underline
        text-overflow ellipsis
        white-space nowrap
      &:hover h1
        color primary-color-darker
        text-decoration none

    .card-keywords
      color secondary-color-dark
      display block
      font-size .8em
      font-style italic
      text-align center
    
    .card-content
      align-self start
      font-size .8em
      margin 0
</style>
