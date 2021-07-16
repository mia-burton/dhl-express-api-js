import axios, { AxiosResponse } from 'axios'
import { Auth } from './types/auth'
import { ShipmentRequestBody } from './types/shipment-request.body'
import { ShipmentResponseBody } from './types/shipment-response.body'

export class DHLExpress {
  private readonly TEST_BASE_URL = 'https://wsbexpress.dhl.com/rest/sndpt'
  private readonly LIVE_BASE_URL = ''

  private readonly baseUrl: string
  private readonly axiosConfig: Object

  constructor(auth: Auth, testEnv: boolean) {
    const headers = { 'Content-Type': 'application/json' }
    this.axiosConfig = { headers: headers, auth: auth }
    this.baseUrl = this.LIVE_BASE_URL
    if (testEnv)
      this.baseUrl = this.TEST_BASE_URL
  }

  public async sendShipmentRequest(request : ShipmentRequestBody) :Promise<ShipmentResponseBody> {
    const url = `${this.baseUrl}/ShipmentRequest`
    try {
      const resp = await axios.post(url, JSON.stringify(request), this.axiosConfig)
      const shipmentResponseBody = new ShipmentResponseBody(JSON.stringify(resp.data)).parse()
      return shipmentResponseBody
    } catch (error) {
      return new Promise((resolve) => resolve(error.response))
    }
  }
}