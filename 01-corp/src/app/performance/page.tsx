import Hero from "@/components/hero";
import performanceImg from "/public/performance.jpg";

const Performance = () => {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
};

export default Performance;
