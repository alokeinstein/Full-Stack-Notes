#include<stdio.h>
#include<math.h>
int main (void)
{
    for(int i=1;i<300;i++)
    {
     long long int  k=pow(2,i)-1;
     
     for(int j=2;j<=k;j++)
    {
        if(k%j==0&&j<k)
        {
            break;
        }
        else if(k%j==0&&k==j)
        {
            printf("%lld\n",k*(k+1)/2);
        }
        
        
    } 
    }
}