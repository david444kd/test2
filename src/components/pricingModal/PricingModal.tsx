import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Link,
} from "@nextui-org/react";

declare global {
  interface Window {
    TinkoffPayForm: {
      createPayForm: (config: any) => void;
    };
    Pay: () => void;
  }
}

const PaymentModal = ({
  amount,
  onClose,
  isOpen = true,
}: {
  amount: number;
  onClose: () => void;
  isOpen?: boolean;
}) => {
  useEffect(() => {
    const loadPaymentScripts = async () => {
      const tinkoffScript = document.createElement("script");
      tinkoffScript.src =
        "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
      tinkoffScript.async = true;

      const robokassaScript = document.createElement("script");
      robokassaScript.src =
        "https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.js?EncodedInvoiceId=AJ0aFhUlW0m_kq5LgPPf3Q";
      robokassaScript.async = true;

      document.body.appendChild(tinkoffScript);
      document.body.appendChild(robokassaScript);

      return () => {
        document.body.removeChild(tinkoffScript);
        document.body.removeChild(robokassaScript);
      };
    };

    loadPaymentScripts();
  }, []);

  const handleTinkoffPayment = () => {
    if (typeof window.TinkoffPayForm?.createPayForm === "function") {
      window.TinkoffPayForm.createPayForm({
        terminalkey: "1739218309825DEMO",
        frame: false,
        language: "ru",
        amount: amount * 100,
        receipt: {
          EmailCompany: "antony@greatleads.ru",
          Taxation: "usn_income",
          FfdVersion: "1.2",
          Items: [
            {
              Name: "Оплата",
              Price: amount * 100,
              Quantity: 1.0,
              Amount: amount * 100,
              PaymentMethod: "full_prepayment",
              PaymentObject: "service",
              Tax: "none",
              MeasurementUnit: "pc",
            },
          ],
        },
      });
    } else {
      console.error(Error);
    }
  };

  const handleRobokassaPayment = () => {
    if (typeof window.Pay === "function") {
      window.Pay();
    } else {
      console.error(Error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Выбор метода оплаты
        </ModalHeader>
        <ModalBody className="gap-4 pb-6">
          <div className="flex flex-col space-y-4">
            <Link
              href={`https://go.greatleads.ru/book_payment_${amount}`}
              className="w-full"
            >
              <Button className="w-full">Купить через Gumroad</Button>
            </Link>
            <Button
              onClick={handleTinkoffPayment}
              className="w-full bg-yellow-400 text-black"
            >
              Тинькофф
            </Button>
            <Button
              onClick={handleRobokassaPayment}
              className="w-full bg-blue-600 text-white"
            >
              Робокасса
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
