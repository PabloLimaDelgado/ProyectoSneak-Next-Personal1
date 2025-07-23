import React, { FC } from "react";

interface IOrderInfo {
  orderInfo: {
    title: string;
    info: number | string;
    icon: React.ReactNode;
  }[];
}

export const OrderInfo: FC<IOrderInfo> = ({ orderInfo }) => {
  return (
    <div className="flex flex-row justify-start p-5 gap-5 border-b-2 border-b-[color:var(--color-gray-30)] h-4/24 items-center">
      {orderInfo.map((order) => (
        <div
          key={order.title}
          className="flex flex-row w-3/12 border-1 custon-info-admin"
        >
          {order.icon}
          <div>
            <h4 className="text-[color:var(--color-gray-50)] font-['Roboto-Regular']">
              {order.title}
            </h4>{" "}
            <h5 className="text-3xl font-['Bebas_Neue']">{order.info}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
