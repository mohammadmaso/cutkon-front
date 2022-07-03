import * as React from 'react'
import { Box, Divider, Flex, HStack, Icon, Link, Stack, VStack, Text } from '@chakra-ui/react'
import { useSocials } from '@/hooks/app'
let year = new Date().toLocaleDateString('fa-IR', { year: 'numeric' })

export const Footer: React.FC = () => {
  const socials = useSocials()

  return (
    <Stack as="footer" pb={5} pt={8} spacing={5} alignItems="flex-end">
      <Box px={8}>
        <Divider />
      </Box>
      <Flex alignItems="flex-end" flexDir="row" justifyContent="space-between" px={5}>
        <VStack spacing={0} alignItems="flex-end">
          <HStack spacing={1}>
            {socials.map(([href, SocialIcon]) => (
              <Link href={href} isExternal key={href}>
                <Icon as={SocialIcon} boxSize={4} />
              </Link>
            ))}
          </HStack>
          <Text fontSize={'smaller'}>
            🌱 طراحی شده توسط{' '}
            <Link href={'https://espinaj.ir'} isExternal key={'https://espinaj.ir'}>
              اسپیناج
            </Link>{' '}
            | © {year}
          </Text>
        </VStack>
      </Flex>
    </Stack>
  )
}
