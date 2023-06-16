import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login'
import { useState } from 'react'
import axios from 'axios';
import FormData from 'form-data';
import { useNavigate } from "react-router-dom";


// import SignUp from './components/signup.component'
function App() {
    const navigate = useNavigate();

    const [username, setusername] = useState("")

    const [submitted, setsubmitted] = useState("false")

    const [single, setsingle] = useState(true)

    const [image, setimage] = useState();
    const [uploadableimage, uploadablesetimage] = useState();
    const [imagename, setimagename] = useState("Upload image");

    const [frontimage, setfrontimage] = useState();
    const [uploadablefrontimage, uploadablesetfrontimage] = useState();
    const [frontimagename, setfrontimagename] = useState("Upload Front Side");
    const [backimage, setbackimage] = useState();
    const [uploadablebackimage, uploadablesetbackimage] = useState();
    const [backimagename, setbackimagename] = useState("Upload Back Side");


    const uploadData = async () => {
        const form = new FormData();
        if (single) {
            form.append('image', uploadableimage);
        } else {
            form.append('image', uploadablefrontimage);
            form.append('image', uploadablebackimage);
        }


        if (single && (!image || !imagename)) {
            return alert("PLease upload an Image")
        }


        if (!single && (!frontimage || !frontimagename || !backimage || !backimagename)) {
            return alert("PLease upload Images in required fields")
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://imupl.click2tally.in/upload-image',
            headers: {
                // ...form.getHeaders()
            },
            data: form
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("image uploaded succefully");

                setimage();
                setimagename("Upload image");
                setfrontimage();
                setfrontimagename("Upload Front Side");
                setbackimage();
                setbackimagename("Upload Back Side");

                uploadablesetimage();
                uploadablesetfrontimage();
                uploadablesetbackimage();
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

    }

    return (
        <div className="App">
            <div className='bg-[#005bbc] text-white w-[7rem] h-[3rem] rounded mx-auto py-2.5 cursor-pointer absolute top-[3rem] right-[3rem]' onClick={() => {navigate("/")}}>Logout</div>
            <br />
            <br />
            <div className='flex flex-row bg-slate-300 w-[15rem] h-[2rem] mx-auto gap-0 rounded items-center justify-center md:mt-[4rem]'>
                <div className={`px-3 rounded cursor-pointer ${single ? "bg-slate-200" : "bg-slate-300"}`} onClick={() => { setsingle(true) }}>One side</div>
                <div className={`px-3 rounded cursor-pointer ${single ? "bg-slate-300" : "bg-slate-200"}`} onClick={() => { setsingle(false) }}>Both side</div>
            </div>
            <div className={`auth-wrapper flex md:flex-row flex-col items-center md:items-start justify-center gap-5 md:mt-[8rem] h-[35rem] md:h-80`}>

                {single ? <div
                    onClick={() => { }
                        // saveData("additionalDetails.isItUnderWarranty", "Provided")
                    }
                    className={`border-[#CFCFCF]  w-[60%] lg:w-[30%] h-[9.5rem] mb-[1.4rem] lg:h-[15rem] cursor-pointer border-2 rounded-[1rem] flex flex-col relative bg-[#fff]`}
                >

                    <div className={`h-[70%] flex justify-center items-center ${!image ? "pt-[7%]" : "pt-[7%]"}`}>
                        {!image ? <img src='/126477.png' alt='upload' className='w-7 h-7' /> : <img src={image} alt='upload' className=' h-[7.5rem]' />}
                    </div>
                    <p
                        className={`${"text-[#000]"
                            } font-roboto text-[.8rem] h-[25%] text-center ${!image ? "mt-[.5rem]" : "mt-[1.5rem]"} `}
                    >
                        {imagename}
                    </p>
                    <input
                        type="file"
                        // style="opacity: 0.5; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;"
                        className="w-[100%] h-[100%] absolute top-0 left-0 bottom-0 right-0 opacity-0"
                        onChange={(e) => {
                            // console.log(e.target.files[0]);
                            //   saveFile(e.target.files[0]);
                            //   saveData("additionalDetails.warrantyFile", e.target.value);
                            // alert(e.target.value.split("\\").slice(-1));

                            setimage(URL.createObjectURL(e.target.files[0]))
                            setimagename(e.target.files[0].name);
                            uploadablesetimage(e.target.files[0])
                        }}
                    />
                </div> : <>
                    <div
                        onClick={() => { }
                            // saveData("additionalDetails.isItUnderWarranty", "Provided")
                        }
                        className={`border-[#CFCFCF]  w-[60%] lg:w-[30%] h-[9.5rem] mb-[1.4rem] lg:h-[15rem] cursor-pointer border-2 rounded-[1rem] flex flex-col relative bg-[#fff]`}
                    >

                        <div className={`h-[70%] flex justify-center items-center ${!frontimage ? "pt-[7%]" : "pt-[7%]"}`}>
                            {!frontimage ? <img src='/126477.png' alt='upload' className='w-7 h-7' /> : <img src={frontimage} alt='upload' className=' h-[7.5rem]' />}
                        </div>
                        <p
                            className={`${"text-[#000]"
                                } font-roboto text-[.8rem] h-[25%] text-center ${!frontimage ? "mt-[.5rem]" : "mt-[1.5rem]"} `}
                        >
                            {frontimagename}
                        </p>
                        <input
                            type="file"
                            // style="opacity: 0.5; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;"
                            className="w-[100%] h-[100%] absolute top-0 left-0 bottom-0 right-0 opacity-0"
                            onChange={(e) => {
                                // console.log(e.target.files[0]);
                                //   saveFile(e.target.files[0]);
                                //   saveData("additionalDetails.warrantyFile", e.target.value);
                                // alert(e.target.value.split("\\").slice(-1));

                                setfrontimage(URL.createObjectURL(e.target.files[0]))
                                setfrontimagename(e.target.files[0].name);
                                uploadablesetfrontimage(e.target.files[0])
                            }}
                        />
                    </div>


                    <div
                        onClick={() => { }
                            // saveData("additionalDetails.isItUnderWarranty", "Provided")
                        }
                        className={`border-[#CFCFCF]  w-[60%] lg:w-[30%] h-[9.55rem] mb-[1.4rem] lg:h-[15rem] cursor-pointer border-2 rounded-[1rem] flex flex-col relative bg-[#fff]`}
                    >

                        <div className={`h-[70%] flex justify-center items-center ${!backimage ? "pt-[7%]" : "pt-[7%]"}`}>
                            {!backimage ? <img src='/126477.png' alt='upload' className='w-7 h-7' /> : <img src={backimage} alt='upload' className=' h-[7.5rem]' />}
                        </div>
                        <p
                            className={`${"text-[#000]"
                                } font-roboto text-[.8rem] h-[25%] text-center ${!backimage ? "mt-[.5rem]" : "mt-[1.5rem]"} `}
                        >
                            {backimagename}
                        </p>
                        <input
                            type="file"
                            // style="opacity: 0.5; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;"
                            className="w-[100%] h-[100%] absolute top-0 left-0 bottom-0 right-0 opacity-0"
                            onChange={(e) => {
                                // console.log(e.target.files[0]);
                                //   saveFile(e.target.files[0]);
                                //   saveData("additionalDetails.warrantyFile", e.target.value);
                                // alert(e.target.value.split("\\").slice(-1));

                                setbackimage(URL.createObjectURL(e.target.files[0]))
                                setbackimagename(e.target.files[0].name);
                                uploadablesetbackimage(e.target.files[0]);
                            }}
                        />
                    </div>
                </>}





            </div>

            <div className='bg-[#005bbc] text-white w-[7rem] h-[3rem] rounded mx-auto py-2.5 cursor-pointer' onClick={uploadData}>Upload</div>
        </div>
    )
}
export default App
