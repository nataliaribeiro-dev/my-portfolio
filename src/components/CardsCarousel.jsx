import { Badge, Box, Card, CardBody, CardFooter, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";
import resumeData from "../data/resume.data";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from 'react'


function CardsCarousel() {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.parentNode.offsetWidth);
	}, []);
	return (
		<Box as={motion.div}
			bg={'#f2c744'}
			display={'flex'}
			width={'100vw'}
			className="carousel"
			ref={carousel}
			cursor={'grab'}
			overflow={'hidden'}
			whileTap={{ cursor: 'grabbing' }}
		>
			<Box as={motion.div} className="inner-carousel"
				ml={100}
				mr={100}
				drag={'x'}
				dragConstraints={{ right: 0, left: -width }}
				dragElastic={0.5}
				display={'flex'}
				alignItems={'center'}
				flexWrap={'nowrap'}
				height={'65vh'}
				gap={10}
			>

				{resumeData[0].certificates.map((item, index) => {
					return (
						<Card as={motion.div} className="card-item"
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}
							border={'2px solid #202020'}
							w={'30vw'}
							h={'40vh'}
							key={index}>
							<CardHeader>
								<Heading size="md" textAlign="center" color={'#000'}>
									{`${item.date} - ${item.title} `}
								</Heading>
							</CardHeader>
							<CardFooter gap={4}>
								<Text color={'#000'} fontWeight={'bold'}>Tecnologias estudadas: </Text>
								<Stack justifyContent="justify" alignItems="center" flexDirection="row" flexWrap="wrap">
									{item.badges.map((badge, index) => {
										return <Badge colorScheme="orange" key={index}>{badge}</Badge>;
									})}
								</Stack>
							</CardFooter>
						</Card>
					);
				}
				)}
			</Box>
		</Box >
	);
}

export default CardsCarousel;