n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for j in range(n-1):
    if arr[j] < arr[j + 1]:
        cnt += 1

print(cnt)