import { Button } from "@/components/ui/button";

export const PaymentButton: React.FC = () => {
  const upiId = "yashmayughorpade@okhdfcbank";
  const name = "Yash%20Ghorpade";
  const amount = "150";
  const eventName = "Invicta";
  const upiLink =
    "upi://pay?pa=" +
    upiId +
    "&pn=" +
    name +
    "&am=" +
    amount +
    "&cu=INR&tn=" +
    eventName;

  const handlePayment = () => {
    window.location.href = upiLink;
  };

  return <Button onClick={handlePayment}>Pay</Button>;
};
