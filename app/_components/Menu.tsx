import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import NavLinks from "./NavLinks"
import SearchComponent from "./SearchComponent"
 

type Props = {

}

const Menu = (props: Props) => {
  return (
<Sheet>
  <SheetTrigger><MenuIcon /></SheetTrigger>
  <SheetContent>
  <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
  
    </SheetHeader>
    <div className="p-5 ">
      <NavLinks menu />
      <div className="mt-8  text-center ">
      <SearchComponent/>
      </div>
      
    </div>
  </SheetContent>
</Sheet>
  )
}

export default Menu