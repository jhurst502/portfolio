import React from 'react';
import { useSpring, animated, config } from 'react-spring';

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
import LogoTypeScript from '../../src/images/Typescript.png';

const Technologies = () => {

    return (
        <div className="tech-grid">

            <div className="figure-container">
                <figure className="centered">
                    <img className="tech-logo" src={LogoJS}></img>
                    <figcaption className="tech-subscript">JavaScript</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoReact}></img>
                    <figcaption className="tech-subscript">React</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoAngular}></img>
                    <figcaption className="tech-subscript">Angular</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoHTML}></img>
                    <figcaption className="tech-subscript">HTML5</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoCSS}></img>
                    <figcaption className="tech-subscript">CSS3</figcaption>
                </figure>
            </div>
            <div className="figure-container-2">
                <figure className="centered">
                    <img className="tech-logo" src={LogoFlask}></img>
                    <figcaption className="tech-subscript">Flask</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoNode}></img>
                    <figcaption className="tech-subscript">NodeJs</figcaption>
                </figure>
            </div>
            <div className="figure-container-3">
                <figure className="centered">
                    <img className="tech-logo" src={LogoPython}></img>
                    <figcaption className="tech-subscript">Python</figcaption>
                </figure>

                <figure className="centered">
                    <img className="tech-logo" src={LogoCPP}></img>
                    <figcaption className="tech-subscript">C++</figcaption>
                </figure>
            </div>
            <div className="figure-container-4">
                <figure className="centered">
                    <img className="tech-logo" src={LogoPostgres}></img>
                    <figcaption className="tech-subscript">PostgreSQL</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoMongo}></img>
                    <figcaption className="tech-subscript">MongoDB</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoGit}></img>
                    <figcaption className="tech-subscript">Git</figcaption>
                </figure>
            </div>
            {/* <div className="figure-container-5">
                <figure className="centered">
                    <img className="tech-logo" src={LogoTypeScript}></img>
                    <figcaption className="tech-subscript">TypeScript</figcaption>
                </figure>
            </div> */}

            {/* <h4 className="tech-subscript-second">React</h4>
            <h4 className="tech-subscript">Angular</h4>
            <h4 className="tech-subscript-second">HTML5</h4>
            <h4 className="tech-subscript">CSS3</h4>
            <h4 className="tech-subscript-second">Flask</h4>
            <h4 className="tech-subscript">Git</h4>
            <h4 className="tech-subscript-second">Python</h4>
            <h4 className="tech-subscript">C++</h4>
            <h4 className="tech-subscript-second">PostgreSQL</h4>
            <h4 className="tech-subscript">MongoDB</h4>
            <h4 className="tech-subscript-second">NodeJs</h4>
            <h4 className="tech-subscript">TypeScript</h4> */}
        </div>
    );
}

export default Technologies;