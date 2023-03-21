n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for j in range(n):
    if arr[j] > 0:
        cnt += 1

print(cnt)