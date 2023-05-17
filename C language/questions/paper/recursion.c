#include<stdio.h>
int recursion(int num){
    printf("%d\n",num);
    if (num==0){
        return 0;
    }
        return recursion(num-1);
    
}
int main(){
    int x;
   
    printf("Enter the Number :");
    scanf("%d",&x);
    // printf("%d",x);
    recursion(x);
    return 0;
}