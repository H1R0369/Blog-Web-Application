import { gsapInit } from "./gsap.js";
import { blogs } from "../data/blogs.js";

let blogsHTML = '';

blogs.forEach(blog => {

    let blogCardsContainer = document.querySelector('.blog-cards-container');

    blogsHTML += `

        <a
            href="view-blog.html?blog-id=${blog.id}"
            class="blog-card-link gsap-pulse-on-hover-blog gsap-scale-on-click-blog"
        >
            <div
                class="blog-card-container"
            >   
                <!-- Blog Title Heading Container -->
                <div
                    class="blog-title-heading-container"
                >

                    <!-- Blog Title Heading -->
                    <h4
                        class="blog-title-heading"
                    >
                        ${blog.title}
                    </h4>

                </div>

                <!-- Blog Content Paragraph Container -->
                <div
                    class="blog-content-paragraph-container"
                >

                    <!-- Blog Content Paragraph -->
                    <p
                        class="blog-content-paragraph"
                    >
                        ${blog.content}
                    </p>

                </div>

                <!-- Blog Date Created Paragraph Container -->
                <div
                    class="blog-date-created-paragraph-container"
                >

                    <!-- Blog Date Created Paragraph -->
                    <p
                        class="blog-date-created-paragraph"
                    >
                        Created: ${blog.dateCreated} at ${blog.timeCreated}
                    </p>

                </div>

                <!-- Blog Last Modified Time Container -->
                <div
                    class="blog-last-modified-time-paragraph-container"
                >

                    <!-- Blog Last Modified Time Paragraph -->
                    <p
                        class="blog-last-modified-time-paragraph"
                    >
                    Last Modified: ${blog.lastModifiedDate} at ${blog.lastModifiedTime}
                    </p>

                </div>

            </div>

        </a>
    `

    blogCardsContainer.innerHTML = blogsHTML;

});

gsapInit()