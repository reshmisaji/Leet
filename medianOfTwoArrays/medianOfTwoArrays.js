/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const length1 =nums1.length;
  const median1 =length1 %2 === 0 ? (nums1[length1/2-1] + nums1[length1/2])/2 : length1!=1? nums1[Math.ceil(length1/2)] :nums1[0];
  
  const length2 =nums2.length;
  const median2 =length2 %2 === 0 ? (nums2[length2/2-1] + nums2[length2/2])/2 : length2!=1?nums2[Math.ceil(length2/2)] :nums2[0];
  
  return length1===0 ? median2: length2 ===0?median1:(median1 + median2)/2;
};