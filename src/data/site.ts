export const email = 'info@salonsili.cz';
// no confirmed number yet — kept out of JSON-LD until real
export const phone: string | null = null;

// Impressum (§ 435 obč. zák., živnostenský zákon 455/1991 Sb.) requires the
// operator's legal name, IČO and sídlo on the site — not yet supplied, so these
// stay null and the footer omits the line rather than showing fabricated data.
export const legalName: string | null = null;
export const ico: string | null = null;

export const address = {
  street: 'náměstí Dr. E. Beneše 3/4',
  locality: 'Liberec 1',
  postalCode: '460 01',
  country: 'CZ',
};

export const directions =
  'Najděte OC Plaza na Soukenném náměstí, vejděte do průchodu vedle Plazy směrem k Benešovu náměstí — salon SiLi je hned na konci průchodu vpravo.';
