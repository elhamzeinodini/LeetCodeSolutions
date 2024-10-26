# an ugly number is a positive integer whose prime factors are "2, 3, 5"

# example: 20
# 20 / 2 = 10, remainder: 0 and quotient: 10
# 10 / 2 = 5, remainder: 0 and quotient: 5
# 5 / 5 = 1, remainder: 0 and quotient: 1

def isUgly(n) :
    if n <= 0 or not isinstance(n, int) :
        return False
    for p in [2,3,5]:
        quotient = n / p 
    return quotient == 1

