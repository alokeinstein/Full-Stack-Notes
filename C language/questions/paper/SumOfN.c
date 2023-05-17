#include<stdio.h>
int main(){
    int x,sum;
    printf("Enter the number: ");
    scanf("%d",&x);
    sum=0;
    for (int i=0; i<=x; i++){
        sum+=i;
        printf("%d\n",sum);
    }
return 0;
}