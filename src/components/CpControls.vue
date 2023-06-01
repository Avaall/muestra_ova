<template>
  <div id="controls">
    <div id="sub-controls">
      <div class="pass-page" v-if="page > 1" @click="pages(page-1)">
        <i class="bi bi-caret-left-fill"></i>
      </div>
      <div v-for="(i, index) in cantidad" :key="index">
        <div :class="{ number_page: true }" @click="pages(i)">
          <span class="span-number">{{ i }}</span>
        </div>
      </div>
      <div class="pass-page" v-if="page < cantidadPages" @click="pages(page+1)">
        <i class="bi bi-caret-right-fill"></i>
      </div>
    </div>
    <span>Página {{ page }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cantidadPages: 0,
      activePage: []
    }
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    }
  },
  watch: {
    page: function () {
      for (let x = 0; x < this.activePage.length; x++) {
        if (x + 1 === this.page) {
          this.activePage[this.page - 1].style.background = '#008080'
        }
        if (x + 1 !== this.page) {
          this.activePage[x].style.background = 'none'
        }
      }
    }
  },
  mounted () {
    this.cantidadPages = document.querySelectorAll('.number_page').length
    this.activePage = document.querySelectorAll('.span-number')
    this.activar()
  },
  methods: {
    pages (x) {
      this.$emit('cambiarPage', x)
    },
    activar () {
      this.activePage[this.page - 1].style.background = '#008080'
    }
  }
}
</script>
