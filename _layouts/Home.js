import Head from "next/head";
import Image from "next/image";

import { useState } from "react";
import MethodDropdown from "@components/MethodDropdown";
import IngredientsList from "@components/IngredientsList";
import IsStrictDropdown from "@components/IsStrictDropdown";
import PosModal from "@components/ResultsModal";

import { BorisBackendClient } from "@clients/boris-backend-fetcher";

export default function HomeLayout(){
    const {GetRecipeByMethod} = BorisBackendClient();

    const [method, setMethod] = useState("boil");
    const [ingredients, setIngredients] = useState([]);
    const [strict, setStrict] = useState(false);
    const [openPos, setOpenPos] = useState(false);


    // array of recipe structs
    // {title, ingredients, steps}
    const [recipes, setRecipes] = useState();

    return (
        <div className="bg-[url('/gradient.png')] bg-cover">
            <Head>
              <title>Boris</title>
              <link rel="icon" href="/spatula.svg" />
            </Head>

            <div className="font-semibold text-3xl text-[#101010] w-screen h-screen flex flex-col place-items-center justify-center">
              <PosModal openPos={openPos} setOpenPos={setOpenPos} recipes={recipes}/>
              <div className="w-full flex flex-col place-items-center justify-center">
                <div className="w-full flex flex-row gap-x-2 text-center place-items-center justify-center h-16">
                  <span className="">I'm in the mood to</span>
                    <div className="relative w-20 h-full flex flex-col pt-3">
                    <MethodDropdown setMethod={setMethod}/>
                    </div>
                    <span className="">
                    something
                    </span>
                    <div className="relative w-40 h-full flex flex-col pt-3 pb-2">
                      <IsStrictDropdown setStrict={setStrict}/>
                    </div>
                    <div className="relative h-full flex flex-col pt-3 rounded-lg">
                      <IngredientsList setIngredients={setIngredients}/>
                    </div>
                    <div className="relative group  my-1 mx-1 px-1 py-1"
                        onClick={async ()=>{
                          if(ingredients.length == 0) return;
                            setOpenPos(true)
                            setRecipes(await GetRecipeByMethod(method, ingredients, strict))
                        }}>
                      <div className="absolute bg-[#8abd7e] w-full h-full px-4 py-4 bg-opacity-0 group-hover:blur  group-hover:bg-opacity-60 z-0" />
                      <button
                        className="flex flex-col px-3 py-3 rounded-lg bg-opacity-40 bg-[#8abd7e] group-hover:bg-opacity-70 z-1"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
            </div>
      </div>
    )
}