if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    
    count = 0
    for i in student_marks:
        if i == query_name:
            for i in student_marks[i]:
                count+=i
    a = count/3
    format_float = "{:.2f}".format(a)
    print(format_float)