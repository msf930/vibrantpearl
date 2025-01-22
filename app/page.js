"use client"

import Image from "next/image";

import { motion, AnimatePresence } from "motion/react";

import styles from "./page.module.css";

import billy from "@/public/HeadshotShape.png";
import homeImage1 from "@/public/homeImages1.png";
import homeImage2 from "@/public/homeImages2.png";
import homeImage3 from "@/public/homeImages3.png";

import Nav from "@/app/components/Nav";
import HeroParallax from "@/app/components/HeroParallax.jsx";
import Symbol from "@/app/components/Symbol";
import HomeEvent from "@/app/components/HomeEvent";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

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
                              We apply ancient Chinese wisdom to help people address
                              the modern health ailments of today’s fast paced world.
                          </motion.p>
                          <div className={styles.contactCont}>

                          <motion.div className={styles.heroContactCont}
                              initial={{opacity: 0, x: -100}}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              viewport={{ once: true }}
                          >
                              Call: 719-588-7280
                          </motion.div>
                          <motion.button className={styles.heroButton}
                                         initial={{opacity: 0, x: -100}}
                                         whileInView={{ opacity: 1, x: 0 }}
                                         transition={{ duration: 1.5, delay: 0.5 }}
                                         viewport={{ once: true }}
                          >Book Now</motion.button>
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
                              Billy Che Quintana is our practitioner of traditional
                              Chinese medicine and acupuncture who helps individuals
                              find and maintain balance for lasting health and beauty.
                          </p>
                          <button className={styles.meetButton}>Learn More</button>
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
                      <h1 className={styles.whyTitle}>Why choose Vibrant Pearl Acupuncture?</h1>
                      <hr className={styles.whyHr}/>
                      <p className={styles.whyText}>
                          We are Denver’s premier clinic of traditional Chinese Medicine and acupuncture with a cozy
                          feel, a pace that is not rushed, and most importantly a caring and warm practitioner.
                          <br/><br/>
                          We welcome individuals of all sexes, gender identities, orientations, races, and walks of
                          life.
                      </p>
                      <button className={styles.whyButton}>Book Now</button>
                  </motion.div>
                  <motion.div
                      initial={{opacity: 0, x: 100}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                      viewport={{ once: true }}
                      className={styles.whySymbolXi}
                  >
                    <Symbol type="xi"/>
                  </motion.div>
                  <motion.div
                      initial={{opacity: 0, x: -100}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                      viewport={{ once: true }}
                      className={styles.whySymbolFu}
                  >
                    <Symbol type="fu"/>
                  </motion.div>
                  <motion.div
                      initial={{opacity: 0, x: 100}}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                      viewport={{ once: true }}
                      className={styles.whySymbolShou}
                  >
                    <Symbol type="shou"/>
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
                  <button className={styles.scheduleButton}>All Appointments</button>
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
                              alt="cupping"
                              className={styles.imagesImg}
                              fill
                              objectFit="contain"
                          />
                      </motion.div>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: 100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 0.5}}
                                  viewport={{once: true}}
                      >
                          <Symbol type="shuangxi"/>
                      </motion.div>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: 100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 1.0}}
                                  viewport={{once: true}}
                      >
                          <Image
                              src={homeImage2}
                              alt="accupuncture needles"
                              className={styles.imagesImg}
                              fill
                              objectFit="contain"
                          />
                      </motion.div>
                  </div>
                  <div className={styles.imagesRowCont}>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: -100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 0.0}}
                                  viewport={{once: true}}
                      >
                          <Symbol type="cai"/>
                      </motion.div>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: -100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 0.5}}
                                  viewport={{once: true}}
                      >
                          <Image
                              src={homeImage3}
                              alt="chinese herbs"
                              className={styles.imagesImg}
                              fill
                              objectFit="contain"
                          />
                      </motion.div>
                      <motion.div className={styles.imagesItemCont}
                                  initial={{opacity: 0, x: -100}}
                                  whileInView={{opacity: 1, x: 0}}
                                  transition={{duration: 1.2, delay: 1.0}}
                                  viewport={{once: true}}
                      >
                          <Symbol type="lu"/>
                      </motion.div>
                  </div>
              </div>
              <div className={styles.testimonialCont}>
                  <motion.div className={styles.testimonialTextCont}
                              initial={{opacity: 0}}
                              whileInView={{opacity: 1}}
                              transition={{duration: 1.2, delay: 0.7}}
                              viewport={{once: true}}>
                      <h1 className={styles.testimonialTitle}>
                          &#34;Had THE BEST Acupuncture treatment tonight with Billy Quintana.
                          So relaxing. Definitely check him out if you are in need.&#34;
                      </h1>
                      <h1 className={styles.testimonialTitle}>
                          - Tonya
                      </h1>
                      <button className={styles.testimonialButton}>Book Now</button>
                  </motion.div>
              </div>
              <div className={styles.formCont}>
                  <ContactForm/>
              </div>
              <Footer/>
          </motion.div>
      </AnimatePresence>
  );
}
