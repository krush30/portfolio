import React, { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

const Project = ({
  setPreview,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [hidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex flex-col sm:flex-row flex-wrap items-start justify-between py-10 gap-6"
      >
        <div className="">
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer
      hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="" />
        </button>
      </div>
      <div
        className="bg-gradient-to-r from-transparent via-neutral-700 
      to-transparent h-[1px] w-full"
      />
      {hidden && (
        <ProjectDetailModal
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
