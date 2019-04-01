<template>
  <div class="project-cards">
    <form class="project-card-filter" @submit.prevent>
      <input v-model.trim="input" type="text" placeholder="filter projects" />
    </form>
    <ul class="project-card-grid">
      <li
        v-for="card in displayedCards"
        :key="card.title"
        class="project-card-wrapper"
      >
        <a class="project-card" :href="card.url" target="_blank">
          <picture class="card-image">
            <img
              v-if="card.image"
              :src="card.image"
              :alt="card.title.toLowerCase() + ' preview image'"
            />
          </picture>
          <header class="card-header">
            <h1 class="card-heading">{{ card.title }}</h1>
            <span
              v-if="card.keywords && card.keywords.length > 0"
              class="card-keywords"
              >{{ card.keywords.join(", ") }}</span
            >
          </header>
          <p class="card-content">{{ card.description }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* Card Config */
const cards = [
  {
    title: "Personal Website",
    url: "https://github.com/perrykaufman/PerryKaufman",
    image: "/projects/personalwebsite.png",
    keywords: ["vue.js", "stylus", "webpack"],
    description:
      "This website uses a Vue.js powered static site generator called Vuepress. I created a custom theme using Stylus and Vue components."
  },
  {
    title: "Clean Slate Theme",
    url: "https://github.com/perrykaufman/cleanslate",
    image: "/projects/cleanslate.png",
    keywords: ["wordpress", "php", "css", "javascript"],
    description:
      "A responsive Wordpress theme developed for the Clean Slate program of YWCA McLean County. Includes support for the WooCommerce plugin to allow for ecommerce."
  },
  {
    title: "React List",
    url: "https://jsfiddle.net/pdkaufm/d0jrsfvt/",
    image: "/projects/reactlist.png",
    keywords: ["react.js", "sass"],
    description:
      "A basic list application made with React.js and SASS. My first project using React."
  },
  {
    title: "Drag and Drop List",
    url: "https://jsfiddle.net/pdkaufm/5ocmvktr/",
    image: "/projects/draganddrop.png",
    keywords: ["javascript", "sass"],
    description:
      "A list application that allows items to be reordered by clicking and dragging. If the list overflows the page, it can be scrolled by dragging an item to the top or bottom of the page."
  },
  {
    title: "GW2 AP Calculator",
    url: "https://jsfiddle.net/pdkaufm/v5kaps0c/",
    image: "/projects/gw2apcalc.png",
    keywords: ["javascript", "css", "rest"],
    description:
      "Uses account data from the Guild Wars 2 REST API to calculate the total achievement points (AP) earned by an account."
  },
  {
    title: "Chat UI",
    url: "https://jsfiddle.net/pdkaufm/gjy2jdfk/",
    image: "/projects/chatui.png",
    keywords: ["javascript", "css"],
    description:
      "A simple chat application with a 'chatbot' that repeats whatever you enter. The chatbot could easily be substituted with code receiving/sending responses to a server."
  },
  {
    title: "Tic-Tac-Toe",
    url: "https://jsfiddle.net/pdkaufm/kyzwm637/",
    image: "/projects/tictactoe.png",
    keywords: ["javascript", "css", "html5"],
    description:
      "A two player Tic-Tac-Toe game using the HTML5 drag/drop API, and a custom event mixin."
  },
  {
    title: "GW2Profile",
    url: "https://github.com/perrykaufman/GW2Profile",
    image: "/projects/gw2profile.png",
    keywords: ["vue.js", "webpack", "firebase", "rest"],
    description:
      "A single page application that allows a user to create a profile showcasing their Guild Wars 2 account. This was my first application using Vue."
  },
  {
    title: "NodePractice",
    url: "https://github.com/perrykaufman/NodePractice",
    image: "/projects/nodepractice.png",
    keywords: ["node.js", "javascript", "rest"],
    description:
      "A couple of small projects I completed to learn the basics of Node.js."
  },
  {
    title: "Sabetha Timer",
    url: "https://github.com/perrykaufman/sabetha-timer",
    image: "/projects/sabethatimer.png",
    keywords: ["javascript", "sass", "webpack", "jasmine"],
    description:
      "A timer thay provides instructions for a boss fight in the video game Guild Wars 2"
  }
];

/* Component */
export default {
  data() {
    return {
      cards: cards,
      input: ""
    };
  },
  computed: {
    displayedCards() {
      const input = this.input.toLowerCase();
      return this.cards.filter(card => {
        return (
          card.keywords.some(word => word.toLowerCase().includes(input)) ||
          card.title.toLowerCase().includes(input) ||
          card.description.toLowerCase().includes(input)
        );
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~ThemeStyles/palette.styl'

outline() {
  outline none
  outline 0
}

/* colors */
input-border-color = gray-color-dark
card-border-color = primary-color-dark
card-background-color = primary-color-lightest
card-background-color-hover = primary-color-lighter
card-text-color = black-color
card-keyword-color = secondary-color-dark
shadow-color = gray-color-darker

/* sizes */
card-padding = 1rem
card-border-width = .3rem

/* project card grid */
.project-card-grid
  display grid
  font-size 2rem
  gap 1rem
  grid auto-flow max-content / 1fr
  margin 2rem 0
  padding 0


.project-card-filter
  align-items center
  display flex
  justify-content center
  margin 1rem 0

  input
    border .2rem solid input-border-color
    border-radius .5rem
    font-size 2.2rem
    max-width 50rem
    padding .2rem .5rem
    transition 0.25s all ease-in-out
    width 100%

    &:focus
      border-color card-border-color
      outline 0
      outline none

/* project card */
.project-card-wrapper
  font-size 2rem
  list-style none
  position relative

  &::before
    content none

.project-card
  background card-background-color
  border card-border-width solid card-border-color
  border-radius corner-radius
  box-shadow .3rem .3rem .5rem shadow-color
  color black-color
  cursor pointer
  display block
  display grid
  grid auto-flow max-content / 1fr
  gap card-padding * 0.5
  height 100%
  margin 0
  overflow hidden
  text-decoration none
  transition 0.2s all ease-in-out
  width 100%

  &:hover, &:focus
    background card-background-color-hover
    color card-text-color
    outline none

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
    color card-text-color
    font-size 2.8rem
    margin 0
    overflow hidden
    text-align center
    text-overflow ellipsis
    white-space nowrap

  .card-keywords
    color card-keyword-color
    display block
    font-size 1.6rem
    font-style italic
    text-align center

  .card-content
    align-self start
    font-size 1.8rem
    padding 0 card-padding card-padding card-padding
    margin 0

/* media */
@media all and (min-width 40em)
  .project-card-grid
    grid-template-columns 1fr 1fr

  .project-card-filter
    grid-column span 2

@media all and (min-width 60em)
  .project-card-grid
    grid-template-columns 1fr 1fr 1fr

  .project-card-filter
    grid-column span 3
</style>
