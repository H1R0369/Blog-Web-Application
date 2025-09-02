import { UUID } from "https://unpkg.com/uuidjs@^5";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export let blogs = JSON.parse(localStorage.getItem('blogs'));

if (!blogs) {
    blogs = []
}

export function saveStorage() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
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