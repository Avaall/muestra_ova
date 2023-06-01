<template>
  <div>
      <CpMenu class="position-absolute" />
      <main id="main">
        <!-- Page 1 -->
        <div id="creditos" v-if="page === 1">
          <h1>Bibliograría</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facere distinctio deserunt, fugiat sunt autem provident repellat voluptatum neque corrupti!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio debitis ut velit quod ex.
          </p>
          <h2>Agradecimientos a:</h2>
          <p>
            Lorem ipsum dolor sit.
          </p>
          <p>
            Lorem ipsum dolor sit.
          </p>
          <p>
            Lorem ipsum dolor sit.
          </p>
        </div>
      </main>
      <CpControls class="position-absolute" :page="page" :cantidad="cantidadPagesTema" @cambiarPage="cambiarPage" />
  </div>
</template>

<script>
import CpMenu from '../components/CpMenu'
import CpControls from '../components/CpControls'

export default {
  data () {
    return {
      page: 1,
      cantidadPagesTema: 1
    }
  },
  components: {
    CpMenu,
    CpControls
  },
  methods: {
    cambiarPage (val) {
      this.page = val
    }
  }
}
</script>
