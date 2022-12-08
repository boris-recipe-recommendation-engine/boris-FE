import Head from "next/head";
import Image from "next/image";

import MethodDropdown from "@components/MethodDropdown";
import IngredientsSearch from "@components/IngredientsSearch";

export default function HomeLayout(){

    return (
        <div >
            <Head>
              <title>Boris</title>
              <link rel="icon" href="/spatula.svg" />
            </Head>

            <div className="w-screen h-screen">
              <span>
                I'm in the mood to
                <MethodDropdown />
                something using
                <IngredientsSearch />
                <button>
                  Generate 
                </button>
              </span>
            </div>
      </div>
    )
}