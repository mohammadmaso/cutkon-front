import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Progress,
  Select,
  Spinner,
  Stack,
  Textarea,
  Wrap,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import apiClient from '@/api/client'
import { BiUser } from 'react-icons/bi'
import { DeleteIcon } from '@chakra-ui/icons'
import useApi from '@/hooks/useApi'
import api from '@/api/api'

type Props = {
  orderId: number
  files: File[]
}

const FilesInputs = ({ files, orderId }: Props) => {
  const [inputs, setInputs] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [progress, setProgress] = useState(0)
  const [materials, setMaterials] = useState(null as any[])

  //   const getAllMaterials = useApi(api.getAllMaterials)

  useEffect(() => {
    api.getAllMaterials().then(res => {
      setMaterials(res.data)
    })
  }, [])

  const submitHandler = (e: any) => {
    e.preventDefault() //prevent the form from submitting
    let formData = new FormData()

    formData.append('content', selectedFiles[0])
    apiClient.post(
      `order/${orderId}/item/new`,
      { content: formData },
      {
        headers: {
          'Content-Type': '*/*',
        },
        onUploadProgress: data => {
          //Set the progress value to show the progress bar
          setProgress(Math.round((100 * data.loaded) / data.total))
        },
      },
    )
  }
  return (
    <>
      <Divider />
      {files.map((item: any) => (
        <Stack
          //   _hover={{ bgColor: 'gray.50' }}
          //   transition="all 0.4s ease"
          width="full"
          borderRadius="lg"
          borderWidth="thin"
          minH="7rem"
          p="3"
          my={1}
          justify="flex-start"
          //   bgGradient={`linear-gradient(90deg, #00000000 ${100 - progress}%, #00baba30 ${progress}%)`}
          bgColor={progress == 100 ? '#00000000' : null}
        >
          <Wrap justify={'space-between'}>
            <Wrap>
              <Box
                fontWeight="normal"
                h="fit-content"
                p="1"
                px="2"
                // textColor={'white'}
                borderRadius={'md'}
                // bgColor={'green.400'}
                bgGradient={`linear-gradient(90deg, #00000000 ${100 - progress}%, #4bbb78 ${progress}%)`}
              >
                {item.name}
              </Box>
              {/* <CircularProgress value={progress} color="primary" /> */}
            </Wrap>
            <DeleteIcon cursor={'pointer'} />
          </Wrap>
          <Wrap>
            <Wrap w="full" textColor="gray.500">
              <NumberInput isRequired placeholder="تعداد" min={1} size={'xs'}>
                <NumberInputField rounded={'md'} placeholder="تعداد" />
                {/* <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper> */}
              </NumberInput>
              <Select rounded={'md'} icon={<></>} isRequired placeholder="انتخاب نوع متریال" size={'xs'}>
                {materials.map(item => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </Select>
              <Select rounded={'md'} icon={<></>} isRequired placeholder="انتخاب قطر متریال" size={'xs'}>
                {materials.map(item => (
                  <option value={item.name}>{item.thickness}</option>
                ))}
              </Select>
              <Select rounded={'md'} icon={<></>} isRequired placeholder="انتخاب رنگ" size={'xs'}>
                {materials.map(item => (
                  <option value={item.name}>{item.type}</option>
                ))}
              </Select>

              <Textarea fontSize={'xs'} placeholder="توضیحات فایل" noOfLines={4} />
            </Wrap>
          </Wrap>
        </Stack>
      ))}
    </>
  )
}

export default FilesInputs
