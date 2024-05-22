package no.ntnu.backend.model;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

@Entity
public class CourseTags {
    @EmbeddedId
    private CourseTagsId id;

    public CourseTags() {
    }

    public CourseTags(int courseId, int tagId) {
        this.id = new CourseTagsId(courseId, tagId);
    }

    public CourseTagsId getId() {
        return id;
    }

    public void setId(CourseTagsId id) {
        this.id = id;
    }

    public int getCourseId() {
        return id.getCourse_id();
    }

    public void setCourseId(int courseId) {
        id.setCourse_id(courseId);
    }

    public int getTagId() {
        return id.getTag_id();
    }

    public void setTagId(int tagId) {
        id.setTag_id(tagId);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        CourseTags that = (CourseTags) obj;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "CourseTags[" +
                "courseId=" + id.getCourse_id() + ", " +
                "tagId=" + id.getTag_id() + "]";
    }
}

@Embeddable
class CourseTagsId implements Serializable {
    private int course_id;
    private int tag_id;

    public CourseTagsId() {
    }

    public CourseTagsId(int courseId, int tagId) {
        this.course_id = courseId;
        this.tag_id = tagId;
    }

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int courseId) {
        this.course_id = courseId;
    }

    public int getTag_id() {
        return tag_id;
    }

    public void setTag_id(int tagId) {
        this.tag_id = tagId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CourseTagsId that = (CourseTagsId) o;
        return course_id == that.course_id &&
               tag_id == that.tag_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(course_id, tag_id);
    }
}