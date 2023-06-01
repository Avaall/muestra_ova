<template>
  <div>
      <CpMenu class="position-absolute" />
      <main id="main">
        <!-- Page 1 -->
        <div v-if="page === 1">
          ¿Qué es la Información? <br>
          Según la ley 1712 de 2014, en su artículo 6, literal a, se puede definir
          información a un conjunto organizado de datos contenido en cualquier
          documento que los sujetos obligados generen, obtengan, adquieran, transformen
          o controlen. <br>
          Según la familia de las Normas Internacionales ISO/IEC 27000, “La información
          puede ser almacenada en muchas formas, incluyendo: formato digital (por ejemplo,
          ficheros almacenados en medios electrónicos u ópticos), formato material (por
          ejemplo, en papel), así como la información intangible que forma parte del
          conocimiento de los empleados. La información puede ser transmitida por diversos
          medios: mensajería, comunicación electrónica o verbal. Independientemente del
          formato o del medio por el cual se transmite la información, es necesaria siempre
          una protección adecuada.”
        </div>
        <!-- Page 2 -->
        <div v-if="page === 2">
          ¿Cuáles son los tipos de información en entidades públicas? <br>
          a.Documentos de Archivo (físicos y electrónicos). <br>
          b.Archivos institucionales (físicos y electrónicos). <br>
          c.Sistemas de Información Corporativos.<br>
          d.Sistemas de Trabajo Colaborativo. <br>
          e.Sistemas de Administración de Documentos. <br>
          f.Sistemas de Mensajería Electrónica. <br>
          g.Portales, Intranet y Extranet. <br>
          h.Sistemas de Bases de Datos. <br>
          i.Discos duros, servidores, discos o medios portables, cintas o medios de
          video y audio (análogo o digital), etc. <br>
          j.Cintas y medios de soporte (back up o contingencia). <br>
          k.Uso de tecnologías en la nube. <br>
          Teniendo como base el Decreto 1080 de 2015, en su artículo 2.8.2.5.2.,
          donde se dictan los tipos de información a los cuales se aplicarán las
          normas de dicho decreto, que sea producida y/o recibida por las entidades
          públicas, sus dependencias y servidores públicos, y en general por cualquier
          persona que desarrolle actividades inherentes a la función de dicha entidad
          o que hayan sido delegados por esta, independientemente del soporte y medio
          de registro (análogo o digital) en que se produzcan, y que se conservan en:
        </div>
        <!-- Page 3 -->
        <div v-if="page === 3">
          Para más información, consultar: <br>
          ·Ley 1712 de 2014: <br>
          https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882 <br>
          ·Video: ¿Qué es la información? <br>
          https://www.youtube.com/watch?v=HE8X6_mB4dg <br>
          ·Decreto 1080 de 2015: <br>
          https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76833
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
      cantidadPagesTema: 3
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
