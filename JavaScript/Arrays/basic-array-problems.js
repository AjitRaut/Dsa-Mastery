// 1.Find the Largest Element in an Array
// const largestNumArray = (nums) => {
//   if (!nums) return;
//   console.log(nums)

//   let largestNum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > largestNum) {
//       largestNum = nums[i];
//     }
//   }
//   return largestNum;
// };

// let nums = [10, 20, 5, 30, 25];
// console.log(largestNumArray(nums));

// 2.Find the Second Largest Element in an Array

// const secondLargestNumArray = (nums) => {
//   if (!nums || nums.length === 0) return;

//   let largestNum = -Infinity;
//   let secondLargestNum = -Infinity;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > largestNum) {
//       secondLargestNum = largestNum;
//       largestNum = nums[i];
//     } else if (nums[i] > secondLargestNum && nums[i] !== largestNum) {
//       secondLargestNum = nums[i];
//     }
//   }
//   return secondLargestNum;
// };
// nums = [12, 35, 1, 10, 34, 1];

// console.log(secondLargestNumArray(nums));

// 3. Check if the Array is Sorted (Ascending Order)

// const arraySorted = (nums) => {
//   if (!nums || nums.length === 0) return;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
// nums = [1, 2, 3, 4, 5];

// console.log(arraySorted(nums));

// 4.Reverse an Array

const reverseArray = (nums)=>{
    if(!nums || nums.length === 0) return 
 
    let reverseArraNums = [];

    for(let i = nums.length - 1 ; i >=0 ; i--){
        reverseArraNums.push(nums[i])
    }
    return reverseArraNums;

}
nums = [1, 2, 3, 4, 5]


console.log(reverseArray(nums))
