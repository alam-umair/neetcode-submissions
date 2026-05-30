class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let some = new Set();
        for(let num of nums){
            if(some.has(num)){
                return true;
            }
            some.add(num);
        }
        return false;
    }
}
