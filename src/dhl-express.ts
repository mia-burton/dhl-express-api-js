import axios, { AxiosResponse } from 'axios'
import { Auth } from './types/auth'
import { DHLExpressError } from './types/dhl-express.error'
import { PickupRequestBody } from './types/pickup-request.body'
import { PickupResponseBody } from './types/pickup-response.body'
import { ShipmentRequestBody } from './types/shipment-request.body'
import { ShipmentResponseBody } from './types/shipment-response.body'

export class DHLExpress {
  private readonly TEST_BASE_URL = 'https://wsbexpress.dhl.com/rest/sndpt'
  private readonly LIVE_BASE_URL = 'https://wsbexpress.dhl.com/rest/gbl'

  private readonly baseUrl: string
  private readonly axiosConfig: Object

  /**
   * Create a DHL Express object
   *
   * @param auth Auth - Object containing username and password of DHL Express account
   * @param testEnv boolean - Flag to choose whether to operate in the DHL testing environment, if false operates in the live environment
   */
  constructor(auth: Auth, testEnv: boolean) {
    const headers = { 'Content-Type': 'application/json' }
    this.axiosConfig = { headers: headers, auth: auth }
    this.baseUrl = this.LIVE_BASE_URL
    if (testEnv)
      this.baseUrl = this.TEST_BASE_URL
  }

  /**
   * Send a DHL Express Shipment Request, it allows the creation of shipments and receipt of waybills to be applied to packages.
   *
   * @param request ShipmentRequestBody - Object containing a Shipment Request body data (follow DHL Express documentation to understand how to fill in the different fields)
   * @returns Promise<ShipmentResponseBody> - Object containing the response of a Shipment Request (follow DHL Express documentation to understand how to interpret the data contained in it)
   */
  public async sendShipmentRequest(request : ShipmentRequestBody) :Promise<ShipmentResponseBody> {
    const url = `${this.baseUrl}/ShipmentRequest`
    try {
      const resp = await axios.post(url, request.toDHLBody(), this.axiosConfig)
      const shipmentResponseBody = new ShipmentResponseBody(JSON.stringify(resp.data))
      return shipmentResponseBody
    } catch (error) {
      if (error.response) {
        throw new DHLExpressError(error.response.status, error.response.statusText)
      }
      throw new DHLExpressError(0, error.message)
    }
  }

  /**
   * Send a DHL Express PickUP Request, it allows the booking of courier pick up to take away the ready items
   *
   * @param request PickupRequestBody - Object containing a PickUp Request body data (follow DHL Express documentation to understand how to fill in the different fields)
   * @returns Promise<PickupResponseBody> - Object containing the response of a PickUp Request (follow DHL Express documentation to understand how to interpret the data contained in it)
   */
  public async sendPickupRequest(request : PickupRequestBody) :Promise<PickupResponseBody> {
    const url = `${this.baseUrl}/PickupRequest`
    try {
      const resp = await axios.post(url, request.toDHLBody(), this.axiosConfig)
      const pickupResponseBody = new PickupResponseBody(JSON.stringify(resp.data))
      return pickupResponseBody
    } catch (error) {
      if (error.response) {
        throw new DHLExpressError(error.response.status, error.response.statusText)
      }
      throw new DHLExpressError(0, error.message)
    }
  }
}
