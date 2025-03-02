"use client";

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import CourseCardItem from './CourseCardItem';
import { RefreshCw, Menu, Plus, UserCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CourseCountContext } from '@/app/_context/CourseCountContext';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

function CourseList() {
  const { user } = useUser();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { totalCourse, setTotalCourse } = useContext(CourseCountContext);

  useEffect(() => {
    user && GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    setLoading(true);
    const result = await axios.post('/api/courses', { createdBy: user?.primaryEmailAddress?.emailAddress });

    // console.log("getCourseList ", result);
    setCourseList(result.data.result);
    setLoading(false);
    setTotalCourse(result.data.result?.length);
  };

  return (
    <div className='mt-10'>
      {/* Header with Refresh Button (Desktop) and Mobile Controls */}
      <h2 className='font-bold text-2xl flex justify-between items-center'>
        Study Materials

        {/* Mobile Controls: Create, Refresh, Dropdown */}
        <div className="md:hidden flex gap-2">
          <Button asChild variant="outline" className="border-black text-white bg-black text-lg">
            <Link href="/create">+ Create</Link>
          </Button>

          {/* Mobile Refresh Button */}
          <Button variant="outline" onClick={GetCourseList} className="border-black text-black text-lg">
            <RefreshCw />
          </Button>

          {/* Mobile Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-black text-black text-lg">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/upgrade" className='font-medium flex items-center gap-2'>
                  <Shield /> Upgrade
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className='font-medium flex items-center gap-2'>
                  <UserCircle /> Profile
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Refresh Button */}
        <Button 
          variant="outline" 
          onClick={GetCourseList} 
          className="border-teal-500 text-teal-500 text-lg hidden md:flex"
        > 
          <RefreshCw /> Refresh
        </Button>
      </h2>

      {/* Course Cards */}
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-5'>
        {!loading ? (
          courseList?.map((course, index) => (
            <CourseCardItem course={course} key={index} />
          ))
        ) : (
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='h-56 w-full bg-slate-200 rounded-lg animate-pulse'></div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseList;
