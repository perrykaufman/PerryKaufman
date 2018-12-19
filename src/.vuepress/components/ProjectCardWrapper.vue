<template>
  <div class="project-card-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  .project-card-wrapper
    display grid
    gap 10px
    grid auto-flow max-content / 1fr

  @media all and (min-width 450px)
    .project-card-wrapper
      grid-template-columns 1fr 1fr

  @media all and (min-width 950px)
    .project-card-wrapper
      grid-template-columns 1fr 1fr 1fr

  @media all and (min-width 1350px)
    .project-card-wrapper
      grid-template-columns 1fr 1fr 1fr 1fr
</style>
