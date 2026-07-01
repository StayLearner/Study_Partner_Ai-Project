"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

import { showErrorToast } from '@/lib/toast';
import BackButton from '@/components/ui/back-button';

const ViewNotes = () => {
  const { courseId } = useParams();
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    GetNotes();
  }, [courseId]);

  const GetNotes = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "notes",
      });
      setNotes(result?.data || []);
    } catch (error) {
      showErrorToast("Failed to fetch notes", error);
    }
  };

  const cleanHtml = (htmlContent) => {
    try {
      let content = htmlContent.replace(/\\n/g, "").replace(/\s+/g, " ").trim();
  
      content = content.replace(/^\{.*?"content":\s*"/, ""); 
      content = content.replace(/^\{.*?"htmlContent":\s*"/, "");
      content = content.replace(/^\{.*?"Content":\s*"/, "");
      content = content.replace(/^\{.*?"chaptersContent":\s*"/, "");
  
      content = content.replace(/"}$/, "");
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        try {
          const jsonString = jsonMatch[0];
          const jsonArray = JSON.parse(jsonString);
          if (Array.isArray(jsonArray)) {
            content = jsonArray
              .map(item => `<h2>${item.title || ""}</h2><p>${item.content || ""}</p>`)
              .join("");
          }
        } catch (jsonErr) {
          console.warn("Notes JSON parse skipped (not valid JSON array):", jsonErr.message);
        }
      }
  
      const processedContent = content
        .replace(/<h1>(.*?)<\/h1>/g, '<div class="text-2xl sm:text-3xl font-bold mb-4">$1</div>')
        .replace(/<h2>(.*?)<\/h2>/g, '<div class="text-xl sm:text-2xl font-semibold mt-6 mb-3">$1</div>')
        .replace(/<p>(.*?)<\/p>/g, '<div class="text-gray-600 text-sm sm:text-base mb-4">$1</div>')
        .replace(/<ul>(.*?)<\/ul>/g, '<div class="space-y-2 mb-4">$1</div>')
        .replace(/<li>(.*?)<\/li>/g, '<div class="flex items-start"><span class="text-gray-400 mr-2">•</span><div class="text-gray-700 text-sm sm:text-base">$1</div></div>');
  
      return processedContent;
    } catch (error) {
      console.error("Error parsing content:", error);
      return "<div class='text-red-500'>Error loading content</div>";
    }
  };
  
  if (!notes.length) return (
    <div className="flex items-center justify-center py-16">
      <div className="text-center text-gray-400">
        <p className="text-base animate-pulse">Loading notes…</p>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        {/* Back Button */}
        <div className="mb-4">
          <BackButton fallback={`/course/${courseId}`} />
        </div>

        {/* Navigation */}
        <div className="flex gap-2 sm:gap-4 items-center mb-6">
          <button
            onClick={() => stepCount > 0 && setStepCount(stepCount - 1)}
            className="px-3 sm:px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 text-sm font-medium shrink-0 transition-colors"
            disabled={stepCount === 0}
          >
            ← Prev
          </button>

          {/* Step indicator dots — scrollable on tiny screens */}
          <div className="flex-1 flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {notes.map((_, index) => (
              <button
                key={index}
                onClick={() => setStepCount(index)}
                className={`h-2 flex-shrink-0 rounded-full transition-all duration-300 ${
                  index === stepCount
                    ? "bg-teal-500 w-6"
                    : index < stepCount
                    ? "bg-teal-300 w-4"
                    : "bg-gray-200 w-4"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => stepCount < notes.length - 1 && setStepCount(stepCount + 1)}
            className="px-3 sm:px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 text-sm font-medium shrink-0 transition-colors"
            disabled={stepCount === notes.length - 1}
          >
            Next →
          </button>
        </div>

        {/* Step counter */}
        <p className="text-xs text-gray-400 text-center mb-4">
          {stepCount + 1} / {notes.length}
        </p>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-8">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: cleanHtml(notes[stepCount].notes),
            }}
          />
        </div>

        {/* End of Notes Section */}
        {stepCount === notes.length - 1 && (
          <div className="flex flex-col items-center gap-4 mt-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">🎉 End of Notes</h2>
            <button
              onClick={() => router.back()}
              className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
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
