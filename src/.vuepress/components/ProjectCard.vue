<template>
  <article class="project-card">
    <picture class="card-image">
      <img v-if="image" :src="require('projects/images/' + image + '.png')" alt="project-preview-image" />
    </picture>
    
    <header class="card-header">
      <h1 class="card-heading">{{title}}</h1>
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
    grid "top" min-content "middle" min-content "bottom" 1fr / 1fr
    gap card-padding
    margin 0
    padding card-padding
    width 100%
  
    .card-image
      align-self start
      grid-area top

    .card-header
      align-self center
      grid-area middle

    .card-heading
      font-size 1.5em
      margin 0

    .card-keywords
      font-size .8em
      font-style italic
    
    .card-content
      align-self start
      font-size .8em
      grid-area bottom
      margin 0
</style>
