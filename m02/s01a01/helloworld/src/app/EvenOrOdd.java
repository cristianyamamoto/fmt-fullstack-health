package app;

import java.util.Scanner;

// Return if an Integer is even or odd
public class EvenOrOdd {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite um número inteiro: ");
        int number = scan.nextInt();

        if (number % 2 == 0) {
            System.out.println("Par");
        } else {
            System.out.println("Ímpar");
        }

    }
}
