# include <iostream>

int main () {
  int numbers [] = {3, -4, 5, 4, -1, 7, -8};
  int size = sizeof (numbers) / sizeof (int);
  int currentSum = 0;
  int maxSum = INT_MIN;
  for (int index = 0; index < size; index++) {
    currentSum += numbers [index];
    maxSum = std :: max (currentSum, maxSum);
    if (currentSum < 0) currentSum = 0;
  }
  std :: cout << "Maximum sub array sum: " << maxSum << std :: endl;
  return 0;
}