import { blogs, addBlog } from "../data/blogs.js";

document.querySelector('.save-link').addEventListener('click', () => {

    const blogTitleElement = document.querySelector('.blog-title-input');
    const blogContentElement = document.querySelector('.blog-content-textarea');

    addBlog(blogTitleElement, blogContentElement);
})
