/**
 * Norwegian (Bokmål) copy library — shared across both prototype tiers.
 *
 * When forking for a real customer, this is the second-most-edited file
 * after shared/brand.ts. Per-tier copy variants can override individual keys
 * by re-exporting with deep-merge semantics.
 */

export const copyNo = {
  nav: {
    philosophy: "Filosofi",
    services: "Tjenester",
    projects: "Prosjekter",
    process: "Prosess",
    journal: "Journal",
    contact: "Kontakt",
    booking: "Booking",
    bookCta: "Book konsultasjon",
  },

  hero: {
    eyebrow: "Interiørarkitektur · Est.",
    headlineLine1: "Stille rom",
    headlineAccent: "som husker",
    headlineLine2: "—",
    body:
      "Et lite atelier som former private hjem, vernede bygg og intime overnattingssteder — ett rom, én proveniens, én håndtegnet detalj av gangen.",
    primaryCta: "Se utvalgte arbeider",
    secondaryCta: "Send en henvendelse",
    scroll: "Scroll",
  },

  philosophy: {
    eyebrow: "Filosofi — 01",
    pullQuote: "«Et rom skal aldri rope.\nDet skal folde seg ut.»",
    bodyP1:
      "Lysning Studio ble grunnlagt i 2018 i et lite hus ved Orkdalsfjorden — et atelier på syv personer: arkitekter, dekoratører, tekstilspesialister, og et internt verksted med snekkere og møbeltapetserere.",
    bodyP2:
      "Vi tegner sakte. Hvert oppdrag begynner med befaring, en sesong med lytting og en skissebok. Vi følger ikke trender. Vi følger patina, proveniens og proporsjon.",
    headline: "Vi former rom som ",
    headlineEm: "husker",
    headlineRest:
      " — rom som mykner med årene, snarere enn å eldes mot dem.",
    materialsCaption:
      "Håndvevd ull fra Røros Tweed — spesifisert til stuegardinene på Bjørkely.",
  },

  services: {
    eyebrow: "Tjenester — 02",
    heading: "Fem disipliner,",
    headingEm: "ett atelier.",
    body:
      "Vi tar imot et lite antall oppdrag hvert år. Hvert prosjekt ledes av en hovedansvarlig og støttes av hele atelieret — fra arkitektoniske tegninger til siste pute på sengen.",
    list: [
      {
        no: "I",
        title: "Private hjem",
        body:
          "Nye prosjekter, totalrenoveringer, og gjennomtenkte enkeltrom-transformasjoner for private oppdragsgivere.",
        tags: ["Full tjeneste", "Fra 12 måneder"],
      },
      {
        no: "II",
        title: "Vernede bygg",
        body:
          "Skånsom restaurering av fredede bygninger, herregårder og historiske bygårder — i dialog med Riksantikvaren og lokale håndverkere.",
        tags: ["Fredet & vernet", "Spesialsnekkeri"],
      },
      {
        no: "III",
        title: "Overnatting & gjestfrihet",
        body:
          "Intime hoteller, klubber og spisesteder hvor stemningen er alt. Færre prosjekter, dypere involvering.",
        tags: ["Boutique", "Etter invitasjon"],
      },
      {
        no: "IV",
        title: "Møbler & styling",
        body:
          "Håndtegnede møbler produsert av vårt eget verksted, sammen med innkjøp fra europeiske produsenter og antikvariater.",
        tags: ["Etter mål", "Atelier"],
      },
      {
        no: "V",
        title: "Konsultasjon",
        body:
          "En konsentrert dag i hjemmet ditt med hovedansvarlig — et arkitektonisk blikk, en dekoratørs hånd, en ærlig rapport.",
        tags: ["Én dag", "Fra 2 800 kr"],
      },
    ],
  },

  projects: {
    eyebrow: "Utvalgte arbeider — 03",
    heading: "En stille portefølje av ",
    headingEm: "levde",
    headingRest: " steder.",
    archive: "Se hele arkivet",
    list: [
      {
        no: "01",
        slug: "bjorkely",
        title: "Bjørkely",
        location: "Bygdøy, Oslo",
        year: "2025",
        type: "Funkis-villa · Total renovering",
        image: "/assets/img/lysning-bjorkely.jpg",
        tall: true,
      },
      {
        no: "02",
        slug: "fjordstuen",
        title: "Fjordstuen",
        location: "Hardanger",
        year: "2024",
        type: "Tradisjonelt tømmerhus",
        image: "/assets/img/lysning-fjordstuen.jpg",
      },
      {
        no: "03",
        slug: "bryggehuset",
        title: "Bryggehuset",
        location: "Bryggen, Bergen",
        year: "2024",
        type: "Vernet bygg · 8 rom",
        image: "/assets/img/lysning-bryggehuset.jpg",
      },
      {
        no: "04",
        slug: "holmenkollen-hus",
        title: "Holmenkollen Hus",
        location: "Holmenkollen, Oslo",
        year: "2023",
        type: "Familiehjem",
        image: "/assets/img/lysning-holmenkollen.jpg",
        tall: true,
      },
      {
        no: "05",
        slug: "solhogda",
        title: "Solhøgda",
        location: "Frogner, Oslo",
        year: "2024",
        type: "Bygård · Komplett restaurering",
        image: "/assets/img/lysning-solhogda.jpg",
        wide: true,
      },
    ],
  },

  process: {
    eyebrow: "Prosess — 04",
    heading: "Fire bevegelser,",
    headingEm: "uten hast.",
    body:
      "Et fullt boligoppdrag tar typisk atten til tjuefire måneder. Vi vil ikke komprimere det. Fine rom blir ikke til i en fart.",
    steps: [
      {
        no: "i",
        title: "Lytting",
        duration: "Uke 1 – 3",
        body:
          "Vi begynner med en lang samtale og en sakte gjennomgang av rommet. Vi studerer lyset, naboene og hvordan husholdningen faktisk lever.",
      },
      {
        no: "ii",
        title: "Tegning",
        duration: "Uke 4 – 10",
        body:
          "Håndtegninger først. Plantegninger, fasader og stemningsreferanser samlet i én bok i lærinnbinding, presentert i atelieret.",
      },
      {
        no: "iii",
        title: "Spesifikasjon",
        duration: "Uke 11 – 22",
        body:
          "Hver flate, hver sammenføyning, hver knott, hvert sting spesifiseres. Prøver kommer med bud. Vi prototyper møbler, snekkeri og lys i verkstedet.",
      },
      {
        no: "iv",
        title: "Utførelse",
        duration: "Måned 6 – 14",
        body:
          "Arbeider på stedet, i dialog med entreprenør og vårt eget atelier. En hovedansvarlig er alltid til stede. Fotografering tillates først helt på slutten.",
      },
    ],
  },

  contact: {
    eyebrow: "Henvendelser — 05",
    heading: "Begynn en",
    headingEm: "samtale.",
    body:
      "Vi tar imot åtte til ti oppdrag i året. Fortell oss litt om hjemmet, tidsrammen og hva som trekker deg mot atelieret. Vi svarer personlig, innen en uke.",
    studioLabel: "Atelieret",
    directLabel: "Direkte",
    hoursLabel: "Åpningstider",
    byAppointment: "Kun etter avtale",
    nameLabel: "Ditt navn",
    emailLabel: "E-post",
    messageLabel: "Fortell om prosjektet",
    submitCta: "Send henvendelse",
    privacyNote:
      "Ved å sende henvendelsen samtykker du til at vi lagrer kontaktinformasjonen din i tråd med vår personvernerklæring.",
  },

  marquee: {
    intro: "Sett i",
    sources: [
      "Bo Bedre",
      "Bonytt",
      "Plaza Interiør",
      "Boligpluss",
      "Elle Decoration",
      "World of Interiors",
      "Wallpaper*",
      "AD",
    ],
  },

  cookie: {
    title: "Vi bruker informasjonskapsler",
    body:
      "Lysning Studio bruker nødvendige informasjonskapsler for å drifte nettstedet, og valgfrie for analyse. Du kan velge selv.",
    accept: "Godta alle",
    reject: "Kun nødvendige",
    settings: "Innstillinger",
  },

  footer: {
    studioCol: "Atelier",
    studioLinks: ["Filosofi", "Atelieret", "Karriere", "Presse"],
    workCol: "Arbeid",
    workLinks: ["Boliger", "Vernede bygg", "Overnatting", "Arkiv"],
    practiceCol: "Praksis",
    practiceLinks: ["Prosess", "Honorarer", "Konsultasjon", "FAQ"],
    rightsReserved: "Alle rettigheter forbeholdt. Registrert i Norge.",
    devBy: "Utviklet av",
  },
} as const;

export type CopyNo = typeof copyNo;
