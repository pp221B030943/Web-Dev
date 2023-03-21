import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    if n > 20 and n % 2 == 0: print('Not Weird')
    elif 2 <= n <= 5 and n % 2 == 0: print("Not Weird")
    elif 6 <= n <= 20: print("Weird")
    elif(n % 2 != 0): print("Weird") 