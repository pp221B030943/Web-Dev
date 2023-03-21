def make_chocolate(small, big, goal):
    total = small + (5*big) 

    if total == goal: return small       
    if total < goal: return -1
    if big * 5 < goal and (goal - big*5) <= small: return goal - (big*5)                       
    else:
        rem = goal % 5       
        if rem == small: return small 
        if rem > small: return -1               
        else: return rem    