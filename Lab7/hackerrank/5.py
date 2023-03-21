if __name__ == '__main__':
    N = int(input())
    array = []

for i in range(N):
    com = input().split()
    if com[0] == "insert":
        array.insert(int(com[1]),int(com[2]))
    elif com[0] == "print":
        print(array)
    elif com[0] == "remove":
        array.remove(int(com[1]))
    elif com[0] == "append":
        array.append(int(com[1]))
    elif com[0] == "sort":
        array.sort()
    elif com[0] == "pop":
        array.pop()
    elif com[0] == "reverse":
        array.reverse()