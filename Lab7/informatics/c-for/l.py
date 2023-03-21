x = str(input())
res = 0
for i in range(0, len(x)):
    res += int(x[i]) * (2**(len(x) - i - 1))
print(res)