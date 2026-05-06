/**
 * Build a BibleGateway KJV passage URL for a given Bible reference.
 *
 * Accepts free-form references like:
 *  - "John 3:16"
 *  - "1 Cor. 12:12-14"
 *  - "Gen. 1:26-27"
 *  - "Romans 1:26-29"
 */
export function bibleGatewayUrl(reference: string): string {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(
    reference,
  )}&version=KJV`
}
