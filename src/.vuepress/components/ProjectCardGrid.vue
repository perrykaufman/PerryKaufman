<template>
  <div class="project-card-grid">
    <form class="project-card-filter" @submit.prevent>
      <input v-model.trim="input" type="text" placeholder="filter projects"/>
    </form>
    <ProjectCard v-for="card in displayedCards"
      :key="card.key"
      :title="card.title"
      :url="card.url"
      :image="card.image"
      :keywords="card.keywords"
      :description="card.description"
      />
  </div>
</template>

<script>
const cards = [
  {
    key: 0,
    title: 'Personal Website',
    url: 'https://github.com/perrykaufman/PerryKaufman',
    image: 'personalwebsite',
    keywords: ['vue.js', 'stylus', 'grid', 'webpack'],
    description: 'I created this website using a static site generator called Vuepress! Each page is made up of Vue components from the custom theme I created.'
  },
  {
    key: 1,
    title: 'Clean Slate Theme',
    url: 'https://github.com/perrykaufman/cleanslate',
    image: 'cleanslate',
    keywords: ['wordpress', 'php', 'flexbox', 'javascript'],
    description: 'A responsive Wordpress theme created for the Clean Slate program of YWCA McLean County. Supports the WooCommerce plugin to allow for ecommerce.'
  },
  {
    key: 2,
    title: 'React List',
    url: 'https://jsfiddle.net/pdkaufm/d0jrsfvt/',
    image: 'reactlist',
    keywords: ['react.js', 'sass'],
    description: 'A list application made with React.js and SCSS. My first project using React.'
  },
  {
    key: 3,
    title: 'Drag and Drop List',
    url: 'https://jsfiddle.net/pdkaufm/5ocmvktr/',
    image: 'draganddrop',
    keywords: ['javascript', 'sass'],
    description: 'A list application that allows items to be added, removed, and reordered. If the list is long enough to create a scroll bar, the page can be pulled by dragging an item to the top or bottom of the page.'
  },
  {
    key: 4,
    title: 'GW2 AP Calculator',
    url: 'https://jsfiddle.net/pdkaufm/v5kaps0c/',
    image: 'gw2apcalc',
    keywords: ['javascript', 'css', 'rest'],
    description: 'Uses account data from the Guild Wars 2 API to calculate the total achievement points (AP) earned by an account.'
  },
  {
    key: 5,
    title: 'Chat UI',
    url: 'https://jsfiddle.net/pdkaufm/gjy2jdfk/',
    image: 'chatui',
    keywords: ['javascript', 'flexbox'],
    description: 'A simple chat application with a \'chatbot\' that repeats whatever the user says. The chatbot could easily be substituted with code receiving/sending responses to a server'
  },
  {
    key: 6,
    title: 'Tic-Tac-Toe',
    url: 'https://jsfiddle.net/pdkaufm/kyzwm637/',
    image: 'tictactoe',
    keywords: ['javascript', 'grid', 'html5'],
    description: 'A two player Tic-Tac-Toe game using the HTML5 drag/drop API, and a custom event mixin.'
  },
  {
    key: 7,
    title: 'GW2Profile',
    url: 'https://github.com/perrykaufman/GW2Profile',
    image: 'gw2profile',
    keywords: ['vue.js', 'webpack', 'firebase', 'rest'],
    description: 'An application that allows a user to create a profile showcasing their Guild Wars 2 account. This was a project I completed to learn how to create a Single Page App with Vue'
  }
]

export default {
  data() {
    return {
      cards: cards,
      input: ''
    }
  },
  computed: {
    displayedCards() {
      return this.cards.filter(card => {
        const input = this.input.toLowerCase()
        return card.keywords.some(word => word.toLowerCase().includes(input)) || card.title.toLowerCase().includes(input)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/palette.styl'

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
