res, n = 0, 1
for i in input():
    res += int(i) * n
    n *= 10
print(res)