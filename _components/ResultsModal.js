import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import Image from "next/image";

export default function PosModal(props) {

    const [recipe, setRecipe] = useState(undefined);

    useEffect(()=>{
        if(!props.recipes) return;
        setRecipe(props.recipes[0])
    },[props])
    
    return(
        <Transition appear show={props.openPos} as={Fragment}>
            <Dialog as="div" className="relative z-[120]" onClose={() => props.setOpenPos(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            <div className="fixed w-screen h-screen inset-0 bg-gradient-to-r from-[#e0e6ba80] to-[#ebdbab80] via-[#d5e3b180] bg-gradient-opacity-10 backdrop-blur" />
            </Transition.Child>
            <div className="fixed inset-0">
                <div className="flex w-full h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-[200ms]"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel 
                    className="w-2/3 h-2/3 transform overflow-y-auto scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-[#8E8E8E] rounded-2xl text-left align-middle">
                        <div className="rounded-xl py-10 px-[4rem] mx-auto w-max transition duration-700 text-black font-semibold">
                            {
                                recipe ? 
                                <div>
                                    <div className="text-4xl py-4">
                                        {recipe.title}
                                    </div>
                                    <div className="text-2xl">
                                        Ingredients
                                    </div>
                                    <div>
                                        {
                                            recipe.ingredients.map((ingredient)=>{
                                                return <div>
                                                        
                                                        {
                                                            (ingredient.amount == "" ? ingredient.name : (ingredient.amount + " of " + ingredient.name))
                                                        }
                                                    </div>
                                            })
                                        }
                                    </div>
                                    <div className="text-2xl">
                                        Steps
                                    </div>
                                    <div>
                                        {
                                            recipe.steps.map((step, index) => {
                                                return <div className="relative w-full break-all">
                                                        {((index+1) +",\t"+ step.text).replaceAll(". ","\n")}
                                                        {
                                                            step.images.length > 0 ?
                                                            <div className="relative w-2/3 h-40 flex flex-row">
                                                                {
                                                                    step.images.map((img)=>(
                                                                        <div className="relative h-full w-1/3">
                                                                            <Image
                                                                                src={"http://127.0.0.1:4000/media/"+img}
                                                                                layout="fill"
                                                                                objectFit="contain"
                                                                            />
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>:
                                                            <></>
                                                        }
                                                    </div>
                                                })
                                        }
                                    </div>
                                </div>:
                                <></>
                            }
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    )
}