export interface GetSearchResponse {
  results: Result[];
  context: Context;
}

export interface Context {
  geo_bounds: GeoBounds;
}

export interface GeoBounds {
  circle: Circle;
}

export interface Circle {
  center: Center;
  radius: number;
}

export interface Center {
  latitude: number;
  longitude: number;
}

export interface Result {
  fsq_id: string;
  categories: Category[];
  chains: any[];
  closed_bucket: ClosedBucket;
  distance: number;
  geocodes: Geocodes;
  link: string;
  location: Location;
  name: string;
  related_places: RelatedPlaces;
  timezone: Timezone;
}

export interface Category {
  id: number;
  name: string;
  short_name: string;
  plural_name: string;
  icon: Icon;
}

export interface Icon {
  prefix: string;
  suffix: Suffix;
}

export enum Suffix {
  PNG = '.png',
}

export enum ClosedBucket {
  Unsure = 'Unsure',
  VeryLikelyOpen = 'VeryLikelyOpen',
}

export interface Geocodes {
  main: Center;
}

export interface Location {
  address?: string;
  country: Country;
  cross_street: string;
  formatted_address: string;
  locality: Locality;
  region: Locality;
  postcode?: string;
}

export enum Country {
  Bo = 'BO',
}

export enum Locality {
  Cbba = 'CBBA.',
  Cochabamba = 'Cochabamba',
  DipartimentoDiCochabamba = 'Dipartimento di Cochabamba',
}

export interface RelatedPlaces {
  parent?: Parent;
}

export interface Parent {
  fsq_id: string;
  categories: Category[];
  name: string;
}

export enum Timezone {
  AmericaLaPaz = 'America/La_Paz',
}
