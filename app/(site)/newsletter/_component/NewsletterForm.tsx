'use client'

import InputField from "@/components/InputField"
import { useNewsletter } from "../hooks/useNewsletter"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import SuperButton from "@/components/SuperButton"
import { cn } from "@/lib/utils"
 

type Props = {
  className?:string,
  showLabel?:boolean,
  placeholder?:string
}

const NewsletterForm = ({className,showLabel,placeholder}: Props) => {

    const {form, onSubmit} = useNewsletter()
  return (
    <div className={cn('',className)}>
           <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
      <InputField
      form={form}
      label={showLabel ? "Enter Your Email" : ''}
      name="email"
      placeholder={placeholder ? placeholder :"Email"}

      />
           <SuperButton
            variant="site"
            className="cursor-pointer"
            type="submit"
            buttonType="loadingButton"
            loading={form.formState.isSubmitting}
            title={"Subscribe"}
          />
      </form>
    </Form>
    </div>
  )
}

export default NewsletterForm