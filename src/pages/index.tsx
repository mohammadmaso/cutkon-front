import * as React from 'react'

import { Button, Divider, Heading, Icon, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import { FaCode, FaGithub } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

import siteConfig from '~/site-config'

import type { NextPage } from '@/types/next'
import Logo from '@/components/logos/TextLogo'
import MainForm from '@/components/MainForm'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      <Stack alignItems="center" justify={'space-between'} textAlign="center">
        {/* <Heading size="xl">{siteConfig.title}</Heading> */}
        <>
          <Logo height={30} width={150} />
          <Heading fontWeight="normal" pb={3} size="xs" pr={3}>
            {siteConfig.description}
          </Heading>
          <Divider />
        </>
        <Wrap justify="center" align={'center'} height={'full'} spacing={1}>
          <MainForm />
        </Wrap>
      </Stack>
    </>
  )
}

export default HomePage
