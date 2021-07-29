import { Auth } from './types/auth';
import { PickupRequestBody } from './types/pickup-request.body';
import { PickupResponseBody } from './types/pickup-response.body';
import { ShipmentRequestBody } from './types/shipment-request.body';
import { ShipmentResponseBody } from './types/shipment-response.body';
export declare class DHLExpress {
    private readonly TEST_BASE_URL;
    private readonly LIVE_BASE_URL;
    private readonly baseUrl;
    private readonly axiosConfig;
    /**
     * Create a DHL Express object
     *
     * @param auth Auth - Object containing username and password of DHL Express account
     * @param testEnv boolean - Flag to choose whether to operate in the DHL testing environment, if false operates in the live environment
     */
    constructor(auth: Auth, testEnv: boolean);
    /**
     * Send a DHL Express Shipment Request, it allows the creation of shipments and receipt of waybills to be applied to packages.
     *
     * @param request ShipmentRequestBody - Object containing a Shipment Request body data (follow DHL Express documentation to understand how to fill in the different fields)
     * @returns Promise<ShipmentResponseBody> - Object containing the response of a Shipment Request (follow DHL Express documentation to understand how to interpret the data contained in it)
     */
    sendShipmentRequest(request: ShipmentRequestBody): Promise<ShipmentResponseBody>;
    /**
     * Send a DHL Express PickUP Request, it allows the booking of courier pick up to take away the ready items
     *
     * @param request PickupRequestBody - Object containing a PickUp Request body data (follow DHL Express documentation to understand how to fill in the different fields)
     * @returns Promise<PickupResponseBody> - Object containing the response of a PickUp Request (follow DHL Express documentation to understand how to interpret the data contained in it)
     */
    sendPickupRequest(request: PickupRequestBody): Promise<PickupResponseBody>;
}
