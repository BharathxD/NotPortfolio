const EmptyPage = () => (
  <section className="flex size-full min-h-[90dvh] flex-col items-center justify-center px-4 md:px-10">
    <div>
      <div className="relative z-20 mb-4 h-px bg-glare opacity-80" />
      <h1 className="flex flex-col items-center justify-center gap-2 text-balance bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center text-3xl font-semibold text-transparent text-shadow-lg md:text-5xl">
        <span>{"눈_눈"}</span>
        <span>Still working on this page.</span>
      </h1>
      <div className="relative z-20 mt-4 h-px bg-glare opacity-80" />
    </div>
  </section>
);

export default EmptyPage;
