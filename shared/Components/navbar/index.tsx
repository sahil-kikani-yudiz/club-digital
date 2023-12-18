import CustomButton from "@/shared/ui/customButton";
import CustomImage from "@/shared/ui/customImage";
import ShareIcon from "../../../assets/icons/share-icon.svg"
import PreviewIcon from "../../../assets/icons/preview-icon.svg"
import CustomLink from "@/shared/ui/customLink";
import LeftArrow from "@/assets/icons/left-arrow.svg"
import Link from "next/link";
 
export default function Navbar() {
  return (
    <div className='p-4 bg-background'>
      <nav className='bg-theme border flex rounded-lg h-[66px] justify-between px-[11px] py-[15px]'>
        <div className="flex items-center">
         <CustomLink href={'/en'}>
          <CustomImage src={LeftArrow}  height={22} width={22} />
         </CustomLink>
          <div className="text-base mx-2">My Form</div>
        </div>
        <div className="flex">
          
          <Link href={'/en/share'} className="border rounded-lg mx-2 p-2 w-fit flex items-center">
           <CustomImage src={ShareIcon} height={16} width={16} />
            <div className="mx-1">Share</div>
          </Link>
          
          <CustomButton>
           <CustomImage src={PreviewIcon} height={20} width={20} />
            <div className="mx-1">Preview</div>
          </CustomButton>
        </div>
      </nav>
    </div>
  )
}
