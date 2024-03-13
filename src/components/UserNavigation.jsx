import React from "react";
import { Disclosure } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const UserNavigation = ({ handleLogout }) => {
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", onClick: handleLogout },
  ];

  return (
    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
      {userNavigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          onClick={item.onClick}
          className={classNames(
            "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
          )}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
};

export default UserNavigation;
