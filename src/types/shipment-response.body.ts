import { LooseObject } from "./loose-object"

export class ShipmentResponseBody {
  shipmentResponse: ShipmentResponse | undefined
  constructor(dhlBodyResponse: string) {
    this.shipmentResponse = this.parse(dhlBodyResponse).shipmentResponse
  }

  private parse(dhlBodyResponse: string): ShipmentResponseBody {
    return JSON.parse(dhlBodyResponse, function(_key, value) {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        var replacement: LooseObject = {}
        for (var v in value) {
          if (Object.hasOwnProperty.call(value, v)) {
            if (v.charAt(0) == '@') {
              replacement[v.substring(1)] = value[v]
              continue
            }
            replacement[v && v.charAt(0).toLowerCase() + v.substring(1)] = value[v]
          }
        }
        return replacement
      }
      return value
    })
  }
}

export interface ShipmentResponse {
  notification?: (NotificationEntity)[] | null
  packagesResult: PackagesResult
  labelImage?: (LabelImageEntity)[] | null
  shipmentIdentificationNumber: number
}

export interface NotificationEntity {
  code: string
  message?: string
}

export interface PackagesResult {
  packageResult?: (PackageResultEntity)[] | null
}

export interface PackageResultEntity {
  number: string
  trackingNumber: string
}

export interface LabelImageEntity {
  labelImageFormat: string
  graphicImage: string
}
