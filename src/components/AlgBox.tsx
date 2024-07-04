import React from 'react';

interface AlgBoxProps {
    algContent: React.ReactNode;
    onStart: () => void;
    algName: string;
}

const AlgBox: React.FC<AlgBoxProps> = ({ algContent, onStart, algName }) => {
    return (
        <div className="flex flex-col justify-center items-center h-64 my-4">
            <div className="container md:flex md:justify-center">
                <div className="">
                    <div className="md max-w-[544px] p-4">
                        <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 p-4">
                            {algContent}
                            <div className="p-2">
                                <h2 className="mb-3 text-2xl font-bold">
                                    {algName}
                                </h2>
                                <p className="mb-3 max-w-none text-gray-500">
                                    <button className="rounded w-16 border-2 border-green-500 hover:bg-emerald-100 hover:text-black" onClick={onStart}>
                                        Start
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlgBox;
