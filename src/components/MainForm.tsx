import { Box, Divider, Flex, Icon, Stack, Wrap, Text, VStack, ButtonGroup, Button, SimpleGrid } from '@chakra-ui/react'
import { GoCloudUpload, GoPrimitiveDot } from 'react-icons/go'

import React, { useState } from 'react'
import UploadBox from './UploadBox'
import InformationBox, { informationType } from './InformationBox'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import OTPBox from './OTPBox'

const MainForm = () => {
  const [formBox, setFormBox] = useState(0)
  const [isPhoneApproved, setIsPhoneApproved] = useState(false)
  const [orderId, setOrderId] = useState(null as number)
  const [contactInfo, setContactInfo] = useState({} as informationType)
  return (
    <Wrap justify={'center'} spacing={5} p="3" width={{ base: '95vw', md: '60vw', lg: '50vw' }}>
      <OTPBox setOrderId={id => setOrderId(id)} setIsPhoneApproved={state => setIsPhoneApproved(state)} />
      <InformationBox
        onInputChange={data => {
          setContactInfo(data)
        }}
      />
      <UploadBox isPhoneApproved={isPhoneApproved} orderId={orderId} />
      <Button type="submit" leftIcon={<ArrowForwardIcon />} onClick={() => {}}>
        ثبت سفارش
      </Button>
    </Wrap>
  )
}

export default MainForm
