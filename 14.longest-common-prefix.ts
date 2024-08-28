/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  const sortedStrs = strs.sort();

  let prefix = "";
  const firstStr = sortedStrs[0];
  const lastStr = sortedStrs[sortedStrs.length - 1];

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== lastStr[i]) {
      break;
    } else {
      prefix += firstStr[i];
    }
  }

  return prefix;
}
// @lc code=end
