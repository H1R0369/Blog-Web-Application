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
                                    href="./edit-blog.html"
                                    class="edit-link nav-link"
                                    data-blog-id="${currentBlog.id}"
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
const goBackLink = document.querySelector('.go-back-link');

goBackLink.addEventListener('click', () =>  {

    removeCurrentBlog()

});

const deleteLink = document.querySelector('.delete-link');

deleteLink.addEventListener('click', () => {

    const blogId = deleteLink.dataset.blogId;
    deleteBlog(blogId);
    removeCurrentBlog()

});

const editLink = document.querySelector('.edit-link');

    editLink.addEventListener('click', () => {
    const blogId = link.dataset.blogId;
    console.log('edit')

})