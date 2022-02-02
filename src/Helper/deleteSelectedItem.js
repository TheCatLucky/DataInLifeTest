export const manageSelected = (selected, item) => {
  const value = Object.values(item)[0];
  if (value > 0) {
    return { ...selected, ...item };
  }
  const key = Object.keys(item)[0];
  const keysSelected = Object.keys(selected).filter(item => item !== key);
  const sortedSelected = Object.fromEntries(
    keysSelected.map(keysSelected => [keysSelected, selected[keysSelected]])
  );
  return sortedSelected;
};
