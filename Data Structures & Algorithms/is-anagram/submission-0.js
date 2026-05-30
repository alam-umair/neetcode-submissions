class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let u = s.split('').sort().join('').toLowerCase();
        let v = t.split('').sort().join('').toLowerCase();
        if(u == v){
            return true;
        }
        else{
            return false;
        }
    }
}
