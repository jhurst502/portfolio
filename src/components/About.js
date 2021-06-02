import React, { useEffect } from 'react';

import ResumeIcon from '../../src/images/Resume.json';
import lottie from 'lottie-web';

import { saveAs } from 'file-saver';
import Technologies from './Technologies';

// const oReq = new XMLHttpRequest();

// // TODO Change this to download from Node server
// // The Endpoint of your server 
// const URLToPDF = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

// // Configure XMLHttpRequest
// oReq.open("GET", URLToPDF, true);

// // Important to use the blob response type
// oReq.responseType = "blob";

// // When the file request finishes
// // Is up to you, the configuration for error events etc.
// oReq.onload = function () {
//     // Once the file is downloaded, open a new window with the PDF
//     // Remember to allow the POP-UPS in your browser
//     const file = new Blob([oReq.response], {
//         type: 'application/pdf'
//     });

//     // Generate file download directly in the browser !
//     saveAs(file, "mypdffilename.pdf");
// };




// TODO fetch request to server with resume and download with file-saver

const About = () => {
    let CV = React.createRef();

    useEffect(() => {
        const CVdownload = lottie.loadAnimation({
            loop: false,
            autoplay: false,
            container: CV.current,
            animationData: ResumeIcon
        });
        return () => CVdownload.destroy();
    })

    let clicked = false;
    function handleClick() {
        if (clicked === false) {
            // oReq.send();
            //saveAs(new Blob([Resume], {type: 'application/pdf'}));
            lottie.play();
            clicked = true;
        }
    }

    return (
        <div className="about" id="about">
            <h2 className="about-title">About</h2>
            <p className="about-text">I am a developer. I love creating things. I wanted to learn programming the moment I realized the impact well designed applications can have in solving real world problems. What interests me the most about development is being able to create an application seemingly from nothing that provides value to people. I am currently finishing the last year of my Bachelor of Science in Computer Science at Indiana University Southeast. Aside from school, I enjoy building full stack web applications that use React for the frontend. I like to think of different technologies and programming languages as tools, and while I have more experience working with some than others, I always welcome the opportunity to learn new skills that enable me to build better applications. For more information about my professional experience click the CV icon to download my resume. For information about the projects I have worked on check out the Work section below. </p>

            <a href='/JustinHurstResumeWeb.pdf' target="_blank" className='resume-link' download>
                <button className='resume-icon' ref={CV} onClick={handleClick} />
            </a>
            <h4 className='resume-subscript'>Download my resume</h4>

            <h3 className="technologies-title">Technologies I have worked with</h3>
            <Technologies></Technologies>
        </div>
    )
}

export default About;