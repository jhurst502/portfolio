import React from 'react';
import TestSVG from '../../src/images/Test.svg';
import LogoJS from '../../src/images/JavaScript.png';
import LogoReact from '../../src/images/React.png';
import LogoAngular from '../../src/images/angular.png';
import LogoFlask from '../../src/images/Flask.png';
import LogoGit from '../../src/images/Git.png';
import LogoHTML from '../../src/images/HTML5.png';
import LogoCSS from '../../src/images/CSS3.png';
import LogoPython from '../../src/images/Python.png';
import LogoCPP from '../../src/images/CPlusPlus.png';
import LogoPostgres from '../../src/images/PostgreSQL.png';
import LogoMongo from '../../src/images/MongoDB.png';
import LogoNode from '../../src/images/NodeJs.png';

const About = () => {

    console.log(TestSVG);

    return (
        <div className="about" id="about">
            <h2 className="about-title">About</h2>
            <p className="about-text">Leave dead animals as gifts cats secretly make all the worlds muffins so stare at imaginary bug, scratch the postman wake up lick paw wake up owner meow meow walk on a keyboard, and kitty poochy. Ptracy cat sit like bread. Lick the other cats reaches under door into adjacent room yet attack dog, run away and pretend to be victim stare at the wall, play with food and get confused by dust put toy mouse in food bowl run out of litter box at full speed . Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog attack the dog then pretend like nothing happened and love to play with owner's hair tie. Scratch leg; meow for can opener to feed me furball roll roll roll for cereal boxes make for five star accommodation . Fight own tail rub butt on table yet hide head under blanket so no one can see drool. Lick sellotape. Ask to go outside and ask to come inside and ask to go outside and ask to come inside crash against wall but walk away like nothing happened be superior but a nice warm laptop for me to sit on. Hate dog. Mesmerizing birds hide at bottom of staircase to trip human in the middle of the night i crawl onto your chest and purr gently to help you sleep kitty kitty pussy cat doll and my cat stared at me he was sipping his tea, too. Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment make it to the carpet before i vomit mmmmmm sleep all day whilst slave is at work, play all night whilst slave is sleeping meow all night so inspect anything brought into the house, or munch on tasty moths meow. Meow meow, i tell my human asdflkjaertvlkjasntvkjn (sits on keyboard) run as fast as i can into another room for no reason ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss. Sleep all day whilst slave is at work, play all night whilst slave is sleeping go into a room to decide you didn't want to be in there anyway, but jump up to edge of bath, fall in then scramble in a mad panic to get out. Paw at your fat belly pushes butt to face have secret plans for stinky cat. Lounge in doorway allways wanting food. Kitty kitty pussy cat doll. Cry louder at reflection howl on top of tall thing, mice. Commence midnight zoomies cat snacks, or love me! for as lick i the shoes and scratch me now! stop scratching me!, scratch the furniture trip owner up in kitchen i want food. Soft kitty warm kitty little ball of furr fish i must find my red catnip fishy fish or i heard this rumor where the humans are our owners, pfft, what do they know?!. Meow meow, i tell my human immediately regret falling into bathtub this is the day i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk.</p>
            <h3 className="technologies">Technologies I have worked with</h3>
            <div className="tech-grid">
                <div className="centered">
                    <img className="tech-logo" src={LogoJS} style={{gridColumnStart:1}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoReact} style={{gridColumnStart:2}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoAngular} style={{gridColumnStart:3}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoHTML} style={{gridColumnStart:4}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoCSS} style={{gridColumnStart:5}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoFlask} style={{gridColumnStart:6}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoGit} style={{gridColumnStart:7}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoPython} style={{gridColumnStart:8}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoCPP} style={{gridColumnStart:9}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoPostgres} style={{gridColumnStart:10}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoMongo} style={{gridColumnStart:11}}></img>
                </div>
                <div className="centered">
                    <img className="tech-logo" src={LogoNode} style={{gridColumnStart:12}}></img>
                </div>


                <h4 className="tech-subscript" style={{gridColumnStart:1}}>JavaScript</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:2}}>React</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:3}}>Angular</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:4}}>HTML5</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:5}}>CSS3</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:6}}>Flask</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:7}}>Git</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:8}}>Python</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:9}}>C++</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:10}}>PostgreSQL</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:11}}>MongoDB</h4>
                <h4 className="tech-subscript" style={{gridColumnStart:12}}>NodeJs</h4>
                </div>
            </div>
    )
}

export default About;