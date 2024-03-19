import React from 'react';
import styles from '../../styles/about/Dimond.module.css';

const Diamond = () => {
    return (
        <>
            <div className="flex flex-row justify-around text-center items-center pb-52 pt-24" style={{ height: "620px" }}>
                <div>
                    <h1 className='text-6xl text-left pb-10'> <span className='text-custom-hover'>We Are</span> Different</h1>
                    <p className="text-lg mt-4 text-left"style={{width:"430px"}}>
                        At our core, we are driven by innovation, passion, and a commitment to excellence. Our team of experts is dedicated to pushing boundaries, exploring new possibilities, and delivering unparalleled experiences to our clients and partners.
                    </p>
                </div>
                <div>
                    <div className={styles.container}>
                        <div className={`${styles.diamond} ${styles.first}`}>
                            <h2 className='text-xl font-semibold text-primary-txt'>Innovation</h2>
                            <p className='text-sm w-64 text-center py-5'>
                                With the latest industry trends and thought leadership, we consistently deliver award-winning hybrid, virtual, and in-person event experiences.
                            </p>
                        </div>
                        <div className={`${styles.diamond} ${styles.middle}`}>
                            <h2 className='text-xl font-semibold text-primary-txt'>Excellence</h2>
                            <p className='text-sm w-64 text-center py-5'>
                                Our relentless pursuit of excellence drives every aspect of our work. From meticulous planning to flawless execution, we strive to exceed expectations and set new.
                            </p>
                        </div>
                        <div className={`${styles.diamond} ${styles.third}`}>
                            <h2 className='text-xl font-semibold text-primary-txt'>Collaboration</h2>
                            <p className='text-sm w-64 text-center py-5'>
                                Collaboration lies at the heart of our success. By fostering strong partnerships and working closely with our clients, we co-create unforgettable experiences that inspire.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Diamond;
