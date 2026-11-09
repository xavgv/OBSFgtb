/* ============================================================
   DATOS COMPARTIDOS DEL EVENTO
   Edita aquí la agenda, ponentes, patrocinadores, etc.
   Todos los overlays (intro, principal, secundario) leen de aquí.
   ============================================================ */
window.EVENT_DATA = {
  // Marca
  logo: "logo.png",
  university: "Fundacion Gonzalo Torrente Ballester",
  eventTitle: "I Xornada internacional sobre arquivos de escritor",
  eventDate: "Xoves 12 e Viernes 13 de novembro de 2026",
  hashtag: "@FGTB",

  // Patrocinadores
  sponsors: ["logos/usc.png", "logos/tllc.png", "logos/ministerio.png"],

  // Días y agenda
  days: [
    {
      label: "Xoves 12 nov",
      date: "2026-11-12",
      agenda: [
        { time: "10:00", title: "Presentación", speaker: "Anxo Lorenzo, Fernanda Torrente, Antonio J.Gil", room: "Fundacion Gonzalo Torrente Ballester", desc: "Visita á fundación e exposición de manuscritos", state: "past" },
        { time: "11:00", title: "Apertura", speaker: "Diego Rodríguez", room: "Fundacion Gonzalo Torrente Ballester", desc: "Autores sen arquivo: Rosalía de Castro", state: "past" },
        { time: "11:45", title: "De Galicia ao Infinito", speaker: "Claudio Rodríguez Fer", room: "Fundacion Gonzalo Torrente Ballester", desc: "De Galicia ao Infinito: O arquivo intercultural e interartístico da Cátedra Valente", state: "active" },
        { time: "12:30", title: "O Arquivo de Carlos Casares", speaker: "Gustavo Garrido", room: "Fundacion Gonzalo Torrente Ballester", desc: "Presentacion sobre o arquivo da fundación Carlos Casares", state: "" },
        { time: "13:15", title: "Seminario de traballo", speaker: "Lourdes Regueiro", room: "Fundacion Gonzalo Torrente Ballester", desc: "Seminario de traballo da Fundacion Camilo José Cela", state: "" },
      ]
    },
    {
      label: "Viernes 13 nov",
      date: "2026-11-13",
      agenda: [
        { time: "09:30", title: "Apertura del segundo día", speaker: "Organización", room: "Fundacion Gonzalo Torrente Ballester", desc: "Resumen del día anterior y agenda del día.", state: "active" },
        { time: "10:00", title: "Ética en la investigación", speaker: "Dra. Ana Torres", room: "Fundacion Gonzalo Torrente Ballester", desc: "Principios éticos en la investigación académica.", state: "" },
        { time: "11:00", title: "Comunicaciones libres", speaker: "Varios autores", room: "Fundacion Gonzalo Torrente Ballester", desc: "Presentación de trabajos seleccionados.", state: "" },
        { time: "12:00", title: "Pausa café", speaker: "—", room: "Fundacion Gonzalo Torrente Ballester", desc: "Descanso y networking.", state: "" },
        { time: "12:30", title: "Taller: escritura científica", speaker: "Dr. Carlos Ruiz", room: "Fundacion Gonzalo Torrente Ballester", desc: "Claves para publicar en revistas indexadas.", state: "" },
        { time: "14:00", title: "Clausura final", speaker: "Rectorado", room: "Fundacion Gonzalo Torrente Ballester", desc: "Cierre de las jornadas y despedida.", state: "" },
      ]
    },
  ],

  // Etiquetas de interfaz (textos del overlay principal/secundario)
  labels: {
    live: "En directo",
    topic: "Tema: ",
    ctrlTitle: "Ponente en pantalla",
    ctrlHint: "",
  },

  // Textos del overlay de intro (columna principal, footer)
  intro: {
    headline: "Fundación Gonzalo Torrente Ballester",
    subhead: "Sigue en directo as ponencias e intervencións da I Xornada internacional sobre arquivos de escritor",
    place: "Rúa do Vilar, 7",
    web: "www.fgtb.gal",
    email: "fgtb@fgtb.org",
  },

  // Ponentes (para lower thirds)
  speakers: [
    { name: "Dr. Antonio Jesús Gil Gonzalez", role: "Director", affiliation: "Universidade de Santiago de Compostela", topic: "Presentador" },
    { name: "Diego Rodríguez Fer", role: "Ponente", affiliation: "Real Academia Galega", topic: "De Galicia ao Infinito" },
    { name: "Claudio Rodríguez Fer", role: "Ponente", affiliation: "Universidade de Santiago de Compostela", topic: "Metodologías activas de aprendizaje" },
    { name: "Gustavo Garrido", role: "Ponente", affiliation: "Fundacion Carlos Casares", topic: "O Arquivo de Carlos Casares" },
    { name: "Lourdes Regueiro", role: "Ponente", affiliation: "Fundacion Camilo José Cela", topic: "Seminario de traballo" },
  ]
};
