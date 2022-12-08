import { Menu } from '@headlessui/react'
import { useState } from 'react'

export default function MethodDropdown(){
    const [method, setMethod] = useState("boil");
    const [displayValue, setDisplayValue] = useState("Boil");

    return (
        <div>
            <Menu>
                <Menu.Button>
                    <div className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-[#5081c7] to-pink-[#483f8c'>
                        {displayValue}
                    </div>
                </Menu.Button>
                <Menu.Items>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                setMethod("bake");
                                setDisplayValue("Bake");
                            }}
                        >
                            Baked
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                setMethod("boil");
                                setDisplayValue("Boil");
                            }}
                        >
                            Boiled
                        </div>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <div
                            onClick={()=>{
                                setMethod("fried");
                                setDisplayValue("Fry");
                            }}
                        >
                            Fried
                        </div>
                    )}
                    </Menu.Item>
                </Menu.Items>
                </Menu>
        </div>
      )
}