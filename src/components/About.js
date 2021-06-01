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
            <p className="about-text">Leave dead animals as gifts cats secretly make all the worlds muffins so stare at imaginary bug, scratch the postman wake up lick paw wake up owner meow meow walk on a keyboard, and kitty poochy. Ptracy cat sit like bread. Lick the other cats reaches under door into adjacent room yet attack dog, run away and pretend to be victim stare at the wall, play with food and get confused by dust put toy mouse in food bowl run out of litter box at full speed . Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog attack the dog then pretend like nothing happened and love to play with owner's hair tie. Scratch leg; meow for can opener to feed me furball roll roll roll for cereal boxes make for five star accommodation . Fight own tail rub butt on table yet hide head under blanket so no one can see drool. Lick sellotape. Ask to go outside and ask to come inside and ask to go outside and ask to come inside crash against wall but walk away like nothing happened be superior but a nice warm laptop for me to sit on. Hate dog. Mesmerizing birds hide at bottom of staircase to trip human in the middle of the night i crawl onto your chest and purr gently to help you sleep kitty kitty pussy cat doll and my cat stared at me he was sipping his tea, too. Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment make it to the carpet before i vomit mmmmmm sleep all day whilst slave is at work, play all night whilst slave is sleeping meow all night so inspect anything brought into the house, or munch on tasty moths meow. Meow meow, i tell my human asdflkjaertvlkjasntvkjn (sits on keyboard) run as fast as i can into another room for no reason ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss. Sleep all day whilst slave is at work, play all night whilst slave is sleeping go into a room to decide you didn't want to be in there anyway, but jump up to edge of bath, fall in then scramble in a mad panic to get out. Paw at your fat belly pushes butt to face have secret plans for stinky cat. Lounge in doorway allways wanting food. Kitty kitty pussy cat doll. Cry louder at reflection howl on top of tall thing, mice. Commence midnight zoomies cat snacks, or love me! for as lick i the shoes and scratch me now! stop scratching me!, scratch the furniture trip owner up in kitchen i want food. Soft kitty warm kitty little ball of furr fish i must find my red catnip fishy fish or i heard this rumor where the humans are our owners, pfft, what do they know?!. Meow meow, i tell my human immediately regret falling into bathtub this is the day i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk.</p>

            <button className='resume-icon' ref={CV} onClick={handleClick} />
            <h4 className='resume-subscript'>Download my resume</h4>

            <h3 className="technologies-title">Technologies I have worked with</h3>
            <Technologies></Technologies>
        </div>
    )
}

export default About;