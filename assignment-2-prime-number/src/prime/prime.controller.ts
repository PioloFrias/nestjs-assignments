import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignment-2-prime-number/prime')
export class PrimeController {
    @Get(':number')
    getPrimes(@Param('number') number: string) {
      const num = parseInt(number, 10);

      if (isNaN(num) || num < 2) {
        return 'Not Prime';
      }
  
      if (this.isPrime(num)) {
        return 'Prime';
      } else {
        return 'Not Prime';
      }
    }
  
    private isPrime(n: number): boolean {
      for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
  }
}