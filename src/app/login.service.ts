import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  private apiRoot: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }
  // si incluimos despues de ${username} el /repos, me traeria la lista de repositorios
  getApi(username: string) {
    return this.http.get(`${this.apiRoot}${username}`);
  }

}