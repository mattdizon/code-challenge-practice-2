def find_indice(arr, i):
    iterator = 0
    while arr[iterator] != i +1:
        iterator+=1
    return iterator

def swap(arr, x, y):
    temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp

def minSwap(arr):
    count = 0
    for x in range(len(arr)):
        if arr[x] != x+1:
            index = find_indice(arr, x)
            swap(arr, index, x)
            count+=1
    print(count)

minSwap([7,1,3,2,4,5,6])
    