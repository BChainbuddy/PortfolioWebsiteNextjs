export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="lg:p-8 lg:mt-4 sm:mt-14">
      <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
        {title}
      </h1>
    </div>
  );
}
