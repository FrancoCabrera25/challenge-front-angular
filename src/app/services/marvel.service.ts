import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  Characters,
  ImageVariant,
  MarvelResponse,
  Thumbnail,
} from '../shared/interface/marvel.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private API_KEY = '8bf5bebb05235c79c0548ed4cf85d0f3';
  private ts = 1000;
  private HASH = '8d7c8f37e13e9dfecd398002fad8d664';
  private BASE_URL = 'http://gateway.marvel.com/v1/public';
  private CHARACTERS_URL = `${this.BASE_URL}/characters`;
  private QUERY_URL = `?ts=${this.ts}&apikey=${this.API_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Characters[]> {
    return this.http
      .get<MarvelResponse>(`${this.CHARACTERS_URL}${this.QUERY_URL}`)
      .pipe(
        map((response) => this.parsedCharacterResultData(response.data.results, ImageVariant.standard_small))
      );
  }

  getCharacterById(id: number): Observable<Characters | undefined> {
    return this.http
      .get<MarvelResponse>(`${this.CHARACTERS_URL}/${id}${this.QUERY_URL}`)
      .pipe(
        map((response) =>
          this.parsedCharacterResultData(response.data.results, ImageVariant.landscape_xlarge).at(0)
        )
      );
  }

  private parsedCharacterResultData(
    charactersResult: Characters[],
    variant: ImageVariant = ImageVariant.full
  ): Characters[] {
    return charactersResult.map((character) => {
      return {
        ...character,
        completedImg: this.getImage(
          character.thumbnail,
          variant
        ),
      };
    });
  }

  getImage(thumbnail: Thumbnail, variant: ImageVariant = ImageVariant.full) {
    return thumbnail && `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }
}
