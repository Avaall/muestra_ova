<template>
  <div>
      <CpMenu class="position-absolute" />
      <main id="main">
        <!-- Page 1 -->
        <div v-if="page === 1">
          Basados en la Ley 1712 de 2014 en el Artículo 6: Definiciones <br>
          ¿Qué es la información pública? <br>
          Es toda información que un sujeto obligado genere, obtenga,
          adquiera, o controle en su calidad de tal.
        </div>
        <!-- Page 2 -->
        <div v-if="page === 2">
          ¿Qué es información pública clasificada? <br>
          Es aquella información que estando en poder o custodia de un sujeto
          obligado en su calidad de tal, pertenece al ámbito propio, particular
          y privado o semiprivado de una persona natural o jurídica por lo que su
          acceso podrá ser negado o exceptuado, siempre que se trate de las circunstancias
          legítimas y necesarias y los derechos particulares o privados consagrados en el
          artículo 18 de la Ley 1712 de 2014.
        </div>
        <!-- Page 3 -->
        <div v-if="page === 3">
          ¿Qué es información pública reservada? <br>
          Es aquella información que estando en poder o custodia de un sujeto obligado
          en su calidad de tal, es exceptuada de acceso a la ciudadanía por daño a intereses
          públicos y bajo cumplimiento de la totalidad de los requisitos consagrados en
          el artículo 19 de la Ley 1712 de 2014.
        </div>
        <!-- Page 4 -->
        <div v-if="page === 4">
          Para más información, consultar: <br>
          ·Ley 1712 de 2014: <br>
          https://www.medellin.gov.co/normograma/docs/astrea/docs/ley_1712_2014.htm <br>
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
      cantidadPagesTema: 4
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
