import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseList = ({ courseData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Slag</th>
        </tr>
      </thead>
      <tbody>
        {courseData?.map((course) => {
          const { id, title, authorId, category, slug } = course;
          return (
            <tr key={id}>
              <td>
                <Link to={`/course/${slug}`} state={course}>
                  {title}
                </Link>
              </td>
              <td>{title}</td>
              <td>{authorId}</td>
              <td>{category}</td>
              <td>{slug}</td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CourseList;
