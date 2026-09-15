# include <iostream>

int main () {
  int numbers [] = {1, 2, 3};
  int size = sizeof (numbers) / sizeof (int);
  for (int start = 0; start < size; start++) {
    for (int end = start; end < size; end++) {
      std :: cout << "(";
      for (int index = start; index <= end; index++) {
        std :: cout << numbers [index];
      }
      std :: cout << ")";
    }
    std :: cout << std :: endl;
  }
  return 0;
}