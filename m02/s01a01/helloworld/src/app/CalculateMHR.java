package app;

import java.util.Objects;
import java.util.Scanner;

// Calculate Max Heart Rate
public class CalculateMHR {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite sua idade: ");
        int age = scan.nextInt();

        System.out.println("H - para homem ou M - para mulher");
        String genre = scan.next();

        if(Objects.equals(genre, "H")){
            System.out.println("Máxima frequência cardíaca (homens): ");
            System.out.println(220 - age);
        } else if (Objects.equals(genre, "M")) {
            System.out.println("Máxima frequência cardíaca (mulheres): ");
            System.out.println(226 - age);
        } else {
            System.out.println("Máxima frequência cardíaca (homens): ");
            System.out.println(220 - age);
            System.out.println("Máxima frequência cardíaca (mulheres): ");
            System.out.println(226 - age);
        }
    }
}
