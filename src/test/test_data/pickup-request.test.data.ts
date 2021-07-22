export function getTestPickupRequest() {
  return {
    pickUpShipment: {
      pickupTimestamp: "2021-07-16T17:11:01GMT+02:00",
      shipmentInfo: {
        serviceType: "N",
        billing: {
          shipperAccountNumber: "123456789",
          shippingPaymentType: "S",
          billingAccountNumber: "*********",
        },
        unitOfMeasurement: "SI",
      },
      internationalDetail: {
        commodities: {
          numberOfPieces: 0,
          description: "5700000000123",
        },
      },
      ship: {
        shipper: {
          contact: {
            personName: "nome.",
            companyName: "azienda S.P.A.",
            phoneNumber: "-",
            emailAddress: "-",
            mobilePhoneNumber: "-",
          },
          address: {
            streetLines: "VIA GIUSEPPE LURAGHI, 11",
            streetLines2: "ARESE SHOPPING CENTER",
            city: "ARESE",
            stateOrProvinceCode: "MI",
            postalCode: "20020",
            countryCode: "IT",
          },
        },
        recipient: {
          contact: {
            personName: "TEST 3 - DHL",
            companyName: "-",
            phoneNumber: "-",
            emailAddress: "test@dhl.com",
            mobilePhoneNumber: "1234567890",
          },
          address: {
            streetLines: "Via Giulio Romano ",
            city: "Milano",
            stateOrProvinceCode: "MI",
            postalCode: "20135",
            countryCode: "IT",
          },
        },
      },
      packages: {
        requestedPackages: [
          {
            number: 1,
            weight: 1.0,
            customerReferences: "5700000000123",

            dimensions: {
              length: 1.0,
              width: 1.0,
              height: 1.0,
            },
          },
        ],
      },
    },
  }
}

export function getTestPickupResponse() {
  return {
    pickUpResponse: {
      notification: [
        {
          code: "0",
          message: null,
        },
      ],
      dispatchConfirmationNumber: "CBJ180121002621",
    },
  };
}
