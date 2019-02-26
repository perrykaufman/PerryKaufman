<template>
  <div class="project-card-grid">

    <form class="project-card-filter" @submit.prevent>
      <input v-model.trim="input" type="text" placeholder="filter projects"/>
    </form>

    <a v-for="card in displayedCards" class="project-card" :href="card.url" target="_blank">
      <picture class="card-image">
        <img v-if="card.image" :src="'/projects/' + card.image + '.png'" :alt="card.title.toLowerCase() + ' preview image'" />
      </picture>
      <header class="card-header">
        <h1 class="card-heading">
          {{card.title}}
        </h1>
        <span v-if="card.keywords && card.keywords.length > 0" class="card-keywords">{{card.keywords.join(', ')}}</span>
      </header>
      <p class="card-content">{{card.description}}</p>
    </a>

  </div>
</template>

<script>

/* Card Config */
const cards = [
  {
    key: 0,
    title: 'Personal Website',
    url: 'https://github.com/perrykaufman/PerryKaufman',
    image: 'personalwebsite',
    keywords: ['vue.js', 'stylus', 'webpack'],
    description: 'This website uses a Vue.js powered static site generator called Vuepress. I created a custom theme using Stylus and Vue components.'
  },
  {
    key: 1,
    title: 'Clean Slate Theme',
    url: 'https://github.com/perrykaufman/cleanslate',
    image: 'cleanslate',
    keywords: ['wordpress', 'php', 'css', 'javascript'],
    description: 'A responsive Wordpress theme developed for the Clean Slate program of YWCA McLean County. Includes support for the WooCommerce plugin to allow for ecommerce.'
  },
  {
    key: 2,
    title: 'React List',
    url: 'https://jsfiddle.net/pdkaufm/d0jrsfvt/',
    image: 'reactlist',
    keywords: ['react.js', 'sass'],
    description: 'A basic list application made with React.js and SASS. My first project using React.'
  },
  {
    key: 3,
    title: 'Drag and Drop List',
    url: 'https://jsfiddle.net/pdkaufm/5ocmvktr/',
    image: 'draganddrop',
    keywords: ['javascript', 'sass'],
    description: 'A list application that allows items to be reordered by clicking and dragging. If the list overflows the page, it can be scrolled by dragging an item to the top or bottom of the page.'
  },
  {
    key: 4,
    title: 'GW2 AP Calculator',
    url: 'https://jsfiddle.net/pdkaufm/v5kaps0c/',
    image: 'gw2apcalc',
    keywords: ['javascript', 'css', 'rest'],
    description: 'Uses account data from the Guild Wars 2 REST API to calculate the total achievement points (AP) earned by an account.'
  },
  {
    key: 5,
    title: 'Chat UI',
    url: 'https://jsfiddle.net/pdkaufm/gjy2jdfk/',
    image: 'chatui',
    keywords: ['javascript', 'css'],
    description: 'A simple chat application with a \'chatbot\' that repeats whatever you enter. The chatbot could easily be substituted with code receiving/sending responses to a server.'
  },
  {
    key: 6,
    title: 'Tic-Tac-Toe',
    url: 'https://jsfiddle.net/pdkaufm/kyzwm637/',
    image: 'tictactoe',
    keywords: ['javascript', 'css', 'html5'],
    description: 'A two player Tic-Tac-Toe game using the HTML5 drag/drop API, and a custom event mixin.'
  },
  {
    key: 7,
    title: 'GW2Profile',
    url: 'https://github.com/perrykaufman/GW2Profile',
    image: 'gw2profile',
    keywords: ['vue.js', 'webpack', 'firebase', 'rest'],
    description: 'A single page application that allows a user to create a profile showcasing their Guild Wars 2 account. This was my first application using Vue.'
  },
  {
    key: 8,
    title: 'NodePractice',
    url: 'https://github.com/perrykaufman/NodePractice',
    image: 'nodepractice',
    keywords: ['node.js', 'javascript', 'rest'],
    description: 'A couple of small projects I completed to learn the basics of Node.js.'
  }
]

/* Component */
export default {
  data() {
    return {
      cards: cards,
      input: ''
    }
  },
  computed: {
    displayedCards() {
      const input = this.input.toLowerCase()
      return this.cards.filter(card => {
        return card.keywords.some(word => word.toLowerCase().includes(input))
          || card.title.toLowerCase().includes(input)
          || card.description.toLowerCase().includes(input)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~ThemeStyles/palette.styl'

  /* colors */
  card-border-color = primary-color-dark

  /* sizes */
  card-padding = 10px
  card-border-width = 3px

  /* project card grid */
  .project-card-grid
    display grid
    font-size 1em
    gap 10px
    grid auto-flow max-content / 1fr
    margin 20px 0

  .project-card-filter
    align-items center
    display flex
    grid-column span 1
    justify-content center
    input
      border 2px solid gray-color-dark
      border-radius 5px
      font-size 1.1em
      max-width 500px
      padding 2px 5px
      transition .25s all ease-in-out
      width 100%
      &:focus
        border-color primary-color-dark

  /* project card */
  .project-card
    background primary-color-lightest
    border card-border-width solid card-border-color
    box-shadow 3px 3px 5px gray-color-darker
    color black-color
    cursor pointer
    display grid
    font-size 1em
    grid auto-flow max-content / 1fr
    grid-gap card-padding * .5
    margin 0
    text-decoration none
    transition .2s all ease-in-out
    width 100%
    &:hover
      background primary-color-lighter
      color black-color
  
    .card-image
      align-self start
      border-bottom card-border-width solid card-border-color
      display block
      margin 0

    .card-header
      align-self center
      min-width 0

    .card-heading
      display block
      text-decoration none
      color black-color
      font-size 1.4em
      margin 0
      overflow hidden
      text-align center
      text-overflow ellipsis
      white-space nowrap

    .card-keywords
      color secondary-color-dark
      display block
      font-size .8em
      font-style italic
      text-align center
    
    .card-content
      align-self start
      font-size .8em
      padding 0 card-padding card-padding card-padding
      margin 0

  /* media */
  @media all and (min-width 450px)
    .project-card-grid
      grid-template-columns 1fr 1fr
    
    .project-card-filter
      grid-column span 2

  @media all and (min-width 950px)
    .project-card-grid
      grid-template-columns 1fr 1fr 1fr
    
    .project-card-filter
      grid-column span 3

  @media all and (min-width 1350px)
    .project-card-grid
      grid-template-columns 1fr 1fr 1fr 1fr

    .project-card-filter
      grid-column span 4
</style>
