import { useObserver } from "./Observer";

const Terminal = () => {
  const { isContactInView } = useObserver();

  return (
    <div
      className={`bg-gray-900 text-white text-xl p-4 md:px-10 
    rounded-lg shadow-lg ${
      isContactInView ? "animate-bottom opacity-100" : "opacity-0"
    }`}
    >
      <div className="flex items-center mb-4">
        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
      </div>

      <div className="mb-2">
        <p className="text-green-400">
          $ cd <span className="text-gray-400">contact</span>
        </p>
      </div>
      <div className="mb-2 space-y-2">
        <p className="text-green-400">
          $ cat <span className="text-gray-400 ">email.txt</span>
        </p>
        <p className="text-white">
          <span className="text-gray-400">&gt;</span> Email :{" "}
          <a href="mailto:balag0414@gmail.com">youremail@gmail.com</a>
        </p>
      </div>
      <div className="mb-2 space-y-2">
        <p className="text-green-400">
          $ cat <span className="text-gray-400 ">phone.txt</span>
        </p>
        <p className=" text-white">
          <span className="text-gray-400">&gt;</span> Phone :{" "}
          <a href="tel:+919876543210">+91 9876543210</a>
        </p>
      </div>
    </div>
  );
};

export default Terminal;
