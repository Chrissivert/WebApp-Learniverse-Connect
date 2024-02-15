package no.ntnu.webapp.group01;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * The code Girts did in class, or at least what i managed to write down.
 */
public class App {
  private Connection connection;
  private final String url = ""; //Enter the URL for the DB here!

  private void run() {

  }

  private boolean isConnectionOk() {
    return connection != null;
  }

  private void readData() {
    String query = """
        ENTER SQL QUERY HERE!
        """;

    try {
      PreparedStatement statement = connection.prepareStatement(query);
      ResultSet rs = statement.executeQuery();
      System.out.println("Books: ");
      while (rs.next()) {
        int id = rs.getInt("id");
        String title = rs.getString("title");
        System.out.println("> " + id + " : " + title);
      }
    } catch (SQLException sqle) {
      System.err.println("Error while running query: " + sqle.getMessage());
    }
  }

  private void openConnectionTool() {

    try {
      this.connection = DriverManager.getConnection(this.url); 
      System.out.println("Connection to DB established");
    } catch (SQLException sqle) {
      System.err.println("Could not connect to DB: " + sqle.getMessage());
    }
  }
}
