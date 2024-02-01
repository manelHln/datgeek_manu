import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-center my-16 w-full max-w-[1400px] gap-8">
        <ServiceCard
          id="01"
          title="web development"
          description="I am a full stack web developper with the passion of making good looking and functional web applications"
          link="#"
        />
        <ServiceCard
          id="02"
          title="mobile app development"
          description="I am a full stack web developper with the passion of making good looking and functional web applications"
          link="#"
        />
        <ServiceCard
          id="03"
          title="api development"
          description="I am a full stack web developper with the passion of making good looking and functional web applications"
          link="#"
        />
      </div>
    </div>
  );
};

export default Services;
