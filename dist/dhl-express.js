"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DHLExpress = void 0;
const axios_1 = require("axios");
const dhl_express_error_1 = require("./types/dhl-express.error");
const pickup_response_body_1 = require("./types/pickup-response.body");
const shipment_response_body_1 = require("./types/shipment-response.body");
class DHLExpress {
    /**
     * Create a DHL Express object
     *
     * @param auth Auth - Object containing username and password of DHL Express account
     * @param testEnv boolean - Flag to choose whether to operate in the DHL testing environment, if false operates in the live environment
     */
    constructor(auth, testEnv) {
        this.TEST_BASE_URL = 'https://wsbexpress.dhl.com/rest/sndpt';
        this.LIVE_BASE_URL = '';
        const headers = { 'Content-Type': 'application/json' };
        this.axiosConfig = { headers: headers, auth: auth };
        this.baseUrl = this.LIVE_BASE_URL;
        if (testEnv)
            this.baseUrl = this.TEST_BASE_URL;
    }
    /**
     * Send a DHL Express Shipment Request, it allows the creation of shipments and receipt of waybills to be applied to packages.
     *
     * @param request ShipmentRequestBody - Object containing a Shipment Request body data (follow DHL Express documentation to understand how to fill in the different fields)
     * @returns Promise<ShipmentResponseBody> - Object containing the response of a Shipment Request (follow DHL Express documentation to understand how to interpret the data contained in it)
     */
    sendShipmentRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/ShipmentRequest`;
            try {
                const resp = yield axios_1.default.post(url, JSON.stringify(request), this.axiosConfig);
                const shipmentResponseBody = new shipment_response_body_1.ShipmentResponseBody(JSON.stringify(resp.data));
                return shipmentResponseBody;
            }
            catch (error) {
                throw new dhl_express_error_1.DHLExpressError(error.response.status, error.response.statusText);
            }
        });
    }
    /**
     * Send a DHL Express PickUP Request, it allows the booking of courier pick up to take away the ready items
     *
     * @param request PickupRequestBody - Object containing a PickUp Request body data (follow DHL Express documentation to understand how to fill in the different fields)
     * @returns Promise<PickupResponseBody> - Object containing the response of a PickUp Request (follow DHL Express documentation to understand how to interpret the data contained in it)
     */
    sendPickupRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/PickupRequest`;
            try {
                const resp = yield axios_1.default.post(url, JSON.stringify(request), this.axiosConfig);
                const pickupResponseBody = new pickup_response_body_1.PickupResponseBody(JSON.stringify(resp.data));
                return pickupResponseBody;
            }
            catch (error) {
                throw new dhl_express_error_1.DHLExpressError(error.response.status, error.response.statusText);
            }
        });
    }
}
exports.DHLExpress = DHLExpress;
