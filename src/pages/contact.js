import React, { useRef } from "react";
import gsap from "gsap-trial";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";

import useIsomorphicLayoutEffect from "../helpers/useIsomorphicLayout";
import Layout from "../components/layout";

gsap.registerPlugin(MorphSVGPlugin);

const ContactPage = () => {
  const svgContainer = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#circle", {
        morphSVG: "#hippo",
        scrollTrigger: {
          trigger: svgContainer.current,
          start: "top top",
          end: "+=150%",
          markers: true,
          scrub: 1,
          pin: true,
        },
      });
    }, svgContainer);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <section className="w-full h-screen bg-blue-600 flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-white">ABOUT US PAGE</h1>
      </section>
      <section className="w-full h-screen bg-gray-100" ref={svgContainer}>
        <div className="flex h-full flex-col gap-4 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg2"
            x="0"
            y="0"
            enableBackground="new 9 80 800 400"
            version="1.1"
            viewBox="9 80 800 400"
            xmlSpace="preserve"
            className="w-[400px] mx-auto"
          >
            <path id="background" d="M9 80H809V480H9z" className="st0"></path>
            <path
              id="circle"
              d="M490.1 280.649c0 44.459-36.041 80.5-80.5 80.5s-80.5-36.041-80.5-80.5 36.041-80.5 80.5-80.5 80.5 36.041 80.5 80.5z"
              style={{ fill: "#CCCCCC" }}
            ></path>
            <path
              id="hippo"
              d="M148.802 244.876c2.737-36.735 16.107-69.079 40.099-97.061 27.038-31.596 60.924-47.386 101.629-47.386 15.481 0 38.483 2.447 69.024 7.287 30.541 4.886 53.533 7.278 69.033 7.278 23.693 0 57.868 8.847 102.526 26.477 7.914 3.009 17.471 11.239 28.701 24.59 6.381 7.886 16.256 19.769 29.616 35.568 3.036 2.139 6.998 5.316 11.865 9.595 4.859 4.223 8.194 6.063 9.997 5.456.616-1.84 2.149-4.4 4.578-7.735 1.214-1.225 1.962-1.832 2.261-1.832.935.607 1.831 1.215 2.747 1.832.906.616 1.205 2.419.906 5.456-.616 5.474-.906 7.138-.906 4.998-.327 3.056-.757 5.008-1.373 5.952-3.952 6.671-5.485 11.847-4.55 15.472.916 3.325 3.765 8.669 8.642 15.958 4.868 7.287 7.586 12.761 8.193 16.405-.299 2.728-.43 7.119-.43 13.211l-4.568 11.379c0 8.512 9.865 23.114 29.616 43.78 9.436 4.223 14.117 18.826 14.117 43.714 0 19.47-16.089 29.167-48.273 29.167-4.26 0-8.81-.13-13.678-.467-3.335-1.196-8.203-2.56-14.575-4.074-7.586-.934-12.761-3.494-15.48-7.773-4.877-6.95-12.781-13.509-23.711-19.581-1.823-.878-4.485-4.223-7.979-10.016-3.503-5.774-6.615-9.418-9.333-10.949-2.719-1.495-6.68-1.813-11.856-.878-8.81 1.494-13.677 2.261-14.574 2.261-2.139 0-5.25-.598-9.343-1.831-4.11-1.215-7.054-1.831-8.893-1.831-2.112 9.735-2.589 19.152-1.364 28.252.298 2.448 1.831 4.428 4.559 5.923 4.27 3.046 6.531 4.709 6.849 5.045 2.718 2.111 5.615 5.605 8.642 10.445.616 1.849-.523 4.952-3.419 9.342-2.887 4.41-5.223 7.008-7.063 7.736-1.813.785-5.765 1.178-11.847 1.178-8.82 0-12.295.131-10.464.43-12.145-1.831-18.984-2.878-20.516-3.158-7.587-1.532-14.126-3.943-19.582-7.305-2.756-1.813-5.913-10.333-9.557-25.524-3.681-16.406-6.717-26.272-9.137-29.635-.598-.896-1.355-1.326-2.261-1.326-1.533 0-4.045 1.494-7.53 4.559-3.494 2.99-5.858 4.652-7.054 5.008-4.242 17.9-6.4 26.402-6.4 25.468 0 7.007 1.972 12.892 5.924 17.77a261.175 261.175 0 0012.323 14.107c5.157 5.774 7.736 10.782 7.736 15.042 0 2.41-.748 4.521-2.28 6.372-6.381 7.885-17.022 11.847-31.905 11.847-16.713 0-27.644-2.28-32.792-6.839-6.699-5.774-10.949-11.865-12.762-18.199-.298-1.533-1.055-6.091-2.28-13.678-.607-4.578-1.98-7.287-4.082-8.184-6.101-.916-13.687-2.578-22.778-5.007-1.841-1.215-3.811-4.26-5.942-9.118-3.933-9.399-6.83-15.789-8.661-19.134-9.128-4.56-23.702-9.698-43.761-15.453-.916 1.831-1.345 4.373-1.345 7.718 3.335 4.26 8.343 10.8 15.032 19.581 5.466 7.288 8.203 14.295 8.203 20.965 0 12.781-8.203 19.134-24.609 19.134-12.453 0-20.955-.878-25.523-2.709-6.671-2.728-12.295-9.136-16.854-19.134-7.596-16.742-11.847-26.159-12.762-28.27-4.868-11.231-8.204-21.133-10.006-29.653-1.233-6.055-3.064-15.35-5.485-27.804-2.121-10.296-5.456-18.358-10.015-24.132-16.73-21.598-24.484-40.293-23.26-56.082z"
              style={{ visibility: "hidden" }}
            ></path>
          </svg>
        </div>
      </section>
      <section className="w-full h-screen bg-blue-600 flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-white">THE END</h1>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Us</title>;