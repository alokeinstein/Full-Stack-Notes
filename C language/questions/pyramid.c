/* #include<stdio.h>
int main(){
int row,col,i,j;
printf("how many rows of pyramid do you want?");
scanf("%d",&row);
col = 2 * row - 1;
for ( i = 1; i <= row; i++) {
  for ( j = 1; j <= col; j++) {
    if (j >= row - (i - 1) && j <= row + (i + 1)) {
      printf(" ");
    } else {
      printf("*");
    }
  }
  printf("\n");
}
return 0;
} */

#include <stdio.h>
int main()
{
  int row = 3;
  int col = 3;
  for (int i = 1; i <= row; i++)
  {
    for (int j = 1; j <= col; j++)
    {
      printf("*");
    }
    printf("\n");
  }
  return 0;
}