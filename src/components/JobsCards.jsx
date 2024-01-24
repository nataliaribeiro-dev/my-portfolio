import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import resumeData from '../data/resume.data';

function JobsCards() {
  return (
    <React.Fragment>
      {resumeData[0].proBackground.map((item, index) => (
        <Box
          key={index}
          w={{ sm: '50vw', md: '50vw', lg: '40vw' }}
          h={{ sm: '40vh', md: '40vh', lg: '55vh' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={'10px'}
          alignItems={'center'}
          bg={'#f2c744'}
          borderRadius={'8px'}
        >
          <Heading size={'md'} pt={4} borderBottom={'2px solid black'}>
            {item.year}
          </Heading>
          <Text fontWeight={'bold'} pt={4}>{item.company_name}</Text>
          <Text fontWeight={'bold'}>{item.role}</Text>
          <Text w={'20rem'} p={'10px'} textAlign={'justify'}>
            {item.job_description}
          </Text>
        </Box>
      ))
      }
    </React.Fragment >
  );
}

export default JobsCards;