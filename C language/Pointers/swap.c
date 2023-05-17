#include<stdio.h>

void swap(int *a, int *b);

int main(){
    int x=3;
    int y=5;
    
    swap(&x, &y);
    printf("x=%d & y=%d\n",x,y);
}

void swap(int *a, int *b){
    int t;
    t=*a;
    *a=*b;
    *b=t;
}