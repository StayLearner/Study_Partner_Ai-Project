import React from "react";

function ChapterList({course}) {
  const CHAPTERS = course?.courselayout?.chapters;
  return (
    <div className="mt-5">
      <h2 className="font-medium text-2xl ">Chapters</h2>
      <div 
      className="mt-3">
        {CHAPTERS?.map((chapter , index) => (

          <div 
         key={index}
          className="flex gap-5 items-center p-4 border shadow-md mb-2 rounded-lg cursor-pointer ">
            <h2 className="text-2xl">{chapter?.emoji}</h2>
            <div>
              <h2 className="font-medium">
                {chapter?.courselayout?.chapterTitle}
              </h2>
              <p className="text-black text-base">{chapter?.chapterSummary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) ;
}

export default ChapterList;
