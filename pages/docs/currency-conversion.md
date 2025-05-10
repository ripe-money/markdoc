---
title: Currency Conversion
---

# {% $markdoc.frontmatter.title %}

Each region has different off-ramping methods and therefore different conversion rate calculations. We implement several conversion strategies based on regional factors:

**Conversion Strategy Types:**

* USD Stablecoin → Local Fiat
* Local Stablecoin → Local Fiat
* USD Stablecoin → Local Stablecoin
* USD → Other Currency

**Factors Affecting Regional Strategies:**

* **Countries with local currency-pegged stablecoins:**
  * Using local stablecoins for off-ramping can provide better rates (1:1)
* **Countries with poor off-ramp infrastructure but better FX rates:**
  * Off-ramp stablecoin to USD, then FX to local currency
* **Countries with poor FX rates but better local off-ramp rates:**
  * Off-ramp stablecoin directly to fiat

**Rate Determination Methods:**

* **USD Stablecoin → Fiat:** Rates based on quotes from our liquidity providers, both on-chain and in centralized exchanges
* **Local Stablecoin → Fiat:** Since these are 1:1 pegged, we work directly with local stablecoin issuers for off-ramping
* **USD Stablecoin → Local Stablecoin:** Rates based on market quotes from on-chain and centralized exchanges
* **USD → Other Currency:** Rates pulled from FX API providers