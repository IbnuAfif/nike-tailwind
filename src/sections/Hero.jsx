import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container mx-auto">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 text-coral-red inline-block">Nike </span> shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-4 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active lifestyle
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe collection"
          height={500}
          width={610}
          className="object-contain relative z-10"
        />
        <div>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
