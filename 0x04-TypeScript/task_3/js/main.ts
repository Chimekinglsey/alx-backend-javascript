///<reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD  from "./crud"
import { deleteRow } from "./crud";

const row: RowElement= {
  firstName: "Guillaume",
  lastName: "Salva",
}
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
}
console.log(CRUD.updateRow(newRowID, updatedRow))
console.log(CRUD.deleteRow(newRowID));
 