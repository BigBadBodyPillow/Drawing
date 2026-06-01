type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="rounded-lg container relative w-75 aspect-video border-4 border-white bg-zinc-900  grid place-content-center">
      {children}
    </div>
  );
}
