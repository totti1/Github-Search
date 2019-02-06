import { Component, OnInit, Input } from "@angular/core";
import { Repository } from "../repository/repository";
import { HttpService } from "../http/http.service";
@Component({
  selector: "app-result-comp",
  templateUrl: "./result-comp.component.html",
  providers: [HttpService],
  styleUrls: ["./result-comp.component.css"]
})
export class ResultCompComponent implements OnInit {
  @Input() repos: Repository;
  // newRepo: Repository;
  constructor(private httpService: HttpService) {
    // this.newRepo = this.httpService.repos;
  }

  ngOnInit() {
    console.log(this.repos);
    // this.newRepo = this.httpService.repos;
    // console.log(this.repos);
  }
}
