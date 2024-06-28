import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Explore My Projects</h2>
        <p className="text-gray-500 my-2">
          You'll find everything from simple scripts to complex applications.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://gihub.com/OtaraAlex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="/github.png" />
      </div>
    </div>
  );
}
