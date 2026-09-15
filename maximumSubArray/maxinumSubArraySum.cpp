# include <iostream>

int main () {
  int numbers [] = {1, 2, 3, 4};
  int size = sizeof (numbers) / sizeof (int);
  int maxSum = INT_MIN;
  for (int start = 0; start < size; start++) {
      int currentSum = 0;
    for (int end = start; end < size; end++) {
      currentSum += numbers [end];
      maxSum = std :: max (currentSum, maxSum);
    }
  }
  std :: cout << "Maximum sub array sum: " << maxSum << std :: endl;
  return 0;
}