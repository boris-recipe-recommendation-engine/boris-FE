import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Image from "next/image";

export default function PosModal(props) {

    const [recipe, setRecipe] = useState(props.recipe);
    
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
            <div className="fixed w-screen h-screen inset-0 backdrop-blur" />
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
                    className="w-2/3 h-2/3 transform overflow-y-auto rounded-2xl text-left align-middle">
                        <div className="rounded-xl py-10 px-[4rem] mx-auto w-max transition duration-700 text-black text-medium">
                            {
                                recipe ? 
                                <div>
                                    <div>
                                        {recipe.title}
                                    </div>
                                    <div>
                                        {
                                            recipe.ingredients.map((ingredient)=>{
                                                return <div>
                                                        
                                                        {
                                                            ingredient.name + (ingredient.amount == "" ? "":(ingredient.amount + "of"))
                                                        }
                                                    </div>
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            recipe.steps.map((step) => {
                                                return <div>
                                                        {step.text}
                                                        {
                                                            step.images.length > 0 ?
                                                            step.images.map((img)=>(
                                                                <Image
                                                                    src={"http://localhost:4000/media/"+img}
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                >

                                                                </Image>
                                                            )):
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