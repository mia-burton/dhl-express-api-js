export interface ShipmentRequestBody {
  ShipmentRequest: ShipmentRequest
}

export interface ShipmentRequest {
  RequestedShipment: RequestedShipment
}

export interface RequestedShipment {
  ShipmentInfo: ShipmentInfo
  ShipTimestamp: string
  PaymentInfo: string
  InternationalDetail: InternationalDetail
  Ship: Ship
  Packages: Packages
  ManifestBypass: string
}

export interface ShipmentInfo {
  DropOffType: string
  ServiceType: string
  Account: number
  Currency: string
  UnitOfMeasurement: string
}

export interface InternationalDetail {
  Commodities: Commodities
  Content: string
}

export interface Commodities {
  NumberOfPieces: number
  Description: string
  CountryOfManufacture: string
  Quantity: number
  UnitPrice: number
  CustomsValue: number
}

export interface Ship {
  Shipper: Shipper
  Recipient: Recipient
}

export interface Shipper {
  Contact: Contact
  Address: Address
}

export interface Contact {
  PersonName: string
  CompanyName: string
  PhoneNumber: number
  EmailAddress: string
}


export interface Recipient {
  Contact: Contact
  Address: Address
}

export interface Address {
  StreetLines: string
  City: string
  StateOrProvinceCode?: string
  PostalCode: number
  CountryCode: string
}

export interface Packages {
  RequestedPackages?: (RequestedPackagesEntity)[] | null
}

export interface RequestedPackagesEntity {
  '@number': string
  Weight: number
  Dimensions: Dimensions
  CustomerReferences: string
}

export interface Dimensions {
  Length: number
  Width: number
  Height: number
}
