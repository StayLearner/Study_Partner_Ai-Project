"use client"

import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Dashboard () {
  return (
    <div>
      <div>
          <WelcomeBanner/>
          <CourseList/>
      </div>
    </div>
  )
}

export default Dashboard