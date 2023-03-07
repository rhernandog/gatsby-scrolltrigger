import React, { useRef } from "react";
import gsap from "gsap-trial";

import useIsomorphicLayoutEffect from "../helpers/useIsomorphicLayout";
import Layout from "../components/layout";

const IndexPage = () => {
  const boxesContainer = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 200,
          rotation: 360,
          scrollTrigger: {
            trigger: box,
            start: "top center",
            end: "+=200",
            markers: true,
            scrub: 1,
          },
        });
      });
    }, boxesContainer);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <section className="w-full h-screen bg-orange-500 flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-white">HOME PAGE</h1>
      </section>
      <section className="w-full h-screen bg-gray-100 flex flex-col gap-4 justify-center items-center" ref={boxesContainer}>
        <div className="box w-24 h-24 bg-teal-700 rounded-md"></div>
        <div className="box w-24 h-24 bg-teal-700 rounded-md"></div>
        <div className="box w-24 h-24 bg-teal-700 rounded-md"></div>
      </section>
      <section className="w-full h-screen bg-orange-500 flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-white">THE END</h1>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
