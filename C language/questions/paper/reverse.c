#include<stdio.h>
int main(void)
{
    int remain = 0;
    int reverse = 0;
    int num = 156;
    for (int i = 0; num != 0; i++)
    {
        remain = num % 10;
        reverse = reverse * 10 + remain;
        num/=10;
    }
    printf("%d",reverse);
}