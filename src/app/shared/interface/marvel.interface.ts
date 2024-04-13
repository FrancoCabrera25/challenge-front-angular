export interface MarvelResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelData;
}

export interface MarvelData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Characters[];
}

export interface Characters {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
  completedImg: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

export enum ItemType {
  Cover = 'cover',
  Empty = '',
  InteriorStory = 'interiorStory',
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  GIF = 'gif',
  Jpg = 'jpg',
}

export interface URL {
  type: URLType;
  url: string;
}

export enum URLType {
  Comiclink = 'comiclink',
  Detail = 'detail',
  Wiki = 'wiki',
}

export enum ImageVariant {
  detail = "detail",
  full = "",
  portrait_small = "portrait_small",
  portrait_medium = "portrait_medium",
  portrait_xlarge = "portrait_xlarge",
  portrait_fantastic = "portrait_fantastic",
  portrait_uncanny = "portrait_uncanny",
  portrait_incredible = "portrait_incredible",
  standard_small = "standard_small",
  standard_medium = "standard_medium",
  standard_large = "standard_large",
  standard_xlarge = "standard_xlarge",
  standard_fantastic = "standard_fantastic",
  standard_amazing = "standard_amazing",
  landscape_small = "landscape_small",
  landscape_medium = "landscape_medium",
  landscape_large = "landscape_large",
  landscape_xlarge = "landscape_xlarge",
  landscape_amazing = "landscape_amazing",
  landscape_incredible = "landscape_incredible"
}
