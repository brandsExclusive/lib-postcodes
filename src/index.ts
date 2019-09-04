import { AUDefault, AUPostCodes, NZDefault, NZPostcodes } from "./postcodes";

function getNZ(postcode: string) {
  return NZPostcodes[postcode] || NZDefault;
}

function getAU(postcode: string) {
  const postcodeValue = parseInt(postcode, 10);

  if (isNaN(postcodeValue)) {
    return AUDefault;
  }

  const data = AUPostCodes.find((code) => (postcodeValue >= code.min && postcodeValue <= code.max));

  if (!data) {
    return AUDefault;
  }

  return data.name;
}

export function marketingRegionFromPostcode(postcode: string, countryCode: string = "AU") {
  if (countryCode === "NZ") {
    return getNZ(postcode);
  }

  if (countryCode === "AU") {
    return getAU(postcode);
  }
  return null
}
