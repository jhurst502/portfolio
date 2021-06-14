import React from 'react';
import MountainSVG from '../../src/images/Bottom.svg';
import GetHighPhoto from '../../src/images/GetHighPortfolio.png';

import SVG from '../../src/images/ContactTopMountains.svg';

const Work = () => {

    return (
        <div className="work" id="work">
            <div>
                <img className="mountains-bottom" src={MountainSVG} alt=""></img>
            </div>
            <h2 className="work-title">Work</h2>
            <h3 className="work-project-title" style={{gridRowStart:3, gridColumnStart:3}}>Elevation Tracking (Get High Elevation)</h3>
            <a href="https://www.gethighelevation.com/" target="_blank" style={{gridRowStart:4, gridColumnStart:3}}>
                <img className="work-image" src={GetHighPhoto} alt="get-high-elvation screenshot"></img>
            </a>
            <p className="work-1">Get High Elevation is a full stack web application designed to assist in finding the high points of local areas. It works by calculating the 10 highest peaks within a 30 mile radius of a given zip code. I created this application using React and Tailwind CSS with a Flask Restful API for the backend. Each elevation is calculated using my own instance of the Open Topo Data API and displayed on the map using Mapbox GL. Since each calculation to find the highpoints can take a while, I utilized a MongoDB database to store points once they are computed. This helps to cut down on wait times. I deployed Get High Elevation using Nginx on a Digital Ocean Droplet server. </p>
            
            {/* <h3 className="work-project-title" style={{gridRowStart:6, gridColumnStart:2}}>DSAVY</h3>
            <img className="work-image" src={GetHighPhoto} style={{gridRowStart:7, gridColumnStart:2}}></img>
            <p className="work-2">Tuxedo cats always looking dapper hiding behind the couch until lured out by a feathery toy for spread kitty litter all over house or meow to be let out or scratch leg; meow for can opener to feed me lies down but sniff all the things. Poop on floor and watch human clean up taco cat backwards spells taco cat, but grass smells good walk on car leaving trail of paw prints on hood and windshield or annoy owner until he gives you food say meow repeatedly until belly rubs, feels good sit in box for get poop stuck in paws jumping out of litter box and run around the house scream meowing and smearing hot cat mud all over. Lounge in doorway let me in let me out let me in let me out let me in let me out who broke this door anyway . Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food and sometimes switches in french and say "miaou" just because well why not for groom forever, stretch tongue and leave it slightly out, blep. Under the bed you call this cat food but purr when being pet so chew the plant kick up litter sit on human they not getting up ever but kitty kitty pussy cat doll. You are a captive audience while sitting on the toilet, pet me hate dog.</p>
            
            <h3 className="work-project-title" style={{gridRowStart:9, gridColumnStart:3}}>Weather</h3>
            <img className="work-image" src={GetHighPhoto} style={{gridRowStart:10, gridColumnStart:3}}></img>
            <p className="work-3">Tuxedo cats always looking dapper hiding behind the couch until lured out by a feathery toy for spread kitty litter all over house or meow to be let out or scratch leg; meow for can opener to feed me lies down but sniff all the things. Poop on floor and watch human clean up taco cat backwards spells taco cat, but grass smells good walk on car leaving trail of paw prints on hood and windshield or annoy owner until he gives you food say meow repeatedly until belly rubs, feels good sit in box for get poop stuck in paws jumping out of litter box and run around the house scream meowing and smearing hot cat mud all over. Lounge in doorway let me in let me out let me in let me out let me in let me out who broke this door anyway . Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food and sometimes switches in french and say "miaou" just because well why not for groom forever, stretch tongue and leave it slightly out, blep. Under the bed you call this cat food but purr when being pet so chew the plant kick up litter sit on human they not getting up ever but kitty kitty pussy cat doll. You are a captive audience while sitting on the toilet, pet me hate dog.</p> */}
            <div>
                <img className="contact-top" src={SVG}></img>
            </div>
        </div>
    )
}

export default Work;