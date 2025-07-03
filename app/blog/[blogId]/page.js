import React from 'react';
import {client} from "@/sanity/lib/client";
import Nav from "@/app/components/Nav/Nav";
import {PortableText} from "next-sanity";
import {RichTextComponents} from "@/app/components/RichTextComponents";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import styles from "./styles.module.css";
import BlogPostContent from "./BlogPostContent";

// Generate metadata for the page
export async function generateMetadata({ params }) {
    const blogId = params.blogId;
    
    const POST_QUERY = `*[_type == "post" && slug.current == "${blogId}"][0]|{
        title, 
        excerpt,
        keyWords,
        mainImage { 
            asset -> { url } 
        }
    }`;

    try {
        const post = await client.fetch(POST_QUERY);
        
        if (!post) {
            return {
                title: 'Post Not Found | Vibrant Pearl',
                description: 'The requested blog post could not be found.',
            };
        }

        const keywords = post.keyWords ? post.keyWords.join(', ') : '';
        
        return {
            title: `${post.title} | Vibrant Pearl`,
            description: post.excerpt || 'Read this blog post from Vibrant Pearl.',
            keywords: keywords,
            openGraph: {
                title: post.title,
                description: post.excerpt,
                images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
                type: 'article',
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.excerpt,
                images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Blog Post | Vibrant Pearl',
            description: 'Read this blog post from Vibrant Pearl.',
        };
    }
}

export default async function Page({ params }) {
    const blogId = params.blogId;
    
    const POST_QUERY = `*[_type == "post" && slug.current == "${blogId}"][0]|{
        _id, 
        title, 
        slug, 
        publishedAt, 
        excerpt,
        body,
        keyWords,
        mainImage { 
            asset -> { _id, url} 
        }
    }`;

    const post = await client.fetch(POST_QUERY);

    // Calculate reading time
    let wordCount = 0;
    if (post?.body) {
        for (let i = 0; i < post.body.length; i++) {
            if (post.body[i]?.children) {
                post.body[i].children.forEach(child => {
                    if (child?.text) {
                        wordCount += child.text.split(/\s+/).filter(word => word.length > 0).length;
                    }
                });
            }
        }
    }
    const readingTimeMinutes = Math.ceil(wordCount / 200);
    const readingTime = readingTimeMinutes === 1 ? `${readingTimeMinutes} minute read` : `${readingTimeMinutes} minutes read`;

    if (!post) {
        return (
            <div className={styles.page}>
                <div className={styles.navCont}>
                    <Nav/>
                </div>
                <div className={styles.loadingContainer}>
                    <p>Post not found</p>
                </div>
            </div>
        );
    }

    return <BlogPostContent post={post} readingTime={readingTime} />;
}

