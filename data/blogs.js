import { UUID } from "https://unpkg.com/uuidjs@^5";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export let blogs = JSON.parse(localStorage.getItem('blogs'));


if (!blogs) blogs = [];


export function saveStorage() {

    localStorage.setItem('blogs', JSON.stringify(blogs));

};


export function addBlog(blogTitleElement, blogContentElement) {

    const today = dayjs();
    const randomId = UUID.generate();

    const blog = {

        title: blogTitleElement.value,
        content: blogContentElement.value,
        id: randomId,
        dateCreated: today.format('DD.MM.YY'),
        timeCreated: today.format('HH:mm A'),
        lastModifiedDate: '--',
        lastModifiedTime: '--'

    };

    if (blog.title != '') {

        if (blog.content === '') {

            blog.content = 'No Text'
            
        }

        blogs.unshift(blog);
        saveStorage()

    }

};


export function deleteBlog(blogId) {

    blogs = blogs.filter(blog => blog.id != blogId);
    saveStorage()

};


export function addEditedBlog(blogId, blogTitleElement, blogContentElement) {

    const today = dayjs();
    const oldBlog = blogs.find(blog => blog.id === blogId);
    const newBlog = {

        title: blogTitleElement.value,
        content: blogContentElement.value,
        id: blogId,
        dateCreated: oldBlog.dateCreated,
        timeCreated: oldBlog.timeCreated,
        lastModifiedDate: today.format('DD.MM.YY'),
        lastModifiedTime: today.format('HH:mm A')


    };

    function replaceBlog() {

        blogs.splice(blogs.indexOf(oldBlog), 1);
        blogs.unshift(newBlog);

    };

    if (newBlog.title != oldBlog.title || newBlog.content != oldBlog.content) {

        if (newBlog.title === '') {
            newBlog.title = 'No Title'    
        };

        if (newBlog.content === '') {
            newBlog.content = 'No Text'
        };

        replaceBlog();
        saveStorage()

    }

};