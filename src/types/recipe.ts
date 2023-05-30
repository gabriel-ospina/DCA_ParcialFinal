export interface Recipe {
    id: string,

    name: string,

    ingredients: {
        ingredient1: string,
        ingredient2: string,
        ingredient3: string,
    },

    instructions: string
}