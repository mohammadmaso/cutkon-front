import { Box, Divider, Flex, Icon, Stack, Wrap, Text, VStack, ButtonGroup, Button, SimpleGrid } from '@chakra-ui/react'
import { GoCloudUpload, GoPrimitiveDot } from 'react-icons/go'

import React, { useState } from 'react'
import UploadBox from './UploadBox'
import InformationBox from './InformationBox'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const MainForm = () => {
  const [formBox, setFormBox] = useState(0)
  return (
    <Wrap spacing={5} p="3" width={{ base: '95vw', md: '60vw', lg: '50vw' }}>
      <UploadBox />

      <InformationBox selected={formBox == 1 ? true : false} />
    </Wrap>
  )
}

export default MainForm
