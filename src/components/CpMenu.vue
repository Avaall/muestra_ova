<template>
  <menu id="menu">
    <div v-if="!menu" id="sub-menu">
      <div class="icon-menu" @click="abrirMenu">
        <i class="bi bi-list"></i>
        <span>Menú</span>
      </div>
      <div class="icon-menu" id="home">
        <i class="bi bi-house"></i>
        <span>Inicio</span>
      </div>
    </div>
    <CpSubMenu v-if="menu" @cerrarMenu="cerrarMenu" />
  </menu>
</template>

<script>
import CpSubMenu from './CpSubMenu'

export default {
  data () {
    return {
      menu: false
    }
  },
  methods: {
    abrirMenu () {
      this.menu = true
    },
    cerrarMenu () {
      this.menu = false
    }
  },
  components: {
    CpSubMenu
  }
}
</script>
