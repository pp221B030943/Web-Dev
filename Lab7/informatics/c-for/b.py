a = int(input())
b = int(input())
c = int(input())
d = int(input())
s = ''
for i in range(a, b+1):
    if i % d == c: s = s + str(i)+" "
    i += 1

print(s)