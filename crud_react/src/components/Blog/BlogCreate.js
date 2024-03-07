import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {Field, Form, Formik} from 'formik';
import * as BlogService from "../BlogService/BlogService"
import {toast} from 'react-toastify';
import {useNavigate} from "react-router";


function CreateBlog() {
    const navigate = useNavigate()

    const create = async (blog) => {
        try {
            await BlogService.createBlog(blog);
            toast("Them moi thanh cong !")
            navigate("/list")
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <NavLink to={"/"}>Home / </NavLink>
            <NavLink to={"/list"}>List / </NavLink>
            <NavLink to={"/create"}>Create / </NavLink>

            <h1>Trang thêm mới</h1>
            <Formik initialValues={{
                blogName: "",
                poster: "",
                category: ""
            }}

                    onSubmit={values => {
                        create(values);
                    }}>
                <Form>
                    <label>Tên bài đăng</label>
                    <Field name={"blogName"}></Field><br/>
                    <label>Tên người đăng</label>
                    <Field name={"poster"}></Field><br/>
                    <label>Loại bài đăng</label>
                    <Field as="select" name="category">
                        <option value="">---- Vui lòng chọn loại bài đăng ----</option>
                        <option value="Lãng mạn">Lãng mạn</option>
                        <option value="Tình yêu">Tình yêu</option>
                        <option value="Xàm xí">Xàm xí</option>
                    </Field><br/>
                    <button>Thêm</button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateBlog;