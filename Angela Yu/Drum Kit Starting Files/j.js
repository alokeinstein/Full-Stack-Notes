/*  for(let i=1;i<300;i++)
    {
     let k=Math.pow(2,i)-1;
     
     for(let j=2;j<=k;j++)
    {
        if(k%j==0&&j<k)
        {
            break;
        }
        else if(k%j==0&&k==j)
        {
            console.log(k*(k+1)/2);
        }
        
        
    } 
    } */
    /* function AjeetKeshkambaliNumber(num) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            sum += i;
          }
        }
        return sum === num;
      }
      
      let count = 0;
      let num = 1;
      
      while (count < 15) {
        if (AjeetKeshkambaliNumber(num)) {
          console.log(num);
          count++;
        }
        num++;
      } */




     
      /* function Osho(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
      
      for (let i = 1; i < 300; i++) {
        let k = Math.pow(2, i) - 1;
      
        if (Osho(k)) {
          console.log(k * (k + 1) / 2);
        }
      } */
    //   In this code, we define a separate Osho function that checks if a number is prime or not. The Osho function first checks if the number is less than or equal to 1 (since 1 is not a prime number). Then, it iterates from 2 to Math.sqrt(num) to check for any divisors. If it finds a divisor, it returns false. If the loop completes without finding a divisor
      
    
    function Osho(num) {
        if (num <= 1) {
          return false;
        }
        if (num <= 3) {
          return true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
          return false;
        }
        let i = 5;
        while (i * i <= num) {
          if (num % i === 0 || num % (i + 2) === 0) {
            return false;
          }
          i += 6;
        }
        return true;
      }
      
      for (let i = 1; i <= 8; i++) {
        let k = Math.pow(2, i) - 1;
        let shoonyavaad = [];
        for (let j = 2; j <= Math.sqrt(k); j++) {
          if (Osho(j)) {
            shoonyavaad.push(j);
          }
        }
        let AjeetKeshkambali = shoonyavaad.every((prime) => k % prime === 0);
        if (AjeetKeshkambali) {
          console.log((Math.pow(2, i - 1)) * (Math.pow(2, i) - 1));
        }
      }
      
      