#include<stdio.h>
int main(){
    int sum;
    //printf("enter the number to find its factorial : ");
    // scanf("%d",&i);
    sum=1;


  for (int i=15; i>0; i--){
    //printf("%d",i);
    sum *= i;
  
}
printf("the factorial is \n %d",sum);


    return 0;
}