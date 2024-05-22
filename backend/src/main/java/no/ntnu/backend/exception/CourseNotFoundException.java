package no.ntnu.backend.exception;

public class CourseNotFoundException extends RuntimeException{
    public CourseNotFoundException(Integer id){
        super("Could not found the user with id "+ id);
    }

}
