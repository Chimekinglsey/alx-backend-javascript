import { RowElement, RowID } from "./interface";

export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowID: RowID): void;
export declare function updateRow(rowID: RowID, row: RowElement): RowID;
