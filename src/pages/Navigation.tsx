import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { useNavigate } from "react-router"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import useCustomColorMode from "../hooks/useCustomColorMode"

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  const navigate = useNavigate()
  const { bg } = useCustomColorMode()

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Ghana",
      link: "/ghana",
    },
    { name: "UK", link: "/uk" },
    { name: "USA", link: "/usa" },
    { name: "Other", link: "/other" },
  ]
  return (
    <>
      <IconButton
        colorScheme="gray"
        aria-label="Side Nav Toggle"
        size="lg"
        position="fixed"
        bottom={4}
        right={6}
        zIndex={2}
        isRound
        ref={btnRef}
        onClick={onOpen}
        icon={<GiHamburgerMenu />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            {menuItems.map((item, i) => (
              <Button
                key={i}
                bg={bg}
                paddingY={8}
                marginY={2}
                width="100%"
                onClick={() => {
                  navigate(item.link)
                  onClose()
                }}
              >
                {item.name}
              </Button>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <ColorModeSwitcher justifySelf={"flex-end"} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Navigation
