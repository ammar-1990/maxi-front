import {z} from 'zod'
export const newsLetterSchema = z.object({
    email:z.string().email('Enter Valid Email Please')
})