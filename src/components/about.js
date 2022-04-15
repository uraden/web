import React from 'react'
import styles from './about.css'
import Typical from 'react-typical'



function About() {


    return (
        <div className="container">
            <div className="header-wrapper">
                <h2 className='react-reveal'>
                    "hi,  I am jamal"
                    <span role="img" aria-label="Emoji">👋</span>
                </h2>
                <br />

                <div className="react-reveal heead">
                    <h1 >  front-end developer building web applications</h1>
                    
                </div>
            <div className="typic">
                <h1> have experience working with {''}
                    <Typical className="redtype"
                            steps={
                                [
                                    'CSS', 2000,
                                    'HTML', 2000,
                                    'JavaScript', 2000,
                                    'React JS', 2000,
                                    'Next.js', 2000,
                                    'Node.js', 2000,
                                    'MongoDB', 2000,
                                    'GraphQL', 2000,
                                    'SQL', 2000,
                                    'Python',2000,
                                    'Cypress', 2000,
                                    'Bootsratp', 2000,
                                    'Material-UI', 2000,
                                ]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h1>

                    </div>
                <p className="react-reveal basic-bio">self-taught and experienced front-end developer who is comfortable working with JavaScript, HTML, CSS, React, and GraphQL to deliver exceptional customer experiences.</p>

                <a href="mailto:jamol.fakhriddinov@gmail.com" className="react-reveal primary-btn" target="_blank" rel="noreferrer" >CONNECT WITH ME</a>

            </div>
        </div>
    )
}

export default About;
