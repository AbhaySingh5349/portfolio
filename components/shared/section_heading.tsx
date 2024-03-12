type SectionHeadingData = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingData) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center text-black/80">
      {children}
    </h2>
  );
};

export default SectionHeading;
