import React, { useState } from 'react';
import { useModal } from '../context/modalContext';
import { useNavigate } from 'react-router-dom';
const ModalComponent = () => {
    const { modalDispatch } = useModal();
    const navigate = useNavigate()
    const [stream, setStream] = useState();
    const [age, setAge] = useState();

    const toggleModal = () => {
        modalDispatch({
            type: "TOGGLE_NAVMODAL"
        });
    };

    const handleGetCoursesClick = () =>{
        if(stream==="neet"){
                navigate(`/neet/online-coaching-class-${age}`)
        }
        else if(stream==="jee"){
            navigate(`/jee/online-coaching-class-${age}`)
        }
        else{
            navigate(`class-${age}`)
        }
    }
    const isDisabled = !stream || !age; 

    return (
        <>
            <div
                id="popup-modal"
                className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
            >
                <div style={{ backgroundColor: "#0f1825" }} className="relative p-4 w-full max-w-md max-h-full rounded-lg">
                    <div style={{ backgroundColor: "#0f1825" }} className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex justify-between items-center">
                            <h3 className="font-montserrat text-sm font-normal text-white">
                                Select Your Stream
                            </h3>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex space-x-4 mt-4">
                                <button
                                    onClick={() => setStream('neet')}
                                    style={{
                                        backgroundColor: stream === "neet" ? "#78abfb" : "transparent"
                                    }}
                                    className="rounded-full border-2 border-[#78abfb] px-4 py-4 font-montserrat font-bold text-sm text-white "
                                >
                                    NEET
                                </button>
                                <button
                                    onClick={() => setStream('jee')}
                                    style={{
                                        backgroundColor: stream === "jee" ? "#78abfb" : "transparent"
                                    }}
                                    className="rounded-full border-2 border-[#78abfb] px-6 py-4 font-montserrat font-bold text-sm text-white"
                                >
                                    JEE
                                </button>
                                <button
                                    onClick={() => setStream('grade')}
                                    style={{
                                        backgroundColor: stream === "grade" ? "#78abfb" : "transparent"
                                    }}
                                    className="rounded-full border-2 border-[#78abfb] px-6 py-4 font-montserrat font-bold text-sm text-white"
                                >
                                    Grade 6-10
                                </button>
                            </div>

                            <h3 className='font-montserrat text-sm font-normal text-white mt-6'>Select Your Class</h3>
                            {stream === "grade" ? (
                                <div className="flex space-x-4 mt-4">
                                    <button
                                        style={{
                                            backgroundColor: age === "6" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("6")}
                                        className="rounded-full border-2 border-[#78abfb] px-4 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        6th
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: age === "7" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("7")}
                                        className="rounded-full border-2 border-[#78abfb] px-4 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        7th
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: age === "8" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("8")}
                                        className="rounded-full border-2 border-[#78abfb] px-4 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        8th
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: age === "9th" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("9")}
                                        className="rounded-full border-2 border-[#78abfb] px-4 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        9th
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: age === "10" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("10")}
                                        className="rounded-full border-2 border-[#78abfb] px-4 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        10th
                                    </button>
                                </div>
                            ) : (
                                <div className="flex space-x-4 mt-4">
                                    <button
                                        style={{
                                            backgroundColor: age === "11" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("11")}
                                        className="rounded-full border-2 border-[#78abfb] px-4 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        11th
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: age === "12" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("12")}
                                        className="rounded-full border-2 border-[#78abfb] px-6 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        12th
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: age === "12-droppers" ? "#78abfb" : "transparent"
                                        }}
                                        onClick={() => setAge("12-droppers")}
                                        className="rounded-full border-2 border-[#78abfb] px-6 py-4 font-montserrat font-bold text-sm text-white"
                                    >
                                        12th Plus
                                    </button>
                                </div>
                            )}

                        </div>

                        <div className="p-4 md:p-5 text-center mt-8 border-t-2 border-slate-50">
                            <button
                                onClick={handleGetCoursesClick}
                                disabled={isDisabled}
                                style={{
                                    backgroundColor: isDisabled ? 'gray' : 'white',
                                    opacity: isDisabled ? 0.6 : 1
                                }}
                                className="py-2.5 px-24 ml-3 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-[#eee] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Explore Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalComponent;
