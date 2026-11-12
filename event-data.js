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
        { time: "10:00", title: "Presentación", speaker: "Anxo Lorenzo, Fernanda Torrente, Antonio J.Gil", affiliation: "Fundacion Gonzalo Torrente Ballester", desc: "Inauguración a cargo do director xeral de cultura, a presidenta da Fundación e o director da xornada seguida da visita a exposición de manuscritos", state: "past" },
        { time: "11:00", title: "Apertura", speaker: "Diego Rodríguez", affiliation: "Fundacion Gonzalo Torrente Ballester", desc: "Autores sen arquivo: Rosalía de Castro", state: "past" },
        { time: "11:45", title: "De Galicia ao Infinito", speaker: "Claudio Rodríguez Fer", affiliation: "Fundacion Gonzalo Torrente Ballester", desc: "O arquivo intercultural e interartístico da Cátedra Valente", state: "active" },
        { time: "12:30", title: "O Arquivo de Carlos Casares", speaker: "Gustavo Garrido", affiliation: "Fundacion Gonzalo Torrente Ballester", desc: "Presentacion sobre o arquivo da fundación Carlos Casares", state: "" },
        { time: "13:15", title: "Seminario de traballo", speaker: "Lourdes Regueiro", affiliation: "Fundacion Gonzalo Torrente Ballester", desc: "Seminario de traballo sobre redes e proxectos institucionais", state: "" },
      ]
    },
    {
      label: "Venres 13 nov",
      date: "2026-11-13",
      agenda: [
        { time: "10:45", title: "O Proxecto de Biblioteca digital Emilia Pardo Bazan", speaker: "Catherine Orsini", affiliation: "Université de Grenoble-Alpes", desc: "", state: "active" },
        { time: "11:30", title: "O arquivo de Gonzalo Torrente Ballester e La saga/fuga de J.B. Un proxecto de dossier xenético", speaker: "Antonio J. Gil", affiliation: "Universidade de Santiago de Compostela", desc: "Estudo de case sobre o arquivo do ecritor e a crítica xenética", state: "" },
        { time: "12:15", title: "A Fundación Xosé Neira Vilas: De biblioteca no rural a centro de documentación e estudo", speaker: "Fernando Redondo Neira", affiliation: "Universidade de Santiago de Compostela", desc: "Relatorio de clausura da xornada", state: "" },
        { time: "13:00", title: "Visita á exposición permanente", speaker: "Carmen Becerra", affiliation: "Fundacion Gonzalo Torrente Ballester", desc: "Gonzalo Torrente Ballester. Itinerario de vida e creación", state: "" },      ]
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
    { name: "Antonio J. Gil Gonzalez", role: "Ponente", affiliation: "USC, Fundación Gonzalo Torrente Ballester", topic: "O arquivo de Gonzalo Torrente Ballester e La saga/fuga de J.B. Un proxecto de dossier xenético" },
    { name: "Catherine Orsini", role: "Ponente", affiliation: "Université de Grenoble-Alpes", topic: "Proxecto de Biblioteca dixital Emilia Pardo Bazan" },
    { name: "Fernando Redondo Neira", role: "Ponente", affiliation: "USC, Fundación Xosé Neira Vilas", topic: "A Fundación Xosé Neira Vilas: De biblioteca no rural a centro de documentación e estudo" },
    { name: "Carmen Becerra", role: "Ponente", affiliation: "Fundación Gonzalo Torrente Ballester", topic: "Visita á exposición permanente: Gonzalo Torrente Ballester. Itinerario de vida e creación" },
  ]
};
