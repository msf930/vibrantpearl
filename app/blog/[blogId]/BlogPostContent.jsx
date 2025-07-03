"use client";

import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import {PortableText} from "next-sanity";
import {RichTextComponents} from "@/app/components/RichTextComponents";
import Nav from "@/app/components/Nav/Nav";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogPostContent({ post, readingTime }) {
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
                    {/* Hero Section */}
                    <header className={styles.heroSection}>
                        <div className={styles.heroContent}>
                            {post?.categoryTitles && (
                                <div className={styles.categoryTags}>
                                    {/* {post.categoryTitles.map((cat, i) => (
                                        <span 
                                            key={i} 
                                            className={styles.categoryTag}
                                            style={{
                                                backgroundColor: cat?.color?.hex ? `${cat.color.hex}20` : "#f0f0f0",
                                                color: cat?.color?.hex ? cat.color.hex : "#333",
                                                border: `1px solid ${cat?.color?.hex ? `${cat.color.hex}40` : "#ddd"}`
                                            }}
                                        >
                                            {cat.title}
                                        </span>
                                    ))} */}
                                </div>
                            )}
                            
                            {post?.title && (
                                <h1 className={styles.postTitle}>{post.title}</h1>
                            )}
                            
                            <p className={styles.authorByline}>By: Billy Che Quintana</p>
                            
                            {post?.excerpt && (
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                            )}
                            
                            <div className={styles.postMeta}>
                                {post?.publishedAt && (
                                    <time className={styles.publishDate}>
                                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </time>
                                )}
                                <span className={styles.readingTime}>{readingTime}</span>
                            </div>
                        </div>
                        
                        {post?.mainImage?.asset?.url && (
                            <div className={styles.heroImage}>
                                <Image
                                    src={post.mainImage.asset.url}
                                    alt={post.title || "Blog post image"}
                                    fill
                                    className={styles.heroImageContent}
                                    priority
                                />
                            </div>
                        )}
                    </header>

                    {/* Article Content */}
                    <article className={styles.articleContainer}>
                        <div className={styles.articleContent}>
                            {post?.body && (
                                <PortableText 
                                    value={post.body} 
                                    components={RichTextComponents}
                                />
                            )}
                        </div>
                    </article>

                    {/* About the Author Section */}
                    <section className={styles.authorSection}>
                        <div className={styles.authorContainer}>
                            <div className={styles.authorImage}>
                                <Image
                                    src="/BillyHeadshotNew.jpg"
                                    alt="Billy - Author"
                                    width={80}
                                    height={80}
                                    className={styles.authorHeadshot}
                                />
                            </div>
                            <div className={styles.authorContent}>
                                <h3 className={styles.authorName}>About the Author</h3>
                                <p className={styles.authorBio}>
                                    Based in Denver, Billy Che Quintana applies ancient Chinese wisdom to help people address the modern health ailments of today's fast-paced world.
                                </p>
                                <a href="/about" className={styles.authorLink}>
                                    Learn more about Billy →
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
                
                <Footer/>
            </motion.div>
        </AnimatePresence>
    );
} 