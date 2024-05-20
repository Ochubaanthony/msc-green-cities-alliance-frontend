import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  SparklesIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function Modal({ isOpen, setIsOpen }) {
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
          <div className="fixed inset-0 bg-gray-100 bg-opacity-95 transition-opacity" />
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
              <Dialog.Panel>
                {/* <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"> */}
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 lg:h-20 lg:w-20  flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <SparklesIcon
                        className="h-20 w-20 text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="mt-2">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-semibold leading-6 text-gray-900 p-3"
                        >
                          Search Products & Companies
                        </Dialog.Title>
                        <div className="text-sm text-gray-500">
                          {/* <div className="relative mx-auto  md:w-[80%] lg:w-full">
                            <input
                              className="form-control outline-none focus:outline-4 focus:outline-secondary/25 w-full py-4 px-5 rounded-full"
                              type="email"
                              placeholder="Your Email"
                            />
                            <button
                              type="submit"
                              className="bg-secondary hover:bg-accent transition-all ease-in-out border-none border-accent py-4 px-5 absolute rounded-full text-white focus:outline focus:outline-4 focus:outline-secondary  outline-offset-0 font-bold"
                              style={{ top: 0, right: 0 }}
                              onClick={() => setIsOpen(false)}
                              ref={searchButtonRef}
                            >
                              Subscribe Now
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <div className="relative mx-auto  md:w-[80%] lg:w-full">
                    <input
                      className="form-control outline-none outline-2 outline-secondary/25 focus:outline-4 focus:outline-secondary/50 w-full py-4 px-5 rounded-full"
                      type="search"
                      placeholder="Enter product or company name"
                    />
                    <button
                      type="submit"
                      className="transition-all ease-in-out absolute bg-secondary/50 hover:bg-accent/50 rounded-full text-accent hover:text-secondary"
                      // className="bg-secondary hover:bg-accent transition-all ease-in-out border-none border-accent py-4 px-5 absolute rounded-full text-white focus:outline focus:outline-4 focus:outline-secondary  outline-offset-0 font-bold"
                      style={{ top: 0, right: 0 }}
                      // onClick={() => setIsOpen(false)}
                      ref={searchButtonRef}
                    >
                      <MagnifyingGlassCircleIcon
                        className="h-14 w-14"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Modal.propTypes = {
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
