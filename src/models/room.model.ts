export interface Sys {
  id: string;
}

export interface File {
  url: string;
}

export interface ImageField {
  file: File;
}

export interface Image {
  fields: ImageField;
}

export interface CommonFields {
  name: string;
  slug: string;
  type: string;
  price: number;
  size: number;
  capacity: number;
  pets: boolean;
  breakfast: boolean;
  featured: boolean;
  description: string;
  extras: string[];
}

export interface RawFields extends CommonFields {
  images: Image[];
}

export interface Room extends CommonFields {
  id: string;
  images: string[];
}

export interface RawRoom {
  sys: Sys;
  fields: RawFields;
}
