export interface LegalSectionData {
  /** Anchor id — must be unique within a page; also used by TableOfContents. */
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalPageData {
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSectionData[];
}
