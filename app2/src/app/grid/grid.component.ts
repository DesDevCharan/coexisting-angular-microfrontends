import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AgGridAngular } from "ag-grid-angular";

@Component({
  selector: "app2-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit {
  @ViewChild("agGrid", { static: false }) agGrid: AgGridAngular;

  columnDefs = [
    {
      headerName: "Make",
      field: "make",
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    { headerName: "Model", field: "model", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true }
  ];

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get("https://api.myjson.com/bins/15psn9");
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + " " + node.model)
      .join(", ");
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
    const evt = new CustomEvent("getSelectedRowsFromAGGrid", { detail: { data: selectedDataStringPresentation} });
    window.dispatchEvent(evt);
  }
}
