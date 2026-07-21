export const languages = {
  cs: 'Čeština',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  cs: {
    'meta.title': 'Salon SiLi — pedikúra a podologie Liberec',
    'meta.description':
      'Kombinovaná pedikúra, podologická péče, korekce zarostlých nehtů a gelová manikúra v centru Liberce. Objednání předem na telefonu nebo e-mailu.',

    'nav.skip': 'Přeskočit na obsah',
    'nav.services': 'Služby',
    'nav.pricing': 'Ceník',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Menu',
    'nav.close': 'Zavřít',
    'nav.callCta': 'Napište nám',

    'notice.text':
      'Salon je zavřený z důvodu rodičovské, web je stále rozpracovaný a objednávky ani nové klienty zatím nepřijímám. Děkuji.',
    'notice.disclaimer': 'Informace na webu (ceny, texty i kontaktní údaje) jsou zatím orientační a budou doplněny.',

    'hero.kicker': 'Salon SiLi — Liberec',
    'hero.headline': 'Nohy i ruce ve správných rukou.',
    'hero.subhead':
      'Kombinovaná pedikúra, odborná podologie a gelová manikúra v srdci Liberce. Jen na objednání — žádné čekání, žádný spěch.',
    'hero.cta': 'Napište nám',

    'services.label': 'Služby',
    'services.title': 'S čím za námi nejčastěji chodíte',
    'services.intro':
      'Od pravidelné údržby po odborné ošetření problémových nehtů — každé ošetření je individuální.',

    'about.label': 'O salonu',
    'about.title': 'Zkušená péče, klidné prostředí',
    'about.body':
      'Salon SiLi se v Liberci věnuje kombinované pedikúře a podologické péči — tedy řešení zarostlých nehtů, otlaků a dalších potíží, se kterými si člověk sám nepomůže. Každé ošetření probíhá v klidu a jen po předchozím objednání.',

    'pricing.label': 'Ceník',
    'pricing.title': 'Orientační ceny ošetření',
    'pricing.teaserNote': 'Kompletní ceník najdete na samostatné stránce.',
    'pricing.viewAll': 'Zobrazit celý ceník',
    'pricing.disclaimer':
      'Ceny jsou orientační a mohou se lišit od aktuálního ceníku v salonu. Konečnou cenu vždy potvrdíme při objednání podle rozsahu ošetření.',

    'contact.label': 'Kontakt',
    'contact.title': 'Objednání jen předem',
    'contact.body':
      'Salon nemá pravidelnou otevírací dobu ani volný příchod — každé ošetření je na objednání. Napište nebo zavolejte a domluvíme si termín, který vám vyhovuje.',
    'contact.addressLabel': 'Adresa',
    'contact.directionsLabel': 'Jak nás najdete',
    'contact.directions':
      'Najděte OC Plaza na Soukenném náměstí, vejděte do průchodu vedle Plazy směrem k Benešovu náměstí — salon SiLi je hned na konci průchodu vpravo.',
    'contact.emailLabel': 'E-mail',
    'contact.channelsNote': 'Telefon a mapu doplníme po znovuotevření salonu.',
    'contact.waitlistCta': 'Napište mi o znovuotevření',

    'faq.label': 'Časté dotazy',

    'medical.disclaimer':
      'Nabízíme kosmetickou a podologickou péči, nikoli lékařské vyšetření ani léčbu. Při hnisání, silném zarudnutí šířícím se do okolí, horečce nebo nehojící se ráně vždy vyhledejte lékaře.',
    'hygiene.note':
      'Nástroje sterilizujeme a na ošetření používáme jednorázový brusný materiál — hygiena je samozřejmostí, ne příplatkem.',

    'footer.colophon': 'Salon SiLi · Liberec',
  },
};

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['cs']): string {
    return ui[lang][key] ?? ui.cs[key];
  };
}
