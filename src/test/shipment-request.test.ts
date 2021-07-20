import DHLExpress from '..';
import * as nock from 'nock'
import { ShipmentRequestBody } from '../types/shipment-request.body';
import { getTestShipmentRequest, getTestShipmentResponse } from './test_data/shipment-request.test.data';


describe('Shipment Request test', function() {
  beforeEach(() => {
    nock('https://wsbexpress.dhl.com/rest/sndpt')
      .post('/ShipmentRequest')
      .reply(200, getTestShipmentResponse());
  })
  it('should receive label', async function() {
    const dhl = new DHLExpress( { username: 'testuser', password: 'testpsw' }, true)
    const resp = await dhl.sendShipmentRequest(new ShipmentRequestBody(getTestShipmentRequest()))
    expect(resp.shipmentResponse).toHaveProperty('labelImage')
  })
})