/* ============================================================
   DATOS COMPARTIDOS DEL EVENTO
   Edita aquí la agenda, ponentes, patrocinadores, etc.
   Todos los overlays (intro, principal, secundario) leen de aquí.
   ============================================================ */
window.EVENT_DATA = {
  // Marca
  logo: "logo.png",
  university: "Fundacion Gonzalo Torrente Ballester",
  eventTitle: "",
  eventDate: "Xoves 12 e Venres 13 de novembro de 2026",
  hashtag: "@FGTB",

  // Patrocinadores
  sponsors: ["logos/usc.png", "logos/tllc.png", "logos/ministerio.png"],

  // Días y agenda
  days: [
    {
      label: "Xoves 12 nov",
      date: "2026-11-12",
      agenda: [
        { time: "10:00", title: "Presentación", speaker: "Anxo Lorenzo, Fernanda Torrente, Antonio J.Gil", room: "Fundacion Gonzalo Torrente Ballester", desc: "Inauguración a cargo do director xeral de cultura, a presidenta da Fundación e o director da xornada seguida da visita a exposición de manuscritos", state: "past" },
        { time: "11:00", title: "Apertura", speaker: "Diego Rodríguez", room: "Fundacion Gonzalo Torrente Ballester", desc: "Autores sen arquivo: Rosalía de Castro", state: "past" },
        { time: "11:45", title: "De Galicia ao Infinito", speaker: "Claudio Rodríguez Fer", room: "Fundacion Gonzalo Torrente Ballester", desc: "O arquivo intercultural e interartístico da Cátedra Valente", state: "active" },
        { time: "12:30", title: "O Arquivo de Carlos Casares", speaker: "Gustavo Garrido", room: "Fundacion Gonzalo Torrente Ballester", desc: "Presentacion sobre o arquivo da fundación Carlos Casares", state: "" },
        { time: "13:15", title: "Seminario de traballo", speaker: "Lourdes Regueiro", room: "Fundacion Gonzalo Torrente Ballester", desc: "Seminario de traballo sobre redes e proxectos institucionais", state: "" },
      ]
    },
    {
      label: "Venres 13 nov",
      date: "2026-11-13",
      agenda: [
        { time: "10:45", title: "O Proxecto de Biblioteca digital Emilia Pardo Bazan", speaker: "Catherine Orsini", room: "Fundacion Gonzalo Torrente Ballester", desc: "Presentación do proxecto de biblioteca dixital Emilia Pardo Bazan.", state: "active" },
        { time: "11:30", title: "O arquivo de Gonzalo Torrente Ballester e La saga/fuga de J.B. Un proxecto de dossier xenético", speaker: "Antonio J. Gil", room: "Fundacion Gonzalo Torrente Ballester", desc: "Estudio de caso sobre o arquivo do ecritor e a crítica xenética", state: "" },
        { time: "12:15", title: "Peche", speaker: "Fernando Redondo", room: "Fundacion Gonzalo Torrente Ballester", desc: "A Fundación Xosé Neira Vilas: De biblioteca no rural a centro de documentación e estudo", state: "" },
        { time: "13:00", title: "Visita a exposición", speaker: "Carmen Becerra", room: "Fundacion Gonzalo Torrente Ballester", desc: "Visita a exposición permanente da Fundación Gonzalo Torrente Ballester", state: "" },      ]
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
    headline: "I Xornada Internacional sobre Arquivos de Escritor",
    subhead: "Bibliotecas e arquivos de autores galegos",
    place: "Rúa do Vilar, 7",
    web: "www.fgtb.gal",
    email: "fgtb@fgtb.org",
  },

  // Ponentes (para lower thirds)
  speakers: [
    { name: "Antonio J. Gil Gonzalez", role: "Director", affiliation: "Universidade de Santiago de Compostela, FGTB", topic: "O Arquivo de Gonzalo Torrente Ballester" },
    { name: "Diego Rodríguez Fer", role: "Ponente", affiliation: "Real Academia Galega", topic: "De Galicia ao Infinito" },
    { name: "Claudio Rodríguez Fer", role: "Ponente", affiliation: "Universidade de Santiago de Compostela", topic: "Metodologías activas de aprendizaje" },
    { name: "Gustavo Garrido", role: "Ponente", affiliation: "Fundacion Carlos Casares", topic: "O Arquivo de Carlos Casares" },
    { name: "Lourdes Regueiro", role: "Ponente", affiliation: "Fundacion Camilo José Cela", topic: "Seminario de traballo" },
    { name: "Catherine Orsini", role: "Ponente", affiliation: "Universidade de Grenoble-Alpes", topic: "Proyecto de Biblioteca digital Emilia Pardo Bazan" },
    { name: "Fernando Redondo", role: "Ponente", affiliation: "USC, Fundación Xosé Neira Vilas", topic: "A Fundación Xosé Neira Vilas" },
    { name: "Carmen Becerra", role: "Ponente", affiliation: "Fundación Gonzalo Torrente Ballester", topic: "Visita a exposición" },
  ]
};
