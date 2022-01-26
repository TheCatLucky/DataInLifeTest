export const changeGood = (catg, actionId, goodAmount, goodPrice) => {
  return catg.map(goods => {
    goods.goods = goods.goods.map(good => {
      if (good.gid === actionId) {
        return {
          ...good,
          amount: goodAmount,
          totalPrice: goodPrice
        }
      }
      return good
    })
    return goods
  })
}