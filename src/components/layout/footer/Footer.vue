<template lang="pug">
  //Benefits Purchase
  section#sectionFooter.bg-dark
    b-container(fluid="lg")
      b-row.mb-5
        b-col(sm='12', md='12', lg='12', xl='12')
          footer.px-md-3
            section#sectionFooter.py-5
              b-container(fluid="lg").p-0
                b-row.flex-person
                  b-col(sm='12', md='6', lg='6', xl='6').d-flex.justify-content-start
                    ul.wrapper-nav-footer
                      li
                        a(href="#") Acerca de nosotros
                      li
                        a(href="#") Descarga tu poliza
                      li
                        a(href="#") Términos y condiciones
                  b-col(sm='12', md='6', lg='6', xl='6').d-flex.justify-content-end
                    div.wrapper-block
                      div.mb-4
                        p Síguenos en nuestras redes sociales
                      div.wrapper-products
                        div.item-product
                          input#check01(type='checkbox', name='check', value='1')
                          label.wrapper-card.radio(for='check01')
                            img(src='@/assets/fb-icon.svg', alt='fb', width='100%')
                            p Facebook
                        div.item-product
                          input#check02(type='checkbox', name='check', value='2')
                          label.wrapper-card.radio(for='check02')
                            img(src='@/assets/tw-icon.svg', alt='tw', width='100%')
                            p Twitter
                        div.item-product
                          input#check03(type='checkbox', name='check', value='3')
                          label.wrapper-card.radio(for='check03')
                            img(src='@/assets/ig-icon.svg', alt='ig', width='100%')
                            p Instragram
    b-container(fluid="").bg-black.subFooter.py-3
      section
        p Copyright 2022


</template>

<script>
import VueMaterial from 'vue-material'
import { TabsPlugin } from 'bootstrap-vue'

export default {
  name: "footer",
  components: { VueMaterial, TabsPlugin },
  data: () => ({

  }),
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="sass">
@import "../../../scss/utilities/variables"
.flex-person
  @media all and (max-width: 767px)
    display: flex
    flex-direction: column
    align-items: center
    align-content: center
    > div
      display: flex
      flex-direction: column
      align-items: center
      ul
        text-align: center !important
        padding: 0 !important
        list-style: none !important

#sectionFooter
  .subFooter
    color: #fff
    margin: 0
  input[type=checkbox]:checked ~ label
    img
      border: 2px solid $blueLightHex
    p
      font-weight: 700
  .wrapper-nav-footer
    margin: 0
    padding: 0
    text-align: left
    font-size: .85em
    @media all and (max-width: 991px)
      padding-left: 2rem
    li
      margin-bottom: .5em
      color: #fff
  input
    display: none
  .bg-dark__PLP
    background: $greenDarkHex
  h2
    font-size: 3em
    font-weight: 600
    text-align: left
    margin-left: 1em
    @media all and (max-width: 991px)
      text-align: center
      margin: 0 0 1em 0
      @media all and (max-width: 500px)
        font-size: 1.7em !important
.text-left
  text-align: left
  font-size: 1.5em
  @media all and (max-width: 991px)
    text-align: center
    margin: 0 0 0 0
.wrapper-block
  display: flex
  align-items: center
  flex-direction: column
  @media all and (max-width: 769px)
    margin: 3em 0 0 0
  > div
    @media all and (max-width: 991px)
      //width: 100%
  .wrapper-products
    display: flex
    justify-content: flex-end
    @media all and (max-width: 320px)
      flex-direction: column
      img
        width: 120px
        margin: auto
    .item-product
      display: flex
      flex-direction: column
      label
        position: relative
        width: 30px
        margin-left: 1em
      img
        transition: .3s !important
        &:hover
          transform: translate3d(0, -2px, 0) !important
          box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgb(0 0 0 / 7%) !important
          transition: .3s !important
          + p
              opacity: 1
              visibility: visible
      p
        position: absolute
        left: 0
        top: 0
        transform: translateX(-29%) translateY(180%)
        background: #000000
        color: #ffffff
        padding: 2px 5px !important
        border-radius: 5px
        opacity: 0
        visibility: hidden
        transition: .3s all ease
        font-size: .5em
        &::before
          content: ''
          width: 0
          height: 0
          border-left: 5px solid transparent
          border-bottom: 5px solid #000000
          border-right: 5px solid transparent
          position: absolute
          right: 0
          left: 0
          top: -2px
          margin: auto
          transform: translateX(28%) translateY(-50%)
          font-size: 0.5em !important
  .text-intro
    display: flex

</style>

<style lang="sass">
@import "../../../scss/utilities/variables"
#sectionFooter
  .line--top
    border-top: 3px solid $blueLightHex
    margin-right: -15px
    margin-left: -15px
  .card-header
    background-color: rgb(255, 255, 255, 1)!important
  p
    color: #ffffff
    padding: 0
    font-size: .75em
  a
    text-decoration: none
    text-transform: uppercase
    opacity: 0.8
    filter: grayscale(1)
    transition-property: filter
    transition-duration: .3s
    padding-bottom: 3rem
    padding-top: 3rem
  h5
    font-size: 1rem
  .tabs
    .card-header
      margin-bottom: -3px
      padding-left: 0
      padding-right: 0
  .nav-tabs
    .nav-link.active, .nav-item.show .nav-link
      color: $blueLightHex
      background-color: #ffffff
      border-color: #ffffff #ffffff #ffffff
      border-bottom: 3px solid $OrangeHex
      box-shadow: 0 17px 30px rgba(0,0,0,.07)
      opacity: 1
      box-shadow: 0 15px 45px rgba(16,30,54,.15)
      filter: grayscale(0)
      transition-property: filter
      transition-duration: .3s
      h6
        font-weight: 500
        transition: .3s
.md-theme-default a:not(.md-button)
  color: $light
.md-theme-default a:not(.md-button):hover
  color: $light
  border-color: #ffffff #ffffff #ffffff
  transition: transform 0.2s
.md-tab
  background: #0c3440
.tab-content > .active
  transition: opacity .3s ease
  opacity: 1
  transform: translateY(0rem)
</style>
