// Prácticas Amelita — lista de actividades.
//
// Para agregar una actividad:
// 1. Crea el archivo HTML en la carpeta de la materia.
// 2. Añade UNA línea dentro de activities, por ejemplo:
//    { title: "Sumas hasta 20", href: "matematicas/sumas.html" },
//
// detail es opcional (un subtítulo corto).
// Colores de cada clase: esmeralda, escarlata y oro, azul y bronce,
// amarillo y negro, y noche con oro.

window.ESCUELA_ACTIVITIES = [
  {
    id: "ciencias",
    name: "Ciencias / Science",
    color: "#0e6b45",
    tint: "#e7f6ee",
    shadow: "#0a4e32",
    activities: [
      { title: "Estados de la materia", href: "ciencias/estados-de-la-materia.html", detail: "Materia, masa, volumen y estados" },
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
    activities: [],
  },
  {
    id: "lenguaje",
    name: "Lenguaje",
    color: "#2a2416",
    tint: "#fff3b0",
    shadow: "#2a2416",
    activities: [
      { title: "Los accidentes del verbo", href: "lenguaje/accidentes-del-verbo.html", detail: "Persona, número, tiempo, modo e infinitivo" },
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
];
