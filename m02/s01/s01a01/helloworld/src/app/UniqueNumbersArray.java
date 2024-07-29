package app;

import java.util.Arrays;
import java.util.Objects;
import java.util.Scanner;

public class UniqueNumbersArray {

    public static void main(String[] args) {
        Number[] numbers = new Number[10];

        for (int i = 0; i < 10; i++){
            Scanner scan = new Scanner(System.in);

            System.out.print("Digite um número: ");
            Number number = scan.nextDouble();

            boolean alreadyAdded = false;
            for (Number n : numbers){
                if (Objects.equals(n, number)) {
                    alreadyAdded = true;
                    break;
                }
            }

            if (!alreadyAdded) {
                numbers[i] = number;
                System.out.print("Número adicionado\n");
                System.out.printf("Lista atual: %s\n\n", Arrays.toString(numbers));
            } else {
                System.out.print("Número já foi adicionado, digite outro!\n\n");
                i--;
            }

        }
    }
}
