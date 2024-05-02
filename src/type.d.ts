export type unit = 'KG' | 'G' | 'MG' | 'L' | 'ML' | 'PIECE' | 'CUP' | 'bottle'

export interface edible {
    name: string,
    unit: unit,
    calories: number,
    weight: number,
    protein: number,
    fat: number,
    carbohydrates: number 
    fiber: number, 
    sugar: number,
}