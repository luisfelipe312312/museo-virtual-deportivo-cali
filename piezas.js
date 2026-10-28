// CARGA DE MODELOS EN LA SALA 3D (protege la memoria en celulares).
// Un .glb se descarga cuando el jugador está a menos de `distanciaCarga` metros y se libera
// a más de `distanciaLiberar`. Nunca hay más de `maxModelosCargados` a la vez: si hace falta
// uno nuevo, se libera primero el más lejano (solo si está más lejos que el nuevo).
export const maxModelosCargados = 5;
export const distanciaCarga = 6;     // metros
export const distanciaLiberar = 10;  // metros (mayor que distanciaCarga)

// Visitantes simulados en la sala 3D (false = sala vacía, solo con los bancos).
export const visitantes = true;

// CONTENIDO DEL MUSEO — para cambiar las piezas, editar solo este archivo.
// Lo leen index.html (sala 3D) y recorrido-simple.html (respaldo sin WebGL).
//
// Rótulo sobre la pared del fondo de la sala 3D.
export const tituloSala = "Bienvenidos al Glorioso Museo Verdiblanco";

// Fotos de los paneles en las paredes largas (entre 4 y 6 paneles; una ruta por panel).
// Con menos de 4 rutas se completan con paneles vacíos; con más de 6 se usan las primeras 6.
// Si un archivo no existe, su panel muestra "[Foto pendiente]".
export const fotos = [
  "assets/fotos/foto1.jpg",
  "assets/fotos/foto2.jpg",
  "assets/fotos/foto3.jpg",
  "assets/fotos/foto4.jpg"
];

// Imagen de fondo de la pantalla de bienvenida (con un degradado oscuro encima para leer el texto).
// null = fondo liso y sin ninguna petición.
export const hero = "assets/hero.webp";

// Escudo del club en la pared del fondo, bajo el rótulo, y sobre el título de la bienvenida
// (PNG, idealmente con fondo transparente).
// null = sin escudo y sin ninguna petición. Para activarlo: "assets/escudo.png".
export const escudo = null;

// Música de fondo (suena tras "Iniciar recorrido", con botón para silenciarla).
// null = sin música, sin botón y sin ninguna petición. Para activarla: "assets/audio/musica.mp3".
export const musica = null;

// Fichas del museo: una vitrina por entrada, en el orden de los textos originales.
// La sala se alarga sola según cuántas haya.
// - Vitrinas 1 a 10: títulos de liga del equipo masculino (1965 a 2021-II)
// - Vitrinas 11 a 13: títulos de liga del equipo femenino (2021, 2024 y 2025)
// - Vitrina 14: subcampeonato de la Copa Libertadores Femenina 2025 (no es un título)
// Asignación de modelos provisional, pendiente de confirmación. Los cuatro modelos
// son reconstrucciones procedurales aproximadas (no escaneos):
// - Vitrinas 1 a 9: modelos/copa-campeon-colombiano.glb (una sola descarga, compartida)
// - Vitrina 10: modelos/copa-base.glb
// - Vitrina 11: modelos/copa-liga-femenina-petalos.glb
// - Vitrinas 12 y 13: modelos/copa-liga-femenina.glb, la copa tulipán (una sola descarga, compartida)
// - Vitrina 14: sin modelo (src: null): cilindro gris "Modelo pendiente", sin RA
// Los modelos pueden venir con cualquier escala: la sala 3D los normaliza sola.

// Alturas en metros (provisionales).
// Fijan el tamaño en la vista de RA; en la sala 3D cada modelo se sigue ajustando a la vitrina.
export const alturaCopaCampeon = 0.75;
export const alturaCopaBase = 0.6;
export const alturaCopaFemenina = 0.5;
export const alturaCopaPetalos = 0.6;

// `srcDetalle` (opcional): versión con más polígonos que solo carga el visor de cerca
// (model-viewer / RA) al abrirlo; la sala 3D usa `src`. Debe medir lo mismo que `src`.
const COPA_CAMPEON = {
  src: "modelos/copa-campeon-colombiano.glb",
  srcDetalle: "modelos/copa-campeon-colombiano-detalle.glb",
  altura: alturaCopaCampeon
};
const COPA_BASE = { src: "modelos/copa-base.glb", altura: alturaCopaBase };
const COPA_FEMENINA = {
  src: "modelos/copa-liga-femenina.glb",
  srcDetalle: "modelos/copa-liga-femenina-detalle.glb",
  altura: alturaCopaFemenina
};
const COPA_PETALOS = { src: "modelos/copa-liga-femenina-petalos.glb", altura: alturaCopaPetalos };

function modeloDeVitrina(i) { // i empieza en 0 (vitrina 1)
  if (i < 9) return COPA_CAMPEON;
  if (i === 9) return COPA_BASE;
  if (i === 10) return COPA_PETALOS; // vitrina 11
  if (i <= 12) return COPA_FEMENINA; // vitrinas 12 y 13
  return { src: null }; // vitrina 14: sin modelo todavía (src null = "Modelo pendiente", sin RA)
}

// Títulos y textos tal cual vienen en los textos originales (no editarlos aquí sin cambiar
// también la fuente).
const FICHAS = [
  { // 1
    titulo: "1965: La primera estrella del Valle del Cauca",
    texto: "Con Francisco 'Pancho' Villegas en el banquillo y figuras como Iroldo Rodríguez y Jorge Ramírez Gallego, el Cali remontó una primera vuelta irregular. El 12 de diciembre venció 3-1 al Cúcuta y superó a Nacional, dándole al Valle del Cauca su primer título de liga."
  },
  { // 2
    titulo: "1967: Campeón con tres fechas de anticipación",
    texto: "Con la base de 1965 y refuerzos como Óscar Mario Desiderio y Adolfo Sangiovanni, el equipo de 'Pancho' Villegas dominó el torneo de principio a fin. Selló su segundo título el 19 de noviembre al empatar con Junior, con 73 puntos y 89 goles en 52 partidos."
  },
  { // 3
    titulo: "1969: La Amenaza Verde conquista su tercera liga",
    texto: "Con el peruano Miguel Loayza y un joven Pedro Antonio Zape en el arco, el Cali igualó en puntos con Millonarios y jugó un triangular final ante los bogotanos y América. El 25 de enero de 1970 venció 1-0 a Millonarios en el Pascual y se coronó, en un año de 107 goles."
  },
  { // 4
    titulo: "1970: Bicampeones por primera vez",
    texto: "Tras un arranque turbulento, Roberto Resquín reemplazó a 'Pancho' Villegas. El equipo fue séptimo en el Apertura, pero en el Finalización sumó 20 fechas invicto. En el cuadrangular final venció 1-0 a Junior el 30 de diciembre y logró su cuarta liga en seis años."
  },
  { // 5
    titulo: "1974: La quinta estrella, ante América",
    texto: "Con Vladimir Popovic como técnico y Arístides del Puerto en el ataque, el Cali encadenó rachas invictas hasta el hexagonal final. El 18 de diciembre venció 1-0 a América en el Pascual y fue campeón a falta de una fecha. Fue la base del finalista de Libertadores de 1978."
  },
  { // 6
    titulo: "1996: El grito de campeón, 22 años después",
    texto: "Con Fernando 'Pecoso' Castro, primer técnico colombiano en sacarlo campeón, y figuras como Miguel Calero y Mayer Candelo, el Cali sumó 20 fechas invicto. El 14 de julio empató 0-0 con América y celebró su sexta estrella. Edison 'Guigo' Mafla fue el goleador con 33 tantos."
  },
  { // 7
    titulo: "1998: Siete veces campeón, en Manizales",
    texto: "Con la base de 1996 y refuerzos como Mario Alberto Yepes, el equipo de 'Cheché' Hernández llegó invicto a la final ante Once Caldas. Goleó 4-0 en la ida con triplete de Víctor Bonilla y resistió en el Palogrande el 20 de diciembre. Bonilla fue goleador con 37 tantos."
  },
  { // 8
    titulo: "2005-II: La octava estrella, celebrada en casa",
    texto: "Pedro Sarmiento tomó el equipo a mitad de torneo y lo llevó al liderato de la fase regular. En la final ante Real Cartagena ganó 2-0 de visita con doblete de Hugo Rodallega, y el 18 de diciembre, con gol de Jaime Riveros, se coronó en el Pascual Guerrero."
  },
  { // 9
    titulo: "2015-I: El Kinder del Pecoso",
    texto: "Con canteranos como Rafael Santos Borré, Harold Preciado y Mateo Cassierra, el 'Pecoso' Castro eliminó a Nacional y Millonarios. En la final ante Medellín, Preciado marcó en Cali y Andrés Roa sentenció en el Atanasio el 7 de junio. Diez años después, el Cali volvía a ser campeón."
  },
  { // 10
    titulo: "2021-II: La décima estrella",
    texto: "Rafael Dudamel asumió a mitad de torneo y remontó hasta los cuadrangulares, donde Teófilo Gutiérrez brilló en el 3-1 ante Nacional. En la final ante Tolima, el 22 de diciembre ganó en Ibagué con goles de Jhon Vásquez y Harold Preciado, goleador del torneo."
  },
  { // 11
    titulo: "2021: El primer título del Cali femenino",
    texto: "Dirigidas por Jhon Alber Ortiz y con una Linda Caicedo de 15 años, las Azucareras fueron líderes invictas de su grupo. En la final golearon 4-1 a Santa Fe en Bogotá, y el 12 de septiembre, con doblete de Linda, se coronaron campeonas por primera vez."
  },
  { // 12
    titulo: "2024: Azucareras imparables, contra viento y marea",
    texto: "Con Jhon Alber Ortiz de regreso y pese a cinco lesiones de ligamento cruzado, el Cali llegó a la final por un solo gol. Ante Santa Fe ganó 2-1 en casa con una jugadora menos, y el 16 de agosto un doblete de Manuela Paví en Bogotá le dio su segundo título."
  },
  { // 13
    titulo: "2025: Bicampeonas de Colombia",
    texto: "Líderes del todos contra todos con 38 puntos, las Azucareras eliminaron a Nacional en Medellín y enfrentaron otra vez a Santa Fe. El 21 de septiembre, Lorena Cobos igualó la serie y en los penales Luisa Agudelo atajó y Loren Sánchez marcó el definitivo: tercer título."
  },
  { // 14
    titulo: "2025: Finalistas de la Copa Libertadores",
    texto: "En Argentina, las Azucareras ganaron el grupo D, eliminaron a São Paulo y vencieron 5-4 en penales a Colo Colo para jugar su primera final continental. Ante Corinthians, vigente campeón, empataron 0-0 y cayeron en la tanda de penales, quedando subcampeonas de América."
  }
];

export const PIEZAS = FICHAS.map((ficha, i) => ({ ...ficha, ...modeloDeVitrina(i) }));
