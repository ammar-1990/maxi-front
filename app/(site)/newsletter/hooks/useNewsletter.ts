import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { newsLetterSchema } from "../schema"
import { errorToast } from "@/lib/utils"
import { createNewsletter } from "../actions/createNewsletter"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const useNewsletter = ()=>{


    const form = useForm<z.infer<typeof newsLetterSchema>>({
        resolver: zodResolver(newsLetterSchema),
        defaultValues: {
          email: "",
        },
      })
    
const router = useRouter()
     async  function onSubmit(values: z.infer<typeof newsLetterSchema>) {
        try {
          const res = await createNewsletter(values)
          if(!res.success){
            toast.error(res.message)
          }else{
            toast.success(res.message)
            form.reset({email:''})

          }
        } catch (error) {
          errorToast();
          console.log(error);
        }
      }

      return {form,onSubmit}
}