x = int(input())
d = int(input())
cnt = 0
for i in str(x):
    if int(i) == d: cnt += 1
print(cnt)