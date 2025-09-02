import { blogs, addBlog, deleteBlog, removeCurrentBlog, currentBlog } from "../data/blogs.js";

const mainContainerElement = document.querySelector('.main-container')

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
                                    data-blog-id="${currentBlog.id}"
                                >
                                    Delete
                                </a>
                            </li>

                            <!-- Navlink -->
                            <li>
                                <a 
                                    href="./index.html"
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

const deleteLinks = document.querySelectorAll('.delete-link');

deleteLinks.forEach(link => {

    const blogId = link.dataset.blogId;

    link.addEventListener('click', () => {

        deleteBlog(blogId);
        removeCurrentBlog()
    })

})

const goBackLinks = document.querySelectorAll('.go-back-link');

goBackLinks.forEach(link => {

    link.addEventListener('click', () =>  {
        removeCurrentBlog()
    })

})