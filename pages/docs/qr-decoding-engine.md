---
title: QR Decoding Engine
---

# {% $markdoc.frontmatter.title %}

QR codes for payments typically exist in two formats:

1. **EMV Standard** (Merchant presented mode)
2. **Payment Links** (URL-based)



**EMV Standard**

EMV QR Code standards are technical specifications managed by EMVCo that standardize QR code payments globally. These standards enable multiple payment providers to use a unified QR code format.

An EMV QR Code contains the beneficiary's information necessary for payment providers to initiate a transfer. It includes critical fields such as:

* Country code
* Merchant name
* Merchant account number (unique and specific to a payment system)

To process a payment transaction, our system initiates a transfer to the identified account using the appropriate local banking network.

**Regional Examples:**

* **Philippines QRPH**: Follows EMV format with payment information for GCash and Maya. Account numbers may exist as phone numbers, virtual account numbers, or e-wallet IDs. Uses INSTAPAY for instant settlement.
* **Singapore SGQR**: Follows EMV format with payment information for PayNow, PayLah!, Grabpay, NETS, etc. Account numbers exist as phone numbers or UENs. Uses FAST for instant settlement.

**Payment Links**

Payment link QR codes are URL-based QR codes that direct users to web-based payment platforms. These links typically belong to e-wallets and require specific API integration to facilitate payment transactions. Since the link often contains a user ID, payments can be facilitated with providers like Venmo which have available APIs.
