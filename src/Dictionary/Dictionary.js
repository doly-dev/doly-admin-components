export default ({ data = [], value = '', defaultName = "-" }) => {
  const ret = data.find(item => item.value === value) || {};
  return ret.name || defaultName;
}
