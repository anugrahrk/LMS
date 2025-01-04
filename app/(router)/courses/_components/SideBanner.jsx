import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanner() {
    const[SideBannerList,setSideBannerList]=useState([]);
    useEffect(()=>{
        getSideBanner();
    },[])
    const getSideBanner=()=>{
        GlobalApi.getSideBanner().then(resp=>{
            console.log(resp);
            setSideBannerList(resp?.sideBanners)
        })
    }
  return (
    <div>
        {SideBannerList.map((item,index)=>(
            <div key={index}>
                <Image src={item.banner.url} alt='banner' width={500}
                height={300} 
                onClick={()=>window.open(item?.url)}
                className='rounded-xl cursor-pointer'/>
                </div>
        ))}
    </div>
  )
}

export default SideBanner