package Fibonacci;

public class Fibonacci {

    public static int fibonacci(int n)  {
        int fibValue;
        if (n < 2){
            fibValue = n;
            System.out.printf("Fibonacci(%d)=%d\n", n, n);
            return fibValue;
        }
        fibValue = fibonacci(n - 1) + fibonacci(n - 2);
        System.out.printf("\nFibonacci(%d)=", n);
        System.out.printf("(Fibonacci(%d)+Fibonacci(%d))=%d\n", n - 1, n - 2, fibValue);
        return fibValue;
    }

}
