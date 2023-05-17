// write a program to check weather the alphabets are uppercase or lowercase

#include <stdio.h>
int main()
{
    char ch;
    printf("enter a chracter: ");
    scanf("%c", &ch);

    if (ch >= 'A' && ch <= 'Z')
    {
        printf("uppercase character \n");
    }
    else if (ch >= 'a' && ch <= 'z'){
        printf("lowercase character \n");
    }else{
        printf("invalid character");
    }

    return 0;
}