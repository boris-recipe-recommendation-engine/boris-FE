// beef, black_pepper, butter, chicken, eggs, flour, milk, oil, paprika, parsley, pork, rice, salt, star_anise, sugar, tofu, vanilla, water

export function BorisBackendClient(){
    const GetRecipeByMethod = async(method = "boil", ingredient_list, strict=false) => {
        var res;
        switch(strict){
            case true:
                let strict_body = {
                    CookingMethod: method,
                    Params: {}
                };
                for (let ingr of ingredient_list){
                    body_dump.Params[ingr] = true;
                };
        
                res = await fetch('http://localhost:4000/strictrecipe', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(strict_body)
                });
                break;
                
            case false:
                let lax_body = {
                    CookingMethod: method,
                    Params: ingredient_list
                };
                for (let ingr of ingredient_list){
                    body_dump.Params[ingr] = true;
                };
        
                res = await fetch('http://localhost:4000/laxrecipe', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(lax_body)
                });
                break;
        }

        /// preprocessing here
        return (await res.text()).split("~~");
    }

    return (
        GetRecipeByMethod
    )
}