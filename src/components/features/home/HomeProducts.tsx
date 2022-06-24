import React, { useState, useMemo } from 'react'
import TitleSection from '@/components/shared/TitleSection'
import Image from '@/components/shared/Image'
import HomeCircleItem from '@/components/shared/HomeCircleItem'
import { CirSlide } from '@/constants'
import { motion, useCycle } from 'framer-motion'


const transition = [0.33, 1, 0.68, 1];

const HomeProducts = () => {
    const [index, setIndex] = useState(0)
    const [isOpen, toggleOpen] = useState(true);
    console.log(isOpen);
    
    const activeSlide = useMemo(() => CirSlide[index], [CirSlide, index]);

    return (
        <React.Fragment>
            <div className='w-full min-h-[100vh] md:px-16 px-4 py-20 bg-black relative'>
                <TitleSection title='All Products' />
                <div className='w-full h-full bg-transparent flex items-center justify-center flex-col mt-20'>
                    <div className='w-[500px] h-[500px] bg-transparent rounded-full border-[2px] border-[#D9D9D9] relative'>
                        <motion.div
                            // initial={isOpen ? 'closed': 'open'}
                            // animate={isOpen ? "open" : "closed"}
                            // exit={isOpen ? 'closed': 'open'}
                            // transition={transition}
                            className='w-full h-full relative rounded-full'
                        >
                            <Image src={activeSlide.coverImage} layout='fill' objectFit='cover' alt='logo' className='rounded-full' />
                        </motion.div>
                        {/* <div className='w-full h-full flex items-center justify-center'>{activeSlide.title}</div> */}
                        <div className='w-full h-full absolute inset-0 transition duration-500'>
                            <div className='w-full h-full relative'>
                                {
                                    CirSlide.map((item, indexA) => (
                                        <HomeCircleItem 
                                            key={indexA} 
                                            className={item.className} 
                                            iconImage={item.iconImage} 
                                            setIndex={setIndex}
                                            index={index}
                                            id={item.id}
                                            toggleOpen={toggleOpen}
                                            isOpen={isOpen}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='text-white z-50 mt-36 ml-6'>xem thêm</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(HomeProducts)