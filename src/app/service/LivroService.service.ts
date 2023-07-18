import { Injectable } from '@angular/core';
import { Livro } from '../models/Livro';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LivroServiceService {

constructor() { }

private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  livros: Livro[] = [];

  searchBooks(query: string): Promise<Livro[]> {
    const url = `${this.apiUrl}?q=${query}`;
    return axios.get(url)
      .then(response => {
        response.data.items.forEach((item: any) => {
          const livro = this.livros.find(existingLivro => existingLivro.id === item.id);
          if (!livro) {
            // Cria um novo livro
            const novoLivro: Livro = {
              id: item.id,
              volumeInfo: {
                title: item.volumeInfo.title || '',
                subtitle: item.volumeInfo.subtitle || '',
                authors: item.volumeInfo.authors || [],
                publisher: item.volumeInfo.publisher || '',
                publishedDate: item.volumeInfo.publishedDate || '',
                description: item.volumeInfo.description || '',
                imageLinks: {
                  smallThumbnail: item.volumeInfo.imageLinks?.smallThumbnail || '',
                  thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
                  small: item.volumeInfo.imageLinks?.small || '',
                  medium: item.volumeInfo.imageLinks?.medium || '',
                  large: item.volumeInfo.imageLinks?.large || '',
                  extraLarge: item.volumeInfo.imageLinks?.extraLarge || ''
                },
                categories: item.volumeInfo.categories || [],
                averageRating: item.volumeInfo.averageRating || 0,
                ratingsCount: item.volumeInfo.ratingsCount || 0,
                pageCount: item.volumeInfo.pageCount || 0,
                language: item.volumeInfo.language || '',
                previewLink: item.volumeInfo.previewLink || '',
                infoLink: item.volumeInfo.infoLink || '',
                canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink || '',
                reservado: false
              }
            };
            this.livros.push(novoLivro); // Adiciona o livro ao array
          }
        });
        return this.livros; // Retorna o array de livros
      });
  }



livroById(id: string): Livro | undefined {
  return this.livros.find(livro => livro.id === id);
}

GetAllLivros(): Livro[]
{
  return this.livros;
}


}
