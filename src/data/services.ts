export interface Service {
  slug: string;
  title: string;
  short: string;
  benefits: string[];
  process: string[];
  faq: { q: string; a: string }[];
  priceIds: string[];
}

export const services: Service[] = [
  {
    slug: 'pedikura',
    title: 'Kombinovaná pedikúra',
    short: 'Mokrá i přístrojová pedikúra s masáží chodidel v jednom ošetření — kompletní péče o chodidla a nehty.',
    benefits: [
      'Spojuje výhody klasické mokré pedikúry s přesností přístrojové techniky',
      'Odstranění zrohovatělé kůže, ošetření kutikul a tvarování nehtů',
      'Součástí je i masáž chodidel a lýtek',
      'Vhodná jako pravidelná péče i pro citlivější nebo náročnější chodidla',
    ],
    process: [
      'Konzultace a prohlédnutí chodidel, zhodnocení stavu kůže a nehtů',
      'Změkčující lázeň a odstranění zrohovatělé kůže',
      'Přístrojové doladění detailů a úprava nehtů',
      'Masáž chodidel a závěrečné ošetřující zábaly nebo krém, případně gel lak na nohy',
    ],
    faq: [
      {
        q: 'Jak často je vhodné pedikúru opakovat?',
        a: 'Většině klientů doporučujeme interval 4–6 týdnů, podle rychlosti růstu nehtů a stavu chodidel.',
      },
      {
        q: 'Bolí přístrojová část ošetření?',
        a: 'Ne, přístrojová pedikúra je zpravidla bezbolestná — pracuje se s ní přesně a ohleduplně, hlavně kolem citlivých míst.',
      },
    ],
    priceIds: ['pedikura-kombinovana', 'pedikura-odborna', 'pedikura-pristrojova', 'pedikura-gel'],
  },
  {
    slug: 'podologie',
    title: 'Podologie',
    short: 'Odborná péče o nohy zaměřená na řešení konkrétních problémů — otlaky, kuří oka, ztluštělé nehty.',
    benefits: [
      'Cílené ošetření otlaků, kuřích ok a ztluštělých nebo deformovaných nehtů',
      'Ohleduplný přístup vhodný i pro citlivější pokožku',
      'Doporučení domácí péče, aby se problém neopakoval',
    ],
    process: [
      'Podrobná konzultace a posouzení konkrétního problému',
      'Šetrné odstranění nebo zmenšení otlaku, kuřího oka či ztluštělé kůže',
      'Ošetření a úprava postižených nehtů',
      'Doporučení následné péče a případné kontroly',
    ],
    faq: [
      {
        q: 'Kdy je vhodné navštívit podologa místo běžné pedikúry?',
        a: 'Podologii doporučujeme, když se opakovaně objevují otlaky, kuří oka, bolestivé nebo ztluštělé nehty — tedy problémy, na které běžná pedikúra nestačí.',
      },
      {
        q: 'Máte zkušenost s péčí o diabetickou nohu?',
        a: 'Ano, ošetření přizpůsobíme citlivější pokožce. U diabetu doporučujeme péči koordinovat s vaším lékařem — jakoukoli ranku, otlak s puchýřem nebo změnu barvy nechte vždy vyšetřit lékařem.',
      },
      {
        q: 'Nehet je ztluštělý a nazelenalý — může to být problém?',
        a: 'Ztluštělý nebo zbarvený nehet bývá často plísňový (mykóza). Ošetření zvládneme zabrousit a upravit, ale léčbu na předpis nenahrazujeme — v takovém případě doporučíme návštěvu dermatologa.',
      },
    ],
    priceIds: ['podologie-osetreni', 'podologie-kurioko'],
  },
  {
    slug: 'zarostle-nehty',
    title: 'Zarostlé nehty',
    short: 'Korekce zarostlého nehtu bez chirurgického zásahu — cílem je citelná úleva.',
    benefits: [
      'Šetrná korekce zarostlého nehtu bez chirurgického zásahu',
      'Ošetření zaměřené na zmírnění tlaku, který zarostlý nehet často způsobuje',
      'Individuální plán, pokud je potřeba více návštěv',
    ],
    process: [
      'Posouzení hloubky a rozsahu zarůstání',
      'Šetrné uvolnění a korekce růstu nehtu',
      'Ošetření okolní tkáně, pokud je citlivá',
      'Doporučení, jak zarůstání předcházet do budoucna',
    ],
    faq: [
      {
        q: 'Je korekce zarostlého nehtu bolestivá?',
        a: 'Ošetření probíhá ohleduplně a cíleně tak, aby přineslo úlevu — u výrazně zanícených případů může být místo citlivé, o čemž vás předem informujeme.',
      },
      {
        q: 'Co když je prst zanícený a hnisá?',
        a: 'Při hnisání, silném zarudnutí šířícím se do okolí nebo horečce jde o infekci, kterou musí posoudit lékař — v takovém případě doporučíme návštěvu lékaře před dalším ošetřením.',
      },
      {
        q: 'Stačí jedna návštěva?',
        a: 'U mírnějších případů často ano, u dlouhodobě zarostlého nehtu bývá potřeba korekci v čase zopakovat — probereme to na místě.',
      },
    ],
    priceIds: ['podologie-zarostly'],
  },
  {
    slug: 'rovnatka-na-nehty',
    title: 'Rovnátka na nehty',
    short:
      'Nechirurgická korekce zakřiveného nebo vbočeného nehtu pomocí jemných rovnátek (odborně ortonyxie).',
    benefits: [
      'Postupné narovnání zakřiveného nehtu bez zásahu do nehtového lůžka',
      'Prevence opakovaného zarůstání u nehtů s výraznou křivostí',
      'Zpravidla bezbolestné řešení, které lze nosit v běžném provozu',
    ],
    process: [
      'Zhodnocení tvaru a křivosti nehtu',
      'Nasazení rovnátka odpovídajícího typu a šíře nehtu',
      'Pravidelné kontroly a případná úprava napnutí',
      'Sledování, dokud nehet nezíská rovný tvar růstu',
    ],
    faq: [
      {
        q: 'Jak dlouho se nosí rovnátko na nehtu?',
        a: 'Doba se liší podle míry zakřivení, obvykle se počítá v týdnech až měsících — přesný odhad dostanete po prohlédnutí nehtu.',
      },
      {
        q: 'Omezuje rovnátko běžné aktivity?',
        a: 'Ne, rovnátko je nízkoprofilové a lze s ním normálně chodit, sportovat i nosit obvyklou obuv.',
      },
    ],
    priceIds: ['podologie-ortonyxie'],
  },
  {
    slug: 'manikura',
    title: 'Manikúra',
    short: 'Gelová i klasická manikúra s péčí o ruce — kosmetiku doplníme po domluvě.',
    benefits: [
      'Klasická i japonská manikúra s masáží rukou',
      'Gelový lak s dlouhou výdrží a přirozeným vzhledem',
      'Po domluvě lze doplnit o drobné kosmetické ošetření',
    ],
    process: [
      'Úprava tvaru nehtů a ošetření kutikul',
      'Péče o ruce — peeling, masáž nebo japonská metoda dle výběru',
      'Nanesení gel laku nebo klasického laku',
      'Závěrečná úprava a domácí doporučení',
    ],
    faq: [
      {
        q: 'Jak dlouho vydrží gel lak?',
        a: 'Obvykle 3–4 týdny podle typu nehtů a péče, poté doporučujeme doplnění.',
      },
      {
        q: 'Lze si domluvit i kosmetické ošetření?',
        a: 'Ano, drobnou kosmetiku (např. úprava obočí) lze po domluvě přidat k manikúře — napište nám předem.',
      },
    ],
    priceIds: ['manikura-klasicka', 'manikura-gel', 'manikura-japonska', 'manikura-doplneni'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
