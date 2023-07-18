export class Livro {
  id!: string;
  volumeInfo!: VolumeInfo;
}

export class VolumeInfo {
  title!: string;
  subtitle!: string;
  authors!: string[];
  publisher!: string;
  publishedDate!: string;
  description!: string;
  imageLinks!: ImageLinks;
  categories!: string[];
  averageRating!: number;
  ratingsCount!: number;
  pageCount!: number;
  language!: string;
  previewLink!: string;
  infoLink!: string;
  canonicalVolumeLink!: string;
  reservado!: boolean;
}

export class ImageLinks {
  smallThumbnail!: string;
  thumbnail!: string;
  small!: string;
  medium!: string;
  large!: string;
  extraLarge!: string;
}
