def fix_teen(n):
    teen = False
    if n >= 13 and n < 15:
        teen = True
    elif n > 16 and n <= 19:
        teen = True
    else:
        teen = False
    return teen
    
def no_teen_sum(a, b, c):
        
    if fix_teen(a):
        a = 0
    if fix_teen(b):
        b = 0
    if fix_teen(c):
        c = 0
    return  a + b + c