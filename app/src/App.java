
import java.util.Scanner;


public class App {
    public static void main(String[] args) 
     {
        Scanner scan= new Scanner(System.in);

        System.out.println("Digite seu numero : "); 
        int numero = scan.nextInt();
        System.out.println("O numero digitado foi: " + numero);

        System.out.println("Digite seu  segundo numero : "); 
        int numero2 = scan.nextInt();
        System.out.println("O numero digitado foi: " + numero2);
        int soma = numero + numero2;
        System.out.println("A soma dos dois numeros é: " + soma);
    }
}
    

