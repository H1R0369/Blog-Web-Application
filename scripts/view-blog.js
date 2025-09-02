import { blogs, addBlog, currentBlog } from "../data/blogs.js";

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

document.querySelector('.edit-link').addEventListener('click', () => {

    const blogTitleElement = document.querySelector('.blog-title-input');
    const blogContentElement = document.querySelector('.blog-content-textarea');

    addBlog(blogTitleElement, blogContentElement);
})