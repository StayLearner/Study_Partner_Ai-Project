"use client"

import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

import VantaBackground from '../course/[courseId]/_components/VantaGlobeBackground'

function Dashboard () {
  return (
    <div>
      <VantaBackground/>
    <div>
        <WelcomeBanner/>
        <CourseList/>
    </div>
    </div>
  )
}

export default Dashboard