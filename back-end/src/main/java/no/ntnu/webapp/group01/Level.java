package no.ntnu.webapp.group01;

public enum Level {
  BEGINNER("Beginner"),
  INTERMEDIATE("Intermediate"),
  EXPERT("Expert");

  private String level;

  private Level(String level) {
    this.level = level;
  }
}