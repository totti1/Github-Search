import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../users/user";
import { Repository } from "../repository/repository";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  user: User;
  repos: Repository;
  constructor(private http: HttpClient) {
    this.Repos(this.user);
    this.repos = new Repository("", "", 0, 0, 0, new Date(), "");
    // this.user = new User("");
  }

  Repos(user) {
    interface ApiResponse {
      avatar_url: string;
      public_repos: number;
      following: number;
      followers: number;
      created_at: Date;
      html_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            user +
            "?access_token=" +
            environment.api_key
        )
        .toPromise()
        .then(
          (response: any) => {
            (this.repos.name = response.name),
              (this.repos.avatar_url = response.avatar_url),
              (this.repos.public_repos = response.public_repos),
              (this.repos.following = response.following),
              (this.repos.followers = response.followers),
              (this.repos.created_at = response.created_at);
            this.repos.html_url = response.html_url;
            // this.repos = new Repository(
            //   response.avatar_url,
            //   response.public_repos,
            //   response.following,
            //   response.followers,
            //   response.created_at
            // );
            // console.log(this.repos);
            // this.user.username = response.quote;

            resolve();
            // console.log(this.repos);
          },
          error => {
            alert("Couldn't find any repository");
            (this.repos.avatar_url = ""),
              (this.repos.public_repos = 20),
              (this.repos.following = 600),
              (this.repos.followers = 200),
              (this.repos.created_at = new Date());
            reject(error);
          }
        );
    });
    // return this.repos;

    return promise;
  }
}
