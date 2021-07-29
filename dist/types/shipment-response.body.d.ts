export declare class ShipmentResponseBody {
    shipmentResponse: ShipmentResponse | undefined;
    constructor(dhlBodyResponse: string);
    private parse;
}
export interface ShipmentResponse {
    notification?: (NotificationEntity)[] | null;
    packagesResult: PackagesResult;
    labelImage?: (LabelImageEntity)[] | null;
    shipmentIdentificationNumber: number;
}
export interface NotificationEntity {
    code: string;
    message?: string;
}
export interface PackagesResult {
    packageResult?: (PackageResultEntity)[] | null;
}
export interface PackageResultEntity {
    number: string;
    trackingNumber: string;
}
export interface LabelImageEntity {
    labelImageFormat: string;
    graphicImage: string;
}
