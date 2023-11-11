interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex sm:px-10 items-center px-2 py-6 h-16 border w-full">
      {children}
    </div>
  );
};

export default Container;
