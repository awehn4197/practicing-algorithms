class Solution {
    public int searchInsert(int[] nums, int target) {
        int lo = 0;
        int hi = nums.length;
        
        while (lo < hi) {
            int mid = (int) Math.floor((lo+hi)/2);
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        
        return lo;
    }
}