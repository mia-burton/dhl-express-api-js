import axios, { AxiosResponse } from 'axios'
import { Auth } from './types/auth'
import { ShipmentRequestBody } from './types/shipment-request.body'

export class DHLExpress {
  private readonly baseUrl: string
  private readonly axiosConfig: Object

  constructor(auth: Auth, baseUrl: string) {
    const headers = { 'Content-Type': 'application/json' }
    this.axiosConfig = { headers: headers, auth: auth }
    this.baseUrl = baseUrl
  }

  public async sendShipmentRequest(request : ShipmentRequestBody) :Promise<AxiosResponse> {
    const url = `${this.baseUrl}/ShipmentRequest`
    try {
      const resp = await axios.post(url, JSON.stringify(request), this.axiosConfig)
      return resp
    } catch (error) {
      return new Promise((resolve) => resolve(error.response))
    }
  }
}