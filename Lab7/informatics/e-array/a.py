n = int(input())
arr = [int(i) for i in input().split(" ")]
for j in range(n):
    if j % 2 == 0:
        print(arr[j], end=" ")