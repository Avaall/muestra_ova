<template>
  <div id="sub-menu-mostrar">
    <div @click="cerrarMenu">
      <i class="bi bi-x-lg"></i>
    </div>
    <div id="ul-menu">
      <router-link to="/" class="li-ul-menu">
        <strong>Instrucciones</strong>
      </router-link>
      <router-link to="/tema-1" class="li-ul-menu">
        <strong>(Sección 1)</strong>
        ¿Qué es la información?
      </router-link>
      <router-link to="/tema-2" class="li-ul-menu">
        <strong>(Sección 2)</strong>
        ¿Qué es la seguridad de la <br> información?
      </router-link>
      <router-link to="/tema-3" class="li-ul-menu">
        <strong>(Sección 3)</strong>
        Clasificación de la Información
      </router-link>
      <router-link to="/tema-4" class="li-ul-menu">
        <strong>(Sección 4)</strong>
        Procesos de la seguridad de la información
      </router-link>
      <router-link to="/creditos" class="li-ul-menu">
        <strong>Creditos</strong>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Boolean
    }
  },
  methods: {
    cerrarMenu () {
      this.$emit('cerrarMenu')
    }
  }
}
</script>
