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
							w={'30vw'}
							h={'40vh'}
							p={4} m="auto"
							//  w={{ "sm": "55vw", "md": "60vw", "lg": "30vw" }}
							// h={{ "sm": "60vh", "md": "50vh", "lg": "45vh" }}
							key={index}>
							<CardHeader>
								<Heading size="md" textAlign="center">
									{`${item.date} - ${item.title} `}
								</Heading>
							</CardHeader>
							{/* <CardBody>
                            <Text textAlign="justify" verticalAlign="middle">
                                {item.description}
                            </Text>
                        </CardBody> */}
							<CardFooter
								display={'flex'}
								flexDirection={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={4}
							>
								<span>Tecnologias estudadas: </span>
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