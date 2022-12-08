
// beef, black_pepper, butter, chicken, eggs, flour, milk, oil, paprika, parsley, pork, rice, salt, star_anise, sugar, tofu, vanilla, water

export function BorisBackendClient(){
    const GetRecipeByMethod = async(method = "boil", ingredient_list) => {
        let body_dump = {
            isStrict: false,
            CookingMethod: method,
            Params: {}
        };
        for (let ingr of ingredient_list){
            body_dump.Params[ingr] = true;
        };

        const rawResponse = await fetch('http://localhost:4000/recipes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        });
        return rawResponse.text();
    }

    return (
        GetRecipeByMethod
    )
}