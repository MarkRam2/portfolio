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





function Homepage() {

    return (
        <>
            <div className="grid grid-cols-1 bg-gray-600">
                <div className="text-center">
                    <h1 className="text-white mt-3 text-6xl">Mark A. Ramirez Portfolio</h1>
                </div>
                <div className="grid grid-cols-4 bg-gray-600">
                    <div className="justify-items-center">
                        <img src={myImage} alt="My Image" className="Imageportrait m-10 ml-20 rounded h-72" />
                    </div>

                    <div className="col-span-3 ml-8">
                        
                        <p className="text-3xl height rounded m-10 p-3 bg-gray-700 text-white"><p>About Me:</p>&emsp; &emsp; &emsp;&ensp;&ensp;My name is Mark Ramirez I am a new web developer. I learned my skills at Code Stack Academy a 1 year program focusing on real world skills when it come to coding. I've learned how to make web sights with multiple languages and libraries such as Html and React. I also have knowledge in how to utilize api's that other peaple have made as well as use and make my own with or without A SQL database. </p>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-white  mx-10 text-6xl ">Contact</h1>
                </div>
                <div className="grid grid-cols-5 bg-gray-600">
                    <div></div>
                    <div className="col-span-3 ml-8">
                        <p className="text-3xl rounded m-10 p-3 bg-gray-700 text-white" >(209)-346-5079  markram0100@gmail.com <br /> <a className="link" href="https://github.com/MarkRam2">Github</a> <a className="link" href="https://www.linkedin.com/in/mark-ramirez-105b21258/">linkedin</a></p>
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
                                <img className="mx-auto justify-center m-1 p-1" src={cookease} />
                                <a href="https://cookease.azurewebsites.net" className="text-lg link text-center m-1 p-1">CookEase</a>
                            </div>

                            <div className="rounded-xl justify-center content-center bg-gray-700 m-2 text-center">
                                <img className="mx-auto justify-center m-1 p-1" src={PokiApi} />
                                <a href="https://mramirezpoliapi.azurewebsites.net" className="text-lg link text-center m-1 p-1">Poki Api</a>
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