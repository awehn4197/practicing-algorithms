class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        zeroStreaks = []
        onStreak = True
        currentStreak = 1
        for i in range(len(flowerbed)+1):
            if i == len(flowerbed):
                zeroStreaks.append(currentStreak+1)
            elif (flowerbed[i] == 1 and onStreak):
                onStreak = False
                zeroStreaks.append(currentStreak)
                currentStreak = 0
            elif flowerbed[i] == 0:
                onStreak = True
                currentStreak += 1
                        
        capacity = 0
        for zeroStreak in zeroStreaks:
            if (zeroStreak > 0):
                capacity += (zeroStreak - 1) // 2
        
        return capacity >= n