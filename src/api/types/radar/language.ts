export interface Language {
  translation: Translation;
}

interface Translation {
  techRadar: TechRadar;
}

interface TechRadar {
  radarName: string;
  versionLabel: string;
  revisionsText: string;
  buttonChangeLanguage: string;
  navbar: Navbar;
  footerFootnote: string;
  legalInformationLabel: string;
  socialLinksLabel: string;
  pageIndex: PageIndex;
  pageItem: PageItem;
  'zoom-in': string;
  quadrant: string;
  quadrants: Quadrants;
  pageOverview: PageOverview;
  rings: Rings;
  pageHelp: PageHelp;
  legend: Legend;
  flags: Flags;
}

interface Flags {
  new: string;
}

interface Legend {
  new: string;
  recently: string;
  unchanged: string;
}

interface PageHelp {
  headlinePrefix: string;
  paragraphs: Paragraph[];
  quadrants: Quadrant[];
  quadrantsPreDescription: string;
  rings: Quadrant[];
  ringsPreDescription: string;
  sourcecodeLink: SourcecodeLink;
}

interface SourcecodeLink {
  description: string;
  href: string;
  name: string;
}

interface Quadrant {
  description: string;
  name: string;
}

interface Paragraph {
  headline: string;
  values: string[];
}

interface Rings {
  all: string;
  adopt: string;
  trial: string;
  observe: string;
  hold: string;
}

interface PageOverview {
  title: string;
}

interface Quadrants {
  'languages-and-frameworks': string;
  'methods-and-patterns': string;
  'platforms-and-operations': string;
  tools: string;
}

interface PageItem {
  quadrantOverview: string;
}

interface PageIndex {
  publishedLabel: string;
}

interface Navbar {
  help: string;
  overview: string;
  search: string;
  searchPlaceholder: string;
}