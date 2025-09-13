"use client";
import data from "@/data/data";

export default function AboutMe() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">About Me</h2>
        <p className="text-justify text-gray-700 text-md md:text-lg leading-relaxed max-w-3xl mx-auto">
          {data.aboutMe}
        </p>
      </div>
    </section>
  );
}
