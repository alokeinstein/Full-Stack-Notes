#include<stdio.h>
int main(){
 int num=3;
 int order = num - (num-1);//if we increment it, it goes like 1,2,3
 int star = 1;
    for(int i=0; i<num; i++){
     for(int j=0; j<=num; j++){
        if(num-(order++)){
            printf(" ");
        }
        printf("%d",star++);
    }
        printf("\n");
}
    return 0;
}
