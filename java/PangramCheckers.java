package java;
public class PangramCheckers {
    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26];
        sentence = sentence.toLowerCase();

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                alphabet[ch - 'a'] = true;
            }
        }
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false; 
            }
        }

        return true; 
    }

    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(sentence);
        System.out.println("Is it a pangram? " + isPangram);
    }
}
