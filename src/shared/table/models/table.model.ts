import { SimcardData } from "src/features/dashboard/models/simcard-data.model";

export class TableModel {
    data?: Array<SimcardData>;
    displayedColumns?: string[];
    showPeginator?: boolean;
}