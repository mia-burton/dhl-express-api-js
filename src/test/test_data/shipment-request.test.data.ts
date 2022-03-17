export function getTestShipmentRequest() {
  return {
    requestedShipment: {
      shipmentInfo: {
        dropOffType: "REGULAR_PICKUP",
        serviceType: "P",
        account: "123456789",
        currency: "SGD",
        unitOfMeasurement: "SI",
      },
      shipTimestamp: "2021-07-17T12:30:47GMT+01:00",
      paymentInfo: "DDP",
      internationalDetail: {
        commodities: {
          numberOfPieces: 1,
          description: "Customer Reference 1",
          countryOfManufacture: "CN",
          quantity: 1,
          unitPrice: 5,
          customsValue: "10",
        },
        content: "NON_DOCUMENTS",
      },
      ship: {
        shipper: {
          contact: {
            personName: "Tester 1",
            companyName: "Test Inc",
            phoneNumber: 123456789,
            emailAddress: "test@test.com",
          },
          address: {
            streetLines: "Via Firenze, 10",
            city: "Roma",
            postalCode: 12345,
            countryCode: "IT",
          },
        },
        recipient: {
          contact: {
            personName: "Tester 2",
            companyName: "Acme Inc",
            phoneNumber: 88347346643,
            emailAddress: "jackie.chan@eei.com",
          },
          address: {
            streetLines: "500 Hunt Valley Road",
            city: "New Kensington PA",
            stateOrProvinceCode: "PA",
            postalCode: 15068,
            countryCode: "US",
          },
        },
      },
      packages: {
        requestedPackages: [
          {
            number: "1",
            weight: 2,
            dimensions: {
              length: 1,
              width: 2,
              height: 3,
            },
            customerReferences: "Piece 1",
          },
          {
            number: "2",
            weight: 2,
            dimensions: {
              length: 1,
              width: 2,
              height: 3,
            },
            customerReferences: "Piece 2",
          },
        ],
      },
      manifestBypass: "N",
    },
  };
}

export function getTestShipmentResponse() {
  return {
    shipmentResponse: {
      notification: [
        {
          code: "0",
          message: null,
        },
      ],
      packagesResult: {
        packageResult: [
          {
            number: "1",
            trackingNumber: "JD011100003653101822",
          },
          {
            number: "2",
            trackingNumber: "JD011100003653101823",
          },
        ],
      },
      labelImage: [
        {
          labelImageFormat: "PDF",
          graphicImage: "JVBERi0xLjQKJeLjz9MKMiAwIG9iago8PC9GaW",
        },
      ],
      shipmentIdentificationNumber: 1230312926,
    },
  };
}
