import React from "react";
import myImage from '../images/37-CSAS5_Headshots_Mark_Ramirez.jpg';
import './HomePage.css'
import ReactIcon from '../assets/icons8-react-80.png'
import JavaScript from '../assets/icons8-javascript-80.png'
import bootstrap from '../assets/icons8-bootstrap-80.png'
import Typescript from '../assets/icons8-typescript-80.png'
import Cplus from '../assets/icons8-c-80.png'
import Csharp from '../assets/icons8-c-80 (1).png'
import PokiApi from '../assets/Screenshot_26.png'
import cookease from '../assets/Screenshot_1.png'
import azure from '../assets/icons8-azure-80.png'
import jira from '../assets/icons8-jira-80.png'
import restfulApi from '../assets/icons8-rest-api-80.png'
import TicTacToe from '../assets/Screenshot_2.png'
import Angular from '../assets/icons8-angular-80.png'

function Homepage() {

    return (
        <>
            <div>
            </div>
            <div className="grid grid-cols-1 bg-gray-600">
                <div className="text-center">
                    <h1 className="text-white mt-3 text-6xl">Mark A. Ramirez Portfolio</h1>
                </div>
                <div className="grid grid-cols-4 bg-gray-600">
                    <div className="justify-items-center">
                        <img src={myImage} alt="My Image" className="Imageportrait m-10 ml-20 rounded h-72" />
                    </div>

                    <div className="col-span-3 ml-8">

                        <p className="text-[27px] height rounded m-10 p-3 bg-gray-700 text-white">About Me: <p className="mt-5">Hello, my name is Mark Ramirez, and I am a web developer. I honed my abilities at Code Stack Academy, where I completed a comprehensive one-year program focused on acquiring practical coding skills. Throughout my training, I gained expertise in developing websites using various languages and libraries, including HTML and React. I am proficient in leveraging APIs created by others and possess the capability to design and build my own APIs, with or without a SQL database.</p></p>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-white  mx-10 text-6xl ">Contacts</h1>
                </div>
                <div className="grid grid-cols-5 bg-gray-600">
                    <div></div>
                    <div className="col-span-3 ml-8">
                        <p className="text-3xl rounded m-10 p-3 bg-gray-700 text-white" >Phone: (209)-346-5079  <br />Email: markram0100@gmail.com <br /> Links: <a className="link" href="https://github.com/MarkRam2">Github</a>  <a className="link" href="https://www.linkedin.com/in/mark-ramirez-105b21258/">linkedin</a></p>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-white mb-10 mx-10 text-6xl ">Skills</h1>
                </div>
                <div className="grid grid-cols-5">
                    <div></div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-6 ">

                            <div className=" rounded-xl justify-center content-center  bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1" src={ReactIcon} />
                                <p className="text-lg text-white text-center m-1 p-1 ">React</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1" src={JavaScript} />
                                <p className="text-lg text-white text-center m-1 p-1 ">JavaScript</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={bootstrap} />
                                <p className="text-lg text-white text-center m-1 p-1 ">BootStrap</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={Typescript} />
                                <p className="text-lg text-white text-center m-1 p-1 ">TypeScript</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={Cplus} />
                                <p className="text-lg text-white text-center m-1 p-1 ">C++</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={Csharp} />
                                <p className="text-lg text-white text-center m-1 p-1 ">C#</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={restfulApi} />
                                <p className="text-lg text-white text-center m-1 p-1 ">Restful Api</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={azure} />
                                <p className="text-lg text-white text-center m-1 p-1 ">Azure</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={jira} />
                                <p className="text-lg text-white text-center m-1 p-1 ">Jira</p>
                            </div>

                            <div className="rounded-xl justify-center bg-gray-700 m-2">
                                <img className="mx-auto justify-center m-1 p-1 " src={Angular} />
                                <p className="text-lg text-white text-center m-1 p-1 ">Angular</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-white mb-10 mt-5 mx-10 text-6xl ">Projects</h1>
                </div>

                <div className="grid grid-cols-5">
                    <div></div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-3">

                            <div className="rounded-xl justify-center content-center bg-gray-700 m-2 text-center">
                                <img className="h-40 w-64 rounded-xl mx-auto justify-center m-1 p-1" src={cookease} />
                                <a href="https://cookease.azurewebsites.net" className="text-lg link text-center  p-1 align-bottom m-auto" >CookEase</a>

                                <p className="text-white text-center">Made with Typescript, React, <br />Azure, Tailwind</p>

                            </div>

                            <div className="rounded-xl justify-center content-center bg-gray-700 m-2 text-center">
                                <img className="h-40 w-64 rounded-xl mx-auto justify-center m-1 p-1" src={PokiApi} />
                                <a href="https://mramirezpoliapi.azurewebsites.net" className="text-lg link text-center  p-1 m-auto">Poki Api</a>
                                <p className="text-white text-center">Made with Javascript, React, <br />Azure, Tailwind</p>
                            </div>

                            <div className="rounded-xl justify-center content-center bg-gray-700 m-2 text-center">
                                <img className="h-40 w-64 rounded-xl mx-auto justify-center m-1 p-1" src={TicTacToe} />
                                <a href="https://mramtic.azurewebsites.net" className="text-lg link text-center  p-1 m-auto">3D TicTacToe</a>
                                <p className="text-white text-center">Made with Javascript, React, <br />Azure, Tailwind, css, bootstrap</p>
                            </div>


                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Homepage;