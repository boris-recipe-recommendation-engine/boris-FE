import { useCallback, useEffect, useState } from "react"
import { Combobox } from "@headlessui/react"

export default function IngredientsList(props){
    const ingredients = [
        "beef", "black_pepper", "butter", "chicken", "eggs", "flour", "milk", "oil", "paprika", "parsley", "pork", "rice", "salt", "star_anise", "sugar", "tofu", "vanilla", "water",
        "corn_starch", "soy_sauce", "cooking_wine", "ginger", "scallion", "vinegar", "cabbage", "mushroom", "chicken_powder", "yeast", "tomato_sauce", "tomato_paste", "tomato", "basil", "oregano", "garlic", "onion_powder", "pepperoni", "cheese", "pepper_powder"
    ];

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const delIngredient = useCallback((ing)=>{
        console.log("deleting ingredient", ing)
        let ind = selectedIngredients.indexOf(ing)
        setSelectedIngredients(cs => [...cs.slice(0,ind), ...cs.slice(ind+1,)])
    },[selectedIngredients, setSelectedIngredients])

    useEffect(()=>{
        props.setIngredients(selectedIngredients)
    },[props, selectedIngredients])

    return (
        <div className="relative flex flex-row rounded-lg h-full gap-x-2">
            
                {
                    selectedIngredients.length > 0 ?
                    <div className="w-60 relative h-[252px] max-h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-[#8E8E8E]">
                        {
                            selectedIngredients.map((ingredient, ind) => (
                                <div className="bg-[#d4c59d80] h-[42px] min-h-[42px] max-h-[42px]" key={ind}>
                                    <div
                                        className="w-full h-full hover:text-transparent hover:bg-clip-text hover:bg-gradient hover:bg-gradient-to-r hover:from-[#5081c7] hover:to-[#483f8c]"
                                        onClick={()=>{delIngredient(ingredient)}}
                                    >
                                        {
                                            ingredient.split("_").map(
                                                (word) => ( 
                                                    word[0].toUpperCase() + word.slice(1)
                                                )
                                            ).join(" ")
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>:
                    <></>
                }
            
            <div className="w-60">
                <IngredientsSearch setSelectedIngredients={setSelectedIngredients} ingredients={
                    ingredients.filter((ing) => {
                        return !selectedIngredients.includes(ing)
                    })
                }/>
            </div>
        </div>
    )
}

function IngredientsSearch(props){
    const [filteredIngredients, setFilteredIngredients] = useState([]);
    const [query, setQuery] = useState('')

    useEffect(()=>{
        if(query == ''){
            setFilteredIngredients(props.ingredients.slice())
        }else{
            setFilteredIngredients(
                props.ingredients.filter((ingredient) => {
                    return ingredient.toLowerCase().includes(query.toLowerCase())
                })
            )
        }
    },[props.ingredients, props.setSelectedIngredients, query]);

    return(
        <Combobox
            onChange={(value)=>{
                props.setSelectedIngredients((cs) => [...cs, value]);
                setQuery("");
            }}
            value={query}
            className="bg-[#d4c59d] rounded-lg"
        >
            <div className="relative">
                <Combobox.Input
                    onChange={(event) => {
                        setQuery(event.target.value)
                    }}
                    className="w-full bg-[#d4c59d] rounded-lg h-full"
                />
                <div className="absolute top-0 w-full">
                    <Combobox.Button className="w-full h-10 rounded-lg "/>
                </div>
                <Combobox.Options className="h-60 rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-[#8E8E8E]">
                {filteredIngredients.map((ingredient) => (
                    <Combobox.Option key={ingredient} value={ingredient}>
                        <button className="hover:text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-[#9960bd] to-[#bf456c]">
                            {
                                ingredient.split("_").map(
                                    (word) => ( 
                                        word[0].toUpperCase() + word.slice(1)
                                    )
                                ).join(" ")
                            }
                        </button>
                    </Combobox.Option>
                ))}
                </Combobox.Options>
            </div>
        </Combobox>
    )
}