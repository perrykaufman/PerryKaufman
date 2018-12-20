<template>
  <article class="project-card">
    <a class="card-image" :href="url">
      <picture >
        <img v-if="image" :src="require('projects/images/' + image + '.png')" alt="project-preview-image" />
      </picture>
    </a>
    <header class="card-header">
      <h1 class="card-heading"><a :href="url">{{title}}</a></h1>
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
    display grid
    font-size 1em
    grid auto-flow max-content / 1fr
    gap card-padding
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
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      font-size 1.2em
      margin 0
      a
        color primary-color-dark
        &:hover
          color primary-color-darker

    .card-keywords
      color secondary-color-darker
      font-size .8em
      font-style italic
    
    .card-content
      align-self start
      font-size .8em
      margin 0
</style>
