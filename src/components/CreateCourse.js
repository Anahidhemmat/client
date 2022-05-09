import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function CreateCourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    authorId: "",
    slog: "",
    category: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(courseData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">course title:</label>
          <input
            type="text"
            name="title"
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="authorId">course title:</label>
          <input
            type="text"
            name="authorId"
            onChange={(e) =>
              setCourseData({ ...courseData, authorId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="title">course slug:</label>
          <input
            type="text"
            name="slug"
            onChange={(e) =>
              setCourseData({ ...courseData, slug: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="category">course slug:</label>
          <input
            type="text"
            name="category"
            onChange={(e) =>
              setCourseData({ ...courseData, category: e.target.value })
            }
          />
        </div>
        <Button variant="danger" type="submit">
          submit
        </Button>
      </form>
    </>
  );
}
