import axios from "axios";

export const getAllBlog = async () => {
    try {
        const res = await axios.get("http://localhost:8080/blogList")
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export const createBlog = async (blog) => {
    try {
        const res = await axios.post("http://localhost:8080/blogList", blog)
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
export const getEditBlog = async ({id}) => {
    try {
        const res = await axios.get(`http://localhost:8080/blogList/${id}`)
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
export const updateBlog = async (blog) => {
    try {
        const res = await axios.put(`http://localhost:8080/blogList/${blog.id}`, blog)
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
export const deleteBlog = async (blog) => {
    try {
        const res = await axios.delete(`http://localhost:8080/blogList/${blog.id}`)
        return res.data;
    } catch (e) {
        console.log(e)
    }
}