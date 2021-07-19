import { LooseObject } from "./loose-object"

export class PickupResponseBody {
  pickUpResponse: PickUpResponse | undefined
  constructor(dhlBodyResponse: string) {
    this.pickUpResponse = this.parse(dhlBodyResponse).pickUpResponse
  }

  private parse(dhlBodyResponse: string): PickupResponseBody {
    return JSON.parse(dhlBodyResponse, function(_key, value) {
      if (value && typeof value === 'object') {
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
export interface PickUpResponse {
  notification?: (NotificationEntity)[] | null
  dispatchConfirmationNumber: string
}
export interface NotificationEntity {
  code: string
  message?: null
}
