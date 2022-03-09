import { Outlet } from "react-router-dom";
//@tsignore
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Layout = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="101060685879386"
        appId="884744029056481"
      />
      <Outlet />
    </div>
  );
};

export default Layout;
