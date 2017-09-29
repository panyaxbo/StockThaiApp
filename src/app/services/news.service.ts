import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class NewsService {

  constructor(private http: Http) { }
  LoadBusinessNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }

  LoadEntertainmentNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
// https://newsapi.org/v1/articles?source=bloomberg&sortBy=latest&apiKey=9eda5f1baac14ccb9458904447bba0f6
  LoadGamingNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
  // General
  LoadGeneralNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
  LoadMusicNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
  LoadPoliticsNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=breitbart-news&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
  LoadScienceNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
  LoadSportNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
  LoadTechnologyNewsData(): Observable<any> {
    const url = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=' + environment.newsapi.apiKey;
    // tslint:disable-next-line:whitespace
    return this.http.get(url).map((res: Response) => {
      return res.json();
    });
  }
}
