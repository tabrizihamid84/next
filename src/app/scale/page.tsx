import Hero from "@/components/hero";
import scaleImg from "/public/scale.jpg";

const Scale = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory"
      title="Scale ypur app to infinity"
    />
  );
};

export default Scale;
