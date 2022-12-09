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
                    strict_body.Params[ingr] = true;
                };
        
                res = await fetch('http://127.0.0.1:4000/strictrecipe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(strict_body),
                    
                });
                break;
                
            case false:
                let lax_body = {
                    CookingMethod: method,
                    Params: ingredient_list
                };
        
                res = await fetch('http://127.0.0.1:4000/laxrecipe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(lax_body),
                    
                });
                break;
        }

        /// preprocessing here
        return (await res.text()).split("~~").map((bodytext)=>(JSON.parse(bodytext)));
    }

    return {
        GetRecipeByMethod
    }
}