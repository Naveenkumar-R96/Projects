const CURRENCY_FORMATOR = new Intl.NumberFormat(undefined,{
    currency:'USD',
    style:'currency'
})
export function formatCurrency(price){
    return CURRENCY_FORMATOR.format(price)
}