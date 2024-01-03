import Image from "next/image";

const OgPage = () => {
  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="relative flex size-full h-[1081px] w-[1921px] flex-col items-start justify-between gap-4 border border-red-500 p-[100px]">
        <Image
          src="/logo.svg"
          height={125}
          width={125}
          alt="logo"
          className="rounded-3xl border shadow-item brightness-200"
        />
        <div className="absolute left-[100px] top-[100px] z-10 h-[125px] w-[125px] rounded-3xl bg-gradient-to-tr from-neutral-800/60 to-neutral-800/10" />
        <div>
          <h1 className="bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-100 bg-clip-text text-[6rem] font-semibold leading-tight text-transparent text-shadow-lg">
            Bharath Lakshman Kumar
          </h1>
          <p className="text-7xl font-medium text-neutral-400 text-shadow-sm">Software Engineer</p>
        </div>
      </div>
    </section>
  );
};

export default OgPage;
