import {
    InvoiceDisplayForm
} from "domain/entity";

export default interface DocumentManager {
    uploadBusinessRegisterImage(file: File): Promise<string>;

    uploadBankAccountImage(file: File): Promise<string>;

    downloadInvoice(
        retailerName: string,
        data: InvoiceDisplayForm[],
        orderDate: string
    ): void;
}