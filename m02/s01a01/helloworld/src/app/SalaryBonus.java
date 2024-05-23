package app;

import java.util.Scanner;

public class SalaryBonus {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite seu salário: ");
        double salary = scan.nextDouble();

        System.out.println("Digite seu tempo de serviço em anos: ");
        int serviceTime = scan.nextInt();

        System.out.printf("Salário original: R$ %.2f", salary);
        System.out.println();
        double bonus;
        if(serviceTime > 5){
            bonus = 0.1;
            System.out.printf("Salário com bônus: R$ %.2f", salary*(1+bonus));
        } else {
            bonus = 0.05;
            System.out.printf("Salário com bônus: R$ %.2f", salary*(1+bonus));
        }


    }
}
