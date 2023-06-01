<template>
  <div>
      <CpMenu class="position-absolute" />
      <main id="main">
        <!-- Page 1 -->
        <div v-if="page === 1">
          Activos de información de seguridad de la información. <br>
          Se refiere a cualquier información o elemento relacionado con el tratamiento
          de esta (sistemas, soportes, edificios, personas, etc.) que tenga valor para la organización. Los activos de información pueden ser documentos físicos, documentos electrónicos, sistemas de información y bases de datos.
        </div>
        <!-- Page 2 -->
        <div v-if="page === 2">
          Riesgos de seguridad de la información. <br>
          Un riesgo en la seguridad de la información es la combinación entre las consecuencias
          de un evento sobre la información y la probabilidad de que este evento ocurra. Podría
          ser un resultado inesperado que puede afectar los activos de la información <br>
          ¿Cómo tratarlos? <br>
          Una vez que hayas identificado los riesgos, se deben realizar actividades que permitan
          mitigarlos, compartirlos, aceptarlos o evitarlos según mejor convenga para los intereses
          de la organización. <br>
          * Según la normativa ISO 31000, se define un evento como: “Ocurrencia o cambio de un
          conjunto particular de circunstancias. Un evento puede tener una o más ocurrencias, y
          puede tener varias causas y varias consecuencias. Un evento también puede ser algo que
          no se espera que suceda. Un evento puede ser una fuente de riesgo.”
        </div>
        <div v-if="page === 3">
          Wide recolorable gradient <br>
          Y tú, ¿ya identificaste los riesgos de seguridad de la información de tu entorno laboral?
          Para esto, puedes empezar identificando los activos de información que manejas y analizando
          los riesgos que pueden afectar dichos activos de información. Un riesgo en la seguridad de
          la información es la combinación entre las consecuencias de un evento sobre la información
          y la probabilidad de que este evento ocurra. Podría ser un resultado inesperado que puede
          afectar los activos de la información.
        </div>
        <div v-if="page === 4">
          Planes de tratamiento de seguridad de la información <br>
          Es el conjunto de acciones orientadas a: <br>
          - Mitigar, trasladar, aceptar o eliminar los riesgos de seguridad de la información que hayas
          identificado y que puedan afectar los activos de información de la organización. <br>
          -Adquirir, implementar y mantener herramientas, que aporten al logro de los objetivos de la organización.
        </div>
        <div v-if="page === 5">
          Incidentes de seguridad de la información. <br>
          Es la materialización de un riesgo de seguridad de la información que afecta negativamente
          las operaciones o actividades que se estén desarrollando. <br>
          Un ejemplo puede ser: <br>
          Acceso a mi equipo de trabajo por robo de la contraseña de usuario: <br>
          El riesgo materializado es la pérdida de la contraseña y se convierte en un incidente cuando
          se accede a un sistema con esta contraseña y se extraen datos, porque se afecta la confidencialidad
          de la información.
        </div>
        <div v-if="page === 6">
          Cultura de seguridad de la información. <br>
          Conjunto de acciones planificadas orientadas a fortalecer la sensibilización, capacitación,
          entrenamiento y apropiación de todas las partes interesadas (servidores públicos, contratistas,
          usuarios, ciudadanos, proveedores, directivos, etc.) en el cumplimiento de las políticas y
          procedimientos de seguridad de la información establecidas, orientadas a contribuir a la eficacia
          y mejora continua del sistema, propendiendo por preservar la confidencialidad, integridad y
          disponibilidad de los activos de información organizacionales.
        </div>
        <div v-if="page === 7">
          Efectividad de controles de seguridad de la información. <br>
          Consiste en preservar la confidencialidad, integridad y disponibilidad de la información a
          través de la implementación de una serie de controles. <br>
          Para verificar que estos controles son efectivos, se requiere que se emprendan acciones de
          seguimiento periódicos al desempeño de los controles implementados orientados a la seguridad
          de la información de la organización. <br>
          El objetivo de este proceso es identificar oportunidades de mejora que permitan establecer
          acciones que orienten al fortalecimiento de las actividades que se desarrollan como parte
          de la ejecución de los controles de seguridad de la información.
        </div>
        <div v-if="page === 8">
          Vulnerabilidades de seguridad de la información. <br>
          Son debilidades propias de un activo de información, que pueden ser de carácter legal,
          administrativo, operativo, técnico, físico, químico o biológico, y que podrían ser explotadas
          por una amenaza, afectando la confidencialidad, integridad y disponibilidad de la información. <br>
          Pueden ser: <br>
          - Vulnerabilidades sobre la disponibilidad de los servicios de T.I. <br>
          - El uso y acceso no autorizado atentando a la confidencialidad de la información. <br>
          - La modificación no autorizada del hardware o software atentando a la integridad de los servicios de TI.
        </div>
        <div v-if="page === 9">
          Caso práctico <br>
          Para entender un poco más los procesos de la seguridad de la información es importante tener
          presente el contexto que rodea su ejecución. Para profundizar los procesos de seguridad de la
          información, trabajaremos un caso práctico que abarca desde las actividades asociadas a la
          gestión de activos de información, hasta las actividades asociadas a la gestión de vulnerabilidades
          y evaluación de la efectividad de los controles implementados.
        </div>
        <div v-if="page === 10">
          Caso práctico <br>
          La empresa XYZ tiene como razón social la realización de asesorías para la implementación de sistemas
          de gestión en diferentes entidades. En la ejecución de estas asesorías, la empresa recolecta información
          de sus clientes y con base en los análisis efectuados sobre esta información emite los resultados de la
          consultoría con unos planes de acción requeridos para la implementación de los sistemas de gestión. Para
          lograr esta razón social, la empresa XYZ debe hacer un tratamiento de la información de los clientes y a
          su vez, debe ejecutar unos procesos misionales, estratégicos y de apoyo que se soportan con el manejo de
          una serie de recursos entre los que se encuentran equipos tecnológicos, información en documentos físicos,
          información en documentos electrónicos, bases de datos, sistemas de información, equipos de telecomunicaciones,
          estaciones de usuario entre otros.
        </div>
        <div v-if="page === 11">
          Uno de los procesos misionales de la empresa es la Gestión de evidencias con el cual se busca verificar
          las evidencias que aportan los clientes para comprobar el cumplimiento de los requisitos de los sistemas
          de gestión. Para ejecutar este proceso se tiene dispuesto un recurso tecnológico que es una estación de
          usuario y cuenta con un profesional para realizar esta revisión. Cierto día, esta estación de usuario fue
          robada. Cuando la empresa quería verificar lo sucedido y determinar el impacto de esta situación se dio
          cuenta que no tenía identificada la información que tenía almacenada en esta estación de usuario como
          tampoco había realizado una valoración de dicha información y por ende no tenía un análisis de riesgos
          que le permitiera identificar que controles debería haber implementado para hacer frente a esta situación
          fuera para prevenir su ocurrencia o para disminuir su impacto. <br>
          En este punto la empresa XYZ se dio cuenta que debía realizar un proceso de gestión de activos de información
          donde determinaría que activos, ya sean información o equipos tecnológicos, debía considerar como activos
          de información debido a que tienen un valor importante para la compañía, así como clasificar dichos activos
          de información y valorarlos para entender su criticidad. Posterior a esto, para determinar las situaciones
          que podrían afectar a estos activos de información y estar preparados para responder a estas afectaciones,
          la empresa debía realizar un proceso de gestión de riesgos de seguridad de la información donde a partir de
          un análisis de amenazas y vulnerabilidades que podrían impactar los activos de información identificados se
          determinarían los riesgos de seguridad de la información con todas las variables a tener en cuenta como su
          probabilidad e impacto.
        </div>
        <div v-if="page === 12">
          Luego de tener identificados los riesgos de seguridad de la información que impactan los activos de información
          identificados, la empresa debía determinar qué planes de tratamiento debería implementar para reducir, trasladar,
          evitar o aceptar los riesgos según fueran los intereses de la compañía y de esta manera estar preparados para
          la materialización de dichos riesgos. Ya con estos procesos de seguridad de la información implementados, la
          empresa XYZ estaría preparada para la gestión de incidentes de seguridad de la información como el que le ocurrió
          con el hurto del equipo para la Gestión de evidencias ya que tendría identificada, clasificada y valorada la
          información requerida para atender el incidente, para darle el tratamiento establecido y para levantar las lecciones
          aprendidas con la materialización de este hecho, buscando que a futuro no vuelva a ocurrir o que si ocurre el
          impacto sea mínimo.
        </div>
        <div v-if="page === 13">
          Wide recolorable gradient <br>
          3D Stylized Sparkle Emoji <br>
          Toda esta información de lecciones aprendidas será el insumo para que la empresa XYZ pueda establecer un proceso
          de Cultura en seguridad de la información que permita al personal de la compañía estar enterado de las acciones
          que se deben emprender con la materialización de incidentes, así como las actividades a ejecutar para prevenir
          que estos ocurran. Finalmente, y como parte de las actividades de mejoramiento continuo, la empresa XYZ debe implementar
          un proceso de gestión de vulnerabilidades y efectividad de controles donde pueda determinar si las actividades que se
          identificaron en los planes de tratamiento están siendo efectivas y si las vulnerabilidades propias de los activos de
          información están siendo contempladas para su remediación con los planes de tratamiento. <br>
          Es así como luego de implementar estos procesos de seguridad de la información en su compañía, la empresa empieza
          a tener una cultura de seguridad de la información que le permite estar atento a cualquier situación que pueda
          afectar sus activos de información y como responder ante ello.
        </div>
        <div v-if="page === 14">
          Para más información, consultar: <br>
          ·Video: Activos de Información <br>
          https://www.youtube.com/watch?v=nu_NiwazO6I <br>
          ·Video: ¿Qué es un Riesgo? <br>
          https://www.youtube.com/watch?v=w3jhvKfRcLA <br>
          ·Video: Incidentes de Seguridad de la información <br>
          https://www.youtube.com/watch?v=3IVf4UEW_Uo <br>
          ·Guía para la Gestión y Clasificación de Activos de Información. MINTIC <br>
          https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-150528_G5_Gestion_Clasificacion.pdf <br>
          ·Guía de Gestión de Riesgos. MINTIC <br>
          https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-150516_G7_Gestion_Riesgos.pdf <br>
          ·Guía de Controles de seguridad de la información <br>
          https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-150511_G8_Controles_Seguridad.pdf <br>
          ·Guía Plan de Capacitación, Sensibilización y Comunicación de Seguridad de la Información <br>
          https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-150525_G14_Plan_comunicacion_sensibilizacion.pdf <br>
          ·Guía para la Gestión y Clasificación de Incidentes de Seguridad de la Información. <br>
          https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-150509_G21_Gestion_Incidentes.pdf
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
      cantidadPagesTema: 14
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
