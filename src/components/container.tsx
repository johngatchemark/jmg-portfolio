function Container({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col w-screen justify-between items-center">
      {children}
    </article>
  );
}

export default Container;
