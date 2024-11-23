import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
    @Get(':number')
    fibonacciNum(@Param('number') number:any){
        let num1 = 0;
        let num2 = 1;
        let fibonacciSequence = [num1, num2]; 

        for (let i = 2; i < number; i++) {
            let nextNum = num1 + num2;
            fibonacciSequence.push(nextNum);
            num1 = num2;
            num2 = nextNum;
        }
        
        return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"sequence":[' +  fibonacciSequence  +"]<br>}</p>";
    }
}
