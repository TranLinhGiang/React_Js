import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import * as BlogService from "../BlogService/BlogService";
import { toast } from "react-toastify";

function EditBlog() {
  const [editBlog, setEditBlog] = useState();
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const updateBlog = async () => {
      const edit = await BlogService.getEditBlog(id);
      setEditBlog(edit);
    };
    updateBlog();
  }, [id]);
  if (!editBlog) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <NavLink to={"/list"}>Trở về</NavLink>
      <h1>Trang edit</h1>
      <Formik
        initialValues={{
          id: editBlog.id,
          blogName: editBlog.blogName,
          poster: editBlog.poster,
          category: editBlog.category,
        }}
        onSubmit={(value) => {
          const edit = async (blog) => {
            await BlogService.updateBlog(blog);
            toast.success("chỉnh sửa thành công !");
            navigate("/list");
          };
          edit(value);
        }}
      >
        <Form>
          <label>Tên bài đăng </label>
          <Field name={"blogName"}></Field>
          <br />
          <label>tên người đăng </label>
          <Field name={"poster"}></Field>
          <br />
          <label>Loại bài viết </label>
          <Field as="select" name="category">
            <option value="Xàm xí">Xàm xí</option>
            <option value="Lãng mạn">Lãng mạn</option>
            <option value="Tình yêu">Tình yêu</option>
          </Field>
          <br />
          <br />
          <button>Sửa</button>
        </Form>
      </Formik>
    </>
  );
}
export default EditBlog;
