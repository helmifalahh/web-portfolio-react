import React from 'react'
import Marquee from 'react-fast-marquee';

type Props = {}

const MarqueePage = (props: Props) => {
  return (
    <div>
        <Marquee autoFill>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Android_robot_head.svg/768px-Android_robot_head.svg.png' alt="Android" />
                <div>Android</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/900px-Kotlin_Icon.png' alt="Kotlin" />
                <div>Kotlin</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png' alt="Java" />
                <div>Java</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433' alt="Javascript" />
                <div>Javascript</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
                <div>React.js</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/>
                <div>GitHub</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042'/>
                <div>tailwindcss</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png'/>
                <div>Firebase</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://www.litespeedtech.com/images/icons/nodejs.png'/>
                <div>Node.js</div>
            </div>
        </Marquee>

        <Marquee autoFill direction='right' className="">
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042'/>
                <div>tailwindcss</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Android_robot_head.svg/768px-Android_robot_head.svg.png' alt="Android" />
                <div>Android</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png' alt="Java" />
                <div>Java</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433' alt="Javascript" />
                <div>Javascript</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png'/>
                <div>Firebase</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0.5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/900px-Kotlin_Icon.png' alt="Kotlin" />
                <div>Kotlin</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://www.litespeedtech.com/images/icons/nodejs.png'/>
                <div>Node.js</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
                <div>React.js</div>
            </div>
            <div className='bg-white border-2 border-sky-500 m-1 rounded-md flex space-x-0-5 p-2 text-base cursor-pointer'>
                <img className="h-4 m-1" src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/>
                <div>GitHub</div>
            </div>
        </Marquee>
    </div>
  )
}

export default MarqueePage