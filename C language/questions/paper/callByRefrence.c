/* Call By refrence:Adress of the arguements are passed to the function by which 
it can make changes with the arguements via pointers.*/
#include<stdio.h>
int swap(int *a, int *b){
    int temp;
    temp=*a;
    *a=*b;
    *b=temp;
    //printf("%d\n%d",*a,*b);
    return;
}
int main(){
    int x=1;
    int y=2;
    swap(&x,&y);
    printf("%d\n%d",x,y);
    return 0;
}