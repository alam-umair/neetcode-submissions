class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let some = [];
        for(let num of nums){
            if(some.includes(num)){
                return true;
            }
            some.push(num);
        }
        return false;
    }
}
