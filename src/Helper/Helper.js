export const changeGood = (catg, { id, amount, price }) => {
  return catg.map(goods => {
    goods.goods = goods.goods.map(good => {
      if (good.gid === id) {
        return {
          ...good,
          amount: amount,
          totalPrice: price
        };
      }
      return good;
    });
    return goods;
  });
};