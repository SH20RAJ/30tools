'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BasicCalculatorTool() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputNumber = (num) => {
        if (waitingForOperand) {
            setDisplay(String(num));
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const clear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const calculate = (firstValue, secondValue, operation) => {
        switch (operation) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '×':
                return firstValue * secondValue;
            case '÷':
                return firstValue / secondValue;
            case '=':
                return secondValue;
            default:
                return secondValue;
        }
    };

    const handleEquals = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
            const newValue = calculate(previousValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForOperand(true);
        }
    };

    const handlePercentage = () => {
        const value = parseFloat(display);
        setDisplay(String(value / 100));
    };

    const handleSquareRoot = () => {
        const value = parseFloat(display);
        setDisplay(String(Math.sqrt(value)));
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Basic Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Display */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="text-right text-2xl font-mono font-bold text-gray-800 min-h-[2rem] overflow-hidden">
                        {display}
                    </div>
                </div>

                {/* Calculator Buttons */}
                <div className="grid grid-cols-4 gap-2">
                    {/* Row 1 */}
                    <Button variant="outline" onClick={clear} className="h-12 text-red-600">
                        AC
                    </Button>
                    <Button variant="outline" onClick={handlePercentage} className="h-12">
                        %
                    </Button>
                    <Button variant="outline" onClick={handleSquareRoot} className="h-12">
                        √
                    </Button>
                    <Button variant="outline" onClick={() => performOperation('÷')} className="h-12 bg-blue-50">
                        ÷
                    </Button>

                    {/* Row 2 */}
                    <Button variant="outline" onClick={() => inputNumber(7)} className="h-12">
                        7
                    </Button>
                    <Button variant="outline" onClick={() => inputNumber(8)} className="h-12">
                        8
                    </Button>
                    <Button variant="outline" onClick={() => inputNumber(9)} className="h-12">
                        9
                    </Button>
                    <Button variant="outline" onClick={() => performOperation('×')} className="h-12 bg-blue-50">
                        ×
                    </Button>

                    {/* Row 3 */}
                    <Button variant="outline" onClick={() => inputNumber(4)} className="h-12">
                        4
                    </Button>
                    <Button variant="outline" onClick={() => inputNumber(5)} className="h-12">
                        5
                    </Button>
                    <Button variant="outline" onClick={() => inputNumber(6)} className="h-12">
                        6
                    </Button>
                    <Button variant="outline" onClick={() => performOperation('-')} className="h-12 bg-blue-50">
                        -
                    </Button>

                    {/* Row 4 */}
                    <Button variant="outline" onClick={() => inputNumber(1)} className="h-12">
                        1
                    </Button>
                    <Button variant="outline" onClick={() => inputNumber(2)} className="h-12">
                        2
                    </Button>
                    <Button variant="outline" onClick={() => inputNumber(3)} className="h-12">
                        3
                    </Button>
                    <Button variant="outline" onClick={() => performOperation('+')} className="h-12 bg-blue-50">
                        +
                    </Button>

                    {/* Row 5 */}
                    <Button variant="outline" onClick={() => inputNumber(0)} className="h-12 col-span-2">
                        0
                    </Button>
                    <Button variant="outline" onClick={inputDecimal} className="h-12">
                        .
                    </Button>
                    <Button onClick={handleEquals} className="h-12 bg-blue-600 hover:bg-blue-700 text-white">
                        =
                    </Button>
                </div>

                {/* Instructions */}
                <div className="text-center text-sm text-muted-foreground">
                    <p>Click buttons or use your keyboard for calculations</p>
                </div>
            </CardContent>
        </Card>
    );
}