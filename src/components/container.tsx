function Container({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col w-full max-w-full justify-between items-center overflow-x-clip">
      {children}
    </article>
  );
}

export default Container;
