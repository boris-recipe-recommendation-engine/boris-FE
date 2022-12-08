import { useState } from "react"
import { Combobox } from "@headlessui/react"

export default function IngredientsSearch(){
    const ingredients = [
        "beef", "black_pepper", "butter", "chicken", "eggs", "flour", "milk", "oil", "paprika", "parsley", "pork", "rice", "salt", "star_anise", "sugar", "tofu", "vanilla", "water"
    ]

    const [selectedIngredient, setSelectedIngredient] = useState(ingredients[0])
    const [query, setQuery] = useState('')
  
    const filteredIngredients =
      query === '' ? ingredients : ingredients.filter((ingredient) => {
            return ingredient.toLowerCase().includes(query.toLowerCase())
          })
  
    return (
      <div>
        <Combobox value={selectedIngredient} onChange={setSelectedIngredient}>
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
            <Combobox.Options>
            {filteredIngredients.map((ingredient) => (
                <Combobox.Option key={ingredient} value={ingredient}>
                    {
                        ingredient.split("_").map(
                            (word) => ( 
                                word[0].toUpperCase() + word.slice(1)
                            )
                        ).join(" ")
                    }
                </Combobox.Option>
            ))}
            </Combobox.Options>
        </Combobox>
      </div>
    )
}