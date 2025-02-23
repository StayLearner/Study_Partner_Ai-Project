"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const ViewNotes = () => {
  const { courseId } = useParams();
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    GetNotes();
  }, [courseId]); // Ensures data refresh if courseId changes

  const GetNotes = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "notes",
      });
      setNotes(result?.data || []);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };



  
  const cleanHtml = (htmlContent) => {
    try {
      let content = htmlContent.replace(/\\n/g, "").replace(/\s+/g, " ").trim();
  
      content = content.replace(/^\{.*?"content":\s*"/, ""); 
      content = content.replace(/^\{.*?"htmlContent":\s*"/, "");
      content = content.replace(/^\{.*?"Content":\s*"/, "");
  
      content = content.replace(/"}$/, "");
      // Extract only the JSON part if improperly formatted
      const jsonMatch = content.match(/\[{.*}\]/);
      if (jsonMatch) {
        const jsonString = jsonMatch[0];
        const jsonArray = JSON.parse(jsonString);
        
        // Concatenate contents properly
        content = jsonArray.map(item => `<h2>${item.title}</h2><p>${item.content}</p>`).join("");
      }
  
      // Apply formatting
      const processedContent = content
        .replace(/<h1>(.*?)<\/h1>/g, '<div class="text-3xl font-bold mb-4">$1</div>')
        .replace(/<h2>(.*?)<\/h2>/g, '<div class="text-2xl font-semibold mt-6 mb-3">$1</div>')
        .replace(/<p>(.*?)<\/p>/g, '<div class="text-gray-600 mb-4">$1</div>')
        .replace(/<ul>(.*?)<\/ul>/g, '<div class="space-y-2 mb-4">$1</div>')
        .replace(/<li>(.*?)<\/li>/g, '<div class="flex items-start"><span class="text-gray-400 mr-2">•</span><div class="text-gray-700">$1</div></div>');
  
      return processedContent;
    } catch (error) {
      console.error("Error parsing content:", error);
      return "<div class='text-red-500'>Error loading content</div>";
    }
  };
  
  if (!notes.length) return <div className="text-center py-10">Loading notes...</div>;

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto p-6">
        {/* Navigation */}
        <div className="flex gap-4 items-center mb-6">
          <button
            onClick={() => stepCount > 0 && setStepCount(stepCount - 1)}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
            disabled={stepCount === 0}
          >
            Previous
          </button>
          <div className="flex-1 flex gap-2">
            {notes.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full ${index <= stepCount ? "bg-teal-400" : "bg-gray-200"}`}
              />
            ))}
          </div>
          <button
            onClick={() => stepCount < notes.length - 1 && setStepCount(stepCount + 1)}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
            disabled={stepCount === notes.length - 1}
          >
            Next
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: cleanHtml(notes[stepCount].notes),
            }}
          />
        </div>

        {/* End of Notes Section */}
        {stepCount === notes.length - 1 && (
          <div className="flex items-center gap-10 flex-col justify-center mt-6">
            <h2 className="text-xl font-semibold">End of Notes</h2>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go To Course Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewNotes;
