import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import SidebarItem from "./SidebarItem";

function Sidebar({ menu, setMenu, children }) {
  return (
    <>
      <div className="fixed max-w-2xl mx-auto w-48 font-roboto">
        <div className="md:block hidden ">{children}</div>

        <Transition.Root show={menu} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={setMenu}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed top-14 inset-y-0 left-0 w-56 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="-translate-x-0"
                  leave="-transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="-translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <div className="relative w-screen max-w-md">
                    <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                      <div className="relative flex-1 -mt-14 px-1">
                        {children}
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}

export default Sidebar;
