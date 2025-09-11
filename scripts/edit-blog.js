import { blogs, addEditedBlog, deleteBlog } from "../data/blogs.js";

const mainContainer = document.querySelector('.main-container');
const currentBlog = findCurrentBlog();

mainContainer.innerHTML = `

    <!-- ========== HEADER ========== -->
    <header>
        
        <!-- Edit Your Blog Header Container -->
        <div
            class="edit-your-blog-heading-container"
        >
            <!-- Edit Your Blog Header -->
            <h5
                class="edit-your-blog-heading"
            >
            Edit Your Blog
            </h5>

        </div>

        <!-- Blog Title Input Container -->
        <div
            class="blog-title-input-container"
        >
            <!-- Blog Title Input -->
            <input 
                type="text"
                class="blog-title-input"
                placeholder="Enter Title"
                value="${currentBlog.title}"
            >

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
                        href="./view-blog.html"
                        class="cancel-link nav-link"
                    >
                        Cancel
                    </a>
                </li>

                <li>
                    <ul
                        class="delete-save-links-container"
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
                                href="view-blog.html?blog-id=${currentBlog.id}"
                                class="save-link nav-link"
                            >
                                Save

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
            class="blog-content-textarea-container"
        >
            <!-- Blog Content Textarea -->

            <textarea 
                name="blogContent" 
                id="blog-content"
                class="blog-content-textarea"
                placeholder="Write Something..."
                rows="30"
            >${currentBlog.content}</textarea>

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


const saveLink = document.querySelector('.save-link');

saveLink.addEventListener('click', () => {

    const blogTitleElement = document.querySelector('.blog-title-input');
    const blogContentElement = document.querySelector('.blog-content-textarea');

    addEditedBlog(currentBlog.id, blogTitleElement, blogContentElement);

})