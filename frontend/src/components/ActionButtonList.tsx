import {
  useDisconnect,
  useAppKit,
  useAppKitNetwork,
} from "@reown/appkit/react";
import { networks } from "../config";
import { useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";
export const ActionButtonList = () => {
  const { address, caipAddress, isConnected } = useAppKitAccount();

  useEffect(() => {
    console.log(" add address", address);
    console.log("add caipAddress", caipAddress);
    console.log(" add isConnected", isConnected);
  }, [address, caipAddress, isConnected]);
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const { switchNetwork } = useAppKitNetwork();

  const openModal = () => {
    open();
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };
  return (
    <div>
      <button onClick={() => openModal()}>Connect Wallet</button>
      {/* <button onClick={handleDisconnect}>Disconnect</button> */}
      {/* <button onClick={() => switchNetwork(networks[1]) }>Switch</button> */}
    </div>
  );
};
