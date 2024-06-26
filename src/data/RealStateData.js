import { useTranslation } from 'react-i18next'

/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9527',
    title: 'Jurerê Iate',
    region: 'Jurerê',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\nOportunidade única em morar no Jurerê Iate Residence! Você merece o melhor da vida e agora pode conquistá-lo em grande estilo. Apresentamos um apartamento dos sonhos. Alto Padrão em Jurerê, pronto para oferecer o máximo de conforto e sofisticação para você e sua família. Perfeito para acomodar sua família com conforto e elegância. Mobiliado com muito bom gosto!',
    price: 'R$ 3.500.000,00',
    details: {
      square: '185,00 m²',
      rooms: '3',
      bathrooms: '4',
      garage: '2',
    },
    pictures: [
      './properties/jurere-f01.jpg',
      './properties/jurere-f02.jpg',
      './properties/jurere-f03.jpg',
      './properties/jurere-f04.jpg',
      './properties/jurere-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9735',
    title: 'Casa Alto Padrão',
    region: 'Jurerê Internacional',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\nOportunidade única em morar no Jurerê Iate Residence! Você merece o melhor da vida e agora pode conquistá-lo em grande estilo. Apresentamos um apartamento dos sonhos. Alto Padrão em Jurerê, pronto para oferecer o máximo de conforto e sofisticação para você e sua família. Perfeito para acomodar sua família com conforto e elegância. Mobiliado com muito bom gosto!',
    price: 'R$ 3.500.000,00',
    details: {
      square: '185,00 m²',
      rooms: '3',
      bathrooms: '4',
      garage: '2',
    },
    pictures: [
      './properties/jurere-f01.jpg',
      './properties/jurere-f02.jpg',
      './properties/jurere-f03.jpg',
      './properties/jurere-f04.jpg',
      './properties/jurere-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9735',
    title: 'Casa Alto Padrão',
    region: 'Jurerê Internacional',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\nLocalizada no coração de Jurerê Internacional, esta propriedade deslumbrante combina elegância, entretenimento e lazer em uma experiência única. Com características distintivas, destacamos: Espaço Aconchegante, Área Externa Relaxante, Cozinha Moderna, Localização Privilegiada e Mobiliário de Luxo.',
    price: 'R$ 7.900.000,00',
    details: {
      square: '445,96 m²',
      rooms: '6',
      bathrooms: '5',
      garage: '4',
    },
    pictures: [
      './properties/casalto-f01.jpg',
      './properties/casalto-f02.jpg',
      './properties/casalto-f03.jpg',
      './properties/casalto-f04.jpg',
      './properties/casalto-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9830',
    title: 'Vl. das Gaivotas',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\nApartamento a 200m do mar, mobiliado e ensolarado, hobby box e garagem. Ótima oportunidade para quem quer morar próximo ao mar ou investir para locação de temporada. Localizado numa das melhores ruas do bairro, costão norte, condomínio com piscina, elevador, academia, quiosque com churrasqueiras e arborizado.',
    price: 'R$ 615.000,00',
    details: {
      square: '68 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/vlgaivotas-f01.jpg',
      './properties/vlgaivotas-f02.jpg',
      './properties/vlgaivotas-f03.jpg',
      './properties/vlgaivotas-f04.jpg',
      './properties/vlgaivotas-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '7646',
    title: 'Holiday',
    region: 'Ingleses',
    description:
      'Maravilhosa cobertura com vista plena para o mar. Localizada na área mais nobre da praia de Ingleses. Investimento com retorno garantido em locação de temporada ou realizar o sonho de morar de frente para o mar. Totalmente mobiliada e decorada com muito bom gosto e detalhes em todos os ambientes.\n\n**Imóvel em Processo de**\n\n **Individualização de Matrícula**',
    price: 'R$ 2.890.000,00',
    details: {
      square: '300,26 m²',
      rooms: '4',
      bathrooms: '5',
      garage: '2',
    },
    pictures: [
      './properties/holiday-f01.jpg',
      './properties/holiday-f02.jpg',
      './properties/holiday-f03.jpg',
      './properties/holiday-f04.jpg',
      './properties/holiday-f05.jpg',
    ],
  },
]

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesES = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9527',
    title: 'Jurerê Iate',
    region: 'Jurerê',
    description:
      '**INMUEBLE CON MATRÍCULA**\n\n¡Oportunidad única para vivir en Jurerê Iate Residence! Usted merece lo mejor de la vida y ahora puede conquistarlo con gran estilo. Presentamos un apartamento de ensueño. Alto Estándar en Jurerê, listo para ofrecer el máximo confort y sofisticación para usted y su familia. Perfecto para alojar a su familia con comodidad y elegancia. ¡Amueblado con muy buen gusto!',
    price: 'R$ 3.500.000,00',
    details: {
      square: '185,00 m²',
      rooms: '3',
      bathrooms: '4',
      garage: '2',
    },
    pictures: [
      './properties/jurere-f01.jpg',
      './properties/jurere-f02.jpg',
      './properties/jurere-f03.jpg',
      './properties/jurere-f04.jpg',
      './properties/jurere-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9735',
    title: 'Casa Alto Padrão',
    region: 'Jurerê Internacional',
    description:
      '**INMUEBLE CON MATRÍCULA**\n\n¡Oportunidad única para vivir en Jurerê Iate Residence! Usted merece lo mejor de la vida y ahora puede conquistarlo con gran estilo. Presentamos un apartamento de ensueño. Alto Estándar en Jurerê, listo para ofrecer el máximo confort y sofisticación para usted y su familia. Perfecto para alojar a su familia con comodidad y elegancia. ¡Amueblado con muy buen gusto!',
    price: 'R$ 3.500.000,00',
    details: {
      square: '185,00 m²',
      rooms: '3',
      bathrooms: '4',
      garage: '2',
    },
    pictures: [
      './properties/jurere-f01.jpg',
      './properties/jurere-f02.jpg',
      './properties/jurere-f03.jpg',
      './properties/jurere-f04.jpg',
      './properties/jurere-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9735',
    title: 'Casa Alto Padrão',
    region: 'Jurerê Internacional',
    description:
      '**INMUEBLE CON MATRÍCULA**\n\nUbicada en el corazón de Jurerê Internacional, esta propiedad deslumbrante combina elegancia, entretenimiento y ocio en una experiencia única. Con características distintivas, destacamos: Espacio Acogedor, Área Exterior Relajante, Cocina Moderna, Ubicación Privilegiada y Mobiliario de Lujo.',
    price: 'R$ 7.900.000,00',
    details: {
      square: '445,96 m²',
      rooms: '6',
      bathrooms: '5',
      garage: '4',
    },
    pictures: [
      './properties/casalto-f01.jpg',
      './properties/casalto-f02.jpg',
      './properties/casalto-f03.jpg',
      './properties/casalto-f04.jpg',
      './properties/casalto-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9830',
    title: 'Vl. das Gaivotas',
    region: 'Ingleses',
    description:
      '**INMUEBLE CON MATRÍCULA**\n\nApartamento a 200m del mar, amueblado y soleado, con trastero y garaje. Excelente oportunidad para aquellos que desean vivir cerca del mar o invertir en alquileres de temporada. Ubicado en una de las mejores calles del barrio, Costão Norte, condominio con piscina, ascensor, gimnasio, quiosco con parrillas y arbolado',
    price: 'R$ 615.000,00',
    details: {
      square: '68 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/vlgaivotas-f01.jpg',
      './properties/vlgaivotas-f02.jpg',
      './properties/vlgaivotas-f03.jpg',
      './properties/vlgaivotas-f04.jpg',
      './properties/vlgaivotas-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '7646',
    title: 'Holiday',
    region: 'Ingleses',
    description:
      'Maravillosa cobertura con vista plena al mar. Ubicada en la zona más exclusiva de la playa de Ingleses. Inversión con retorno garantizado en alquileres de temporada o para realizar el sueño de vivir frente al mar. Totalmente amueblada y decorada con mucho gusto y detalles en todos los ambientes.\n\n**Inmueble en Proceso de**\n\n**Individualización de Matrícula**',
    price: 'R$ 2.890.000,00',
    details: {
      square: '300,26 m²',
      rooms: '4',
      bathrooms: '5',
      garage: '2',
    },
    pictures: [
      './properties/holiday-f01.jpg',
      './properties/holiday-f02.jpg',
      './properties/holiday-f03.jpg',
      './properties/holiday-f04.jpg',
      './properties/holiday-f05.jpg',
    ],
  },
]

/**
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
