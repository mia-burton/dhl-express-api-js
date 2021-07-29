export declare function getTestPickupRequest(): {
    pickUpShipment: {
        pickupTimestamp: string;
        shipmentInfo: {
            serviceType: string;
            billing: {
                shipperAccountNumber: string;
                shippingPaymentType: string;
                billingAccountNumber: string;
            };
            unitOfMeasurement: string;
        };
        internationalDetail: {
            commodities: {
                numberOfPieces: number;
                description: string;
            };
        };
        ship: {
            shipper: {
                contact: {
                    personName: string;
                    companyName: string;
                    phoneNumber: string;
                    emailAddress: string;
                    mobilePhoneNumber: string;
                };
                address: {
                    streetLines: string;
                    streetLines2: string;
                    city: string;
                    stateOrProvinceCode: string;
                    postalCode: string;
                    countryCode: string;
                };
            };
            recipient: {
                contact: {
                    personName: string;
                    companyName: string;
                    phoneNumber: string;
                    emailAddress: string;
                    mobilePhoneNumber: string;
                };
                address: {
                    streetLines: string;
                    city: string;
                    stateOrProvinceCode: string;
                    postalCode: string;
                    countryCode: string;
                };
            };
        };
        packages: {
            requestedPackages: {
                number: number;
                weight: number;
                customerReferences: string;
                dimensions: {
                    length: number;
                    width: number;
                    height: number;
                };
            }[];
        };
    };
};
export declare function getTestPickupResponse(): {
    pickUpResponse: {
        notification: {
            code: string;
            message: null;
        }[];
        dispatchConfirmationNumber: string;
    };
};
