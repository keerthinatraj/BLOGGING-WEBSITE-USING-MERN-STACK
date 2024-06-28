import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Alex's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Alex's Blog! This is a place for software developers
              and engineers to learn and grow. The blog is maintained by Alex
              Otara, a software engineer and web developer based in Nairobi,
              Kenya.
            </p>

            <p>
              We publish articles on web development, software engineering, and
              programming. We also publish articles on other topics such as
              career advice, productivity, and personal development. We believe
              that a well-rounded developer is not only skilled in programming
              but also in other areas of life.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
