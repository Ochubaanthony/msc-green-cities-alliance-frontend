import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function SearchModal({ isOpen, setIsOpen }) {
  const searchButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        className="relative z-10"
        initialFocus={searchButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 origin-top"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-100 bg-opacity-98 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-transparent transition-all w-full  flex items-center justify-center p-4">
                <div className="relative mx-auto w-full md:w-[60%] lg:w-1/2">
                  <input
                    className="form-control outline-none outline-2 outline-secondary/25 focus:outline-4 focus:outline-secondary/50 w-full py-4 px-5 rounded-full"
                    type="search"
                    placeholder="Enter product or company name"
                  />
                  <button
                    type="submit"
                    className="transition-all ease-in-out absolute bg-secondary h-14 w-14 rounded-full text-primary hover:text-accent flex justify-center items-center"
                    style={{ top: 0, bottom: 0, right: 0 }}
                    ref={searchButtonRef}
                  >
                    <MagnifyingGlassIcon
                      className="h-8 w-8"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

SearchModal.propTypes = {
  /**
   *
   * You can declare that a prop is a specific JS primitive. By default, these
   * are all optional.
   * optionalArray: PropTypes.array,
   * optionalBigInt: PropTypes.bigint,
   * optionalBool: PropTypes.bool,
   * optionalFunc: PropTypes.func,
   * optionalNumber: PropTypes.number,
   * optionalObject: PropTypes.object,
   * optionalSymbol: PropTypes.symbol,
   *
   * Anything that can be rendered: numbers, strings, elements or an array
   * (or fragment) containing these types.
   * see https://reactjs.org/docs/rendering-elements.html for more info
   * optionalNode: PropTypes.node,
   * optionalElement: PropTypes.element,
   * title: PropTypes.string,
   *
   *
   */

  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
