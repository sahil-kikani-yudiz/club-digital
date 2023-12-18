import CustomImage from "../../ui/customImage";
import profile from "../../../assets/icons/profile-icon.svg"

export default function Header() {
  return (
    <div className='w-full h-[70px] bg-theme border-b border-theme flex justify-between p-4'>
      <div className="flex m-2">
        <div className="text-primary-500 mx-1">Club</div>
        <div>Community</div>
      </div>
      <div className="flex">
        <CustomImage src={profile} height={40} width={40} />
        <div className="m-2">Hello User</div>
      </div>
    </div>
  )
}
