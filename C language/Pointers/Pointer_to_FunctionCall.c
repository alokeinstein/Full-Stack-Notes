//Example of call by value and call by refrence : swapping example

//Question: Write a function to calculate the sum, product & average of 2 numbers. Print that average in the
//main fucntion

#include<stdio.h>

//in this example we are calling the value of a and b and taking the refrence of sum prod and avg
void doWork(int a, int b, int *sum, int *prod, int *avg);

int main(){
    int a =3, b=5;
    int sum,prod,avg;
    doWork(a,b,&sum,&prod,&avg);
    printf("sum=%d, prod=%d, avg=%d\n",sum,prod,avg);
return 0;
}

void doWork(int a, int b, int *sum, int *prod, int *avg){

    *sum=a+b;
    *prod=a*b;
    *avg=a+b/2;
}