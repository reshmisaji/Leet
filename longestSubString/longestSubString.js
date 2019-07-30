/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const characters = s.split('');
  let longestSubString ='' ;
  for(let i = 0; i< characters.length-1; i ++){
      let subString = characters[i];
      for(let j=i+1;j<characters.length; j++){
          if(!subString.includes(characters[j]))
              subString = subString.concat(characters[j])
      }
  longestSubString =subString.length > longestSubString.length ? subString : longestSubString; 
  }
  return longestSubString.length;
};