import { ContentBlocksData, MemberData } from '@/app/helpers/types';

const bolderLine = 4;

const marginLeftSmall = '2vw';
const marginLeftMedium = '4vw';

const MIROSLAV: Omit<MemberData, 'id'> = {
  name: 'Miroslav Ostrogonac',
  birth: '27.04.1975.',
  profession: 'Grafičar',
  affinities: 'administracija, grafički dizajn, leksikografija, izrada dokumenata',
  previousEngagements:
    'kasarna “Vojvoda Živojin Mišić” (četni evidentičar), trgovina “KMS d.o.o.” (magacioner/referent)',
  infotrgEngagements: 'od 01.08.2022. godine',
  phone: '0601451349',
  email: 'suinfotrg@gmail.com',
  image: '/images/members/avatar_miroslav.bmp',
};

const JOVAN: Omit<MemberData, 'id'> = {
  name: 'Jovan Stefanović',
  birth: '21.07.1987.',
  profession: 'veb programer (web developer)',
  affinities:
    'Javascript, React, React Native, Typescript, PostgreSQL, Node JS, Figma, NginX, Linux',
  previousEngagements:
    'veb aplikacija za zakazivanje termina “KLIKTERMIN“ (autor/veb programer), internet stranica za prodaju pasa “CORGIHAPPYHOUSE” (veb programer), mobilna aplikacija za evidenciju servisa klima uređaja “AC INSPECTOR” (veb programer)',
  infotrgEngagements: 'od 27.08.2022. godine',
  phone: '0691120296',
  email: 'jovanstefanovic024@gmail.com',
  image: '/images/members/avatar_jovan.bmp',
};

export const contentData: MemberData[] = [
  {
    id: 'autor',
    ...MIROSLAV,
  },
  {
    id: 'administrator',
    ...MIROSLAV,
  },
  {
    id: 'vebmaster',
    ...JOVAN,
  },
  {
    id: 'graficki-dizajner',
    ...MIROSLAV,
  },
  {
    id: 'koordinator',
    ...MIROSLAV,
  },
];
export const contentBlocksData: ContentBlocksData = {
  autor: [
    {
      type: 'h3',
      content: 'ADMINISTRATIVNA MANIPULACIJA',
    },
    {
      type: 'pNormal',
      content: 'Administrativna kategorizacija',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Administrativna priprema spiskova',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Administrativna dopuna spiskova',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'OTVARANJE DATOTEKA NA PLATFORMI',
    },
    {
      type: 'pNormal',
      content: 'Otvaranje probnih stranica enciklopedije proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Otvaranje privremenih veb izloga prodajnih objekata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POPUNJAVANJE STRANICA NA PLATFORMI',
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje početnih stranica funkcija',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje bazičnih stranica',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje stranica investicionog fonda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'UNOS PODATAKA NA PLATFORMU',
    },
    {
      type: 'pNormal',
      content: 'Unos podataka o artiklima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unos podataka o prodajnim objektima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unos artikala na probne stranice enciklopedije proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unos artikala u privremene veb izloge',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'OBJAVLJIVANJE NA PLATFORMI',
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje lokacija prodaje',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje radnih pozicija saradnika',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AŽURIRANJE',
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje spiskova proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje spiskova prodajnih objekata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'MODERACIJA',
    },
    {
      type: 'pNormal',
      content: 'Moderacija veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Moderacija enciklopedije proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'SELEKCIJA PROIZVODA',
    },
    {
      type: 'pNormal',
      content: 'Selekcija proizvoda za besplatno oglašavanje',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POPISIVANJE',
    },
    {
      type: 'pNormal',
      content: 'Popisivanje prodajnih objekata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Popisivanje proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'RAZMATRANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Razmatranje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'PRIPREMA DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Priprema plana rada',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POTPISIVANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje ugovora o delu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'KONTAKTIRANJE SARADNIKA',
    },
    {
      type: 'pNormal',
      content: 'Kontaktiranje potencijalnih investitora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
  administrator: [
    {
      type: 'h3',
      content: 'ADMINISTRATIVNA MANIPULACIJA',
    },
    {
      type: 'pNormal',
      content: 'Administrativna kategorizacija',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Administrativna priprema spiskova',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Administrativna dopuna spiskova',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'OTVARANJE DATOTEKA NA PLATFORMI',
    },
    {
      type: 'pNormal',
      content: 'Otvaranje probnih stranica enciklopedije proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Otvaranje privremenih veb izloga prodajnih objekata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POPUNJAVANJE  STRANICA NA PLATFORMI',
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje početnih stranica funkcija',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje bazičnih stranica ',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje stranica investicionog fonda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'UNOS PODATAKA NA PLATFORMU',
    },
    {
      type: 'pNormal',
      content: 'Unos podataka o artiklima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unos podataka o prodajnim objektima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unos artikala na probne stranice enciklopedije proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unos artikala u privremene veb izloge',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'OBJAVLJIVANJE NA PLATFORMI',
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje lokacija prodaje',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje radnih pozicija saradnika',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AŽURIRANJE',
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje spiskova proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje spiskova prodajnih objekata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'MODERACIJA',
    },
    {
      type: 'pNormal',
      content: 'Moderacija veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Moderacija enciklopedije proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'SELEKCIJA PROIZVODA',
    },
    {
      type: 'pNormal',
      content: 'Selekcija proizvoda za besplatno oglašavanje',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POPISIVANJE',
    },
    {
      type: 'pNormal',
      content: 'Popisivanje prodajnih objekata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Popisivanje proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'RAZMATRANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Razmatranje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'PRIPREMA DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Priprema plana rada',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POTPISIVANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje ugovora o delu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'KONTAKTIRANJE SARADNIKA',
    },
    {
      type: 'pNormal',
      content: 'Kontaktiranje potencijalnih investitora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
  vebmaster: [
    {
      type: 'h3',
      content: 'IZRADA PLATFORME',
    },
    {
      type: 'pNormal',
      content: 'Izrada probne platforme',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada regularne platforme',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'TEHNIČKO TESTIRANJE',
    },
    {
      type: 'pNormal',
      content: 'Studija tehničke izvodljivosti',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Testiranje platforme',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'ODRŽAVANJE ELEKTRONSKIH FORMI',
    },
    {
      type: 'pNormal',
      content: 'Održavanje platforme',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Održavanje servera',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Održavanje SSL sertifikata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'ANKETIRANJE',
    },
    {
      type: 'pNormal',
      content: 'Anketiranje tehničkog plana',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'PRIPREMA DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Priprema plana rada',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'DOPUNA DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Dopuna tehničkog plana',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'RAZMATRANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Razmatranje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Razmatranje investicionog plana i programa',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POTPISIVANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje investicionog plana i programa',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje ugovora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'KONTAKTIRANJE SARADNIKA',
    },
    {
      type: 'pNormal',
      content: 'Kontaktiranje potencijalnih investitora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
  'graficki-dizajner': [
    {
      type: 'h3',
      content: 'GRAFIČKA IZRADA',
    },
    {
      type: 'pNormal',
      content: 'Izrada reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada oglasa',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'GRAFIČKA PRIPREMA',
    },
    {
      type: 'pNormal',
      content: 'Grafička priprema bilborda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Grafička priprema flajera',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Grafička priprema priznanica',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Grafička priprema probnih artikala',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'PRIPREMA DOKUMENTACIJE',
    },
    {
      type: 'pNormal',
      content: 'Priprema plana rada',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POTPISIVANJE DOKUMENTACIJE',
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje ugovora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'ANKETIRANJE',
    },
    {
      type: 'pNormal',
      content: 'Anketiranje tehničkog plana',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
  koordinator: [
    {
      type: 'h3',
      content: 'ANGAŽOVANJE SARADNIKA',
    },
    {
      type: 'pNormal',
      content: 'Kontaktiranje potencijalnih investitora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Angažovanje knjigovođe',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Angažovanje međugradskih inkasanata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'RUTINSKA KONTROLA',
    },
    {
      type: 'pNormal',
      content: 'Rutinska kontrola plana i programa',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Rutinska kontrola finansija',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Rutinska kontrola saradnika',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'EVIDENTIRANJE',
    },
    {
      type: 'pNormal',
      content: 'Evidentiranje finansija',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Evidentiranje budžeta',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Evidentiranje rezultata poslovanja',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Evidentiranje vlasničkih udela',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'PRIJAVLJIVANJE',
    },
    {
      type: 'pNormal',
      content: 'Prijavljivanje komunalnih troškova kancelarije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Prijavljivanje prihoda i poreza na plate',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Prijavljivanje APR-u',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'IZVEŠTAVANJE',
    },
    {
      type: 'pNormal',
      content: 'Periodično izveštavanje investitorima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'OPREMANJE INVENTARA',
    },
    {
      type: 'pNormal',
      content: 'Opremanje kancelarijskim priborom',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Opremanje kancelarijskim materijalom',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'OPREMANJE INVENTARA',
    },
    {
      type: 'pNormal',
      content: 'Opremanje kancelarijskim priborom',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Opremanje kancelarijskim materijalom',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'ODRŽAVANJE FINANSIJSKIH FONDOVA',
    },
    {
      type: 'pNormal',
      content: 'Održavanje bankovnog računa',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Održavanje budžetne kase',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Održavanje depozitnih fondova',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'REGULISANJE UPLATE',
    },
    {
      type: 'pNormal',
      content: 'Regulisanje uplate honorara za saradnike',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Regulisanje uplate za PIO doprinose',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Regulisanje uplate poreza',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Regulisanje uplate komunalnih troškova',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'SARADNJA NA GRAFIČKOJ PRIPREMI',
    },
    {
      type: 'pNormal',
      content: 'Saradnja na grafičkoj pripremi flajera',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Saradnja na grafičkoj pripremi priznanica',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'IZRADA DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Izrada plana rada',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada ugovora o delu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada ugovora o investicijama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada registra investitora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada dokumenata za evidenciju budžeta',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada tabele za beleženje postignutih rezultata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada prezentacionog materijala za klijente',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada plana i programa za inkasante',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AŽURIRANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje dokumenata za evidenciju',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Ažuriranje izveštaja o postignutim rezultatima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POPUNJAVANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje ugovora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Popunjavanje priznanica',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'ŠTAMPANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Štampanje ugovora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Štampanje priznanica',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'RAZMATRANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Razmatranje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'POTPISIVANJE DOKUMENATA',
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje projektne dokumentacije',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje ugovora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Potpisivanje priznanica',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
};

export const contentBlocks2Data: ContentBlocksData = {
  autor: [
    {
      type: 'h3',
      content: 'OBJAVLJIVANJE REKLAMA',
    },
    {
      type: 'pNormal',
      content: 'Postavljanje reklama na platformu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'USLUŽNO ODRŽAVANJE VEB IZLOGA',
    },
    {
      type: 'pNormal',
      content: 'Otvaranje veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Vođenje veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Održavanje veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'STARTER PROGRAM',
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje informacija o budućim proizvodima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AUKCIJE',
    },
    {
      type: 'pNormal',
      content: 'Kontrola nadmetanja',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'DOSTAVA',
    },
    {
      type: 'pNormal',
      content: 'Upravljanje veb izlogom za dostavu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unošenje informacija u veb izlog za dostavu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Kontrola narudžbe',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Upućivanje dostavljača u nabavku',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
  administrator: [
    {
      type: 'h3',
      content: 'OBJAVLJIVANJE REKLAMA',
    },
    {
      type: 'pNormal',
      content: 'Kontaktiranje potencijalnih investitora',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'OBJAVLJIVANJE REKLAMA',
    },
    {
      type: 'pNormal',
      content: 'Postavljanje reklama na platformu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'USLUŽNO ODRŽAVANJE VEB IZLOGA',
    },
    {
      type: 'pNormal',
      content: 'Otvaranje veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Vođenje veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Održavanje veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'STARTER PROGRAM',
    },
    {
      type: 'pNormal',
      content: 'Objavljivanje informacija o budućim proizvodima',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AUKCIJE',
    },
    {
      type: 'pNormal',
      content: 'Kontrola nadmetanja',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'DOSTAVA',
    },
    {
      type: 'pNormal',
      content: 'Upravljanje veb izlogom za dostavu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Unošenje informacija u veb izlog za dostavu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Kontrola narudžbe',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Upućivanje dostavljača u nabavku',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
  'graficki-dizajner': [
    {
      type: 'h3',
      content: 'IZRADA REKLAMA',
    },
    {
      type: 'pNormal',
      content: 'Grafička priprema reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AFFILIATE POSREDNIŠTVO',
    },
    {
      type: 'pNormal',
      content: 'Grafička priprema reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Postavljanje reklama na platformu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'DOSTAVA',
    },
    {
      type: 'pNormal',
      content: 'Grafička priprema reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Postavljanje reklama na platformu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
  koordinator: [
    {
      type: 'h3',
      content: 'OBJAVLJIVANJE REKLAMA',
    },
    {
      type: 'pNormal',
      content: 'Prikupljanje prihoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'IZRADA REKLAMA',
    },
    {
      type: 'pNormal',
      content: 'Angažovanje grafičkog dizajnera za izradu reklama',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'USLUŽNO ODRŽAVANJE VEB IZLOGA',
    },
    {
      type: 'pNormal',
      content: 'Angažovanje administratora ili njegovog asistenta za održavanje veb izloga',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AFFILIATE POSREDNIŠTVO',
    },
    {
      type: 'pNormal',
      content: 'Priprema ugovora o affiliate posredništvu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Angažovanje grafičkog dizajnera',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Kontrola uplate',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'STARTER PROGRAM',
    },
    {
      type: 'pNormal',
      content: 'Odobravanje proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Izrada ugovora o starter posredništvu',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Kontrola depozita',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Kontrola isporuke gotovih proizvoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'AUKCIJE',
    },
    {
      type: 'pNormal',
      content: 'Kontrola depozita',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'DOSTAVA',
    },
    {
      type: 'pNormal',
      content: 'Prikupljanje prihoda',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
    {
      type: 'h3',
      content: 'USLUGA ODLOŽENOG PLAĆANJA',
    },
    {
      type: 'pNormal',
      content: 'Upućivanje dostavljača',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Preuzimanje priznanica',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Kontrola zaostalih uplata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'pNormal',
      content: 'Raspodela zaostalih uplata',
      paddingLeft: marginLeftMedium,
    },
    {
      type: 'hr',
    },
  ],
};
