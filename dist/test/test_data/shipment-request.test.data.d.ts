export declare function getTestShipmentRequest(): {
    requestedShipment: {
        shipmentInfo: {
            dropOffType: string;
            serviceType: string;
            account: number;
            currency: string;
            unitOfMeasurement: string;
        };
        shipTimestamp: string;
        paymentInfo: string;
        internationalDetail: {
            commodities: {
                numberOfPieces: number;
                description: string;
                countryOfManufacture: string;
                quantity: number;
                unitPrice: number;
                customsValue: number;
            };
            content: string;
        };
        ship: {
            shipper: {
                contact: {
                    personName: string;
                    companyName: string;
                    phoneNumber: number;
                    emailAddress: string;
                };
                address: {
                    streetLines: string;
                    city: string;
                    postalCode: number;
                    countryCode: string;
                };
            };
            recipient: {
                contact: {
                    personName: string;
                    companyName: string;
                    phoneNumber: number;
                    emailAddress: string;
                };
                address: {
                    streetLines: string;
                    city: string;
                    stateOrProvinceCode: string;
                    postalCode: number;
                    countryCode: string;
                };
            };
        };
        packages: {
            requestedPackages: {
                number: string;
                weight: number;
                dimensions: {
                    length: number;
                    width: number;
                    height: number;
                };
                customerReferences: string;
            }[];
        };
        manifestBypass: string;
    };
};
export declare function getTestShipmentResponse(): {
    shipmentResponse: {
        notification: {
            code: string;
            message: null;
        }[];
        packagesResult: {
            packageResult: {
                number: string;
                trackingNumber: string;
            }[];
        };
        labelImage: {
            labelImageFormat: string;
            graphicImage: string;
        }[];
        shipmentIdentificationNumber: number;
    };
};
