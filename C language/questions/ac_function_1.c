#include <stdio.h>

// declaration of function
void greetings();

// calling a function
int main()
{
    greetings();
    return 0;
}

// defining a function
void greetings()
{
    char ch;
    printf("Type i for india and f for france : ");
    scanf("%c", &ch);
    if (ch == 'i')
    {
        printf("\nNamaste");
    }
    else if (ch == 'f')
    {
        printf("\nBonjor");
    }
    else
    {
        printf("\nChoose only india or france");
    }
}