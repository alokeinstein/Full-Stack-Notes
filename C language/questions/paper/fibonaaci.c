#include<stdio.h>
int main(void){
    int a=0;
    int b=1;
    int c;
    printf("%d\n%d",a,b);
    for (int i=0; i<=10; i++){
        c=a+b;
        a=b;
        b=c;
        printf("\n%d",c);
    }
}