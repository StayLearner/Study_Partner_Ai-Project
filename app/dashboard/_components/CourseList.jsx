"use client";

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import CourseCardItem from './CourseCardItem';
import { RefreshCw, Menu, Plus, User2Icon, Shield, UserCircle } from 'lucide-react'; // Added Plus icon
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

    console.log("getCourseList ", result);
    setCourseList(result.data.result);
    setLoading(false);
    setTotalCourse(result.data.result?.length);
  };

  return (
    <div className='mt-10'>
      {/* Header with Refresh Button (Desktop) and Dropdown (Mobile) */}
      <h2 className='font-bold text-2xl flex justify-between items-center'>
        Study Materials
        
        {/* Show Create Button & Dropdown Menu on Mobile */}
        <div className="md:hidden flex gap-2">
          <Button asChild variant="outline" className="border-black text-white bg-black text-lg">
            <Link href="/create">
              + Create New
            </Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-black text-black text-lg">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* <DropdownMenuItem asChild>
                <Link href="/create" className='font-medium flex items-center gap-2'>
                  Create
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <Link href="/dashboard/upgrade" className='font-medium '>
                <Shield/>
                Upgrade</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className='font-medium'>
                <UserCircle/>
                Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Refresh Button for Larger Screens */}
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
