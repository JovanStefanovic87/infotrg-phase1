import { ContentBlocksData } from '../helpers/types';

export interface BasicInformation {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
}

export const contentData: BasicInformation[] = [
  {
    id: 'block1',
    title: 'Block 1',
    description: 'This is the first block.',
    coverImage: '/images/image1.jpg',
  },
  {
    id: 'block2',
    title: 'Block 2',
    description: 'This is the second block.',
    coverImage: '/images/image2.jpg',
  },
  {
    id: 'block3',
    title: 'Block 3',
    description: 'This is the second block.',
    coverImage: '/images/image2.jpg',
  },
  {
    id: 'block4',
    title: 'Block 4',
    description: 'This is the second block.',
    coverImage: '/images/image2.jpg',
  },
  {
    id: 'investicioni-fond',
    title: 'INVESTICIONI FOND',
    description:
      'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta.',
  },
];

export const contentBlocksData: ContentBlocksData = {
  block1: [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    { type: 'image', url: ['/images/image1.jpg'] },
    { type: 'text', content: 'Here is some more explanation with an image below.' },
    { type: 'image', url: ['/images/image1.jpg', '/images/image2.jpg'] },
    { type: 'text', content: 'Final part of the explanation.' },
  ],
  block2: [
    { type: 'text', content: 'This is the first part of the explanation.' },
    { type: 'image', url: ['/images/image1.jpg'] },
    { type: 'text', content: 'Here is some more explanation with an image below.' },
    { type: 'image', url: ['/images/image1.jpg', '/images/image2.jpg'] },
    { type: 'text', content: 'Final part of the explanation.' },
  ],
  block3: [
    { type: 'text', content: 'This is the first part of the explanation.' },
    { type: 'image', url: ['/images/image1.jpg'] },
    { type: 'text', content: 'Here is some more explanation with an image below.' },
    { type: 'image', url: ['/images/image1.jpg', '/images/image2.jpg'] },
    { type: 'text', content: 'Final part of the explanation.' },
  ],
  'investicioni-fond': [
    {
      type: 'pNormal',
      content:
        'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta.',
    },
    { type: 'hr', height: 2 },
    {
      type: 'h2',
      content: 'VREDNOST INVESTICIONOG FONDA',
    },
    {
      type: 'h2',
      content: '50.000 EUR',
    },
    { type: 'hr', height: 2 },
    {
      type: 'h2',
      content: 'RASPODELA INVESTICIONOG FONDA',
    },
    {
      type: 'list',
      listContent: [
        {
          type: 'paragraph1',
          text: 'Fond za planiranje i pripremu',
          amount: '4.272 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema nacrta tehničkog plana', amount: '7,5 EUR' },
            { type: 'paragraph2', text: 'Nominacija projekta', amount: '46 EUR' },
            { type: 'paragraph2', text: 'Okupljanje saradnika', amount: '171 EUR' },
            {
              type: 'paragraph2',
              text: 'Testiranje i izrada Tehničkog plana',
              amount: '2.349 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema Plana i programa poslovanja',
              amount: '468,5 EUR',
            },
            { type: 'paragraph2', text: 'Priprema Ugovora o saradnji', amount: '155 EUR' },
            { type: 'paragraph2', text: 'Priprema i održavanje budžeta', amount: '1.075 EUR' },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za prikupljanje finansijskih sredstava',
          amount: '3.261 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema Investicionog plana i programa',
              amount: '407 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema platforme za investicioni fond',
              amount: '993 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Oglašavanje Investicionog plana i programa',
              amount: '1.125,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Kontaktiranje potencijalnih investitora',
              amount: '735,5 EUR',
            },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje preglednika po mapama za buvljak',
          amount: '15.011 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za preglednik po mapama',
              amount: '5.341 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Popis buvljaka i objavljivanje informacija',
              amount: '3.890 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Upoznavanje prodavaca sa platformom',
              amount: '655,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Objavljivanje probnih besplatnih reklama',
              amount: '416 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje kupaca na veliki broj pregleda',
              amount: '3.958,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje prodavaca na plaćeno oglašavanje',
              amount: '750 EUR',
            },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje veb izloga za prodajne objekte na buvljaku',
          amount: '5.625 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za veb izloge', amount: '3.928 EUR' },
            { type: 'paragraph2', text: 'Otvaranje promotivnog veb izloga', amount: '397 EUR' },
            { type: 'paragraph2', text: 'Promocija veb izloga prodavcima', amount: '1.300 EUR' },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje enciklopedije proizvoda na buvljaku',
          amount: '2.553,5 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za enciklopediju proizvoda',
              amount: '1.373 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Otvaranje promotivnih stranica enciklopedije proizvoda',
              amount: '526,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Promocija enciklopedije proizvoda prodavcima',
              amount: '654 EUR',
            },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta u Subotici',
          amount: '16.218,5 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za Suboticu', amount: '8 EUR' },
            {
              type: 'paragraph2',
              text: 'Popis Subotice i objavljivanje informacija',
              amount: '8.887,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje prodavaca na upotrebu veb izloga',
              amount: '3.660 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Objavljivanje probnih besplatnih reklama Subotica',
              amount: '119 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje kupaca na veliki broj pregleda Subotica',
              amount: '2.644 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Navođenje prodavaca na plaćeno oglašavanje Subotica',
              amount: '900 EUR',
            },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za ekspanziju projekta izvan Subotice',
          amount: '3.059 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za objavljivanje informacija širom Srbije',
              amount: '8 EUR',
            },
            { type: 'paragraph2', text: 'Osnivanje firme', amount: '958 EUR' },
            {
              type: 'paragraph2',
              text: 'Organizovanje međugradskih inkasanata',
              amount: '443,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Pribavljanje spiska svih prodajnih objekata',
              amount: '90,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema prezentacije uspešnosti oglašavanja',
              amount: '0 EUR',
            },
            { type: 'paragraph2', text: 'Navođenje prodavaca na oglašavanje', amount: '436 EUR' },
            { type: 'paragraph2', text: 'Promocija platforme putem medija', amount: '1.123 EUR' },
          ],
          listStyle: 'number',
        },
      ],
    },
  ],
  'Priprema nacrta tehnickog plana': [
    {
      type: 'text',
      content:
        'Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i ulažu u više razvojnih etapa projekta.',
    },
    { type: 'hr', marginY: '4' },
    {
      type: 'h2',
      content: 'VREDNOST INVESTICIONOG FONDA',
    },
    {
      type: 'H2BoldCenter',
      content: '50.000 EUR',
    },
    { type: 'hr', marginY: '4' },
    {
      type: 'h2',
      content: 'RASPODELA INVESTICIONOG FONDA',
    },
    {
      type: 'list',
      listContent: [
        {
          type: 'paragraph1',
          text: 'Fond za planiranje i pripremu',
          amount: '4.315 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema nacrta tehničkog plana', amount: '7,5 EUR' },
            { type: 'paragraph2', text: 'Nominacija projekta', amount: '46 EUR' },
            { type: 'paragraph2', text: 'Okupljanje saradnika', amount: '171 EUR' },
            {
              type: 'paragraph2',
              text: 'Testiranje i izrada Tehničkog plana',
              amount: '2.349 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema Plana i programa poslovanja',
              amount: '511,5 EUR',
            },
            { type: 'paragraph2', text: 'Priprema Ugovora o saradnji', amount: '155 EUR' },
            { type: 'paragraph2', text: 'Priprema i održavanje budžeta', amount: '1.075 EUR' },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za prikupljanje finansijskih sredstava',
          amount: '3.261 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema Investicionog plana i programa',
              amount: '407 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Priprema platforme za investicioni fond',
              amount: '993 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Oglašavanje Investicionog plana i programa',
              amount: '1.125,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Kontaktiranje potencijalnih investitora',
              amount: '735,5 EUR',
            },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje veb izloga za prodajne objekte na buvljaku',
          amount: '5.625 EUR',
          subitems: [
            { type: 'paragraph2', text: 'Priprema platforme za veb izloge', amount: '3.928 EUR' },
            { type: 'paragraph2', text: 'Otvaranje promotivnog veb izloga', amount: '397 EUR' },
            { type: 'paragraph2', text: 'Promocija veb izloga prodavcima', amount: '1.300 EUR' },
          ],
          listStyle: 'number',
        },
        {
          type: 'paragraph1',
          text: 'Fond za uvođenje enciklopedije proizvoda na buvljaku',
          amount: '2.553,5 EUR',
          subitems: [
            {
              type: 'paragraph2',
              text: 'Priprema platforme za enciklopediju proizvoda',
              amount: '1.373 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Otvaranje promotivnih stranica enciklopedije proizvoda',
              amount: '526,5 EUR',
            },
            {
              type: 'paragraph2',
              text: 'Promocija enciklopedije proizvoda prodavcima',
              amount: '654 EUR',
            },
          ],
          listStyle: 'number',
        },
      ],
    },
  ],
};

export const hyperlinks = [
  {
    text: 'Fond za planiranje i pripremu',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Fond-za-planiranje-i-pripremu',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema nacrta tehničkog plana',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-nacrta-tehnickog-plana',
    ).toLowerCase()}`,
  },
  {
    text: 'Nominacija projekta',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent('Nominacija-projekta').toLowerCase()}`,
  },
  {
    text: 'Okupljanje saradnika',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent('Okupljanje-saradnika').toLowerCase()}`,
  },
  {
    text: 'Testiranje i izrada Tehničkog plana',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Testiranje-i-izrada-Tehnickog-plana',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema Plana i programa poslovanja',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'priprema-plana-i-programa-poslovanja',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema Ugovora o saradnji',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'priprema-ugovora-o-saradnji',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema i održavanje budžeta',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'priprema-i-odrzavanje-budzeta',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema Investicionog plana i programa',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-Investicionog-plana-i-programa',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema platforme za investicioni fond',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-platforme-za-investicioni-fond',
    ).toLowerCase()}`,
  },
  {
    text: 'Oglašavanje Investicionog plana i programa',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Oglasavanje-Investicionog-plana-i-programa',
    ).toLowerCase()}`,
  },
  {
    text: 'Kontaktiranje potencijalnih investitora',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Kontaktiranje-potencijalnih-investitora',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema platforme za preglednik po mapama',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-platforme-za-preglednik-po-mapama',
    ).toLowerCase()}`,
  },
  {
    text: 'Popis buvljaka i objavljivanje informacija',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Popis-buvljaka-i-objavljivanje-informacija',
    ).toLowerCase()}`,
  },
  {
    text: 'Upoznavanje prodavaca sa platformom',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Upoznavanje-prodavaca-sa-platformom',
    ).toLowerCase()}`,
  },
  {
    text: 'Objavljivanje probnih besplatnih reklama',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Objavljivanje-probnih-besplatnih-reklama',
    ).toLowerCase()}`,
  },
  {
    text: 'Navođenje kupaca na veliki broj pregleda',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Navodjenje-kupaca-na-veliki-broj-pregleda',
    ).toLowerCase()}`,
  },
  {
    text: 'Navođenje prodavaca na plaćeno oglašavanje',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Navodjenje-prodavaca-na-placeno-oglasavanje',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema platforme za veb izloge',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-platforme-za-veb-izloge',
    ).toLowerCase()}`,
  },
  {
    text: 'Otvaranje promotivnog veb izloga',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Otvaranje-promotivnog-veb-izloga',
    ).toLowerCase()}`,
  },
  {
    text: 'Promocija veb izloga prodavcima',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Promocija-veb-izloga-prodavcima',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema platforme za enciklopediju proizvoda',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-platforme-za-enciklopediju-proizvoda',
    ).toLowerCase()}`,
  },
  {
    text: 'Otvaranje promotivnih stranica enciklopedije proizvoda',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Otvaranje-promotivnih-stranica-enciklopedije-proizvoda',
    ).toLowerCase()}`,
  },
  {
    text: 'Promocija enciklopedije proizvoda prodavcima',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Promocija-enciklopedije-proizvoda-prodavcima',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema platforme za Suboticu',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-platforme-za-Suboticu',
    ).toLowerCase()}`,
  },
  {
    text: 'Popis Subotice i objavljivanje informacija',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Popis-Subotice-i-objavljivanje-informacija',
    ).toLowerCase()}`,
  },
  {
    text: 'Navođenje prodavaca na upotrebu veb izloga',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Navodjenje-prodavaca-na-upotrebu-veb-izloga',
    ).toLowerCase()}`,
  },
  {
    text: 'Objavljivanje probnih besplatnih reklama Subotica',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Objavljivanje-probnih-besplatnih-reklama-subotica',
    ).toLowerCase()}`,
  },
  {
    text: 'Navođenje kupaca na veliki broj pregleda Subotica',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Navodjenje-kupaca-na-veliki-broj-pregleda-subotica',
    ).toLowerCase()}`,
  },
  {
    text: 'Navođenje prodavaca na plaćeno oglašavanje',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Navodjenje-prodavaca-na-placeno-oglasavanje',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema platforme za objavljivanje informacija širom Srbije',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-platforme-za-objavljivanje-informacija-sirom-srbije',
    ).toLowerCase()}`,
  },
  {
    text: 'Osnivanje firme',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent('Osnivanje-firme').toLowerCase()}`,
  },
  {
    text: 'Organizovanje međugradskih inkasanata',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Organizovanje-medjugradskih-inkasanata',
    ).toLowerCase()}`,
  },
  {
    text: 'Pribavljanje spiska svih prodajnih objekata',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Pribavljanje-spiska-svih-prodajnih-objekata',
    ).toLowerCase()}`,
  },
  {
    text: 'Priprema prezentacije uspešnosti oglašavanja',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Priprema-prezentacije-uspesnosti-oglasavanja',
    ).toLowerCase()}`,
  },
  {
    text: 'Navođenje prodavaca na plaćeno oglašavanje Subotica',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Navodjenje-prodavaca-na-placeno-oglasavanje-subotica',
    ).toLowerCase()}`,
  },
  {
    text: 'Navođenje prodavaca na oglašavanje',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Navodjenje-prodavaca-na-oglasavanje',
    ).toLowerCase()}`,
  },
  {
    text: 'Promocija platforme putem medija',
    url: `/ulaganje/investicioni-fond/${encodeURIComponent(
      'Promocija-platforme-putem-medija',
    ).toLowerCase()}`,
  },
];
