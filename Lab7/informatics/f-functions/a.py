numA = [int(i) for i in input().split(" ")]

def min(a, b, c, d):
    return (a if a < b else b) if (a if a < b else b) < (c if c < d else d) else (c if c < d else d)

print(min(numA[0], numA[1], numA[2], numA[3]))