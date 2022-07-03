import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Stack, Flex, Wrap, Icon, Divider, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { GoCloudUpload } from 'react-icons/go'
import DropBox from './DropBox'

interface Props {}

function UploadBox() {
  return (
    <>
      <Box
        _hover={{ transform: 'scale(1.15,1.15)', bgColor: 'gray.50' }}
        transition="all 0.4s ease"
        width="full"
        borderRadius="lg"
        borderWidth="thin"
        minH="7rem"
        p="3"
      >
        <Stack spacing="0.5">
          <Flex justify="space-between" align="center">
            <Stack>
              <Wrap spacing="1" align="center">
                <Icon as={GoCloudUpload} />
                <Text fontWeight="bold" fontSize="sm">
                  آپلود و مشخصات سفارش
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

            <DropBox onFileAccepted={() => {}} />
          </Wrap>
        </Stack>
      </Box>
    </>
  )
}

export default UploadBox
