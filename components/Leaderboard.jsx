import React from 'react'

function Leaderboard() {
    const dummyData = [
        { name: "Alice", highscore: 98},
        { name: "Bob", highscore: 95},
        { name: "Charlie", highscore: 90},
        { name: "Dave", highscore: 85},
        { name: "Eve", highscore: 80},
        { name: "Frank", highscore: 75},
        { name: "Grace", highscore: 70},
        { name: "Hannah", highscore: 65},
        { name: "Ivy", highscore: 60},
        { name: "Jack", highscore: 55},
    ];

    return (
        <div className='flex w-full h-screen bg-primary items-center md:items-end'>
            <div className='flex items-center md:items-start flex-col w-full h-5/6 bg-background rounded-[50px] md:rounded-b-none md:rounded-t-[100px] py-24 px-10 md:px-24'>
                <h1 className='flex h-[40px] mb-8 md:mb-16'>Leaderboard*</h1>
                <div className='w-full grid grid-cols-1 gap-2  md:px-0'>
                    {dummyData.map((item, index) => (
                        <div key={item.id} className={`flex w-full overflow-hidden h-8 ${
                            index < 3 ? "bg-primary" : "bg-secondary"
                          } rounded-xl justify-between items-center px-10`}>
                            <div className='flex'>{item.name}</div>
                            <div>
                                <ul className='justify-between flex gap-12'>
                                    <li className='highscore text-center'>{item.highscore}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard