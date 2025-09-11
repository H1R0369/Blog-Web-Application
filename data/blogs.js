import { UUID } from "https://unpkg.com/uuidjs@^5";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export let currentBlog = JSON.parse(localStorage.getItem('currentBlog'));
export let blogs = JSON.parse(localStorage.getItem('blogs'));


if (!blogs) blogs = [];


export function saveStorage() {

    localStorage.setItem('blogs', JSON.stringify(blogs));
    localStorage.setItem('currentBlog', JSON.stringify(currentBlog));

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

        blogs.push(blog);
        saveStorage()

    }

};


export function deleteBlog(blogId) {

    blogs = blogs.filter(blog => blog.id != blogId);
    saveStorage()

};


export function addEditedBlog(blogTitleElement, blogContentElement) {

    const today = dayjs();
    const oldBlog = blogs.find(blog => blog.id === currentBlog.id);
    const newBlog = {

        title: blogTitleElement.value,
        content: blogContentElement.value,
        id: currentBlog.id,
        dateCreated: currentBlog.dateCreated,
        timeCreated: currentBlog.timeCreated,
        lastModifiedDate: today.format('DD.MM.YY'),
        lastModifiedTime: today.format('HH:mm A')


    };

    function replaceBlog() {

        blogs.splice(blogs.indexOf(oldBlog), 1);
        blogs.push(newBlog);
        currentBlog = newBlog;

    };

    if (newBlog.title != currentBlog.title || newBlog.content != currentBlog.content) {

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


export function setCurrentBlog(blogId) {

    currentBlog = blogs.find(blog => blog.id === blogId);
    saveStorage()
    
};


export function removeCurrentBlog() {

    currentBlog = null;
    saveStorage();

}