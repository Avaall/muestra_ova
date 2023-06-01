<template>
  <div>
      <CpMenu class="position-absolute" />
      <main id="main">
        <!-- Page 1 -->
        <div v-if="page === 1">
          ¿Qué es la seguridad de la información? <br>
          Según la familia de las Normas Internacionales ISO/IEC 27000,
          la seguridad de la información incluye tres propiedades principales:
          la confidencialidad, la disponibilidad y la integridad. Con el objetivo
          de garantizar el éxito empresarial sostenido y su continuidad, y
          minimizar impactos, la seguridad de la información implica la aplicación
          y la gestión de medidas de seguridad adecuadas que conllevan la consideración
          de una amplia gama de amenazas. La seguridad de la información se consigue
          mediante la implementación de un conjunto de controles aplicables, seleccionados
          a través del proceso de gestión de riesgos elegido y gestionado por medio de un
          SGSI, empleando políticas, procesos, procedimientos, estructuras organizativas,
          software y hardware para proteger los activos de información identificados.
          Estos controles necesitan ser especificados, implementados, monitorizados revisados
          y mejorados cuando sea necesario, para garantizar que la seguridad y los objetivos
          de negocio y de seguridad específicos se cumplan. Estos controles de seguridad de la
          información deben integrarse de forma coherente con los procesos de negocio de
          una organización.
        </div>
        <!-- Page 2 -->
        <div v-if="page === 2">
          Ejemplo: Cuando proteges la información de manera que sólo puedan acceder a
          ella las personas autorizadas (confidencialidad - Tu historia clínica debe
          estar protegida para que sólo tú puedas acceder a ella), cuando garantizas
          que la información no está siendo modificada sin autorización y que se puede
          dar fe de la autenticidad de la misma (Integridad - Las actas de reunión
          cuando se pasan para firma, no sufren modificaciones en el contenido), cuando
          la información se encuentra lista para ser accedida para su consulta sin ninguna
          complicación (Disponibilidad - Información de cuentas bancarias disponible para
          consultarse en cualquier momento). Cuando se cumplen estos criterios es cuando
          podemos hablar de seguridad de la información.
        </div>
        <div v-if="page === 3">
          ¿Qué es la Confidencialidad? <br>
          La confidencialidad de la información es la propiedad que determina que la
          información no esté disponible ni sea revelada a individuos, entidades o procesos no autorizados.
        </div>
        <div v-if="page === 4">
          ¿Qué es la Disponibilidad? <br>
          La disponibilidad de la información es la propiedad que determina que la información
          sea accesible y utilizable en todo momento por solicitud de individuos, entidades o
          procesos autorizados.
        </div>
        <div v-if="page === 5">
          ¿Qué es la Integridad? <br>
          La integridad de la información es la propiedad que determina que la información en
          tránsito, reposo o uso no ha sido modificada por individuos, entidades o procesos
          no autorizados.
        </div>
        <div v-if="page === 6">
          Wide recolorable gradient <br>
          Para más información, consultar: <br>
          ·Video: Campaña de sensibilización Seguridad de la Información <br>
          https://www.youtube.com/watch?v=Mso5tesUkeM <br>
          ·ISO 27000 <br>
          https://www.youtube.com/watch?v=X3puc8dJWFw <br>
          ·Video: Definición de la Seguridad de la Información y sus Tres Pilares <br>
          https://www.youtube.com/watch?v=hocir2GQWnY <br>
          ·Video: 1.2 Los tres pilares de la seguridad <br>
          https://www.youtube.com/watch?v=1fcSP4WAReY
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
      cantidadPagesTema: 6
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
