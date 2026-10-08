export interface GuideSection {
  heading: string;
  body: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface EsGuide {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: string[];
}

export const guides: Record<string, EsGuide> = {
  'como-llegar-playa-grande-lican-ray': {
    slug: 'como-llegar-playa-grande-lican-ray',
    metaTitle: 'Cómo llegar a Playa Grande de Licán Ray: ruta, distancia y transporte',
    metaDescription:
      'Guía práctica para llegar a Playa Grande de Licán Ray: desde Temuco, Pucón y Santiago, en auto, bus o avión, con estacionamiento y la última milla desde el pueblo.',
    h1: 'Cómo llegar a Playa Grande de Licán Ray',
    intro:
      'Playa Grande se encuentra en la orilla norte del Lago Calafquén, en la comuna de Villarrica, a unos 90–110 km de Temuco. La mayoría de los visitantes llega al sur de Chile en avión o bus hasta Temuco, y desde ahí combina transporte público o auto. La última milla es corta: el balneario queda a pocos minutos del pueblo de Licán Ray, bordeando el lago.',
    sections: [
      {
        heading: 'Desde Temuco en auto',
        body: 'Toma la Ruta 5 Sur (Panamericana) hacia Villarrica y luego la ruta que desciende hacia Licán Ray y el Lago Calafquén. Son aproximadamente 90–110 km, con un tiempo de viaje de entre 1 h 40 min y 2 h 30 min según el tráfico y la temporada. En enero y febrero la afluencia es alta: conviene salir con tiempo y llegar en la mañana.',
      },
      {
        heading: 'Desde Pucón',
        body: 'Se llega en unas 1 h 15 min bordeando el Lago Calafquén por la costanera pavimentada. Es una ruta escénica que muchos combinan con una visita a Villarrica en el mismo día.',
      },
      {
        heading: 'En avión',
        body: 'El aeropuerto más cercano es La Araucanía (ZCO), cerca de Temuco, con vuelos desde Santiago (cerca de 1 h 20 min). Del aeropuerto a Licán Ray son unas 1 h 40 min – 2 h por carretera; en el aeropuerto puedes rentar auto o tomar bus/transfer hacia Villarrica y Licán Ray.',
      },
      {
        heading: 'La última milla desde el pueblo',
        body: 'Desde el centro de Licán Ray a la orilla del lago hay solo unos minutos a pie. El terminal de buses queda en el pueblo, a poca distancia de la playa, y hay taxis o remises para el tramo final si viajas con familia, equipaje o niños pequeños.',
      },
      {
        heading: 'Dónde estacionar',
        body: 'El pueblo de Licán Ray cuenta con estacionamiento y zonas de detención cerca de la playa; suele ser gratuito o de bajo costo. En enero y febrero se llena temprano, así que conviene llegar en la mañana para encontrar sombra y lugar.',
      },
    ],
    faqs: [
      {
        q: '¿Cómo llegar a Playa Grande Licán Ray desde Santiago?',
        a: 'Vuela a Temuco (Aeropuerto La Araucanía, ZCO, ~1 h 20 min) y luego continúa en auto o bus hasta Villarrica y Licán Ray (~1 h 40 min – 2 h por carretera). También hay servicios de bus de larga distancia a Temuco o directos hacia la zona lacustre.',
      },
      {
        q: '¿Se puede llegar en bus a Licán Ray?',
        a: 'Sí. Desde Temuco o Pucón hay servicios regulares de bus que llegan al terminal de Licán Ray, a pocos minutos a pie de la playa. Frecuencias mayores en temporada; en invierno conviene confirmar horarios.',
      },
      {
        q: '¿Dónde estacionar cerca de Playa Grande?',
        a: 'Hay estacionamiento en el pueblo y en zonas aledañas a la playa; generalmente es gratuito o de bajo costo. En enero y febrero se llena pronto, por lo que se recomienda llegar en la mañana.',
      },
      {
        q: '¿A qué distancia queda de Temuco y de Pucón?',
        a: 'De Temuco son unos 90–110 km (1 h 40 min – 2 h 30 min en auto). De Pucón, unas 1 h 15 min bordeando el Lago Calafquén por la costanera.',
      },
    ],
    related: ['puente-flotante-lican-ray', 'playa-grande-vs-playa-chica-lican-ray', 'que-hacer-en-lican-ray'],
  },

  'puente-flotante-lican-ray': {
    slug: 'puente-flotante-lican-ray',
    metaTitle: 'Puente flotante de Licán Ray: qué es, dónde está y cómo visitarlo',
    metaDescription:
      'El puente flotante de Licán Ray es una pasarela sobre el Lago Calafquén con vistas a la península, islas y los Andes. Cómo llegar, mejor horario y consejos para tu visita.',
    h1: 'Puente flotante de Licán Ray',
    intro:
      'El puente flotante es una de las imágenes más reconocibles de Licán Ray: una pasarela que avanza sobre las aguas del Lago Calafquén y permite caminar a pocos centímetros del lago, con el fondo de la península, las islas y la cordillera de los Andes. Es uno de los rincones más fotografiados del balneario y un punto favorito para ver el atardecer.',
    sections: [
      {
        heading: 'Qué es el puente flotante',
        body: 'Se trata de una pasarela sobre el lago que invita a caminar por encima del agua y contemplar el paisaje lacustre desde una perspectiva distinta a la de la playa. Por su fácil acceso, es ideal para todas las edades.',
      },
      {
        heading: 'Dónde se encuentra',
        body: 'Está sobre la costanera de Licán Ray, a pocos minutos a pie del centro del pueblo y de Playa Grande. Puedes ubicarlo fácilmente siguiendo la línea de la costanera hacia el lago; en temporada suele haber señalización local.',
      },
      {
        heading: 'Qué se ve desde el puente',
        body: 'Desde la pasarela se abre la vista hacia la península cubierta de bosque nativo, las islas del lago y la cordillera de los Andes. Al atardecer, el reflejo del sol en el agua lo convierte en uno de los mejores miradores del balneario.',
      },
      {
        heading: 'Mejor momento para visitarlo',
        body: 'El atardecer es el horario más buscado por la luz y el color del lago. Las mañanas, con el agua más calmada, también son excelentes para fotografiar los reflejos. Lleva una chaqueta liviana: al anochecer baja la temperatura en la orilla.',
      },
      {
        heading: 'Cómo llegar',
        body: 'Desde el centro de Licán Ray camina por la costanera en dirección al lago; el puente flotante queda a pocos minutos. Si vienes de Playa Grande, sigue la costanera del Lago Calafquén y encontrarás el acceso sin necesidad de vehículo.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es el puente flotante de Licán Ray?',
        a: 'Es una pasarela sobre el Lago Calafquén que permite caminar sobre el agua y contemplar la península, las islas y la cordillera de los Andes. Es uno de los rincones más fotografiados del balneario y un lugar favorito para ver el atardecer.',
      },
      {
        q: '¿Dónde está el puente flotante de Licán Ray?',
        a: 'Sobre la costanera de Licán Ray, a pocos minutos a pie del centro del pueblo y de Playa Grande, junto al Lago Calafquén.',
      },
      {
        q: '¿Es gratis el puente flotante?',
        a: 'Al igual que la playa, es un espacio público de acceso libre; no hay control de entrada ni costo para recorrer la pasarela.',
      },
      {
        q: '¿Cuál es el mejor horario para visitar el puente flotante?',
        a: 'El atardecer ofrece la luz y el reflejo más espectaculares. Las mañanas, con el lago más calmado, son ideales para fotografiar. En invierno conviene ir con ropa de abrigo por la baja temperatura al anochecer.',
      },
    ],
    related: ['como-llegar-playa-grande-lican-ray', 'playa-grande-vs-playa-chica-lican-ray', 'que-hacer-en-lican-ray'],
  },

  'playa-grande-vs-playa-chica-lican-ray': {
    slug: 'playa-grande-vs-playa-chica-lican-ray',
    metaTitle: 'Playa Grande vs Playa Chica de Licán Ray: diferencias y cuál elegir',
    metaDescription:
      'Playa Grande y Playa Chica son las dos playas de Licán Ray, separadas por la península. Te explicamos sus diferencias, ubicación y cuál conviene según lo que busques.',
    h1: 'Playa Grande vs Playa Chica de Licán Ray',
    intro:
      'Licán Ray tiene dos playas principales sobre el Lago Calafquén: Playa Grande y Playa Chica. Ambas comparten la arena volcánica oscura y el agua dulce tranquila, pero se diferencian en tamaño, exposición al viento y ambiente. La península cubierta de bosque nativo, con su sendero y mirador, queda justo entre las dos.',
    sections: [
      {
        heading: 'Dos playas separadas por una península',
        body: 'La península que cierra la bahía funciona como un divisor natural: de un lado queda Playa Grande y del otro Playa Chica. Caminar por el sendero de la península es, además, la forma más panorámica de pasar de una a la otra.',
      },
      {
        heading: 'Playa Grande: la playa principal',
        body: 'Es la playa más amplia y conocida de Licán Ray, con gran despliegue de arena volcánica negra, espacio para deportes náuticos (kayak, paddle, windsurf) y toda la infraestructura del pueblo a pocos minutos. Es la opción preferida para quienes buscan amplitud y actividad.',
      },
      {
        heading: 'Playa Chica: la caleta más resguardada',
        body: 'Más pequeña y resguardada del viento por la forma de la bahía, Playa Chica suele tener aguas más tranquilas. Es una buena alternativa para familias con niños pequeños o para quienes prefieren un ambiente más íntimo y menos exposición al viento.',
      },
      {
        heading: 'Cuál elegir',
        body: 'Si buscas amplitud, deportes en el lago y cercanía con la feria artesanal y los servicios, Playa Grande es la mejor opción. Si prefieres aguas más calmas y un entorno más tranquilo, Playa Chica puede convenirte más. Están tan cerca que puedes conocer ambas el mismo día.',
      },
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre Playa Grande y Playa Chica?',
        a: 'Playa Grande es la playa principal, más amplia y orientada a deportes náuticos e infraestructura. Playa Chica es más pequeña y resguardada del viento, con aguas generalmente más tranquilas, ideal para familias.',
      },
      {
        q: '¿Dónde queda Playa Chica de Licán Ray?',
        a: 'En el Lago Calafquén, del otro lado de la península respecto a Playa Grande, en la comuna de Villarrica. Se llega caminando por la costanera o el sendero de la península desde el pueblo.',
      },
      {
        q: '¿Cuál de las dos playas es mejor para niños?',
        a: 'Playa Chica suele ser más adecuada para niños pequeños por estar más resguardada del viento y tener aguas más calmadas. En ambas conviene mantener la supervisión y preferir las zonas cercanas a la costanera.',
      },
    ],
    related: ['como-llegar-playa-grande-lican-ray', 'puente-flotante-lican-ray', 'que-hacer-en-lican-ray'],
  },

  'que-hacer-en-lican-ray': {
    slug: 'que-hacer-en-lican-ray',
    metaTitle: 'Qué hacer en Licán Ray: playa, lago, cultura mapuche y alrededores',
    metaDescription:
      'Más allá de Playa Grande: qué hacer en Licán Ray y alrededores, actividades en el Lago Calafquén, feria artesanal mapuche, gastronomía y excursiones a Villarrica y Pucón.',
    h1: 'Qué hacer en Licán Ray',
    intro:
      'Licán Ray es mucho más que su playa principal. A orillas del Lago Calafquén se combinan deportes náuticos, cultura mapuche viva, gastronomía local y excursiones hacia los volcanes y termas de La Araucanía. Aquí tienes un mapa rápido de opciones para armar tu visita.',
    sections: [
      {
        heading: 'En la playa y el lago',
        body: 'En el Lago Calafquén se nada y se practican kayak, paddle, windsurf, esquí acuático y pesca deportiva. Las mañanas de viento calmo son las mejores para paddle y kayak; la tarde invita a caminar la costanera y la península-mirador.',
      },
      {
        heading: 'Cultura mapuche y feria artesanal',
        body: 'La feria artesanal mapuche junto a la costanera reúne tejidos, madera y gastronomía local. Es el lugar para acercarse a la cultura originaria del territorio y llevar un recuerdo hecho a mano. En verano el pueblo organiza ferias y actividades.',
      },
      {
        heading: 'Gastronomía local',
        body: 'Sobre la costanera hay restaurantes, cafés y kioskos de mariscos y comida mapuche a pocos minutos de la playa. El pueblo, a pocos minutos a pie, suma cabañas, campings y locales de comida para todos los presupuestos.',
      },
      {
        heading: 'Excursiones cercanas',
        body: 'Muy cerca están Villarrica (con su volcán y playa), Pucón, las termas de Coñaripe y el Parque Nacional Huerquehue. Combinar Licán Ray con una de estas salidas llena cómodamente un día completo de la ruta de los lagos araucanos.',
      },
    ],
    faqs: [
      {
        q: '¿Qué hacer en Licán Ray además de la playa?',
        a: 'Además de Playa Grande, puedes recorrer la feria artesanal mapuche, probar la gastronomía local en la costanera, caminar la península-mirador, visitar el puente flotante y hacer una excursión a Villarrica, Pucón o las termas de Coñaripe.',
      },
      {
        q: '¿Qué actividades hay en el Lago Calafquén?',
        a: 'Natación, kayak, paddle, windsurf, esquí acuático y pesca deportiva, además de caminatas por la costanera y la península. Las mañanas de viento calmo son ideales para las embarcaciones menores.',
      },
      {
        q: '¿Qué visitar cerca de Licán Ray?',
        a: 'Playa Chica, el pueblo de Licán Ray y el Lago Calafquén están a la mano. A poca distancia se encuentran Villarrica (volcán y playa), Pucón, las termas de Coñaripe y el Parque Nacional Huerquehue.',
      },
    ],
    related: ['como-llegar-playa-grande-lican-ray', 'puente-flotante-lican-ray', 'playa-grande-vs-playa-chica-lican-ray'],
  },
};
