<template lang="pug">
  //Layout
  #content
    navigation
    section#section-heading-title
      b-container(fluid="lg")
        b-row.mb-5
          b-col(sm='12', md='12', lg='12', xl='12')
            div.wrapper-heading-title
              h1.title-heading Cotiza tu seguro automotriz
              p ¡Resultados instantáneos!
    main.prehome
      article
        section#sectionHero
          .bg-pleca-blue
          b-container(fluid="lg").p-0
            b-row.mb-lg-5
              b-col(sm='12', md='12', lg='12', xl='12')
                home-banner
        Footer
</template>

<script>

import navigation from '@/components/layout/nav/navigation';
import homeBanner from "@/components/page/home/homeBanner";
import Footer from "@/components/layout/footer/Footer";

export default {
  name: 'home-one',
  components: {navigation, homeBanner, Footer},
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  mounted() {

  }
}
</script>
<style lang="sass" scoped>
  @import "../../scss/utilities/variables"
  #content
    overflow: hidden
  .bg-dark
    background-color: #7C7C7C !important
    margin-top: 3em
    @media all and (max-width: 991px)
      margin-top: 0
  .wrapper-heading-title
    margin-top: 6em
    h1
      color: $blueLightHex
      font-size: 2.1em
      font-weight: 600
    p
      font-size: 1em
      color: #999999
      font-weight: 600
  #sectionHero
    position: relative
    @media all and (max-width: 767px)
      margin-bottom: 25vh
    .bg-pleca-blue
      position: absolute
      background-color: $blueLightHex
      height: 63px
      width: 100%
      top: -13px
      @media all and (max-width: 991px)
        display: none
</style>
