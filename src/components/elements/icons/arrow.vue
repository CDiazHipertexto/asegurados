<template>
  <svg id="arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">

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
		<polygon class="st1" points="9.3,0 5.7,3.5 17.2,15 5.7,26.5 9.3,30 24.3,15 		"/>
	</g>
</g>
</svg>


</template>

<script>
export default {
  name: "arrow",
  data: () => ({

  }),
  methods: {

  },
}
</script>


<style scoped  lang="sass">
  @import "../../../scss/utilities/variables"
  #arrow
    cursor: pointer
    width: 8px
    transition: 0.3s all ease
    margin-left: 5px
    transform: translateY(-10%) rotate(0)
    .st0
      display: none
    .st1
      fill: #FFFFFF
  .sticky-nav
    transition: .7s
    padding: 0
    #arrow
      .st1
          transition: 1s
          fill: #4D4D4D !important
  .menu li:hover
    a
      #arrow
        transform: translateY(-10%) rotate(90deg)
</style>
