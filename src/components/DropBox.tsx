import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Center, useColorModeValue, Icon } from '@chakra-ui/react'
import { AiFillFileAdd } from 'react-icons/ai'
import { FaUpload } from 'react-icons/fa'
import { BiUpload } from 'react-icons/bi'

export default function DropBox({ onFileAccepted }) {
  const onDrop = useCallback(
    acceptedFiles => {
      onFileAccepted(acceptedFiles[0])
    },
    [onFileAccepted],
  )
  // .dxf, .dwg, .ai, .pdf, .cdr
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/x-dxf': ['.dxf'],
      'image/x-dwg': ['.dwg'],
      'image/x-ai': ['.ai'],
    },
    maxFiles: 20,
    multiple: true,
  })

  const dropText = isDragActive
    ? 'فایل‌های خود را اینجا رها کنید...'
    : 'فایل‌های خود با فرمت dxf, dwg, ai, pdf, cdr را آپلود کنید.'

  const activeBg = useColorModeValue('gray.100', 'gray.600')
  const borderColor = useColorModeValue(isDragActive ? 'teal.300' : 'gray.300', isDragActive ? 'teal.500' : 'gray.500')

  return (
    <Center
      width={'full'}
      p={10}
      cursor="pointer"
      bg={isDragActive ? activeBg : 'transparent'}
      _hover={{ bg: activeBg }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="1px dashed"
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Icon m="2" as={BiUpload} mr={2} />
      <p>{dropText}</p>
    </Center>
  )
}
