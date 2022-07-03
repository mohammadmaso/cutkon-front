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
} from '@chakra-ui/react'
import React from 'react'
import { GoInfo, GoLocation } from 'react-icons/go'
import { BiUser, BiPhone, BiPin } from 'react-icons/bi'

interface Props {
  selected: boolean
}

function InformationBox(props: Props) {
  return (
    <>
      <Box
        width="full"
        borderRadius="lg"
        borderWidth="thin"
        minH="7rem"
        p="3"
        _hover={{ transform: 'scale(1.15,1.15)', bgColor: 'gray.50' }}
        transition="all 0.4s ease"
      >
        <Stack spacing="0.5">
          <Flex justify="space-between" align="center">
            <Stack>
              <Wrap spacing="1" align="center">
                <Icon as={GoInfo} />
                <Text fontWeight="bold" fontSize="sm">
                  مشخصات تماس
                </Text>
              </Wrap>
              {/* <Wrap fontSize="xs" align="center">
              <HiLocationMarker />
              <Text>{experience.place.name}</Text>
            </Wrap> */}
            </Stack>
            <Wrap spacing="0"></Wrap>
          </Flex>

          <Wrap fontSize="sm" fontWeight="light" p="2">
            <Divider />

            <Stack width={'full'}>
              <InputGroup>
                <InputRightAddon pointerEvents="none" children={<Icon as={BiPhone} color="gray.300" />} />
                <Input fontSize={'xs'} type="tel" placeholder="شماره‌ی تماس" />
              </InputGroup>

              <InputGroup>
                <InputRightAddon pointerEvents="none" children={<Icon as={BiUser} color="gray.300" />} />
                <Input fontSize={'xs'} placeholder="نام و نام خانوادگی" type={'text'} />
              </InputGroup>
              <InputGroup>
                <InputRightAddon pointerEvents="none" children={<Icon as={GoLocation} color="gray.300" />} />
                <Input fontSize={'xs'} placeholder="آدرس پستی" type={'text'} />
              </InputGroup>
            </Stack>
          </Wrap>
        </Stack>
      </Box>
      <Button isFullWidth leftIcon={<ArrowForwardIcon />} onClick={() => {}}>
        ثبت سفارش
      </Button>
    </>
  )
}

export default InformationBox
