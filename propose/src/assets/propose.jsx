import React, { useState } from 'react';

function Propose() {
    const [celebrate, setCelebrate] = useState(false);
    const [yesFirst, setYesFirst] = useState(true);

    const handleYesClick = () => {
        setCelebrate(true);
    };

    const handleNoHover = () => {
        setYesFirst(prevState => !prevState);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('./Romantic.jpg')` }}>
            <div className="w-[500px] h-80 bg-white bg-opacity-30 backdrop-blur-md rounded-lg flex flex-col items-center justify-center text-center p-6 shadow-lg">
                {celebrate ? (
                    <div className="text-xl text-[#FFC0CB] font-extrabold bg-black bg-opacity-50 p-4 rounded-lg">
                       Now you are my girlfriend! 🎉
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl mb-[50px] font-extrabold">I Love you ❤️</h1>
                        <p className="mb-6 font-medium">Will you be my girlfriend?</p>
                        <div className="flex gap-4">
                            {yesFirst ? (
                                <>
                                    <button onClick={handleYesClick} className="px-[50px] py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Yes</button>
                                    <button onMouseEnter={handleNoHover} className="px-[50px] py-2 bg-red-500 text-white rounded-full hover:bg-red-600">No</button>
                                </>
                            ) : (
                                <>
                                    <button onMouseEnter={handleNoHover} className="px-[50px] py-2 bg-red-500 text-white rounded-full hover:bg-red-600">No</button>
                                    <button onClick={handleYesClick} className="px-[50px] py-2 bg-green-500 text-white rounded-full hover:bg-green-600">Yes</button>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Propose;
