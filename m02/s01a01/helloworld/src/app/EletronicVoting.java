package app;

import java.util.Scanner;

public class EletronicVoting {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String vote = "";
        int[] voteCount = new int[7];
        System.out.println("Número - Nome");
        System.out.println("1 - Zezinho");
        System.out.println("2 - Lunguinho");
        System.out.println("3 - Luizinho");
        System.out.println("4 - Fernanda");
        System.out.println("5 - Tio Patinhas");
        System.out.println("6 - Pato Donaldo");

        while(!vote.equalsIgnoreCase("shut down")) {
            System.out.print("Digite o número ou o nome do candidato para votar ('shut down' para sair): ");
            vote = scan.nextLine();

            switch (vote){
                case "1":
                case "Zezinho":
                    voteCount[0]++;
                    System.out.println("Voto para o Zezinho contabilizado");
                    break;
                case "2":
                case "Lunguinho":
                    voteCount[1]++;
                    System.out.println("Voto para o Lunguinho contabilizado");
                    break;
                case "3":
                case "Luizinho":
                    voteCount[2]++;
                    System.out.println("Voto para o Luizinho contabilizado");
                    break;
                case "4":
                case "Fernanda":
                    voteCount[3]++;
                    System.out.println("Voto para o Fernanda contabilizado");
                    break;
                case "5":
                case "Tio Patinhas":
                    voteCount[4]++;
                    System.out.println("Voto para o Tio Patinhas contabilizado");
                    break;
                case "6":
                case "Pato Donaldo":
                    voteCount[5]++;
                    System.out.println("Voto para o Pato Donaldo contabilizado");
                    break;
                case "shut down":
                    break;
                default:
                    voteCount[6]++;
                    System.out.println("Voto nulo contabilizado!");
                    break;
            }

        }
        int size = voteCount.length;
        int totalCount = 0;
        System.out.println("\nContagem dos votos: ");
        for (int j : voteCount) {
            totalCount += j;
        }
        float percentage;
        for(int i = 0; i < size - 1; i++){
            percentage = ((float) voteCount[i] / totalCount)*100;
            System.out.printf("Candidato %d: %d votos (%.2f %%)\n", i+1, voteCount[i], percentage);
        }
        System.out.printf("Nulos: %d votos (%.2f %%)\n", voteCount[6], ((float) voteCount[6] / totalCount) * 100);
    }
}
