import React from 'react'

function Leaderboard() {
    const dummyData = [
        { name: "Alice", highscore: 98, idnum: 101 },
        { name: "Bob", highscore: 95, idnum: 102 },
        { name: "Charlie", highscore: 90, idnum: 103 },
        { name: "Dave", highscore: 85, idnum: 104 },
        { name: "Eve", highscore: 80, idnum: 105 },
        { name: "Frank", highscore: 75, idnum: 106 },
        { name: "Grace", highscore: 70, idnum: 107 },
        { name: "Hannah", highscore: 65, idnum: 108 },
        { name: "Ivy", highscore: 60, idnum: 109 },
        { name: "Jack", highscore: 55, idnum: 110 },
    ];

    return (
        <div className='flex w-full h-screen bg-primary items-end'>
            <div className='flex flex-col w-full h-5/6 bg-background rounded-t-[100px] p-24'>
                <div className='flex h-[40px] text-[64px] font-poppinsmed uppercase mb-6'>Leaderboard</div>
                <div className='w-full grid grid-cols-1 gap-2'>
                    {dummyData.map((item, index) => (
                        <div key={item.idnum} className={`flex w-full h-8 ${
                            index < 3 ? "bg-primary" : "bg-secondary"
                          } rounded-xl justify-between items-center px-10`}>
                            <div className='flex'>{item.name}</div>
                            <div>
                                <ul className='justify-between flex gap-12'>
                                    <li className='highscore text-center'>{item.highscore}</li>
                                    <li className='idnum text-center'>{item.idnum}</li>
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