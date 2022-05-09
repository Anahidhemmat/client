import CourseList from "./CourseList";
import coursesData from "./data";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CoursePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Course Page</h1>
      <Button variant="danger" onClick={() => navigate("/course-create")}>
        Create Course
      </Button>
      <CourseList courseData={coursesData} />
    </>
  );
}
