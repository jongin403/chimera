import Home from './Home';

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Home />
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
