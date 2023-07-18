import { Injectable } from '@angular/core';
import axios from 'axios';
import { ImageLinks, Livro, VolumeInfo } from '../models/Livro';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  searchBooks(query: string): Promise<Livro[]> {
    const url = `${this.apiUrl}?q=${query}`;
    return axios.get(url)
      .then(response => {
        const livros: Livro[] = [];
        response.data.items.forEach((item: any) => {
          const volumeInfo: VolumeInfo = item.volumeInfo;
          const imageLinks: ImageLinks = volumeInfo.imageLinks || {};

          const livro: Livro = {
            id: item.id,
            volumeInfo: {
              title: volumeInfo.title || '',
              subtitle: volumeInfo.subtitle || '',
              authors: volumeInfo.authors || [],
              publisher: volumeInfo.publisher || '',
              publishedDate: volumeInfo.publishedDate || '',
              description: volumeInfo.description || '',
              imageLinks: {
                smallThumbnail: imageLinks.smallThumbnail || '',
                thumbnail: imageLinks.thumbnail || '',
                small: imageLinks.small || '',
                medium: imageLinks.medium || '',
                large: imageLinks.large || '',
                extraLarge: imageLinks.extraLarge || '',
              },
              categories: volumeInfo.categories || [],
              averageRating: volumeInfo.averageRating || 0,
              ratingsCount: volumeInfo.ratingsCount || 0,
              pageCount: volumeInfo.pageCount || 0,
              language: volumeInfo.language || '',
              previewLink: volumeInfo.previewLink || '',
              infoLink: volumeInfo.infoLink || '',
              canonicalVolumeLink: volumeInfo.canonicalVolumeLink || '',
              reservado: false
            }
          };
          livros.push(livro);
        });
        return livros;
      });
  }




}
