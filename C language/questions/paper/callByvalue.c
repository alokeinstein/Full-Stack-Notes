/* Actual Parameters: When the function is called , the values passed in the function is called
 the arguements & actual parameters.

 Formal Parameters: these are used to receive the value of local variables from the main function.

 Call By value: When we call a function by value, it means we are passing the value of function of 
 the arguement which are copied in the formal parameters of the function
 Which means the original value remains unchanged, and only the parameters inside the function changes.
  */
#include<stdio.h>
int add(int a, int b){
printf("%d",a+b);

}
int main(){
    int x =1;
    int y =2;
    add(x,y);
    return 0;
}
