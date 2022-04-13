class solution1 : 
    def isAnagram1(self, s: str, t: str) -> bool :
        if len(s) != len(t) :
            return False
        countS, countT = {} , {}
        for i in range(len(s)) :
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        for c in countS:
            if countS[c] != countT.get(c, 0) :
                return False
            return True
        


       
class solution2:
    def isAnagram2(self, s: str, t: str) -> bool :
        return sorted(s) == sorted(t)