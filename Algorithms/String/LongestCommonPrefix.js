// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function (strs) {
  strs = strs.map((item) => item.toLowerCase().trim());
  let prefix = "",
    l = 0;
  for (let i of strs) {
    if (i.length > l) {
      l = i.length;
    }
  }
  strs = strs.map((item) => item.padEnd(l, " "));

  for (let i = 1; i <= l; i++) {
    let sub = strs[0].slice(0, i);
    let add = false;
    for (let j of strs) {
      add = j.substring(0, i) === sub;
      if (!add) {
        break;
      }
    }
    if (add) {
      prefix = add ? sub : "";
    } else {
      break;
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
