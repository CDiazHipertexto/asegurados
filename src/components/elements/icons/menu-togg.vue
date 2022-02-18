<template>
<svg id="menu" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 30 22.5" style="enable-background:new 0 0 30 22.5;" xml:space="preserve">

  <g id="Container_Zones" class="st0">
</g>
  <g id="Padding_Zones" class="st0">
</g>
  <g id="Page_Margins" class="st0">
</g>
  <g id="Containers_Grid" class="st0">
</g>
  <g id="Padding_Grid" class="st0">
</g>
  <g id="bg">
</g>
  <g id="diseño">
	<g>
		<rect x="1" y="0.8" class="st1" width="28" height="4"/>
    <rect x="1" y="9.2" class="st1" width="28" height="4"/>
    <rect x="1" y="17.8" class="st1" width="28" height="4"/>
	</g>
</g>
</svg>

</template>

<script>
export default {
  name: "menu-togg",
  data: () => ({

  }),
  methods: {

  },
}
</script>


<style scoped  lang="sass">
  @import "../../../scss/utilities/variables"
  #menu
    cursor: pointer
    width: 28px
    transition: 0.3s all ease
    margin-left: 5px
    transform: translateY(-10%) rotate(0)
    position: relative
    .st0
      display: none
    .st1
      fill: #FFFFFF
      transform-origin: 4px 0
      transition: transform .5s cubic-bezier(0.77, 0.2, 0.05, 1),background .5s cubic-bezier(0.77, 0.2, 0.05, 1),opacity .55s ease
      &:nth-last-child(2)
        transform-origin: 0% 100%
  .active
    .st1
      opacity: 1
      transform: rotate(42deg) translate(1px, -15px)
      &:nth-last-child(2)
        transform: rotate(-42deg) translate(0px, 10px) !important
      &:nth-last-child(3)
        opacity: 0
        transform: rotate(0deg) scale(0.2, 0.2)
  .sticky-nav
    transition: .7s
    padding: 0
    #menu
      .st1
          transition: 1s
          fill: #4d4d4d  !important
  .menu li:hover
    a
      #menu
        transform: translateY(-10%) rotate(90deg)
</style>
