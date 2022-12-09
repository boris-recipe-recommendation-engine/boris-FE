import { Menu } from '@headlessui/react'
import { useState } from 'react'

export default function MethodDropdown(props){
    
    const [displayValue, setDisplayValue] = useState("Bake");

    return (
        <div className='absolute bg-[#d4c59d80] w-full rounded-md border'>
            <Menu>
                <Menu.Button className="py-1">
                    <div className=''>
                        {displayValue}
                    </div>
                </Menu.Button>
                <Menu.Items className="flex flex-col gap-y-4 mt-4">
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setMethod("bake");
                                setDisplayValue("Bake");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Bake
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setMethod("boil");
                                setDisplayValue("Boil");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Boil
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setMethod("fried");
                                setDisplayValue("Fry");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Fry
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setMethod("roast");
                                setDisplayValue("Roast");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Roast
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setMethod("smoke");
                                setDisplayValue("Smoke");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Smoke
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                props.setMethod("steam");
                                setDisplayValue("Steam");
                            }}

                            className="pb-2 rounded-md hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]"
                        >
                            Steam
                        </div>
                    )}
                    </Menu.Item>
                    
                </Menu.Items>
                </Menu>
        </div>
      )
}