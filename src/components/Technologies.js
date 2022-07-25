import React from 'react';

import LogoJS from '../../src/images/JavaScript.png';
import LogoReact from '../../src/images/React.png';
import LogoAngular from '../../src/images/angular.png';
import LogoFlask from '../../src/images/Flask.png';
import LogoGit from '../../src/images/Git.png';
import LogoHTML from '../../src/images/HTML5.png';
import LogoCSS from '../../src/images/CSS3.png';
import LogoPython from '../../src/images/Python.png';
import LogoCPP from '../../src/images/CPlusPlus.png';
import LogoMySql from '../../src/images/MySql.png';
import LogoMongo from '../../src/images/MongoDB.png';
import LogoNode from '../../src/images/NodeJs.png';
import LogoTypeScript from '../../src/images/Typescript.png';
import LogoRedux from '../../src/images/Redux.png';

const Technologies = () => {

    return (
        <div className="tech-grid">
            <div className="figure-container">
                <figure className="centered">
                    <img className="tech-logo" src={LogoJS} alt="JavaScript"></img>
                    <figcaption className="tech-subscript">JavaScript</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoTypeScript}></img>
                    <figcaption className="tech-subscript">TypeScript</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoReact} alt="React"></img>
                    <figcaption className="tech-subscript">React</figcaption>
                </figure>
            </div>
            <div className="figure-container-2">
                <figure className="centered">
                    <img className="tech-logo" src={LogoAngular} alt="Angular"></img>
                    <figcaption className="tech-subscript">Angular</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoHTML} alt="HTML5"></img>
                    <figcaption className="tech-subscript">HTML5</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoCSS} alt="CSS3"></img>
                    <figcaption className="tech-subscript">CSS3</figcaption>
                </figure>
            </div>
            <div className="figure-container-3">
                <figure className="centered">
                    <img className="tech-logo" src={LogoNode}  alt="NodeJs"></img>
                    <figcaption className="tech-subscript">NodeJs</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoPython} alt="Python"></img>
                    <figcaption className="tech-subscript">Python</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoCPP} alt="C++"></img>
                    <figcaption className="tech-subscript">C++</figcaption>
                </figure>
            </div>
            <div className="figure-container-4">
                <figure className="centered">
                    <img className="tech-logo" src={LogoMySql} alt="MySQL"></img>
                    <figcaption className="tech-subscript">MySQL</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoMongo} alt="MongoDB"></img>
                    <figcaption className="tech-subscript">MongoDB</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoGit} alt="Git"></img>
                    <figcaption className="tech-subscript">Git</figcaption>
                </figure>
            </div>
            <div className="figure-container-5">
                <figure className="centered">
                    <img className="tech-logo" src={LogoFlask} alt="Flask"></img>
                    <figcaption className="tech-subscript">Flask</figcaption>
                </figure>
                <figure className="centered">
                    <img className="tech-logo" src={LogoRedux} alt="Redux"></img>
                    <figcaption className="tech-subscript">Redux</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default Technologies;