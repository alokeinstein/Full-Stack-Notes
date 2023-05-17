//price of fruits with the gst price with the array

/* 
Array can be initialised by two methods:
 int marks[3]={1,2,3}
 int marks = {1,2,3}
 */


# include<stdio.h>
int main(){
    int price[3];
    printf("Mango: ");
    scanf("%d",&price[0]);

    printf("Guava: ");
    scanf("%d",&price[1]);

    printf("Litchi: ");
    scanf("%d",&price[2]);

    printf("Mango: %f, Gauva:%f, Lithci:%f",price[0]+(.18*price[0]),price[1]+(.18*price[1]),price[2])+(.18*price[2]);

    return 0;
}

