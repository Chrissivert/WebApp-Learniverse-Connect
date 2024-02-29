package no.ntnu.webapp.group01;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class App {

    private static final String URL = "jdbc:postgresql://localhost:5432/group1database";
    private static final String USERNAME = "user1";
    private static final String PASSWORD = "password1";

    public static void main(String[] args) {
        Connection connection = null;

        try {
            // Load the JDBC driver
            Class.forName("org.postgresql.Driver");

            // Establish connection
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            System.out.println("Connection to database established");

            // Read data
            readData(connection);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // Close connection
            try {
                if (connection != null) {
                    connection.close();
                    System.out.println("Connection to database closed");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    private static void readData(Connection connection) {
        String query = "SELECT Title, CoveredTopics FROM Courses";

        try (PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {

            System.out.println("Coursess: ");
            while (resultSet.next()) {
                String title = resultSet.getString("Title");
                String coveredTopics = resultSet.getString("CoveredTopics");
                System.out.println("> Title: " + title + ", Covered Topics: " + coveredTopics);
            }
        } catch (SQLException sqle) {
            System.err.println("Error while reading data: " + sqle.getMessage());
        }
    }
}
