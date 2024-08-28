/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let numeral: number = 0;

  const sArray: string[] = s.split("");

  for (let i = 0; i < sArray.length; i++) {
    const current = romanMap[sArray[i]];
    const next = romanMap[sArray[i + 1]];

    if (next && current < next) {
      numeral += next - current;
      i++;
    } else {
      numeral += current;
    }
  }

  return numeral;
}
// @lc code=end
