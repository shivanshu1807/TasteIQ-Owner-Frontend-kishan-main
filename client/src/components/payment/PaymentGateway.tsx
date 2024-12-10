import React from "react";
import UPIForm from "./UPIForm";
import QRupload from "./QRupload";
import BankForm from "./BankForm";

const PaymentGateway = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex">
        <span className="font-medium text-md">Add Payment Gateway</span>
      </div>
      <QRupload />
      <UPIForm />
      <BankForm/>
    </div>
  );
};

export default PaymentGateway;
