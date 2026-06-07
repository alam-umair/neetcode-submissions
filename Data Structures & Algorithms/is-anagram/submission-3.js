class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let a = s.split("").sort().join("");
        let b = t.split("").sort().join("");

        if(a == b){
            return true;
        }
        else{
            return false;
        }
    }
}
