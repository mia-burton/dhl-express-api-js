export declare class PickupRequestBody {
    pickUpRequest: PickUpRequest | undefined;
    constructor(pickUpRequest: PickUpRequest);
    toDHLBody(): string;
}
export interface PickUpRequest {
    pickUpShipment: PickUpShipment;
}
export interface PickUpShipment {
    pickupTimestamp: string;
    shipmentInfo: ShipmentInfo;
    internationalDetail: InternationalDetail;
    ship: Ship;
    packages: Packages;
}
export interface ShipmentInfo {
    serviceType: string;
    billing: Billing;
    unitOfMeasurement: string;
}
export interface Billing {
    shipperAccountNumber: string;
    shippingPaymentType: string;
    billingAccountNumber: string;
}
export interface InternationalDetail {
    commodities: Commodities;
}
export interface Commodities {
    numberOfPieces: number;
    description: string;
}
export interface Ship {
    shipper: Shipper;
    recipient: Recipient;
}
export interface Shipper {
    contact: Contact;
    address: Address;
}
export interface Contact {
    personName: string;
    companyName: string;
    phoneNumber: string;
    emailAddress: string;
    mobilePhoneNumber: string;
}
export interface Address {
    streetLines: string;
    streetLines2?: string;
    city: string;
    stateOrProvinceCode: string;
    postalCode: string;
    countryCode: string;
}
export interface Recipient {
    contact: Contact;
    address: Address;
}
export interface Packages {
    requestedPackages?: (RequestedPackagesEntity)[] | null;
}
export interface RequestedPackagesEntity {
    number: number;
    weight: number;
    customerReferences: string;
    dimensions: Dimensions;
}
export interface Dimensions {
    length: number;
    width: number;
    height: number;
}
