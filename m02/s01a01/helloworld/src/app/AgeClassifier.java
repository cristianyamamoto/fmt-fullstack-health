package app;

import java.util.Scanner;

// Classify a person according to their age
public class AgeClassifier {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite a idade: ");
        int age = scan.nextInt();

        if (age >= 0 && age <= 12){
            System.out.println("Criança");
        } else if (age > 12 && age <= 19){
            System.out.println("Adolescente");
        } else {
            System.out.println("Adulto");
        }

    }
}
