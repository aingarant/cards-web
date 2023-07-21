// "use client"
import { useRouter } from "next/router"

const Bank = () => {
  const router = useRouter()
  const {slug} = router.query
  return <div>Bank {slug}</div>
}

export default Bank
