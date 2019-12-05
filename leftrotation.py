def rotLeft(a, d):
    frontSliced = slice(d)
    endSliced = slice(d, len(a), 1)
    res = a[endSliced]
    res2 = a[frontSliced]
    print( res + res2)
rotLeft([1,2,3,4,5], 3)