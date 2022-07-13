import * as React from 'react'
import { Box, Divider, Flex, HStack, Icon, Link, Stack, VStack, Text } from '@chakra-ui/react'
import { useSocials } from '@/hooks/app'
let year = new Date().toLocaleDateString('fa-IR', { year: 'numeric' })

export const Footer: React.FC = () => {
  const socials = useSocials()

  return (
    <>
      <Divider pt="3" />
      <Stack as="footer" pb={3} pt="3" spacing={5} alignItems="center">
        <Flex alignItems="center" flexDir="row" justifyContent="space-between" px={5}>
          <VStack spacing={0} alignItems="center">
            <HStack spacing={1}>
              {socials.map(([href, SocialIcon]) => (
                <Link opacity={'0.5'} href={href} isExternal key={href}>
                  <Icon as={SocialIcon} boxSize={4} />
                </Link>
              ))}
            </HStack>
            <Text opacity={'0.6'} fontSize={'xs'}>
              🌱 طراحی شده توسط{' '}
              <Link href={'https://espinaj.ir'} isExternal key={'https://espinaj.ir'}>
                اسپیناج
              </Link>{' '}
              | © {year}
            </Text>
          </VStack>
        </Flex>
      </Stack>
    </>
  )
}
