import { UUID } from "https://unpkg.com/uuidjs@^5";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export let currentBlog = JSON.parse(localStorage.getItem('currentBlog'))
export let blogs = JSON.parse(localStorage.getItem('blogs'));

if (!blogs) {
    blogs = []
}

export function saveStorage() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
    localStorage.setItem('currentBlog', JSON.stringify(currentBlog));
}

export function addBlog(blogTitleElement, blogContentElement) {

    const today = dayjs();
    const randomId = UUID.generate();

    const blog = {
        title: blogTitleElement.value,
        content: blogContentElement.value,
        id: randomId,
        dateCreated: today.format('DD.MM.YY'),
        lastModifiedDate: '--',
        lastModifiedTime: '--'
    }

    blogs.push(blog);
    saveStorage();
}

export function setCurrentBlog(blogId) {
    // const blog = blogs.find(blog => blog.id === blogId);
    currentBlog = blogs.find(blog => blog.id === blogId);
    saveStorage();
}