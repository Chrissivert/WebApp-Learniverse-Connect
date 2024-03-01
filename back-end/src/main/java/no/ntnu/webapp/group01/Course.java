package no.ntnu.webapp.group01;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {

    @Id
    private int id;
    private String title;


     public Course(int id, String title){
        this.title = title;
        this.id = id;
     }


    public int getId() {
        return this.id;
      }
      
      public void setId(int id) {
        this.id = id;
      }
}
