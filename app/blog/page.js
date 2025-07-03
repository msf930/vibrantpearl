"use client";

import React from 'react';
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { motion, AnimatePresence } from "motion/react";
import Nav from "@/app/components/Nav/Nav";
import Footer from "@/app/components/Footer/Footer";

export default function Index(){
    const truncate = (text) => {
        const words = text.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + "...";
        }
        return text;
    };

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [featuredPost, setFeaturedPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);

    const POSTS_PER_PAGE = 6;

    // Get featured post (always the most recent)
    const FEATURED_POST_QUERY = `*[_type == "post"]|order(publishedAt desc)[0]{_id, title, slug, publishedAt, mainImage { asset -> { _id, url } }, excerpt}`;

    // Get paginated posts (excluding the featured post)
    const getPostsQuery = (page) => {
        const start = (page - 1) * POSTS_PER_PAGE; // +1 to skip featured post
        const end = start + POSTS_PER_PAGE;
        return `*[_type == "post"]|order(publishedAt desc)[${start}...${end}]{_id, title, slug, publishedAt, mainImage { asset -> { _id, url } }, excerpt}`;
    };

    // Get total count for pagination (excluding featured post)
    const TOTAL_POSTS_QUERY = `count(*[_type == "post"])`;

    // Check if there's a next page
    const getNextPageQuery = (page) => {
        const start = page * POSTS_PER_PAGE + 1;
        const end = start + POSTS_PER_PAGE - 1;
        return `count(*[_type == "post"]|order(publishedAt desc)[${start}...${end}])`;
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                // Fetch featured post (same on every page)
                const featured = await client.fetch(FEATURED_POST_QUERY);
                setFeaturedPost(featured);

                // Fetch paginated posts
                const fetchedPosts = await client.fetch(getPostsQuery(currentPage));
                setPosts(fetchedPosts);

                // Get total count
                const total = await client.fetch(TOTAL_POSTS_QUERY);
                setTotalPosts(total);

                // Check if there's a next page
                const nextPageCount = await client.fetch(getNextPageQuery(currentPage));
                setHasNextPage(nextPageCount > 0);

            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            
            setLoading(false);
        };

        fetchData();
    }, [currentPage]);

    const totalPages = Math.ceil((totalPosts - 1) / POSTS_PER_PAGE); // -1 for featured post

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className={styles.page}>
                <div className={styles.navCont}>
                    <Nav/>
                </div>
                <div className={styles.loadingContainer}>
                    <div className={styles.loadingSpinner}></div>
                    <p>Loading posts...</p>
                </div>
            </div>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeIn", duration: 0.6}}
                exit={{opacity: 0, transition: {duration: 0.4}}}
                className={styles.page}
            >
                <div className={styles.navCont}>
                    <Nav/>
                </div>
                
                <main className={styles.mainContainer}>
                    {/* Featured Post - Shows on every page */}
                    {featuredPost && currentPage === 1 && (
                        <section className={styles.featuredSection}>
                            <div className={styles.featuredContainer}>
                                <div className={styles.featuredImage}>
                                    <Link href={`blog/${featuredPost.slug.current}`}>
                                        <Image
                                            src={featuredPost.mainImage.asset.url}
                                            alt={featuredPost.title}
                                            fill
                                            className={styles.featuredImageContent}
                                            priority
                                        />
                                    </Link>
                                </div>
                                <div className={styles.featuredContent}>
                                    <div className={styles.featuredMeta}>
                                        <span className={styles.featuredLabel}>Featured</span>
                                        <time className={styles.featuredDate}>
                                            {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                            })}
                                        </time>
                                    </div>
                                    <h1 className={styles.featuredTitle}>
                                        <Link href={`blog/${featuredPost.slug.current}`}>
                                            {featuredPost.title}
                                        </Link>
                                    </h1>
                                    <p className={styles.featuredExcerpt}>
                                        {truncate(featuredPost.excerpt)}
                                    </p>
                                    <Link 
                                        href={`blog/${featuredPost.slug.current}`} 
                                        className={styles.featuredReadMore}
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Blog Posts Grid - 6 posts per page */}
                    <section className={styles.postsSection}>
                        <h2 className={styles.sectionTitle}>
                            {posts.length === 0 ? 'Blog' : (currentPage === 1 ? 'Latest Posts' : `More Posts - Page ${currentPage}`)}
                        </h2>
                        <div className={styles.postsGrid}>
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    <article key={post._id} className={styles.postCard}>
                                        <Link href={`blog/${post.slug.current}`} className={styles.postLink}>
                                            <div className={styles.postImage}>
                                                <Image
                                                    src={post.mainImage.asset.url}
                                                    alt={post.title}
                                                    fill
                                                    className={styles.postImageContent}
                                                />
                                            </div>
                                            <div className={styles.postContent}>
                                                <time className={styles.postDate}>
                                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </time>
                                                <h3 className={styles.postTitle}>{post.title}</h3>
                                                <p className={styles.postExcerpt}>
                                                    {truncate(post.excerpt)}
                                                </p>
                                            </div>
                                        </Link>
                                    </article>
                                ))
                            ) : (
                                <div className={styles.noPostsMessage}>
                                    <h3>No posts found</h3>
                                    <p>Check back soon for new content!</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className={styles.pagination}>
                                <div className={styles.paginationInfo}>
                                    Page {currentPage} of {totalPages}
                                </div>
                                <div className={styles.paginationControls}>
                                    {currentPage > 1 && (
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            className={styles.paginationButton}
                                        >
                                            ← Previous
                                        </button>
                                    )}
                                    
                                    <div className={styles.pageNumbers}>
                                        {(() => {
                                            if (currentPage === 1) {
                                                // Show pages 1, 2, 3 (or fewer if total pages < 3)
                                                const pagesToShow = [1, 2, 3].filter(page => page <= totalPages);
                                                return pagesToShow.map((page) => (
                                                    <button
                                                        key={page}
                                                        onClick={() => handlePageChange(page)}
                                                        className={`${styles.pageNumber} ${currentPage === page ? styles.pageNumberActive : ''}`}
                                                    >
                                                        {page}
                                                    </button>
                                                ));
                                            } else if (currentPage === 2) {
                                                // Show pages 1, 2, 3 (or fewer if total pages < 3)
                                                const pagesToShow = [1, 2, 3].filter(page => page <= totalPages);
                                                return pagesToShow.map((page) => (
                                                    <button
                                                        key={page}
                                                        onClick={() => handlePageChange(page)}
                                                        className={`${styles.pageNumber} ${currentPage === page ? styles.pageNumberActive : ''}`}
                                                    >
                                                        {page}
                                                    </button>
                                                ));
                                            } else if (currentPage >= 3) {
                                                // Show page 1, ellipsis, current page, and next page (or previous page if on last page)
                                                const elements = [
                                                    <button
                                                        key={1}
                                                        onClick={() => handlePageChange(1)}
                                                        className={styles.pageNumber}
                                                    >
                                                        1
                                                    </button>,
                                                    <span key="ellipsis" className={styles.ellipsis}>...</span>
                                                ];
                                                
                                                // Add previous page if on the last page
                                                if (currentPage === totalPages && currentPage > 3) {
                                                    elements.push(
                                                        <button
                                                            key={currentPage - 1}
                                                            onClick={() => handlePageChange(currentPage - 1)}
                                                            className={styles.pageNumber}
                                                        >
                                                            {currentPage - 1}
                                                        </button>
                                                    );
                                                }
                                                
                                                // Add current page
                                                elements.push(
                                                    <button
                                                        key={currentPage}
                                                        onClick={() => handlePageChange(currentPage)}
                                                        className={`${styles.pageNumber} ${styles.pageNumberActive}`}
                                                    >
                                                        {currentPage}
                                                    </button>
                                                );
                                                
                                                // Add next page if it exists and not on last page
                                                if (currentPage + 1 <= totalPages) {
                                                    elements.push(
                                                        <button
                                                            key={currentPage + 1}
                                                            onClick={() => handlePageChange(currentPage + 1)}
                                                            className={styles.pageNumber}
                                                        >
                                                            {currentPage + 1}
                                                        </button>
                                                    );
                                                }
                                                
                                                return elements;
                                            }
                                            
                                            return null;
                                        })()}
                                    </div>

                                    {hasNextPage && (
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            className={styles.paginationButton}
                                        >
                                            Next →
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </section>
                </main>
                
                <Footer/>
            </motion.div>
        </AnimatePresence>
    );
}

