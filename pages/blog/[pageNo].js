import { useRouter } from "next/router"

export const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
    
    <div>my blog {pageNumber} content </div>
  )
}
export default pageNo
