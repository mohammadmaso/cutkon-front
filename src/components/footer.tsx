import * as React from 'react'
import { Box, Divider, Flex, HStack, Icon, Link, Stack, VStack, Text } from '@chakra-ui/react'
import { useSocials } from '@/hooks/app'
let yaer = new Date().toLocaleDateString('fa-IR', { year: 'numeric' })

export const Footer: React.FC = () => {
  const socials = useSocials()

  return (
    <Stack as="footer" pb={5} pt={8} spacing={8}>
      <Box px={8}>
        <Divider />
      </Box>
      <Flex alignItems="flex-start" flexDir="row" justifyContent="space-between" px={8}>
        <VStack spacing={0} alignItems="flex-start">
          <HStack spacing={2}>
            {socials.map(([href, SocialIcon]) => (
              <Link href={href} isExternal key={href}>
                <Icon as={SocialIcon} boxSize={5} />
              </Link>
            ))}
          </HStack>
          <Text fontSize={'smaller'}>
            🌱 طراحی شده توسط{' '}
            <Link href={'https://espinaj.ir'} isExternal key={'https://espinaj.ir'}>
              اسپیناج
            </Link>{' '}
            | © {yaer}
          </Text>
        </VStack>
      </Flex>
    </Stack>
  )
}
