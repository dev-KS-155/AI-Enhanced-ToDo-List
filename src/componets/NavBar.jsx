import React, { useRef, useState } from 'react'

function NavBar() {

    const tabRef = useRef();
    const mobileRef = useRef();
    const mobileAppend = useRef();
    const mobileArrow = useRef();
    const mobileToggle = useRef();
    const mobileContain = useRef();

    const [tabletflag, setTabletflag] = useState(false);
    const [mobileflag, setMobileflag] = useState(false);
    const [toggleflag, setToggleflag] = useState(false);


    function addPagesTablet() {
        if (tabletflag === false) {
            tabRef.current.className = "contents";
            setTabletflag(true);
        }
        else{
            tabRef.current.className = "hidden";
            setTabletflag(false);
        }
    }
    function removePagesTablet() {
        if (tabletflag === true) {
            tabRef.current.className = "hidden";
            setTabletflag(false);
        }
    }


    function toggle() {
        if(toggleflag === false){
            mobileToggle.current.src="cross.png";
            mobileContain.current.className="contents";
            setToggleflag(true);
        }
        else{
            mobileToggle.current.src="menu.png";
            mobileContain.current.className="hidden";
            setToggleflag(false);
        }
    }

    function append(){
        if(mobileflag === false){
            mobileAppend.current.className='contents'
            mobileArrow.current.src="toggleAbove.png"
            mobileAppend.current.appendChild(mobileRef.current);
            setMobileflag(true);
        }
        else{
            mobileAppend.current.className='hidden'
            mobileArrow.current.src="toggleBello.png"
            setMobileflag(false)
        }
    }

    return (
        <>
            <div className=' hidden md:contents'>
                {/* destop & laptop */}
                <div className=' text-black  flex flex-row justify-between items-center p-4 px-10 text-lg font-medium '>
                    <div>
                        <img className='w-[20%]' src="Todo.png" alt="ToDo" />
                    </div>
                    <div>
                        <ul className='flex flex-row gap-16 ml-[-100px]'>
                            <li><a className='hover:text-blue-800' href="#">Home</a></li>
                            <li><a className='hover:text-blue-800' href="#">Feature</a></li>
                            <li><a className='hover:text-blue-800' href="#">Resource</a></li>
                            <li><a className='hover:text-blue-800' href="#">Pricing</a></li>
                            <li><a className='hover:text-blue-800' href="#">About Us</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <button className=' hover:bg-slate-100 rounded-md p-3 px-7'>Login</button>
                        <button className=' bg-orange-600 rounded-md p-3'>Start for Free</button>
                    </div>
                </div>
                <hr />
            </div>

            <div className='hidden sm:contents md:hidden' onClick={removePagesTablet}>
                {/* tablet */}
                <div className=' text-black  flex flex-row justify-between items-center p-4 px-10 text-lg font-medium '>
                    <div >
                        <img className='w-[15%]' src="Todo.png" alt="ToDo" />
                    </div>

                    <div>
                        <a className='hover:text-blue-800 ml-[-150%]' href="#">Home</a>
                    </div>
                    <div>
                        <a className='hover:text-blue-800 ml-[-90%]' href="#" onMouseOver={addPagesTablet} >ToDo</a>
                    </div>
                    <div>
                        <button className=' bg-orange-600  px-2 p-2 rounded-md'>Start for Free</button>
                    </div>
                </div>
                <hr />

                <div className=' hidden ' ref={tabRef}>
                    <ul className=' flex flex-col justify-around border rounded-md w-[40%] ml-[55%] pl-4 h-[275px] '>
                        <li><a className='hover:text-blue-800' href="#">Feature</a></li>
                        <li><a className='hover:text-blue-800' href="#">Resource</a></li>
                        <li><a className='hover:text-blue-800' href="#">Pricing</a></li>
                        <li><a className='hover:text-blue-800' href="#">About Us</a></li>
                    </ul>
                </div>
            </div>

            <div className='sm:hidden'>
                {/* ---mobile-- */}
                <div className=' flex flex-row justify-between p-4 px-6'>
                    <div>
                        <img className='w-[18%]' src="Todo.png" alt="ToDo" />
                    </div>
                    <div>
                        <img src="menu.png" alt="Menu" onClick={toggle} ref={mobileToggle} />
                    </div>
                </div>
                <hr />
            </div>

            <div className='hidden' ref={mobileContain}>
                <ul className=' flex flex-col gap-8 p-8 font-medium'>
                    <li><a className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 block' href="#">Home</a></li>
                    <li><a className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 block' blockhref="#">Feature</a></li>
                    <li className=' flex flex-row justify-between hover:bg-slate-100 rounded-md p-2 pl-3.5 hover:text-blue-800'>
                        <a className='hover:text-blue-800 rounded-md hover:bg-slate-100 block' href="#" onClick={append}>Resource</a>
                        <img className='w-[25px]' src="toggleBello.png" alt="downArrow" ref={mobileArrow}/>
                    </li>
                    <li className='hidden' ref={mobileAppend}></li>
                    <li><a className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 block' href="#">Pricing</a></li>
                    <li><a className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 block' href="#">About Us</a></li>
                    <li><hr /></li>
                    <li className='flex flex-row justify-around '>
                        <button className='bg-slate-100 rounded-md p-3 px-7 w-[40%]'>Login</button>
                        <button className='bg-orange-600 rounded-md p-3 w-[40%]'>Start for free</button>
                    </li>
                </ul>

                <ul className=' hidden'>
                    <ul className=' flex flex-col gap-y-4 mx-[8%] mt-[-5%]' ref={mobileRef}>
                        <li className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 '>Templates</li>
                        <li className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 '>Github</li>
                        <li className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 '>Blog</li>
                        <li className='hover:text-blue-800 p-2 pl-3.5 rounded-md hover:bg-slate-100 '>Help Center</li>
                    </ul>
                </ul>
            </div>
        </>
    )
}

export default NavBar
