import { marketingRegionFromPostcode } from './'

function assert(desc: string, value?: any): void {
  if (!value) {
    throw new Error(`fail: ${desc}`)
  }

  console.log(`pass: ${desc}`)
}

function refute(desc: string, value?: any): void {
  if (value) {
    throw new Error(`fail: ${desc}`)
  }

  console.log(`pass: ${desc}`)
}

assert(
  "returns correct region for NZ postcode",
  marketingRegionFromPostcode("0110", "NZ") === "auckland"
)

assert(
  "returns correct region for AU postcode",
  marketingRegionFromPostcode("2090", "AU") === "sydney"
)

assert(
  "returns default region",
  marketingRegionFromPostcode("fooo") === "sydney"
)
