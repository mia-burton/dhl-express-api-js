import { LooseObject } from "./loose-object"

export class ShipmentRequestBody {
  shipmentRequest: ShipmentRequest | undefined

  constructor(shipmentRequest: ShipmentRequest) {
    this.shipmentRequest = shipmentRequest
  }

  toDHLBody() {
    return JSON.stringify(this, function(_key, value) {
      if (value && typeof value === 'object') {
        var replacement: LooseObject = {}
        for (var v in value) {
          if (Object.hasOwnProperty.call(value, v)) {
            if (v == 'number') {
              replacement['@number'] = value[v]
              continue
            }
            replacement[v && v.charAt(0).toUpperCase() + v.substring(1)] = value[v]
          }
        }
        return replacement
      }
      return value
    })
  }
}

export interface ShipmentRequest {
  requestedShipment: RequestedShipment
}

export interface RequestedShipment {
  shipmentInfo: ShipmentInfo
  shipTimestamp: string
  paymentInfo: string
  internationalDetail: InternationalDetail
  ship: Ship
  packages: Packages
  manifestBypass: string
}

export interface ShipmentInfo {
  dropOffType: string
  serviceType: string
  account: number
  currency: string
  unitOfMeasurement: string
}

export interface InternationalDetail {
  commodities: Commodities
  content: string
}

export interface Commodities {
  numberOfPieces: number
  description: string
  countryOfManufacture: string
  quantity: number
  unitPrice: number
  customsValue: number
}

export interface Ship {
  shipper: Shipper
  recipient: Recipient
}

export interface Shipper {
  contact: Contact
  address: Address
}

export interface Contact {
  personName: string
  companyName: string
  phoneNumber: number
  emailAddress: string
}


export interface Recipient {
  contact: Contact
  address: Address
}

export interface Address {
  streetLines: string
  city: string
  stateOrProvinceCode?: string
  postalCode: number
  countryCode: string
}

export interface Packages {
  requestedPackages?: (RequestedPackagesEntity)[] | null
}

export interface RequestedPackagesEntity {
  number: string
  weight: number
  dimensions: Dimensions
  customerReferences: string
}

export interface Dimensions {
  length: number
  width: number
  height: number
}
