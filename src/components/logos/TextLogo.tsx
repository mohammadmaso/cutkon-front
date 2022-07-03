import React from 'react'
import { Box, Text, useColorMode, useColorModeValue, Image, Img } from '@chakra-ui/react'
// import Image from 'next/image';
import Link from 'next/link'

export default function TextLogo(props: any) {
  return (
    <Box {...props} cursor="pointer">
      <Link href="/" passHref>
        <Img
          src={useColorModeValue('/logo/Logo-white.svg', '/logo/Logo-black.svg')}
          height={props.height ?? 40}
          width={props.width ?? 100}
          // layout="intrinsic"
          alt="Cutkon-logo"
        />
      </Link>
    </Box>
  )
}
