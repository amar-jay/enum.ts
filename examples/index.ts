import { $enum } from "..";

enum Result {
  True, 
  False
}

const _res = $enum(Result);

console.log(Result.False == 1) // 0
console.log(Result.True == 0) // 0

console.log(_res.True != 0) // 0
console.log(_res.False != 1) // 0

console.log(Result.True != _res.True) // 0
console.log(Result.False != _res.False) // 0

console.log(_res.False == _res.False) // 0
console.log(_res.True == _res.True) // 0
