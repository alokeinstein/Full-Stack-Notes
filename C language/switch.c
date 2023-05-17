#include <stdio.h>
int main()
{
    int day;
    printf("enter the day: ");
    scanf("%d", &day);

    switch (day)
    {
    case 1 :
        printf("today is the monday and first day of the week\n");
        break;
    case 2:
        printf("today is tuesday and second day of the week\n");
        break;
    case 3:
        printf("today is wednesday and third day of the week\n");
        break;
    case 4:
        printf("today is thursday and fourth day of the week\n");
        break;
    case 5:
        printf("today is friday and fifth  day of the week\n");
        break;
    case 6:
        printf("today is saturday and sixth day of the week\n");
        break;
    case 7:
        printf("today is sunday and fucking last  day of the week and last statement of my switch case\n");
        break;
    default: printf("incorrect info motherfucker");
    
    }
    return 0;
}