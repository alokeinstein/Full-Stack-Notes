#include<stdio.h>

int fact(int num);

int main(){
    printf("factorial is %d : ", fact(5));
    return 0;
}

int fact(int num){

    if (num==0){
        return 1;
    }

    int num1 = fact(num-1);
    int num2 = num1 * num;
    return num2;
}