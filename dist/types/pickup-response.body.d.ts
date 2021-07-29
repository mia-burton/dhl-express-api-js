export declare class PickupResponseBody {
    pickUpResponse: PickUpResponse | undefined;
    constructor(dhlBodyResponse: string);
    private parse;
}
export interface PickUpResponse {
    notification?: (NotificationEntity)[] | null;
    dispatchConfirmationNumber: string;
}
export interface NotificationEntity {
    code: string;
    message?: string;
}
