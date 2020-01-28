// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

const missing = (arr) => {
    int sum = 0;
    int idx = -1;
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i] == 0)
        {
             idx = i; 
        }
        else 
        {
             sum += arr[i];
     
}