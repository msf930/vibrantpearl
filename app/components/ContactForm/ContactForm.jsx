"use client"

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";

import styles from './ContactForm.module.css';

import { IconContext } from "react-icons";
import { AiFillFacebook, AiOutlineX, AiFillInstagram } from "react-icons/ai";


import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(["", ""]);
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    useEffect(() => {

        //if (token)
            // console.log(`hCaptcha Token: ${token}`);

    }, [token]);



    const onSubmit = async (e) => {
        setSubmitted(true);
        setResult(["Please Wait", "Sending...."]);
        const form = e.target;
        const formData = new FormData(form);
        formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}`);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult(["Thank You!", "Form Submitted Successfully"]);
        } else {
            console.log("Error", data);
            setResult(["Error", `${data.message}`]);
        }

    };

    if (submitted) {
        return (
            <div className={styles.contactSubmited}>
                <div className={styles.contactSubmitedTitle}>{result[0]}</div>
                <div className={styles.contactSubmitedBody}>{result[1]}</div>
                <button className="w-[100%] justify-center items-center py-3 text-black" onClick={() => setSubmitted(false)}>Reset</button>
            </div>
        );
    }

    return (
        <section className={styles.contact}>
            <div className={styles.contactLeft}>
                <div className={styles.contactHeroTextContainer}>
                    <h2>Contact Us</h2>
                    <p className={styles.contactHeroTextFull}>
                        1776 S. Jackson St. Suite 320<br/>Denver, CO 80210<br/>
                        719-588-7280
                    </p>
                    <p className={styles.contactHeroTextMobile}>
                        Let us know how we can serve you!
                    </p>
                    {/*<IconContext.Provider value={{ color: "black", size: "30px" }}>*/}
                    {/*    <div className={styles.iconGroupContact}>*/}
                    {/*        <Link className={styles.icon} href={"https://twitter.com"}><AiOutlineX /></Link>*/}
                    {/*        <Link className={styles.icon} href={"https://www.facebook.com"}><AiFillFacebook /></Link>*/}
                    {/*        <Link className={styles.icon} href={"https://www.instagram.com"}><AiFillInstagram /></Link>*/}
                    {/*    </div>*/}
                    {/*</IconContext.Provider>*/}
                </div>

            </div>
            <div className={styles.contactRight}>
                <div className={styles.contactFormContainer}>
                    <form
                        onSubmit={onSubmit}
                        className={styles.contactForm}
                    >

                        <div className={styles.contactNameContainer}>
                            <label className={styles.contactLabel} htmlFor="nameFirst">Name</label>
                            <div className={styles.nameContainer}>
                                <div className={styles.nameInputItem}>
                                    <input
                                        type="text"
                                        placeholder="First"
                                        name="nameFirst"
                                        title="First Name"
                                        aria-label="First Name"
                                        className={styles.contactInputName}
                                        required
                                    />
                                </div>
                                <div className={styles.nameInputItem}>
                                    <input
                                        type="text"
                                        placeholder="Last"
                                        name="nameLast"
                                        title="Last Name"
                                        aria-label="Last Name"
                                        className={styles.contactInputName}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.contactSpacer}></div>
                        </div>
                        <div className={styles.contactInputContainer}>
                            <label className={styles.contactLabel}>Email</label>
                            <div className={styles.contactTextContainer}>
                                <div className={styles.textInputItem}>
                                    <input
                                        type="email"
                                        placeholder="you@gmail.com"
                                        name="email"
                                        title="Email"
                                        aria-label="Email"
                                        className={styles.contactInputText}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.contactSpacer}></div>
                        </div>
                        <div className={styles.contactInputContainer}>
                            <label className={styles.contactLabel}>Phone</label>
                            <div className={styles.contactTextContainer}>
                                <div className={styles.textInputItem}>
                                    <input
                                        type="tel"
                                        placeholder="111-111-1111"
                                        name="phone"
                                        title="Telephone Number"
                                        aria-label="Telephone Number"
                                        className={styles.contactInputText}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.contactSpacer}></div>
                        </div>
                        <div className={styles.contactInputAreaContainer}>
                            <label className={styles.contactLabel}>Message</label>
                            <div className={styles.contactTextAreaContainer}>
                                <div className={styles.textInputItem}>
                  <textarea
                      placeholder="Your message"
                      name="message"
                      title="Type a detailed message about your service needs"
                      aria-label="Type a detailed message about your service needs"
                      className={styles.contactInputTextArea}
                      required
                  />
                                </div>
                            </div>

                        </div>
                        <div className={styles.captchaContainer}>
                            <div></div>
                            <div className={styles.captcha}>
                                <HCaptcha
                                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                                    // onLoad={onLoad}
                                    onVerify={setToken}
                                    ref={captchaRef}
                                    reCaptchaCompat={false}
                                    size="normal"
                                    theme="contrast"
                                />
                            </div>
                            <div className={styles.contactSpacer}></div>
                        </div>
                        <div className={styles.contactSubmitContainer}>
                            <div></div>

                            <button
                                className={styles.contactSubmitBtn}
                                type="submit"
                                value="Submit"
                            >
                                Submit
                            </button>
                            <div className={styles.contactSpacer}></div>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactForm;