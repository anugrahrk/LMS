"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'

function CoursePreview({params}) {

    const [courseInfo,setCourseInfo]=useState([])
    useEffect(()=>{
        params&&getCourseInfoById();
    },[params])
/*
 * used to get course Info by slug name/id
 */
    const getCourseInfoById=()=>{
        GlobalApi.getCourseById(params?.courseId).then(resp=>{
             setCourseInfo(resp?.coursList) 
              
        })
    }

  return (
    <div className='grid grid-cols-1 md:grid-col-3 p-5 gap-3'>
            {/* Video description & title */}
                <div className='col-span-2 bg-white p-3'>
                    <CourseVideoDescription courseInfo={courseInfo} />

                </div>
            {/* Course Content */}
            <div>

            </div>
    </div>
  )
}

export default CoursePreview