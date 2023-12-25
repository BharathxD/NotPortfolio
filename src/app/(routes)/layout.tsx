import Navbar from "~/components/navigation/navbar";

interface Props extends React.PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen max-h-dvh w-full p-2">
      <div className="mx-auto w-full max-w-5xl">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
