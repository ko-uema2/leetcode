/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const openBrackeStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (["(", "[", "{"].includes(currentBracket)) {
      openBrackeStack.push(currentBracket);
    } else if (openBrackeStack.pop() !== bracketMap[currentBracket]) {
      return false;
    }
  }

  return !openBrackeStack.length;
}
// @lc code=end
