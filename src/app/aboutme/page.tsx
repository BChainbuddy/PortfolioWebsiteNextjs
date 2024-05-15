import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="lg:space-y-8 sm:space-y-10 md:pb-14 sm:pb-8 overflow-hidden">
      <div className="lg:p-8 lg:mt-4 sm:mt-14">
        <h1 className="md:text-4xl sm:text-3xl text-center font-mono text-transparent bg-clip-text sm:custom-gradient-top md:custom-gradient-bottom">
          ABOUT ME
        </h1>
      </div>
      <div className="lg:flex flex-row justify-center space-x-32 sm:hidden">
        <div className="backdrop-blur-2xl darkGreenBackground w-4/12 rounded-3xl border-LightBlue p-3">
          <p className="text-justify text-xl text-white m-3 indent-8 ">
            I'm Jaka, a Business Informatics Master's student proudly
            representing Slovenia.<br></br>
            <br></br>
            My journey into the captivating world of blockchain technologies
            began back in 2019, ignited by my initial investment in Bitcoin.
            Since then, my passion for this transformative technology has only
            grown stronger, propelling me on a relentless quest for knowledge
            and innovation.<br></br>
            <br></br>
            What initially started as a curious investment soon transformed into
            a deep exploration of blockchain's intricacies and underlying
            concepts. With time, my curiosity evolved into a burning desire to
            actively contribute to the blockchain ecosystem through my own
            projects.<br></br>
            <br></br>
            My journey began with the Moralis Academy, formerly known as Ivan On
            Tech Academy. Through these courses, I honed my JavaScript skills
            and learned how to harness the power of Binance APIs to extract
            crucial data. This newfound expertise led me to the world of trading
            bots, where I crafted numerous programmatic strategies. Yet, I
            yearned for more.<br></br>
            <br></br>
            This yearning led me to Solidity development. I scoured the vast
            expanse of the internet and
          </p>
        </div>
        <div className="backdrop-blur-2xl darkGreenBackground w-4/12 rounded-3xl border-LightBlue">
          <p className="text-justify text-xl text-white m-3 p-3">
            immersed myself in Reddit groups, determined to unearth the most
            valuable insights into blockchain development. My turning point came
            when I discovered an exceptional 32-hour course led by the
            distinguished Patrick Collins. This course equipped me with a
            formidable understanding of Solidity development and the
            indispensable tool, Hardhat.<br></br>
            <br></br>
            Hungry for knowledge, I wasted no time and swiftly completed the
            CryptoZombies course. Armed with the skills I had acquired, I
            finally felt ready to embark on my own projects. Today, I stand
            before you with about a year of coding experience under my belt,
            having meticulously crafted a diverse portfolio of projects that
            showcase my passion for innovation and blockchain technology.
            <br></br>
            <br></br>
            Welcome to my blockchain adventure! Join me as I continue to
            explore, innovate, and contribute to the ever-evolving world of
            blockchain technology.<br></br>
            <br></br>
          </p>
          <div className="p-10 flex flex-row justify-center space-x-1">
            <a
              href="/JakaPotokar-CV-Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-white glowing-underline">
                Click here to check my CV |
              </p>
            </a>
            <a
              href="/JakaPotokar-CV-Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="invert"
            >
              <Image
                src="/linkclick.png"
                width={21}
                height={21}
                alt="clickPhoto"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:hidden">
        <div className="backdrop-blur-2xl sm:w-11/12 md:w-8/12 rounded-3xl border-LightBlue sm:mb-16 pb-10">
          <p className="text-justify md:text-xl text-base  text-white m-3 md:m-4 indent-8 ">
            Greetings, I'm Jaka, a Business Informatics Master's student proudly
            representing Slovenia.<br></br>
            <br></br>
            My journey into the captivating world of blockchain technologies
            began back in 2019, ignited by my initial investment in Bitcoin.
            Since then, my passion for this transformative technology has only
            grown stronger, propelling me on a relentless quest for knowledge
            and innovation.<br></br>
            <br></br>
            What initially started as a curious investment soon transformed into
            a deep exploration of blockchain's intricacies and underlying
            concepts. With time, my curiosity evolved into a burning desire to
            actively contribute to the blockchain ecosystem through my own
            projects.<br></br>
            <br></br>
            My journey began with the Moralis Academy, formerly known as Ivan On
            Tech Academy. Through these courses, I honed my JavaScript skills
            and learned how to harness the power of Binance APIs to extract
            crucial data. This newfound expertise led me to the world of trading
            bots, where I crafted numerous programmatic strategies. Yet, I
            yearned for more.<br></br>
            <br></br>
            This yearning led me to Solidity development. I scoured the vast
            expanse of the internet and immersed myself in Reddit groups,
            determined to unearth the most valuable insights into blockchain
            development. My turning point came when I discovered an exceptional
            32-hour course led by the distinguished Patrick Collins. This course
            equipped me with a formidable understanding of Solidity development
            and the indispensable tool, Hardhat.<br></br>
            <br></br>
            Hungry for knowledge, I wasted no time and swiftly completed the
            CryptoZombies course. Armed with the skills I had acquired, I
            finally felt ready to embark on my own projects. Today, I stand
            before you with about a year of coding experience under my belt,
            having meticulously crafted a diverse portfolio of projects that
            showcase my passion for innovation and blockchain technology.
            <br></br>
            <br></br>
            Welcome to my blockchain adventure! Join me as I continue to
            explore, innovate, and contribute to the ever-evolving world of
            blockchain technology.<br></br>
            <br></br>
          </p>
          <div className="p-2 rounded-2xl flex flex-row justify-center space-x-1">
            <a href="/JakaPotokar-CV-Eng.pdf" target="_blank">
              <p className=" text-white glowing-underline">
                Click here to check my CV
              </p>
            </a>
            <a
              href="/JakaPotokar-CV-Eng.pdf"
              target="_blank"
              className="mt-1 invert"
            >
              <Image
                src="/linkclick.png"
                width={15}
                height={15}
                alt="clickPhoto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
