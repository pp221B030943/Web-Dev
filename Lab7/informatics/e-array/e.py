n = int(input())
arr = [int(i) for i in input().split(" ")]
cnt = 0
for j in range(n-1):
    if arr[j] > 0 and arr[j + 1] > 0 or arr[j] < 0 and arr[j + 1] < 0:
        cnt += 1

print("YES" if cnt > 0 else "NO")