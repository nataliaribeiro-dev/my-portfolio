import { Text } from "@chakra-ui/react";
import '../assets/css/AboutMeText.css'

export default function AboutMeText() {
     return (
          <>
               <Text fontSize={{ sm: "lg", md: "lg", lg: "lg" }}
                    textAlign="left"
                    color="#202020"
                    lineHeight="tall"
               >
                    Desde muito cedo mergulhei no fascinante mundo dos computadores, e sempre me senti em casa com esse vasto universo de possibilidades que é a Web. <br />
                    Ao mesmo tempo, meu lado preocupado com as pessoas me levou a escolher a área da saúde como profissão. <br /> <br />
               </Text>

               <Text fontSize={{ sm: "lg", md: "lg", lg: "lg" }}
                    textAlign="left"
                    color="#202020"
                    lineHeight="tall"
               >
                    🌡️ Com formação em Enfermagem, atuei na área da saúde por alguns anos e pude desenvolver algumas skills como: <span>empatia, comunicação assertiva, pensamento crítico, liderança e gerenciamento de problemas</span>.
                    No entanto, o chamado da tecnologia se tornou inevitável e decidi mudar de carreira.<br />
                    <br />
               </Text>

               <Text fontSize={{ sm: "lg", md: "lg", lg: "lg" }}
                    textAlign="left"
                    color="#202020"
                    lineHeight="tall"
               >
                    💻 No início de 2023 iniciei meus estudos na <span>Trybe</span> - em um bootcamp para desenvolvimento fullstack com mais de 1500 horas entre teoria e prática - e <span>a experiência em saúde se fundiu harmoniosamente com meu amor pela tecnologia. Minha curiosidade e motivação constante me impulsionam a encarar desafios como oportunidades de crescimento</span>.<br />
                    <br />
               </Text>

               <Text fontSize={{ sm: "lg", md: "lg", lg: "lg" }}
                    textAlign="left"
                    color="#202020"
                    lineHeight="tall"
               >🚀 Acredito que muito além de performance e código limpo,
                    <span>um sistema é escrito para pessoas</span>. <br /> Meu objetivo é <span>criar sistemas acessíveis e humanizados que impactem positivamente a vida das pessoas</span>. <br />
                    <br />

                    {/* 🌐 <span>Desenvolvimento Web com um toque humano e acessível.</span><br />
                    <br /> */}

                    Vamos conversar e transformar ideias em realidade?
               </Text>
          </>

     )
}
