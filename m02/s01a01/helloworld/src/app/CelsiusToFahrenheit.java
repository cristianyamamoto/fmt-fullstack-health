package app;

import java.util.Scanner;

// Convert ºC to ºF
public class CelsiusToFahrenheit {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite a temperatura em graus Celsius: ");
        double celsiusTemperature = scan.nextDouble();

        System.out.println("Conversão para Fahrenheit: ");
        System.out.println((celsiusTemperature * 1.8) + 32 + "ºF");
    }

}
