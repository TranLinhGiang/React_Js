import { NavLink, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as BlogService from "../BlogService/BlogService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BlogList() {
  const [blogList, setBlogList] = useState([]); // hiển thị

  const [show, setShow] = useState(false); // modal xóa

  const [blogDelete, setBlogdelete] = useState(null); // modal xóa

  const [searchValue, setSearchValue] = useState(""); // hỗ trợ tìm kiếm
  const [filteredBlogList, setFilteredBlogList] = useState(blogList); // hỗ trợ tìm kiếm

  const handleSearch = () => {
    // hỗ trợ tìm kiếm
    const newFilteredList = blogList.filter(
      (item) =>
        item.blogName &&
        item.blogName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredBlogList(newFilteredList);
  };

  const handleClose = () => setShow(false); // modal xóa
  const handleShow = async (blog) => {
    await setBlogdelete(blog);
    setShow(true);
  };
  const handleDelete = async () => {
    // modal xóa
    try {
      await BlogService.deleteBlog(blogDelete);
      const updateList = await BlogService.getAllBlog();
      setBlogList(updateList);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const getAll = async () => {
    try {
      const res = await BlogService.getAllBlog();
      setBlogList(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchValue, blogList]);

  return (
    <>
      <NavLink to={"/"}>Home / </NavLink>
      <NavLink to={"/list"}>List / </NavLink>
      <NavLink to={"/create"}>Create / </NavLink>
      <h1>Danh sách bài đăng</h1>
      <span className="input-search">
        <input
          type="text"
          placeholder="Search by title"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </span>
      <table className={"table"}>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên bài đăng</th>
            <th>Tên người đăng</th>
            <th>Loại bài đăng</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {filteredBlogList.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.blogName}</td>
              <td>{item.poster}</td>
              <td>{item.category}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <button>Chỉnh sửa</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleShow(item)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{blogDelete &&
            `Bạn chắc chắn muốn xóa ${blogDelete.blogName}`}{" "} </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            Close
          </Button>
          <Button variant="" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlogList;
