package no.ntnu.webapp.group01;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConnectToDatabase {

    private static final String URL = "jdbc:mysql://localhost:3306/group1database";
    private static final String USERNAME = "user1";
    private static final String PASSWORD = "password1";

    public static void main(String[] args) {
        Connection connection = null;

        try {
            // Load the JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

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
        String query = "SELECT Title FROM Courses";

        try (PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {

            System.out.println("Data from MySQL database:");
            while (resultSet.next()) {
                System.out.println(resultSet.getString("Title"));
                // Process each row of the result set
            }
        } catch (SQLException sqle) {
            System.err.println("Error while reading data: " + sqle.getMessage());
        }
    }
}
