"use client"

import Image from "next/image";

import { motion, AnimatePresence } from "motion/react";

import styles from "./page.module.css";

import billy from "@/public/HeadshotShape.png";
import homeImage1 from "@/public/homeImage1.jpeg";
import homeImage2 from "@/public/homeImage2.jpeg";
import homeImage3 from "@/public/homeImage3.jpeg";

import Nav from "@/app/components/Nav/Nav";
import HeroParallax from "@/app/components/HeroParallax/HeroParallax.jsx";
import Symbol from "@/app/components/Symbol/Symbol";
import HomeEvent from "@/app/components/HomeEvent/HomeEvent";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
      <AnimatePresence>
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{ease: "easeIn", duration: 1.0}}
              exit={{opacity: 0, transition: {duration: 0.8}}}
              className={styles.page}
          >
              <div className={styles.navCont}>
                  <Nav/>
              </div>
              <div className={styles.heroImgCont}>
                  <HeroParallax/>
                  <div className={styles.heroTextCont}>
                      <div className={styles.heroTextInnerCont}>
                          <motion.h1 className={styles.heroText}
                                     initial={{opacity: 0, x: 100}}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     transition={{ duration: 1.5, delay: 0.5 }}
                                     viewport={{ once: true }}>
                              Welcome to <span style={{color: '#684296'}}> Vibrant Pearl Acupuncture & Herbs LLC</span>
                          </motion.h1>
                          <motion.p className={styles.heroTextBody}
                                    initial={{opacity: 0, x: -100}}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                          >
                              We help people find relief from ailments by blending
                              ancient Chinese wisdom and modern research.
                          </motion.p>
                          <div className={styles.contactCont}>

                              <motion.a href='tel:+17195887280' className={styles.heroContactCont}
                              initial={{opacity: 0, x: -100}}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              viewport={{ once: true }}
                          >
                              Call: 719-588-7280
                          </motion.a>
                          <motion.a className={styles.heroButton}
                                         initial={{opacity: 0, x: -100}}
                                         whileInView={{ opacity: 1, x: 0 }}
                                         transition={{ duration: 1.5, delay: 0.5 }}
                                         viewport={{ once: true }}
                                        href="/schedule"
                          >Book Now</motion.a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={styles.meetCont}>
                  <motion.div className={styles.meetLeftCont}
                              initial={{opacity: 0, x: -100}}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1.5, delay: 0.3 }}
                              viewport={{ once: true }}
                  >

                      <div className={styles.meetHeadshotCont}>
                          <Image
                              src={billy}
                              alt="Picture of Billy"
                              className={styles.meetImg}
                              fill
                              objectFit="contain"
                          />
                      </div>
                  </motion.div>
                  <div className={styles.meetRightCont}>
                      <motion.div className={styles.meetTextCont}
                                  initial={{opacity: 0, x: 100}}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 1.5 }}
                                  viewport={{ once: true }}
                      >
                          <h2 className={styles.meetTitle}>Meet Your Practitioner</h2>
                          <h1 className={styles.meetSubTitle}>Billy Che Quintana </h1>
                          <h2 className={styles.meetTitle}>L.Ac., Dipl. O.M</h2>
                          <p className={styles.meetText}>
                              Billy Che Quintana is a seasoned practitioner with 10
                              plus years of experience in private practice, a Master&#39;s
                              Degree of Traditional Chinese Medicine, and has acquired continuing
                              education in Facial Rejuvenation Acupuncture and Scalp Acupuncture.
                          </p>
                          <a href="/about" className={styles.meetButton}>Learn More</a>
                      </motion.div>
                  </div>
              </div>
              <div className={styles.whyCont}>
                  <motion.div className={styles.whyTextCont}
                              initial={{opacity: 0}}
                              whileInView={{ opacity: 1}}
                              transition={{ duration: 1.5, delay: 0.3 }}
                              viewport={{ once: true }}
                  >
                      <h1 className={styles.whyTitle}>Why Choose Vibrant Pearl Acupuncture and Herbs?</h1>
                      <hr className={styles.whyHr}/>
                      <p className={styles.whyText}>
                          Our clinic provides a cozy feel, a pace that is not rushed, and a warm caring practitioner.
                          Each treatment, from the techniques used to the intensity of each therapeutic method, is
                          custom tailored to better help each patient. We also gladly welcome individuals of all sexes,
                          gender identities, orientations, races, and walks of life.
                      </p>
                      <a href="/schedule" className={styles.whyButton}>Book Now</a>
                  </motion.div>
                  <motion.div
                      initial={{opacity: 0, x: 100}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                      viewport={{ once: true }}
                      className={styles.whySymbolXi}
                  >
                    <Symbol type="water"/>
                  </motion.div>
                  <motion.div
                      initial={{opacity: 0, x: -100}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                      viewport={{ once: true }}
                      className={styles.whySymbolFu}
                  >
                    <Symbol type="fire"/>
                  </motion.div>
                  <motion.div
                      initial={{opacity: 0, x: 100}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                      viewport={{ once: true }}
                      className={styles.whySymbolShou}
                  >
                    <Symbol type="earth"/>
                  </motion.div>
              </div>
              <div className={styles.scheduleCont}>
                    <motion.div className={styles.scheduleTextCont}
                                initial={{opacity: 0}}
                                whileInView={{ opacity: 1}}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true }}
                    >
                        <h1 className={styles.scheduleTitle}>Make An Appointment</h1>
                        <hr className={styles.scheduleHr}/>

                    </motion.div>

                  <div className={styles.eventsCont}>
                      <motion.div className={styles.event}
                                  initial={{opacity: 0, x: -100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2}}
                                  viewport={{once: true}}>
                          <HomeEvent id={1}/>
                      </motion.div>
                      <motion.div className={styles.event}
                                  initial={{opacity: 0, y: 100}}
                                  whileInView={{opacity: 1, y: 0}}
                                  transition={{duration: 1.2}}
                                  viewport={{once: true}}>
                          <HomeEvent id={2}/>
                      </motion.div>
                      <motion.div className={styles.event}
                                  initial={{opacity: 0, x: 100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2}}
                                  viewport={{once: true}}>
                          <HomeEvent id={3}/>
                      </motion.div>
                  </div>
                  <a href="/schedule" className={styles.scheduleButton}>All Appointments</a>
              </div>
              <div className={styles.imagesCont}>
                  <div className={styles.imagesRowCont}>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: 100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 0.0}}
                                  viewport={{once: true}}
                      >
                          <Image
                              src={homeImage1}
                              alt="Studio seating"
                              className={styles.imagesImg}
                              fill
                              objectFit="contain"
                          />
                      </motion.div>
                      <motion.div className={styles.imagesItemContSymbol}
                                  initial={{opacity: 0, x: 100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 0.5}}
                                  viewport={{once: true}}
                      >
                          <Symbol type="wood"/>
                      </motion.div>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: 100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 1.0}}
                                  viewport={{once: true}}
                      >
                          <Image
                              src={homeImage2}
                              alt="Studio check in desk"
                              className={styles.imagesImg}
                              fill
                              objectFit="contain"
                          />
                      </motion.div>
                  </div>
                  <div className={styles.imagesRowCont}>
                      <motion.div className={styles.imagesItemContSymbol}
                                  initial={{opacity: 0, x: -100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 0.0}}
                                  viewport={{once: true}}
                      >
                          <Symbol type="metal"/>
                      </motion.div>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: -100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 0.5}}
                                  viewport={{once: true}}
                      >
                          <Image
                              src={homeImage3}
                              alt="Cupping cups"
                              className={styles.imagesImg}
                              fill
                              objectFit="contain"
                          />
                      </motion.div>
                      <motion.div className={styles.imagesItemContSymbol}
                                  initial={{opacity: 0, x: -100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 1.0}}
                                  viewport={{once: true}}
                      >
                          <Symbol type="qi"/>
                      </motion.div>
                  </div>
              </div>
              <div className={styles.testimonialCont}>
                  <Testimonials/>

              </div>
              <div className={styles.formCont}>
                  <ContactForm/>
              </div>
              <Footer/>
          </motion.div>
      </AnimatePresence>
  );
}
