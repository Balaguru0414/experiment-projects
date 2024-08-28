import Terminal from "./Terminal";

export default function Contact() {
  const config = {
    email: "youremail@gmail.com",
    phone: "+91 9876543210,",
  };

  return (
    <section
      id="contact"
      className="overflow-hidden flex flex-col bg-secondary px-5 py-32 text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4  border-primary mb-5 w-[150px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss more in detail, please contact me
        </p>

        <Terminal />
      </div>
    </section>
  );
}
