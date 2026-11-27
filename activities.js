// Prácticas Amelita — lista de actividades.
//
// Para agregar una actividad:
// 1. Crea el archivo HTML en la carpeta de la materia.
// 2. Añade UNA línea dentro de activities, por ejemplo:
//    { title: "Sumas hasta 20", href: "matematicas/sumas.html" },
//
// detail es opcional (un subtítulo corto).
// Ciencias Naturales y Estudios Sociales son las clases en español;
// Science y Social Studies son las clases en inglés (van justo después).
// Las páginas de Science siguen en ciencias/ para no cambiar las direcciones.
// Colores de cada clase: esmeralda, cerceta, escarlata y oro, azul y bronce,
// amarillo y negro, noche con oro, y arcilla.
//
// Apps para descargar: una línea en ESCUELA_APPS y el archivo en apps/.

window.ESCUELA_ACTIVITIES = [
  {
    id: "ciencias",
    name: "Ciencias Naturales",
    color: "#0e6b45",
    tint: "#e7f6ee",
    shadow: "#0a4e32",
    activities: [
      { title: "TALLER N.º 1. Cambios de la materia", href: "ciencias/cambios-de-la-materia.html", detail: "Cambio físico o químico" },
      { title: "Taller: Cambios físicos y químicos", href: "ciencias/taller-cambios-fisicos-quimicos.html", detail: "Evaluación en clase, 10 preguntas" },
    ],
  },
  {
    id: "science",
    name: "Science",
    color: "#0b6e82",
    tint: "#e3f4f6",
    shadow: "#084c59",
    activities: [
      { title: "States of Matter", href: "ciencias/estados-de-la-materia.html", detail: "Matter, mass, volume and states" },
    ],
  },
  {
    id: "matematicas",
    name: "Matemáticas",
    color: "#9b1c32",
    tint: "#fff6df",
    shadow: "#c8922a",
    activities: [],
  },
  {
    id: "ingles",
    name: "Inglés",
    color: "#1d4e89",
    tint: "#f8f1e4",
    shadow: "#8d6233",
    activities: [
      { title: "Listening: Movers", href: "ingles/listening-movers.html", detail: "5 partes con audio, Revisar y puntaje" },
    ],
  },
  {
    id: "lenguaje",
    name: "Lenguaje",
    color: "#2a2416",
    tint: "#fff3b0",
    shadow: "#2a2416",
    activities: [
      { title: "Los accidentes del verbo", href: "lenguaje/accidentes-del-verbo.html", detail: "Persona, número, tiempo, modo e infinitivo" },
      { title: "Los accidentes del verbo", href: "https://www.liveworksheets.com/es/c?a=s&t=63gcdyukq1z&sr=n&l=lm&i=ofoutst&r=mg&f=dzdxuuds&ms=uz&cd=p10bknixct7glavjejxzpzvbngnmxxnpxg&mw=hs", detail: "Taller de Liveworksheets: verbos, persona, número y tiempo. Al terminar, toma captura del puntaje" },
    ],
  },
  {
    id: "estudios-sociales",
    name: "Estudios Sociales",
    color: "#3d2c74",
    tint: "#f7f0e4",
    shadow: "#c9a227",
    activities: [],
  },
  {
    id: "social-studies",
    name: "Social Studies",
    color: "#8c3f22",
    tint: "#f8eee6",
    shadow: "#5e2a16",
    activities: [],
  },
];

window.ESCUELA_APPS = [
  {
    title: "Deletreo Francés — versión 1.3",
    detail: "Novedad: en Dictado puedes elegir si las palabras salen en orden o en desorden.",
    note: "Para la tablet Android. Se instala encima de la versión anterior.",
    href: "apps/DeletreoFrances-1.3.apk",
    download: "DeletreoFrances-1.3.apk",
  },
];
