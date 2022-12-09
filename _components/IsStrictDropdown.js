import { Menu } from '@headlessui/react'
import { useState } from 'react'

export default function IsStrictDropdown(props){
    
    const [displayValue, setDisplayValue] = useState("Using");

    return (
        <div className='absolute bg-[#6b75c7] bg-opacity-40 w-full rounded-md border py-1'>
            <Menu>
                <Menu.Button className="">
                    <div className='py-1'>
                        {displayValue}
                    </div>
                </Menu.Button>
                <Menu.Items className="flex flex-col gap-y-4 mt-4">
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setStrict(false);
                                setDisplayValue("Using");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Using
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setStrict(true);
                                setDisplayValue("Only Using");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Only Using
                        </div>
                    )}
                    </Menu.Item>
                </Menu.Items>
                </Menu>
        </div>
      )
}