import DHLExpress from '..';
import * as nock from 'nock'
import { PickupRequestBody } from '../types/pickup-request.body';
import { getTestPickupRequest, getTestPickupResponse } from './test_data/pickup-request.test.data';


describe('Pickup Request test', function() {
  beforeEach(() => {
    nock('https://wsbexpress.dhl.com/rest/sndpt')
      .post('/PickupRequest')
      .reply(200, getTestPickupResponse());
  })
  it('should receive pickup code', async function() {
    const dhl = new DHLExpress( { username: 'testuser', password: 'testpsw' }, true)
    const resp = await dhl.sendPickupRequest(new PickupRequestBody(getTestPickupRequest()))
    expect(resp.pickUpResponse).toHaveProperty('dispatchConfirmationNumber')
    expect(resp.pickUpResponse?.dispatchConfirmationNumber).not.toBeNull()
  })
})