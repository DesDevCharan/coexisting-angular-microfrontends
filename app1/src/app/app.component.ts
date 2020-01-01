import { Component } from "@angular/core";
import { assetUrl } from "src/single-spa/asset-url";

@Component({
  selector: "app1-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Micro FE 1";
  yoshiUrl = assetUrl("yoshi.png");
  selected = '';
  constructor() {
    window.addEventListener(
      "getSelectedRowsFromAGGrid",
      (evt) => {
        // tslint:disable-next-line: no-string-literal
        alert(evt['detail']['data']);
        // tslint:disable-next-line: no-string-literal
        this.selected = evt['detail']['data'];
      },
      false
    );
  }
}
