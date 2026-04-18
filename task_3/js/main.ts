/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert
const newRowID: RowID = CRUD.insertRow(row);

// Update
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);

// Delete
CRUD.deleteRow(newRowID);
