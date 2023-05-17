/* Pointer to Pointer  : A variable that stores the address of a pointer

    1. int **pptr
    2. char **pptr
    3. float **pptr
 */

#include<stdio.h>
int main(){
    float price = 100.00;
    float *ptr = &price;
    float **pptr = &ptr;

    printf("%f\n",price);
    printf("%f\n",*ptr);
    printf("%f\n",**pptr);

    return 0; 
}