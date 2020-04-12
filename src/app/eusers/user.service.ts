import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mockUsers';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: HttpClient, private messagesService: MessagesService) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

/** GET hero by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
  getUsers(): Observable<User[]> {
    this.messagesService.add('UserService: fetched users');
    //return of(USERS);
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(_ => this.log('fetched Users in tap')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
    // return this.http.get<User[]>(this.usersUrl);
  }

  /** PUT: update the hero on the server */
updateUser (user: User): Observable<any> {
  return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${user.id}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}

/** POST: add a new user to the server */
addUser (user: User): Observable<User> {
  return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
    tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
    catchError(this.handleError<User>('addUser'))
  );
}

/** DELETE: delete the user from the server */
deleteUser (user: User | number): Observable<User> {
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<User>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted user id=${id}`)),
    catchError(this.handleError<User>('deleteUser'))
  );
}

/* GET useres whose name contains search term */
searchUsers(term: string): Observable<User[]> {
  if (!term.trim()) {
    // if not search term, return empty user array.
    return of([]);
  }
  return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found users matching "${term}"`) :
       this.log(`no users matching "${term}"`)),
    catchError(this.handleError<User[]>('searchUsers', []))
  );
}

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messagesService.add(`UserService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error("There is an error: " + error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


}
