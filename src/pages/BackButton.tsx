import { Button } from "@chakra-ui/react"
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate, useLocation } from "react-router"

const BackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  if (location.pathname === "/") {
    return null
  }

  return (
    <Button
      onClick={() => navigate(-1)}
      aria-label="Side Nav Toggle"
      size="lg"
      position="fixed"
      top={4}
      left={6}
      zIndex={2}
      leftIcon={<IoIosArrowBack />}
    >
      Back
    </Button>
  )
}
export default BackButton
