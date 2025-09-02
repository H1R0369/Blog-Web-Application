import { blogs } from "../data/blogs.js";
import { UUID } from "https://unpkg.com/uuidjs@^5";

document.querySelector('.save-link').addEventListener('click', () => {

    const randomId = UUID.generate();
    const blogTitle = document.querySelector('.blog-title-input');
    const blogContent = document.querySelector('.blog-content-textarea');
    
    const blog = {
        title: blogTitle,
        content: blogContent
    }

    blogTitle.placeholder = randomId;

})
