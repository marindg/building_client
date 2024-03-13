import { ClerkProvider } from "@clerk/nextjs";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default MainLayout;
