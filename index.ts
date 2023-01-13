interface ENUM_VAL {}
type IEnum = {[key: string]: ENUM_VAL};
function $enum<E extends IEnum>(x: E){
  const keys = Object.keys(x);

  const res:IEnum = {};
  keys.forEach((key) => {
    const id = {} as ENUM_VAL;
    res[key] = id;
  });

  return res as E;
}
export {$enum }
