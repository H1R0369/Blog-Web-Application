import { blogs, addBlog, deleteBlog } from "../data/blogs.js";

const mainContainerElement = document.querySelector('.main-container');
const currentBlog = findCurrentBlog();

mainContainerElement.innerHTML = `

        <!-- ========== HEADER ========== -->
        <header>
            
            <!-- Blog Title Heading Container -->
            <div
                class="blog-title-heading-container"
            >
                <!-- Blog Title Heading -->
                <h5
                    class="blog-title-heading"
                >
                ${currentBlog.title}
                </h5>

            </div>

            <!-- Navigation -->
            <nav
                class="navbar"
            >
                <!-- Navlinks -->
                <ul
                    class="nav-links-container"
                >

                    <!-- Navlink -->
                    <li>
                        <a 
                            href="./index.html"
                            class="go-back-link nav-link"
                        >
                            Go Back
                        </a>
                    </li>
                    
                    <!-- Edit & Delete Links -->
                    <li>
                        <ul
                            class="edit-delete-links-container"
                        >

                            <!-- Navlink -->
                            <li>
                                <a 
                                    href="./index.html"
                                    class="delete-link nav-link"
                                >
                                    Delete
                                </a>
                            </li>

                            <!-- Navlink -->
                            <li>
                                <a 
                                    href="./edit-blog.html?blog-id=${currentBlog.id}"
                                    class="edit-link nav-link"
                                >
                                    Edit
                                </a>
                            </li>

                        </ul>
                    </li>

                </ul>

            </nav>

        </header>

        <!-- ========== MAIN ========== -->
        <main>

            <!-- Blog Content Textarea Container -->
            <div
                class="blog-content-paragraph-container"
            >
                <!-- Blog Content Textarea -->

                <p
                    class="blog-content-paragraph"
                >
                    ${currentBlog.content}
                </p>

            </div>

        </main>

`


function findCurrentBlog() {

    const url = new URL(window.location.href);
    const blogId = url.searchParams.get('blog-id');

    return blogs.find(blog => blog.id === blogId);

}


const deleteLink = document.querySelector('.delete-link');

deleteLink.addEventListener('click', () => {

    deleteBlog(currentBlog.id);

});

console.log(blogs)