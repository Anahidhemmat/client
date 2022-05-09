import CourseList from "./CourseList";
import coursesData from "./data";

export default function CoursePage() {
  return (
    <>
      <h1>Course Page</h1>
      <CourseList courseData={coursesData} />
    </>
  );
}
