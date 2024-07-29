package app;

import java.util.Scanner;

import static java.lang.Math.pow;

// Calculate Body Mass Index
public class CalculateBMI {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite seu peso (kg): ");
        double weight = scan.nextFloat();

        System.out.println("Digite sua altura (m): ");
        double height = scan.nextFloat();

        System.out.println("Seu IMC é: ");
        double IMC = weight / pow(height, 2);
        System.out.println(IMC);
    }
}
