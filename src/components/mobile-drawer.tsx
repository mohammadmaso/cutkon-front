import * as React from 'react'

import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'

import NextLink from 'next/link'
import { useSocials } from '@/hooks/app'
import siteConfig from '~/site-config'
import TextLogo from './logos/TextLogo'

export const MobileDrawer: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()

  const socials = useSocials()

  return (
    <>
      <Box bottom={0} d={{ md: 'none' }} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open menu"
          bgColor={siteConfig.themeColor}
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
        />
      </Box>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent justifyContent={'space-between'}>
            <DrawerHeader p={8}>
              <NextLink href="/">
                {/* <Link href="/" onClick={onClose} variant="link">
                  {siteConfig.title}
                </Link> */}
                <TextLogo height={30} width={150} />
              </NextLink>
              <Divider pt="3" />
            </DrawerHeader>
            <DrawerBody></DrawerBody>

            <DrawerFooter justifyContent="flex-start" px={4} py={8}>
              <HStack spacing={0}>
                {socials.map(([href, SocialIcon]) => (
                  <IconButton
                    as="a"
                    aria-label={href}
                    color="currentColor"
                    href={href}
                    icon={<Icon as={SocialIcon} boxSize={5} />}
                    key={href}
                    variant="link"
                  />
                ))}
                <Text size="sm">نسخه‌ {siteConfig.version}</Text>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
