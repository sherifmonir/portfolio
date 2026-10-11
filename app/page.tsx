import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center  bg-black-100  overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>

    </main>
  );
}
