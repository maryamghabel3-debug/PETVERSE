// Digikala Affiliate – Iran – zero upfront
export function digikalaAffLink(productId: string, affiliateTag='petverse-20'){
  return `https://www.digikala.com/product/dkp-${productId}/?promo=${affiliateTag}`
}
export function calculateCommission(price_irr: number){
  const rate = price_irr > 1000000 ? 0.06 : 0.08;
  return Math.round(price_irr * rate);
}
// Example: 1,280,000 IRR → commission 76,800 IRR
// 100 orders/day → ~7.6M IRR/day ≈ $150/day → $4,500/mo – covers infra
