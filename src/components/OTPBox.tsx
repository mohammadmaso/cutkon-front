import { PhoneIcon, CheckIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Box,
  Stack,
  Flex,
  Wrap,
  Icon,
  Divider,
  Text,
  InputGroup,
  Input,
  Button,
  InputLeftElement,
  InputRightElement,
  InputRightAddon,
  FormControl,
  Container,
  useToast,
  Center,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GoInfo, GoLocation, GoVerified } from 'react-icons/go'
import { BiUser, BiPhone, BiPin } from 'react-icons/bi'
import { AiOutlineVerified } from 'react-icons/ai'
import { useFormikContext, useFormik, Formik, Form, Field } from 'formik'
import { OTPInput } from 'chakra-otp-input'
import useApi from '@/hooks/useApi'
import api from '@/api/api'

interface Props {
  setIsPhoneApproved: (state: boolean) => void
  setOrderId: (id: number) => void
}

function OPTBox(props: Props) {
  const [isPending, setIsPending] = useState(false)
  const [isApproved, setIsApproved] = useState(false)

  const toast = useToast()

  const optApproveForm = useFormik({
    initialValues: {
      phoneNumber: '',
      code: '',
    },
    onSubmit: values => {
      // const verifyOTP = useApi(api.verifyOTP(values.phoneNumber, values.code))
      api.verifyOTP(values.phoneNumber, values.code).then(response => {
        // console.log(response)
        if (response.data?.reason == 'OTP was correct.') {
          localStorage.setItem('token', response.data?.auth_token)
          setIsApproved(true)
          props.setIsPhoneApproved(true)
          api.initiateOrder().then(response => {
            props.setOrderId(response.data?.id)
          })

          toast({
            description: 'جساب شما با موفقیت تایید شد.',
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        } else {
          toast({
            description: 'کد اشتباه است',
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
        }
      })
    },
  })

  const optSendForm = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    onSubmit: values => {
      setIsPending(true)
      api.sendOTP(values.phoneNumber).then(response => {
        if (response.data?.phone_number) {
          toast({
            description: 'کد تایید با موفقیت ارسال شد.',
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
      })

      // setTimeout(() => {
      //   props.setIsPhoneApproved(true)
      //   setIsPending(false)
      // }, 3000)
    },
  })

  const handleOTPInput = (otp: string) => {
    console.log(otp.length)
    if (otp.length >= 6) {
      optApproveForm.values.code = otp
      optApproveForm.values.phoneNumber = optSendForm.values.phoneNumber
      optApproveForm.submitForm()
    }
  }

  return (
    <>
      <Box
        width="full"
        borderRadius="lg"
        borderWidth="thin"
        minH="7rem"
        p="3"
        bgColor={isApproved ? 'green.100' : ''}
        // _hover={{ transform: 'scale(1.15,1.15)', bgColor: 'gray.50' }}
        // transition="all 0.4s ease"
      >
        <Stack spacing="0.5">
          <Flex justify="space-between" align="center">
            <Stack>
              <Wrap spacing="1" align="center">
                <Icon as={AiOutlineVerified} />
                <Text fontWeight="bold" fontSize="sm">
                  احراز هویت
                </Text>
              </Wrap>
            </Stack>
            <Wrap spacing="0"></Wrap>
          </Flex>

          {isPending ? (
            <Stack spacing={3}>
              {!isApproved ? (
                <Text fontSize={'sm'} size={'sm'}>
                  رمز یکبار مصرف ارسال شده به شماره‌ی همراه خود را وارد کنید.
                </Text>
              ) : (
                <></>
              )}
              <Flex justify="center" align="center">
                <FormControl className="opt-input" w={'70'}>
                  <OTPInput
                    opacity={isApproved ? '0.2' : ''}
                    borderColor={isApproved ? 'green.300' : ''}
                    isNumeric
                    noInputs={6}
                    isDisabled={isApproved}
                    onChange={handleOTPInput}
                  />
                </FormControl>
              </Flex>
              {/* <Center>
                <Text fontSize={'sm'}></Text>
              </Center> */}
              {/* <Container>
                <Text fontSize={'sm'}>ارسال دوباره‌‌ی کد</Text>
              </Container> */}
            </Stack>
          ) : (
            <Wrap fontSize="sm" fontWeight="light" p="2" w="full">
              <Divider />
              <Wrap w="full" justify="center">
                <form onSubmit={optSendForm.handleSubmit}>
                  <FormControl width={'full'}>
                    <Stack direction={'column'} width={'full'}>
                      <InputGroup w="full">
                        <InputRightAddon pointerEvents="none" children={<Icon as={BiPhone} color="gray.300" />} />
                        <Input
                          name="phoneNumber"
                          fontSize={'xs'}
                          type="tel"
                          placeholder="شماره‌ی موبایل"
                          onChange={optSendForm.handleChange}
                          value={optSendForm.values.phoneNumber}
                        />
                      </InputGroup>
                      <Button type="submit">ارسال کد</Button>
                    </Stack>
                  </FormControl>
                </form>
              </Wrap>
            </Wrap>
          )}
        </Stack>
      </Box>
    </>
  )
}

export default OPTBox
