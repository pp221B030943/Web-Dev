n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for j in range(1, n-1):
    if arr[j] > arr[j + 1] and arr[j] > arr[j - 1]:
        cnt += 1

print(cnt)