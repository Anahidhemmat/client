import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";

export default function ManageCoursePage() {
  const params = useParams();
  const location = useLocation();

  const { title, authorId, slug, category } = location.state;
  const [updateCourse, setUpdateCourse] = useState({
    title,
    authorId,
    slug,
    category,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateCourse({
      title: "",
      authorId: "",
      slug: "",
      category: "",
    });
  };

  return (
    <>
      <h1>Manage Course Page</h1>
      <h3>Details for {params.slug} course</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            name="title"
            value={updateCourse.title}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="authorId"></label>
          <input
            type="text"
            name="authorId"
            value={updateCourse.authorId}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, authorId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="slug"></label>
          <input
            type="text"
            name="slug"
            value={updateCourse.slug}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, slug: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="category"></label>
          <input
            type="text"
            name="category"
            value={updateCourse.category}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, category: e.target.value })
            }
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
