import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "../form/form.component";
import { ResultCompComponent } from "../result-comp/result-comp.component";

// Defining routes
const routes: Routes = [
  // { path: "home", component: FormComponent },
  { path: "result", component: ResultCompComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
