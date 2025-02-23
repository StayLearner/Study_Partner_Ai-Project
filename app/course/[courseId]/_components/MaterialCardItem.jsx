// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { RefreshCcw } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";

// function MaterialCardItem({ item, studyTypeContent, course }) {

//   const [loading, setLoading] = useState(false);
//   const GenerateContent=async() => {
//     setLoading(true);
//     // console.log(course);

//     let chapters = '';
//     course?.courselayout.chapters.forEach((chapter) => {
//       chapters =(chapter.chapter_Title || chapter.chapterTitle)+','+ chapters
//     });
//       console.log(chapters);
       

//     const result = await axios.post('/api/study-type-content', {
//       courseId: course?.courseId,
//       type: item.name,
//       chapters: chapters,
//     });

//     setLoading(false);
//     console.log("API Worked");
    
//     console.log(result);
//   };



//   return (
//     <div
//       className={`border shadow-md rounded-lg p-5 flex flex-col items-center
//      ${studyTypeContent?.[item.type]?.length == null && "grayscale"}
//     `}
//     >
//       {studyTypeContent?.[item.type]?.length == null ? (
//         <h2 className="p-1 px-1 py-1 bg-gray-500 text-white rounded-full text-[10px] mb-2">
//           Not Ready
//         </h2>
//       ) : (
//         <h2 className="p-1 px-1 py-1 bg-green-500 text-white rounded-full text-[10px] mb-2">
//           Ready
//         </h2>
//       )}

//       <Image src={item.icon} alt={item.name} width={50} height={50} />
//       <h2 className="font-medium">{item.name}</h2>
//       <p className="text-gray-500 text-sm text-center">{item.description}</p>

//       {studyTypeContent?.[item.type]?.length == null ? (
//         <Button
//           className="mt-3 w-full"
//           variant="outline"
//           onClick={() => GenerateContent()}
//         >
//           {loading&& <RefreshCcw className="animate-spin"/>}
//           Generate
//         </Button>
//       ) : (
//         <Button className="mt-3 w-full" variant="outline">
//           View
//         </Button>
//       )}
//     </div>
//   );
// }

// export default MaterialCardItem;
import { Button } from "@/components/ui/button";
import axios from "axios";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function MaterialCardItem({ item, studyTypeContent, course }) {
  const [loading, setLoading] = useState(false);

  const GenerateContent = async () => {
    setLoading(true);

    // Extracting chapter titles and joining them as a string
    const chapters = course?.courselayout.chapters
      .map((chapter) => chapter.chapter_Title || chapter.chapterTitle)
      .join(",");

    console.log(chapters);

    const result = await axios.post("/api/study-type-content", {
      courseId: course?.courseId,
      type: item.name,
      chapters: chapters,
    });

    setLoading(false);
    console.log("API Worked", result);
  };

  return (
    <div
      className={`relative border-2 rounded-lg p-5 flex flex-col items-center transition-all duration-300 shadow-lg
      ${!studyTypeContent?.[item.type]?.length ? "grayscale" : ""}
      bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] border-sky-400 hover:border-teal-500 hover:shadow-xl`}
    >
      {/* Status Badge */}
      <h2
        className={`absolute top-2 right-2 p-1 px-2 rounded-full text-[10px] font-semibold 
        ${studyTypeContent?.[item.type]?.length ? "bg-green-500 text-white" : "bg-gray-500 text-white"}`}
      >
        {studyTypeContent?.[item.type]?.length ? "Ready" : "Not Ready"}
      </h2>

      {/* Image, Title, and Description */}
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className="font-bold text-lg text-black mt-2">{item.name}</h2>
      <p className="text-gray-600 text-sm text-center">{item.description}</p>

      {/* Button Logic (Making Only Buttons Clickable) */}
      <div className="pointer-events-auto w-full">
        {item.type === "flashcard" ? (
          <div className="mt-3 w-full text-center text-gray-500 text-sm">
            <p>Coming Soon</p>
            <p>In Next Update</p>
          </div>
        ) : !studyTypeContent?.[item.type]?.length ? (
          <Button
            className="mt-3 w-full bg-teal-400 hover:bg-teal-500 text-white"
            onClick={GenerateContent}
          >
            {loading && <RefreshCcw className="animate-spin mr-2" />}
            Generate
          </Button>
        ) : (
          <Button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white">
            View
          </Button>
        )}
      </div>
    </div>
  );
}

export default MaterialCardItem;
