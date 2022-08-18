/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export function Options() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu as="div" className="relative sm:inline-block text-left hidden">
      <div onClick={()=>setIsOpen(!isOpen)}>
        <Menu.Button className="inline-flex justify-center w-full border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 ">
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
         {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg> :
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg> }
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }:any) => (
                <NavLink
                  to="/projects"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md font-semibold'
                  )}
                >
                  Projects
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }:any) => (
                <NavLink
                  to="/blogs"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md font-semibold'
                  )}
                >
                  Blogs
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }:any) => (
                <a
                href="#connect"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md font-semibold'
                  )}
                >
                  Connect
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
