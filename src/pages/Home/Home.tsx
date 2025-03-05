import { JSX } from "react";
import { NavigationBar } from "./NavigationBar";
import { PaymentButton } from "./PaymentButton";
// import { useIsMobile } from "@/hooks/use-mobile";

export const Home = (): JSX.Element => {
  // const isMobile = useIsMobile();
  return (
    <>
      <div className="NavBar">
        <div className="NavBar2"></div>
        <NavigationBar />
      </div>

      <div>
        <PaymentButton />
      </div>
    </>
  );
};
