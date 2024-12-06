import { Controller, Get, Param } from '@nestjs/common';

@Controller('prime/factorial')
export class FactorialController {
  @Get(':number')
  calculateFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10);

    if (isNaN(num) || num < 0) {
      return 'Please provide a non-negative integer.';
    }

    return { factorial: this.factorial(num) };
  }

  private factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}