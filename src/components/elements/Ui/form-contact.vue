<template lang="pug">
  //Layout
  form
    b-container.container-fluid.p-0.h-100
      b-row
        b-col(sm='12', md='12', lg='12', xl='12', cols='12').pr
          .body--wrap.validate-input(:class="(auto_type === null ? '' : !autoTypeValid ? 'alert-validate' : 'has-value' )")
            multiselect.box--input(deselect-label="Can't remove this value", v-model='auto_type', :searchable='false', :options='typeAuto', :allow-empty='false', label='name', track-by='name')
              template.landing-cpa--input---(slot='selection', slot-scope='{ values, search, isOpen }')
              template.max-element(slot='maxElements') 1 opcion seleccionada.
            span.fas.fa-id-card.focus-input2.interes(v-bind:class="{ 'float': !!(auto_type) }", data-placeholder='Marca del auto:')
          .ui-message-error(v-if='!autoTypeValid')
            p(v-html="'¡Seleccione Marca del auto!'")
      b-row
        b-col(sm='12', md='6', lg='6', xl='6', cols='12').pr
          .body--wrap.validate-input(:class="(model_type === null ? '' : !autoModelValid ? 'alert-validate' : 'has-value' )")
            multiselect.box--input(deselect-label="Can't remove this value", v-model='model_type', :searchable='false', :options='modelAuto', :allow-empty='false', label='name', track-by='name')
              template.landing-cpa--input---(slot='selection', slot-scope='{ values, search, isOpen }')
              template.max-element(slot='maxElements') 1 opcion seleccionada.
            span.fas.fa-id-card.focus-input2.interes(v-bind:class="{ 'float': !!(model_type) }", data-placeholder='Modelo del auto:')
          .ui-message-error(v-if='!autoModelValid')
            p(v-html="'¡Seleccione Marca del auto!'")
        b-col(sm='12', md='6', lg='6', xl='6', cols='12').pr
          .body--wrap.validate-input(:class="(year_type === null ? '' : !autoYearValid ? 'alert-validate' : 'has-value' )")
            multiselect.box--input(deselect-label="Can't remove this value", v-model='year_type', :searchable='false', :options='yearAuto', :allow-empty='false', label='name', track-by='name')
              template.landing-cpa--input---(slot='selection', slot-scope='{ values, search, isOpen }')
              template.max-element(slot='maxElements') 1 opcion seleccionada.
            span.fas.fa-id-card.focus-input2.interes(v-bind:class="{ 'float': !!(year_type) }", data-placeholder='Año:')
          .ui-message-error(v-if='!autoYearValid')
            p(v-html="'¡Seleccione Marca del auto!'")
      b-row
        b-col(sm='12', md='12', lg='12', xl='12', cols='12').pr
          .body--wrap.validate-input(:class="(user_email === null ? '' : !emailValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere el Email')
            input.landing-cpa--input(type='email', v-model='user_email', name='user_email', autocomplete='off')
            span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_email) }", data-placeholder='Email*:')
          .ui-message-error(v-if='!emailValid')
            p(v-html="'¡Ingresa email!'")
      b-row
        b-col(sm='12', md='12', lg='12', xl='12', cols='12').pr
          .body--wrap.validate-input(:class="(user_mobile === null ? '' : !mobileValid ? 'alert-validate' : 'has-value')", data-validate='Se requiere el celular')
            input.landing-cpa--input(type='number', v-model='user_mobile', name='user_mobile', autocomplete='off')
            span.fas.fa-envelope.focus-input2(v-bind:class="{ 'float': !!(user_mobile) }", data-placeholder='Teléfono celular*:')
          .ui-message-error(v-if='!mobileValid')
            p(v-html="'¡Ingresa Teléfono celular!'")
      b-row
        b-col(sm='12', md='12', lg='12', xl='12', cols='12').pr
          a(@click.prevent='toPay').btn.btn--green.btn-primary Cotizar ahora

</template>

<script>


export default {
  name: 'form-contac',
  components: { },
  data() {
    return {
      value: null,
      options: ['list', 'of', 'options'],
      auto_type: null,
      model_type: null,
      year_type: null,
      user_email: null,
      user_mobile: null,
      emailNotExist: true,
      typeAuto: [
        { name: 'Volkswagen', language: 'Volkswagen' },
        { name: 'Ferrari', language: 'Ferrari' },
        { name: 'Pagani', language: 'Pagani' },
        { name: 'Porsche', language: 'Porsche' }
      ],
      modelAuto: [
        { name: 'Descapotable', language: 'Descapotable' },
        { name: 'Sedán', language: 'Sedán' },
        { name: 'Convertible', language: 'Convertible' },
        { name: 'Vagón\n', language: 'Vagón\n' }
      ],
      yearAuto: [
        { name: '1990', language: '1990' },
        { name: '2000', language: '2000' },
        { name: '2010', language: '2010' },
        { name: '2020', language: '2020' }
      ]
    }
  },
  methods: {

    toPay(){
      let valid = true;
      if (this.auto_type === null){
        this.auto_type = ''
        valid = false;

      }
      if (this.model_type === null){
        this.model_type = ''
        valid = false;

      }
      if (this.year_type === null){
        this.year_type = ''
        valid = false;
      }
      if (this.user_email === null) {
        this.user_email = ''
      }
      if (this.user_mobile === null) {
        this.user_mobile = ''
      }
    },
    validateFields ( value, type ) {
      let result = true;
      let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // let regExpMobil = /^[0-9]{12,13}$/;

      if ( type === 'email') {
        if ( !regExpEmail.test( value ) ) {
          result = false;
        } else {
          result = true;
        }
      }
      return result
    }
  },
  computed: {
    autoTypeValid(){
      return !(this.auto_type === '')
    },
    autoModelValid(){
      return !(this.model_type === '')
    },
    autoYearValid(){
      return !(this.year_type === '')
    },
    emailValid () {
      let valid = false;
      if (this.user_email === null) {
        valid = true
      }else if(!this.emailNotExist) {
        valid = false;
      }else {
        valid = this.validateFields ( this.user_email , 'email' );
      }
      return valid
    },
    mobileValid(){
      return !(this.user_mobile === '')
    },
  },
  watch: {

  },
  mounted() {

  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="sass">
.multiselect__tags
  border-radius: 0
.multiselect__option--highlight:after
  background: #ff6a6adb !important
  content: "" !important
  color: #fff !important
  top: 0 !important
  right: 0 !important
  position: absolute !important
  line-height: 40px !important
  padding-right: 6px !important
  padding-left: 6px !important
  font-size: 9px !important
.multiselect__option--selected:after
  content: "" !important
.body--wrap.validate-input .multiselect__tags .multiselect__placeholder
  opacity: 0 !important
  position: absolute
.body--wrap .multiselect .multiselect__single
  display: block !important
</styled>
<style lang="sass" scoped>
  @import "../../../scss/utilities/variables"
  .btn--green
    margin-bottom: 0
    background-color: #BBD550
    color: #fff
    font-size: 1.3em
    padding: 0.5rem 2.75rem
    border: 0
    border-bottom: 3px solid #96A82A !important
    border-radius: 3px
    transition: 0.3s !important
    &:hover
      background-color: #96A82A
      border: 0 !important
      border-bottom: 3px solid #7f8e25 !important
      transform: translate3d(0, -2px, 0) !important
      box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgb(0 0 0 / 7%) !important
      transition: 0.3s !important
    @media all and (max-width: 991px)
      width: 100%
  .ui-message-error
    color: #F31835
    position: absolute
    left: 10px
    font-size: 0.85rem
    bottom: 21px
    display: flex
    justify-content: center
    align-items: center
    text-align: left
    transition: .3s
    padding: 0 0 0
    @media all and (max-width: 991px)
      bottom: -9px
  .pr
    position: relative
  form
    padding: 1em
    margin-top: 3em
    @media all and (max-width: 991px)
      margin-top: 0
    .body--wrap
      width: 100%
      position: relative
      margin-bottom: 4.3rem
      @media all and (max-width: 991px)
        margin-bottom: 9px
      .focus-input2
        position: absolute
        display: block
        width: 100%
        height: 100%
        top: -24px
        left: 0
        pointer-events: none
        color: #999999
        margin-bottom: 1.3rem
        @media all and (max-width: 991px)
          top: 13px
          left: 11px
          &.float:after
            top: -14px !important
            font-size: .75em !important
        &:after
          content: attr(data-placeholder)
          display: block
          position: absolute
          top: 0
          left: 0
          line-height: 1.2
          -webkit-transition: all 0.4s
          -o-transition: all 0.4s
          -moz-transition: all 0.4s
          transition: all 0.4s
          font-size: 1em
          font-weight: 400
    input
      width: 100%
      min-height: 40px
      display: block
      padding: 8px 40px 8px 8px
      border-radius: 0
      border: 1px solid #e8e8e8
      background: #fff
      font-size: 14px
</style>
