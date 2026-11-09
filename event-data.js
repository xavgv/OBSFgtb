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
  sponsors: ["sponsor1.png", "sponsor2.png", "sponsor3.png"],

  // Días y agenda
  days: [
    {
      label: "Día 1 · Xoves 12 nov",
      date: "2026-11-12",
      agenda: [
        { time: "09:00", title: "Acreditación y bienvenida", speaker: "Organización", room: "Hall", desc: "Recepción de asistentes y entrega de material.", state: "past" },
        { time: "09:30", title: "Conferencia inaugural", speaker: "Prof. Juan Pérez", room: "Aula Magna", desc: "Visión general del programa y objetivos de las jornadas.", state: "past" },
        { time: "10:00", title: "IA y educación: retos y oportunidades", speaker: "Dra. María García", room: "Aula Magna", desc: "Cómo la inteligencia artificial transforma la enseñanza y el aprendizaje.", state: "active" },
        { time: "11:00", title: "Mesa redonda: investigación aplicada", speaker: "Varios ponentes", room: "Sala B", desc: "Debate sobre transferencia de conocimiento a la sociedad.", state: "" },
        { time: "12:00", title: "Pausa café", speaker: "—", room: "Cafetería", desc: "Descanso y networking entre asistentes.", state: "" },
        { time: "12:30", title: "Taller: metodologías activas", speaker: "Dr. Luis Martín", room: "Sala C", desc: "Sesión práctica de técnicas de aprendizaje participativo.", state: "" },
        { time: "13:30", title: "Clausura y entrega de diplomas", speaker: "Rectorado", room: "Aula Magna", desc: "Cierre institucional y entrega de certificados.", state: "" },
      ]
    },
    {
      label: "Día 2 · Martes 13 nov",
      date: "2026-11-11",
      agenda: [
        { time: "09:30", title: "Apertura del segundo día", speaker: "Organización", room: "Aula Magna", desc: "Resumen del día anterior y agenda del día.", state: "active" },
        { time: "10:00", title: "Ética en la investigación", speaker: "Dra. Ana Torres", room: "Aula Magna", desc: "Principios éticos en la investigación académica.", state: "" },
        { time: "11:00", title: "Comunicaciones libres", speaker: "Varios autores", room: "Sala B", desc: "Presentación de trabajos seleccionados.", state: "" },
        { time: "12:00", title: "Pausa café", speaker: "—", room: "Cafetería", desc: "Descanso y networking.", state: "" },
        { time: "12:30", title: "Taller: escritura científica", speaker: "Dr. Carlos Ruiz", room: "Sala C", desc: "Claves para publicar en revistas indexadas.", state: "" },
        { time: "14:00", title: "Clausura final", speaker: "Rectorado", room: "Aula Magna", desc: "Cierre de las jornadas y despedida.", state: "" },
      ]
    },
  ],

  // Etiquetas de interfaz (textos del overlay principal/secundario)
  labels: {
    live: "En directo",
    topic: "Tema: ",
    ctrlTitle: "Ponente en pantalla",
    ctrlHint: "Clic en un ponente para actualizar el lower third. El panel se oculta con ⚙.",
  },

  // Textos del overlay de intro (columna principal, footer)
  intro: {
    headline: "Fundación Gonzalo Torrente Ballester",
    subhead: "Sigue en directo as ponencias e intervencións da I Xornada internacional sobre arquivos de escritor",
    place: "Campus universitario",
    web: "www.fgtb.gal",
    email: "jornadas@university.edu",
  },

  // Ponentes (para lower thirds)
  speakers: [
    { name: "Dr. Antonio Jesús Gil Gonzalez", role: "Director", affiliation: "Universidade de Santiago de Compostela", topic: "Presentador" },
    { name: "Prof. Juan Pérez", role: "Conferenciante inaugural", affiliation: "Universidad", topic: "Visión general de las jornadas" },
    { name: "Dr. Luis Martín", role: "Taller", affiliation: "Universidad", topic: "Metodologías activas de aprendizaje" },
    { name: "Dra. Ana Torres", role: "Ponente", affiliation: "Universidad", topic: "Ética en la investigación" },
  ]
};
