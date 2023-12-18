export default function AuthSidebar({ labels } : any) {
  return (
    <div className='hidden md:w-[479px] md:flex  h-full bg-primary-500  flex-col justify-center items-center text-center'>
      <div className='bg-theme h-[64px] w-fit p-7 flex justify-center items-center border rounded-lg text-3xl'>
        <span className='text-primary-500 mx-2'>Club</span>
        <span>Community</span>
      </div>
      <div className='text-white flex justify-center flex-col text-left text-3xl mt-12'>
        {labels?.map((label : string , i : number) => {
            return(
                <span key={i} className='mt-2'>{label}</span>
            )
        })}
        <div className='w-20 h-2 mt-4 bg-theme'></div>
      </div>
    </div>
  )
}
