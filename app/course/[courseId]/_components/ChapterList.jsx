import React from "react";

function ChapterList({course}) {
  const CHAPTERS = course?.courselayout?.chapters;
  return (
    <div className="mt-5">
      <h2 className="font-medium text-xl sm:text-2xl">Chapters</h2>
      <div 
      className="mt-3">
        {CHAPTERS?.map((chapter , index) => (

          <div 
         key={index}
          className="flex gap-3 sm:gap-5 items-start sm:items-center p-3 sm:p-4 border shadow-sm mb-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
            <h2 className="text-2xl">{chapter?.emoji}</h2>
            <div>
              <h2 className="font-medium text-sm sm:text-base">
                {chapter?.courselayout?.chapterTitle}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5">{chapter?.chapterSummary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) ;
}

export default ChapterList;
