import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http/http.service";
import { Repository } from "../repository/repository";
import { User } from "../users/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  providers: [HttpService],
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  repos: Repository;
  user = new User("");
  constructor(private httpservice: HttpService, private router: Router) {
    // this.repos = httpservice.Repos(this.user).then(()=>{})
  }
  Check() {
    // console.log(this.user.user);
    this.httpservice.Repos(this.user.user);
    this.repos = this.httpservice.repos;
    // this.router.navigate(["/result"]);
    // console.log(this.repos);
  }

  ngOnInit() {
    // this.httpservice.Repos(this.user);
    // this.repos = this.httpservice;
  }
}
