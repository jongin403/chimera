import GuestBook from './GuestBook';

type Props = {
  children: React.ReactNode;
};

const GuestBookLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>GuestBookLayout</h1>
      <GuestBook />
      <div>{children}</div>
    </div>
  );
};

export default GuestBookLayout;
