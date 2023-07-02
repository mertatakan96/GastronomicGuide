import java.util.Random;

public class Main {
    private static final int[][] DIRECTIONS = {{0, -1}, {0, 1}, {-1, 0}, {1, 0}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
    private static final String[] DIRECTIONS_NAMES = {"left", "right", "up", "down", "upleft", "upright", "downleft", "downright"};
    private static int[][] matrix = new int[8][8];
    private static int[] directionCounts = new int[8];
    private static int i, j, unsuccessfulMoves = 0, totalMoves = 0;

    public static void main(String[] args) {
        Random random = new Random();
        i = random.nextInt(8);
        j = random.nextInt(8);

        while (!allVisited()) {
            int direction = random.nextInt(8);
            int newI = i + DIRECTIONS[direction][0];
            int newJ = j + DIRECTIONS[direction][1];
            if (newI >= 0 && newI < 8 && newJ >= 0 && newJ < 8) {
                i = newI;
                j = newJ;
                matrix[i][j]++;
                directionCounts[direction]++;
            } else {
                unsuccessfulMoves++;
            }
            totalMoves++;
        }

        printResults();
    }

    private static boolean allVisited() {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    private static void printResults() {
        System.out.println("Final Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.printf("%3d ", matrix[i][j]);
            }
            System.out.println();
        }

        for (int i = 0; i < DIRECTIONS_NAMES.length; i++)
            System.out.printf("Probability of moving %s: %.2f%%\n", DIRECTIONS_NAMES[i], 100.0 * directionCounts[i] / totalMoves);
        System.out.printf("Probability reaching the border: %.2f%%\n", 100.0 * unsuccessfulMoves / totalMoves);
    }
}
