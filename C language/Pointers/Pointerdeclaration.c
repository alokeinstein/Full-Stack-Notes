/* Pointer ek variable hai jo ki  adress store karata hai doosre variable ka 
or us adress me us variable ki value bhi ho skti h */

/* DECLARING POINTERS
      1. int *ptr    :   
      2. char *ptr
      3. float *ptr

   FORMAT SPECIFIER
      %p(hexadecimal value)
      %u(unsigned int)F
 */
#include<stdio.h>
int main(){
    
    int age = 22;
    int *ptr = &age;//Initializing the pointer variable and storing the adress of another variable
    int _age = *ptr;//

    //printf("%d", _age);

    //Address
    // printf("%p\n", &age);
    // printf("%u\n", &age);//more readable form
    // printf("%u\n", ptr);//adress of age and ptr will be same
    // printf("%u\n", &ptr);//adress where the pointer is stored


    //VAlUE
    printf("%d\n", age);
    printf("%d\n", *ptr);
    printf("%d\n", *(&age));
    
    return 0;
}